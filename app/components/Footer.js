import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <p className="footer-cta">
        <Link href="/donate" className="btn">Donate</Link>
      </p>
      <p>
        <Link href="/employment">Employment at Sifra</Link>
      </p>
      <Link
        href="/build-log"
        className="build-log-icon build-log-icon--footer"
        aria-label="Build Log"
        title="Build Log"
      >
        <i className="fi fi-rr-time-past" aria-hidden="true"></i>
      </Link>
      <p>
        © {new Date().getFullYear()} Sifra Birth Center
      </p>
      <p className="footer-legal">
        Information concerning Anabaptist Health Ministries, Inc., including financial or charitable purposes, may be obtained, without cost, by writing to its principal place of business at the following address: Anabaptist Health Ministries, Inc., N5265 County Rd X, Gleason WI 54435 or by calling{' '}
        <a href="tel:+17158733440">715-873-3440</a>. Anabaptist Health Ministries, Inc. was formed in the state of Wisconsin for the purpose of: Show God&rsquo;s love by revolutionizing healthcare and health education based on Biblical values and principles. In addition, residents of the following states may obtain financial and/or licensing information from their states, as indicated. Your contributions may be eligible for a tax deduction in accordance with applicable law. Registration in a state does not imply endorsement, approval, or recommendation of Anabaptist Health Ministries, Inc. by the state. Wisconsin: A financial statement of the charitable organization disclosing assets, liabilities, fund balances, revenue, and expenses for the preceding fiscal year will be provided to any person upon request.
      </p>
    </footer>
  );
}
