import Link from 'next/link';

export default function ConstructionSection() {
  return (
    <section id="construction" className="fade-section bg-sage">
      <div className="container">
        <h2 className="section-title">Construction Updates</h2>
        <p className="section-subtitle">
          Follow along as Sifra Birth Center takes shape.
        </p>
        <div className="construction-timeline">
          <h3>Estimated Timeline</h3>
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-dot" />
              <p className="timeline-date">Fall 2026 &ndash; Mid 2027</p>
              <p className="timeline-desc">Fundraising.</p>
            </div>
            <div className="timeline-item">
              <span className="timeline-dot" />
              <p className="timeline-date">Late Summer 2027</p>
              <p className="timeline-desc">
                Earliest possible start to construction.
              </p>
            </div>
            <div className="timeline-item">
              <span className="timeline-dot" />
              <p className="timeline-date">Early 2029</p>
              <p className="timeline-desc">
                First babies could be delivered,
                <br />
                Lord willing.
              </p>
            </div>
          </div>
        </div>

        <img
          className="why-img"
          src="/images/building/sifra-birth-center-rendering.jpg"
          alt="Architectural rendering of Sifra Birth Center in Merrill, Wisconsin"
          width={1400}
          height={787}
          loading="lazy"
          decoding="async"
        />
        <div style={{ textAlign: 'center', color: 'var(--muted)' }}>
          <p>
            The home for Sifra Birth Center will be a beautiful wooded parcel on the
            east side of Merrill on Highway W. Further updates coming soon.
          </p>
        </div>
      </div>
    </section>
  );
}
