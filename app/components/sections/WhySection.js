import Link from 'next/link';
import ExpandableImage from '../ExpandableImage';

const mapLegend = (
  <ul className="map-legend">
    <li>
      <span className="map-legend-swatch map-legend-swatch--green" />
      Hospitals delivering babies today
    </li>
    <li>
      <span className="map-legend-swatch map-legend-swatch--tan" />
      Hospitals no longer delivering babies
    </li>
  </ul>
);

export default function WhySection() {
  return (
    <section id="why" className="fade-section bg-sand">
      <div className="container">
        <h2 className="section-title">Why Sifra</h2>

        <div className="why-block">
          <h3 className="why-heading">Wisconsin&apos;s Growing Maternity Care Crisis</h3>
          <div className="why-intro">
            <div className="why-intro-text">
              <p>
                For over a decade Northern Wisconsin has been living with a
                growing maternity-care crisis. One rural hospital after
                another has chosen to close their obstetric units due to lack
                of both profitability and care providers. Families now have
                limited provider options, drive farther for care, and face
                greater risks simply to welcome a baby.
              </p>
              <p>
                This map shows the region Sifra Birth Center will serve.
                Highlighted in green are the few rural hospitals still
                delivering babies; in tan, the many that have stopped
                offering birth services since 2012. It makes clear just how
                much our communities need additional, reliable maternity-care
                options close to home.
              </p>
            </div>
            <div className="why-intro-map">
              <ExpandableImage
                className="why-intro-img"
                src="/images/why-sifra/ob-hospitals-wi-map.webp"
                alt="Map of the Northern Wisconsin region Sifra Birth Center will serve, showing rural hospitals still delivering babies in green and those that have stopped offering birth services since 2012 in tan"
                width={973}
                height={985}
                loading="lazy"
                decoding="async"
                lightboxExtra={mapLegend}
              />
              {mapLegend}
            </div>
          </div>
          <ol className="why-list">
            <li>
              Local midwives are overwhelmed. As a result, at least one out
              of three mothers seeking midwifery care is turned away.
            </li>
          </ol>
          <img
            className="why-img"
            src="/images/why-sifra/maternal-healthcare-crisis.webp"
            alt="Graphic illustrating Wisconsin's growing maternity care crisis"
            width={1509}
            height={377}
            loading="lazy"
            decoding="async"
          />
          <ol className="why-list" start={2}>
            <li>
              The need to hire more midwives is urgent; however, without a
              birth center, it is almost impossible to recruit additional
              midwives.
            </li>
            <li>
              Rural hospitals in Wisconsin continue to close labor and
              delivery units.
            </li>
          </ol>
          <img
            className="why-img"
            src="/images/why-sifra/hospital-delivery-units-decline.webp"
            alt="Graph showing the decline of hospital labor and delivery units in Wisconsin"
            width={1374}
            height={619}
            loading="lazy"
            decoding="async"
          />
          <ol className="why-list" start={4}>
            <li>
              Maternal death is rising and has doubled in the last two
              decades.
              <span className="why-cite">
                (Shellpfeffer et al., 2015) (KFF/CDC) (March of Dimes, 2025)
              </span>
            </li>
          </ol>
          <h3 className="why-heading" style={{ paddingTop: '2rem' }}>The Results</h3>
          <p>
            Women freebirth, drive long distances for maternity care, or
            settle for birth options they aren&apos;t comfortable with.
          </p>
        </div>

        <div className="why-block">
          <h3 className="why-heading">Sifra&apos;s Unique Offering</h3>
          <div className="why-split">
            <ol className="why-list why-list--arrow">
              <li>
                Comprehensive Midwifery Care that includes:
                <ul className="why-sublist">
                  <li>Compassionate, personal care</li>
                  <li>Regular, comprehensive prenatal visits</li>
                  <li>Routine labs and imaging</li>
                  <li>Personalized birth experience</li>
                  <li>Emotional support</li>
                  <li>Lactation support</li>
                  <li>Personal autonomy</li>
                </ul>
              </li>
            </ol>
            <ul className="why-list why-list--arrow">
              <li>Newborn exams &amp; screening</li>
              <li>Home-like birth suites</li>
              <li>A 20 minute drive to emergency medical care</li>
              <li>Affordable &amp; transparent pricing</li>
              <li>Opportunities for midwifery students</li>
            </ul>
          </div>
          <img
            className="why-img why-img--titled"
            src="/images/why-sifra/birth-suite-rendering.jpg"
            alt="Architectural rendering of a homelike birth suite at Sifra Birth Center in Merrill, Wisconsin"
            width={1600}
            height={983}
            loading="lazy"
            decoding="async"
          />
          <p className="why-img-caption">Rendering</p>
        </div>
      </div>
    </section>
  );
}
