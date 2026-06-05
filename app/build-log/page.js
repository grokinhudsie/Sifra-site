import './build-log.css';
import { getCommits, COMMITS_REVALIDATE } from '../lib/commits';

export const metadata = {
  title: 'Build Log — Sifra Birthing Center',
  description: 'A running log of every code change shipped to the Sifra website.',
};

// Re-fetch commits at most once every COMMITS_REVALIDATE seconds. New commits
// pushed to GitHub appear automatically once the cache revalidates.
export const revalidate = 300;

const TZ = 'America/Chicago'; // Central Time — labels render as CST/CDT automatically

// Full date + time stamp, e.g. "Jun 5, 2026 · 5:49 PM CDT"
const dateFmt = new Intl.DateTimeFormat('en-US', {
  timeZone: TZ,
  month: 'short',
  day: 'numeric',
  year: 'numeric',
});
const timeFmt = new Intl.DateTimeFormat('en-US', {
  timeZone: TZ,
  hour: 'numeric',
  minute: '2-digit',
  timeZoneName: 'short',
});

function formatStamp(iso) {
  const d = new Date(iso);
  return `${dateFmt.format(d)} · ${timeFmt.format(d)}`;
}

// Strip tool-generated trailers (Co-Authored-By, "Generated with Claude Code")
// so they don't show up in the public build log.
function cleanMessage(message) {
  return message
    .split('\n')
    .filter((line) => !/^\s*co-authored-by:/i.test(line))
    .filter((line) => !/generated with \[?claude/i.test(line))
    .filter((line) => !line.includes('🤖'))
    .join('\n')
    .trim();
}

export default async function BuildLogPage() {
  let commits = [];
  let error = null;
  try {
    commits = await getCommits();
  } catch (e) {
    error = e.message;
  }

  const entries = commits.filter((c) => c.date);

  return (
    <div className="build-log">
      <header className="build-log-header">
        <p className="build-log-eyebrow">
          <i className="fi fi-rr-time-past" aria-hidden="true"></i> Build Log
        </p>
        <h1>Every change, in order</h1>
        <p className="build-log-sub">
          A live record of the code shipped to the Sifra website. Timestamps are shown
          in Central Time and update automatically as new commits are pushed.
        </p>
      </header>

      <div className="container build-log-body">
        {error && (
          <p className="build-log-empty">
            Couldn&rsquo;t load the commit history right now. Please check back shortly.
          </p>
        )}

        {!error && entries.length === 0 && (
          <p className="build-log-empty">No commits to show yet.</p>
        )}

        <ol className="bl-list">
          {entries.map((c) => {
            const [subject, ...rest] = cleanMessage(c.message).split('\n');
            const body = rest.join('\n').trim();
            return (
              <li className="bl-entry" key={c.sha}>
                <div className="bl-marker" aria-hidden="true" />
                <div className="bl-content">
                  <div className="bl-meta">
                    <span className="bl-time">{formatStamp(c.date)}</span>
                    <a
                      className="bl-sha"
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View commit on GitHub"
                    >
                      {c.shortSha}
                    </a>
                  </div>
                  <p className="bl-subject">{subject}</p>
                  {body && <p className="bl-body">{body}</p>}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
