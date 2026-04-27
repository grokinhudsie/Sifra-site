import './unlock.css';

export const metadata = {
  title: 'Enter — Sifra',
  robots: { index: false, follow: false },
};

export default function UnlockPage({ searchParams }) {
  const next = typeof searchParams?.next === 'string' ? searchParams.next : '/';
  const error = searchParams?.error === '1';

  return (
    <div className="unlock-wrap">
      <div className="unlock-card">
        <h1>Welcome to Sifra</h1>
        <p>This site is currently private. Please sign in to continue.</p>
        <form method="POST" action="/api/unlock" className="unlock-form">
          <input type="hidden" name="next" value={next} />
          <label>
            <span>Username</span>
            <input
              type="text"
              name="username"
              autoComplete="username"
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck="false"
              required
              autoFocus
            />
          </label>
          <label>
            <span>Access code</span>
            <input
              type="password"
              name="passcode"
              autoComplete="current-password"
              required
            />
          </label>
          {error && <p className="unlock-error">Incorrect username or code. Please try again.</p>}
          <button type="submit">Enter</button>
        </form>
      </div>
    </div>
  );
}
