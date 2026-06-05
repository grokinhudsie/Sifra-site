// Server-side helper to pull the repo's commit history from the GitHub REST API.
// The repo (grokinhudsie/Sifra-site) is public, so no token is required — but if a
// GITHUB_TOKEN env var is present we use it to lift the unauthenticated rate limit.
//
// Results are cached via Next's ISR (`revalidate`) so that when new commits are
// pushed to GitHub the Build Log picks them up automatically without a redeploy.

const REPO = 'grokinhudsie/Sifra-site';
const PER_PAGE = 100;
const MAX_PAGES = 10; // safety cap: up to 1000 commits
export const COMMITS_REVALIDATE = 300; // seconds

export async function getCommits() {
  const headers = { Accept: 'application/vnd.github+json' };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const all = [];
  for (let page = 1; page <= MAX_PAGES; page++) {
    const res = await fetch(
      `https://api.github.com/repos/${REPO}/commits?per_page=${PER_PAGE}&page=${page}`,
      { headers, next: { revalidate: COMMITS_REVALIDATE } }
    );

    if (!res.ok) {
      // If the very first request fails, surface the error so the page can show a
      // friendly fallback. Later-page failures just stop pagination.
      if (page === 1) {
        throw new Error(`GitHub API responded ${res.status} ${res.statusText}`);
      }
      break;
    }

    const batch = await res.json();
    if (!Array.isArray(batch) || batch.length === 0) break;
    all.push(...batch);
    if (batch.length < PER_PAGE) break;
  }

  return all.map((c) => ({
    sha: c.sha,
    shortSha: c.sha.slice(0, 7),
    message: c.commit?.message ?? '',
    author: c.commit?.author?.name ?? c.author?.login ?? 'Unknown',
    date: c.commit?.author?.date ?? c.commit?.committer?.date ?? null,
    url: c.html_url,
  }));
}
