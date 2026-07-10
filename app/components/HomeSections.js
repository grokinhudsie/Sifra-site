import Link from 'next/link';
import ParallaxHero from './ParallaxHero';
import ContactForm from './ContactForm';
import ExpandableImage from './ExpandableImage';

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

export default function HomeSections() {
  return (
    <>
      <section id="home" className="fade-section">
        <ParallaxHero>
          <div className="hero-content">
            <img
              className="hero-logo"
              src="/Logos/Sifra Birth Center Logo-Two Color-LARGE.webp"
              alt="Sifra Birth Center"
            />
            <h1>Welcoming New Life With Love & Care</h1>
            <p>
              A&nbsp;&nbsp;<span style={{ fontFamily: '"elaina-script", sans-serif', fontWeight: 400, fontStyle: 'normal', fontSize: '1.5em', WebkitTextStroke: '.5px currentColor' }}>peaceful</span>, family-centered birthing experience{' '}
              <br className="hero-break" />
              supported by <span style={{ fontFamily: '"elaina-script", sans-serif', fontWeight: 400, fontStyle: 'normal', fontSize: '1.5em', WebkitTextStroke: '.5px currentColor' }}>compassionate</span> midwives delivering holistic care.
            </p>
          </div>
        </ParallaxHero>
      </section>

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
                  of both profitability and care providers. Families are now
                  driving farther, have limited provider options, and are
                  facing greater risks simply to welcome a baby.
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
                  src="/Why Sifra images/OB hospitals in WI map.webp"
                  alt="Map of the region Sifra Birth Center will serve, showing rural hospitals still delivering babies in green and those that have stopped offering birth services since 2012 in tan"
                  lightboxExtra={mapLegend}
                />
                {mapLegend}
              </div>
            </div>
            <ol className="why-list">
              <li>
                Local midwives are overwhelmed. As a result, at least one out
                of three mothers seeking midwifery care is turned away due to
                the lack of midwives.
              </li>
            </ol>
            <img
              className="why-img"
              src="/Why Sifra images/maternal healthcare crisis graphic LARGE.webp"
              alt="Graphic illustrating Wisconsin's growing maternity care crisis"
            />
            <ol className="why-list" start={2}>
              <li>
                The need to hire more midwives is urgent, however without a
                birth center it is almost impossible to recruit additional
                midwives.
              </li>
              <li>
                Rural hospitals in Wisconsin continue to close labor and
                delivery units.
              </li>
            </ol>
            <img
              className="why-img"
              src="/Why Sifra images/decline of hospital delivery units graph LARGE.webp"
              alt="Graph showing the decline of hospital labor and delivery units"
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
              Women freebirth, drive too many miles to find a place to deliver,
              or settle for birth options they aren&apos;t comfortable with.
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
                    <li>Ability to retain your own decision making</li>
                  </ul>
                </li>
              </ol>
              <ul className="why-list why-list--arrow">
                <li>Newborn exams &amp; screening</li>
                <li>Homelike birth suites</li>
                <li>A 20 minute drive to emergency medical care</li>
                <li>Affordable &amp; transparent pricing</li>
                <li>Opportunities for midwifery students</li>
              </ul>
            </div>
            <img
              className="why-img why-img--titled"
              src="/Why Sifra images/room rendering 1.jpg"
              alt="Rendering of a homelike birth suite at Sifra Birthing Center"
            />
            <p className="why-img-caption">Rendering</p>
          </div>

          <div className="section-cta">
            <Link href="/donate" className="btn">Donate</Link>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      <section id="about" className="fade-section" style={{ background: '#fff8f3' }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Who We Are</h2>

          <img
            className="ahm-logo"
            src="/Logos/AHM logos/Anabaptist Health Ministries.webp"
            alt="Anabaptist Health Ministries"
          />
          <p className="section-subtitle" style={{ maxWidth: 'none', textAlign: 'left' }}>Sifra Birth Center is proposed by Anabaptist Health Ministries, Inc. — a faith based nonprofit organization, recognized by the IRS as a 501(c)(3) tax-exempt organization — as a freestanding birth center and midwife education ministry to be located in Merrill, Wisconsin. Rooted in Christian values, Sifra will blend the clinical excellence of modern midwifery with compassionate, individualized care. Families from all walks of life will find a compassionate, healing refuge at Sifra Birth Center.</p>

          <div className="about-grid">
            <img
              src="/About us hero image/IMG_baby.webp"
              alt="Midwife with mother and newborn"
            />
            <div className="about-text">
              <p>
                Imagine a home-like place where families can come to deliver
                their babies: a home away from home. That is what we envision
                Sifra to be. We want a place that feels like home, but has all
                the amenities needed for the safe arrival of a baby.
              </p>
              <p>
                An important part of this homelike, peaceful environment is the
                staff. To create this environment, we need midwives and birth
                attendants who truly care about the health and wellbeing of both
                mother and baby. We envision a place where mothers <em>get</em> to go
                to give birth to their baby versus a place where they <em>have</em> to go
                for the birth of their baby.
              </p>
              <p>
                At Sifra, we are working to design a facility that meets
                families&apos; needs for privacy and comfort along with the
                staff&apos;s need for a good working environment.
              </p>
              <p>
                Our goal is to have up to four full-time midwives working out of
                Sifra. With four midwives, Sifra will have the potential to
                welcome 300 or more babies per year, with many other families
                served via women&apos;s health consultations.
              </p>
            </div>
          </div>

          <h3 className="section-title section-subheading" style={{ marginTop: '5rem' }}>Vision, Mission, &amp; Values</h3>
          <div className="vision-mission-grid">
            <div className="feature" style={{ textAlign: 'left' }}>
              <h3 style={{ fontFamily: '"elaina-script", sans-serif', fontWeight: 400, fontStyle: 'normal', fontSize: '2rem', WebkitTextStroke: '1px currentColor', textAlign: 'center' }}>Sifra Vision</h3>
              <p>We envision Northern Wisconsin to be a place where exceptional, sustainable midwifery care is accessible, safe and affordable for everyone.</p>
            </div>
            <div className="feature" style={{ textAlign: 'left' }}>
              <h3 style={{ fontFamily: '"elaina-script", sans-serif', fontWeight: 400, fontStyle: 'normal', fontSize: '2rem', WebkitTextStroke: '1px currentColor', textAlign: 'center' }}>Sifra Mission</h3>
              <p>We will create Sifra Birth Center, assemble an exceptional team of midwives and build a culture of life. Our culture will be defined by our faith based values, high standards of family centered care, and respect for our staff.</p>
            </div>
          </div>

          <div className="values-panel" style={{ marginTop: '2rem' }}>
            <h3 className="section-title" style={{ fontFamily: '"elaina-script", sans-serif', fontWeight: 400, fontStyle: 'normal', fontSize: '2rem', WebkitTextStroke: '1px currentColor' }}>Sifra Values</h3>
            <p style={{ fontFamily: '"mr-eaves-xl-sans", sans-serif', color: 'var(--primary)', textAlign: 'center' }}>These are the values that guide our actions.</p>
            <div className="values-grid">
            <div className="feature">
              <h3>Integrity</h3>
              <p>Our devotion to integrity means our actions will be guided by a commitment to virtue, truthfulness, and dependability.</p>
            </div>
            <div className="feature">
              <h3>Compassion</h3>
              <p>Our devotion to compassion means our actions will be guided by a sincere desire to bless, care for, and help. This applies to both staff and the families we serve.</p>
            </div>
            <div className="feature">
              <h3>Personalized Care</h3>
              <p>Our devotion to personalized care means we will honor the individuality of each person we serve. Every family is unique &ndash; their health history, background, preferences and beliefs.</p>
            </div>
            <div className="feature">
              <h3>Safety &amp; Continuous Improvement</h3>
              <p>Our devotion to safety means we will not allow outside priorities and pressure to compromise the safety of our clients. Our commitment to continuous improvement means we are compelled to relentlessly improve our education, skills, client outcomes and relevance to our communities.</p>
            </div>
            </div>
          </div>

          <h3 className="section-title section-subheading" style={{ marginTop: '5rem' }}>Leadership & Staff</h3>
          <div className="features" style={{ marginTop: '2rem' }}>
            <div className="feature">
              <div className="feature-img-circle">
                <img src="/Staff/Katie.webp" alt="Katie Breitenmoser" />
              </div>
              <h3>Katie Breitenmoser, CPM, LM</h3>
              <p className="staff-role">Clinical Director</p>
              <p>Katie became a certified and licensed CPM (Certified Professional Midwife) in 2018, following more than twelve years of study and apprenticeship in both home and birth center practices and over 350 births. She founded Windy Hill Midwifery, LLC, and has loved serving area families ever since. Since licensure, she has attended around 460 births and maintains a transfer-of-care rate of approximately 17.3%, a transfer-during-labor rate of 7.1% (the vast majority non-emergent), and a cesarean birth rate of approximately 3.5%.</p>
              <p>Katie views childbirth as an important and empowering physiological process that should be respected and safeguarded. A member of the Wisconsin Guild of Midwives, she is passionate about increasing access to high-quality midwifery care for all interested families and stays current through ongoing classes and certifications. Katie and her husband live on their dairy farm near Merrill, WI. With five children &mdash; three still at home &mdash; she loves spending time with her family, gardening, and being involved in her community.</p>
            </div>
            <div className="feature">
              <div className="feature-img-circle">
                <img src="/Staff/Andrew2.webp" alt="Andrew Headings" />
              </div>
              <h3>Andrew Headings</h3>
              <p className="staff-role">Executive Director</p>
              <p>Andrew is the founder and CEO of Anabaptist Health Ministries and serves as executive director of Sifra Birth Center. A pre-med student, he plans to establish a family medicine clinic that will link arms with the birth center, extending broad-spectrum care to the community. Andrew and his wife raise their family of five in Gleason, WI.</p>
            </div>
            <div className="feature">
              <div className="feature-img-circle">
                <img src="/Staff/Neil1.webp" alt="Neil Martin" />
              </div>
              <h3>Neil Martin</h3>
              <p className="staff-role">Administrative Director</p>
              <p>Neil Martin joined Anabaptist Health Ministries (AHM) as Chief Operating Officer in early 2026, following nearly seventeen years as a dairy nutrition consultant. Neil is married to the love of his life, and together they are blessed with eight wonderful children. The family makes their home in Wausau, WI, and are active members of Bethel Christian Brotherhood in Merrill. Neil also owns a small family farm with cattle and hogs, where the family fills their spare time with meaningful work and togetherness.</p>
            </div>
            <div className="feature">
              <div className="feature-img-circle">
                <img src="/Staff/Talitha.webp" alt="Talitha Groshek" />
              </div>
              <h3>Talitha Groshek</h3>
              <p className="staff-role">Student Midwife</p>
              <p>Over the past ten years, Talitha has become passionate about women&apos;s health from a holistic perspective, particularly pregnancy and birth. Her journey into midwifery began after the birth of her second child, when she chose to have her next two babies at home under the care of excellent midwives &mdash; an experience that delighted her. She is now pursuing her training through Windy Hill Midwifery and BioBirth Academy, with plans to become a licensed midwife in 2027. Talitha is certified in Neonatal Resuscitation and CPR/AED and attends as many additional trainings and workshops as family life comfortably allows. She lives in central Wisconsin with her husband and four children on their beginner homestead, raising sheep and chickens.</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

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
            src="/Building renders/Sifra render 2.jpg"
            alt="Architectural render of the Sifra Birthing Center"
          />
          <div style={{ textAlign: 'center', color: 'var(--muted)' }}>
            <p>
              The home for Sifra Birth Center will be a beautiful wooded parcel on the
              east side of Merrill on Highway W. Further updates coming soon.
            </p>
          </div>

          <div className="section-cta">
            <Link href="/donate" className="btn">Donate</Link>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      <section id="midwife" className="fade-section bg-sand">
        <div className="container">
          <h2 className="section-title">Midwife Education Program</h2>
          <p className="section-subtitle">
            Training the next generation of compassionate, skilled midwives.
          </p>
          <div className="why-block">
            <p>
              A secondary purpose of Sifra Birth Center is to educate the next
              generation of midwives. Our goal is to create access to clinical
              opportunities for student midwives enrolled in a distance learning
              program at an accredited midwifery school. We hope to have four to
              six students at any given time at the birth center.
            </p>
            <p>
              It will take more than a year for a student to get their clinical
              experience. Once they have that experience, they can become
              licensed and enter the fellowship midwife program, in which they
              take the lead in caring for a mother and her baby while an
              experienced midwife provides oversight.
            </p>
            <p>
              The goal of this program is to educate midwives who will not only
              provide excellent care and careful risk assessment but will
              also give deeply personal care to mother and baby. This is the
              heart of midwifery care. These new midwives can then return to
              serve their own communities. Please reach out to us if you have
              interest in becoming or sponsoring a midwife.
            </p>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      <section id="contact" className="fade-section bg-sage">
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Get In Touch</h2>
          <p className="section-subtitle">
            We&apos;d love to hear from you and answer any questions.
          </p>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Visit Us</h3>
              <div className="contact-items-wrap">
                <div className="contact-item">
                  <span className="icon"><i className="fi fi-rs-marker"></i></span>
                  <div>
                    <strong>Address</strong>
                    <span>N5265 County Rd X<br />Gleason WI, 54435</span>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="icon"><i className="fi fi-rr-phone-flip"></i></span>
                  <div>
                    <strong>Phone</strong>
                    <a href="tel:+17158733440">715-873-3440</a>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="icon"><i className="fi fi-rr-envelope"></i></span>
                  <div>
                    <strong>Email</strong>
                    <a href="mailto:contact@sifrabirth.com">contact@sifrabirth.com</a>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
