import Link from 'next/link';

// Small standalone icon that floats in the top-left of the header, outside the
// nav bar, linking to the Build Log page.
export default function BuildLogIcon() {
  return (
    <Link
      href="/build-log"
      className="build-log-icon"
      aria-label="Build Log"
      title="Build Log"
    >
      <i className="fi fi-rr-time-past" aria-hidden="true"></i>
    </Link>
  );
}
