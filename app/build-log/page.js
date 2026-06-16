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

// Planned changes. A task is checked off when a commit message references its
// TaskID (e.g. "TaskID 0715261").
const TASKS = [
  { id: '0715261', title: 'Change hero tagline to "A peaceful, family-centered birthing experience supported by compassionate midwives delivering holistic care."' },
  { id: '0715262', title: 'Swap placement of About Us (Who We Are) & Why Sifra sections.' },
  { id: '0715263', title: 'Include the Maternal Healthcare Crisis content in Why Sifra.' },
  { id: '0715264', title: 'Update Vision & Mission statements.' },
  { id: '0715265', title: 'Update Our Values with the 4 Tri-fold items, restructure section.' },
  { id: '0715266', title: 'Create 4 Leadership containers for Andrew, Neil, Katie, & Talitha.' },
  { id: '0715267', title: 'Add donation CTA throughout site.' },
];

// Commit parser: scan messages for "TaskID" references and map each referenced
// id to the most recent commit that mentions it. Accepts a single id or a list
// after one "TaskID" keyword, separated by commas / spaces / "&" / "and", e.g.
// "TaskID 0715261", "TaskIDs: 0715261, 0715262 & 0715263".
function parseTaskRefs(commits) {
  const refs = new Map();
  for (const c of commits) {
    for (const m of c.message.matchAll(
      /TaskIDs?[:\s#-]*((?:\d{5,}[\s,&]*(?:and\s+)?)+)/gi
    )) {
      for (const id of m[1].match(/\d{5,}/g) ?? []) {
        if (!refs.has(id)) refs.set(id, c); // commits are newest-first
      }
    }
  }
  return refs;
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

  const refs = parseTaskRefs(commits);
  const tasks = TASKS.map((t) => ({ ...t, commit: refs.get(t.id) ?? null }));
  const doneCount = tasks.filter((t) => t.commit).length;
  const pct = tasks.length ? Math.round((doneCount / tasks.length) * 100) : 0;

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
        <section className="bl-todo">
          <div className="bl-todo-head">
            <h2>To Change</h2>
            <span className="bl-todo-count">
              {doneCount} of {tasks.length} complete
            </span>
          </div>
          <div
            className="bl-progress"
            role="progressbar"
            aria-valuenow={pct}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Tasks complete"
          >
            <div className="bl-progress-fill" style={{ width: `${pct}%` }}>
              <span className="bl-progress-pct">{pct}%</span>
            </div>
          </div>
          <ul className="bl-task-list">
            {tasks.map((t) => (
              <li key={t.id} className={`bl-task${t.commit ? ' done' : ''}`}>
                <span className="bl-check" aria-hidden="true">
                  {t.commit ? '✓' : ''}
                </span>
                <div className="bl-task-body">
                  <p className="bl-task-title">{t.title}</p>
                  <span className="bl-task-meta">
                    TaskID {t.id}
                    {t.commit && (
                      <>
                        {' · '}
                        <a
                          className="bl-sha"
                          href={t.commit.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View the commit that completed this"
                        >
                          {t.commit.shortSha}
                        </a>
                        {' · '}
                        {formatStamp(t.commit.date)}
                      </>
                    )}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <h2 className="bl-section-title">Commit history</h2>

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
