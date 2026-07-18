import { SITE_URL } from '../../lib/seo';

// Person markup for the Leadership & Staff section; worksFor points at the
// sitewide Organization entity defined in app/layout.js.
const staffPerson = (name, jobTitle, image, honorificSuffix) => ({
  '@type': 'Person',
  name,
  ...(honorificSuffix ? { honorificSuffix } : {}),
  jobTitle,
  worksFor: { '@id': `${SITE_URL}/#organization` },
  image: `${SITE_URL}${image}`,
});

const STAFF_JSONLD = {
  '@context': 'https://schema.org',
  '@graph': [
    staffPerson('Katie Breitenmoser', 'Lead Midwife, Clinical Director', '/images/staff/katie-breitenmoser.webp', 'CPM, LM'),
    staffPerson('Andrew Headings', 'Executive Director', '/images/staff/andrew-headings.webp'),
    staffPerson('Neil Martin', 'Administrative Director', '/images/staff/neil-martin.webp'),
    staffPerson('Talitha Groshek', 'Student Midwife', '/images/staff/talitha-groshek.webp'),
  ],
};

export default function AboutSection() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(STAFF_JSONLD) }}
      />
      <section id="about" className="fade-section" style={{ background: '#fff8f3' }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Who We Are</h2>

          <img
            className="ahm-logo"
            src="/images/logos/anabaptist-health-ministries.webp"
            alt="Anabaptist Health Ministries logo"
            width={1001}
            height={428}
            loading="lazy"
            decoding="async"
          />
          <p className="section-subtitle" style={{ maxWidth: 'none', textAlign: 'left' }}>Anabaptist Health Ministries, Inc., is a faith-based nonprofit recognized by the IRS as a 501(c)(3) tax-exempt organization. Sifra Birth Center is proposed by Anabaptist Health Ministries as a freestanding birth center and midwife education ministry to be located in Merrill, Wisconsin. Rooted in Christian values, Sifra will blend the clinical excellence of modern midwifery with compassionate, individualized care. Families from all walks of life will find a compassionate, healing refuge at Sifra Birth Center.</p>

          <div className="about-grid">
            <img
              src="/images/about/baby-mg-3645.webp"
              alt="Newborn baby wearing a Welcome to the World onesie"
              width={1201}
              height={1201}
              loading="lazy"
              decoding="async"
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
                to give birth to their baby, versus a place where they <em>have</em> to go
                for the birth of their baby.
              </p>
              <p>
                At Sifra, we are working to create a peaceful haven for
                families, and an inspiring, life-giving workplace for the
                midwives and staff who support them.
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
              <h4 style={{ fontFamily: '"elaina-script", sans-serif', fontWeight: 400, fontStyle: 'normal', fontSize: '2rem', WebkitTextStroke: '1px currentColor', textAlign: 'center' }}>Sifra Vision</h4>
              <p>We envision Northern Wisconsin to be a place where exceptional, sustainable midwifery care is accessible, safe, and affordable for everyone.</p>
            </div>
            <div className="feature" style={{ textAlign: 'left' }}>
              <h4 style={{ fontFamily: '"elaina-script", sans-serif', fontWeight: 400, fontStyle: 'normal', fontSize: '2rem', WebkitTextStroke: '1px currentColor', textAlign: 'center' }}>Sifra Mission</h4>
              <p>We will create Sifra Birth Center, assemble an exceptional team of midwives, and build a culture of life. Our culture will be defined by our faith-based values, high standards of family-centered care, and respect for our staff.</p>
            </div>
          </div>

          <div className="values-panel" style={{ marginTop: '2rem' }}>
            <h4 className="section-title" style={{ fontFamily: '"elaina-script", sans-serif', fontWeight: 400, fontStyle: 'normal', fontSize: '2rem', WebkitTextStroke: '1px currentColor' }}>Sifra Values</h4>
            <p style={{ fontFamily: '"mr-eaves-xl-sans", sans-serif', color: 'var(--primary)', textAlign: 'center' }}>These are the values that guide our actions.</p>
            <div className="values-grid">
            <div className="feature">
              <h5>Integrity</h5>
              <p>Our devotion to integrity means our actions will be guided by a commitment to virtue, truthfulness, and dependability.</p>
            </div>
            <div className="feature">
              <h5>Compassion</h5>
              <p>Our devotion to compassion means our actions will be guided by a sincere desire to bless, care for, and help. This applies to both our staff, and the families we serve.</p>
            </div>
            <div className="feature">
              <h5>Personalized Care</h5>
              <p>Our devotion to personalized care means we will honor the individuality of each person we serve. Every family is unique &ndash; their health history, background, preferences, and beliefs.</p>
            </div>
            <div className="feature">
              <h5>Safety &amp; Continuous Improvement</h5>
              <p>Our devotion to safety means we will not allow outside priorities and pressure to compromise the safety of our clients. Our commitment to continuous improvement means we are compelled to relentlessly improve our education, skills, client outcomes, and relevance to our communities.</p>
            </div>
            </div>
          </div>

          <h3 className="section-title section-subheading" style={{ marginTop: '5rem' }}>Leadership & Staff</h3>
          <div className="features" style={{ marginTop: '2rem' }}>
            <div className="feature">
              <div className="feature-img-circle">
                <img src="/images/staff/katie-breitenmoser.webp" alt="Katie Breitenmoser, CPM, LM, Lead Midwife and Clinical Director at Sifra Birth Center" width={700} height={700} loading="lazy" decoding="async" />
              </div>
              <h4>Katie Breitenmoser, CPM, LM</h4>
              <p className="staff-role">Lead Midwife, Clinical Director</p>
              <p>Katie became a certified and licensed CPM (Certified Professional Midwife) in 2018, following more than twelve years of study and apprenticeship in both home and birth center practices and over 350 births. She founded Windy Hill Midwifery, LLC, and has loved serving area families ever since. Since licensure, she has attended around 460 births and maintains a transfer-of-care rate of approximately 17.3%, a transfer-during-labor rate of 7.1% (the vast majority non-emergent), and a cesarean birth rate of approximately 3.5%.</p>
              <p>Katie views childbirth as an important and empowering physiological process that should be respected and safeguarded. A member of the Wisconsin Guild of Midwives, she is passionate about increasing access to high-quality midwifery care for all interested families and stays current through ongoing classes and certifications. Katie and her husband live on their dairy farm near Merrill, WI. With five children &mdash; three still at home &mdash; she loves spending time with her family, gardening, and being involved in her community.</p>
            </div>
            <div className="feature">
              <div className="feature-img-circle">
                <img src="/images/staff/andrew-headings.webp" alt="Andrew Headings, Executive Director at Sifra Birth Center" width={701} height={701} loading="lazy" decoding="async" />
              </div>
              <h4>Andrew Headings</h4>
              <p className="staff-role">Executive Director</p>
              <p>Andrew is the founder and CEO of Anabaptist Health Ministries and serves as executive director of Sifra Birth Center. A pre-med student, he plans to establish a family medicine clinic that will link arms with the birth center, extending broad-spectrum care to the community. Andrew and his wife raise their family of five in Gleason, WI.</p>
            </div>
            <div className="feature">
              <div className="feature-img-circle">
                <img src="/images/staff/neil-martin.webp" alt="Neil Martin, Administrative Director at Sifra Birth Center" width={701} height={701} loading="lazy" decoding="async" />
              </div>
              <h4>Neil Martin</h4>
              <p className="staff-role">Administrative Director</p>
              <p>Neil Martin joined Anabaptist Health Ministries (AHM) as Chief Operating Officer in early 2026, following nearly seventeen years as a dairy nutrition consultant. Neil is married to the love of his life, and together they are blessed with eight wonderful children. The family makes their home in Wausau, WI, and are active members of Bethel Christian Brotherhood in Merrill. Neil also owns a small family farm with cattle and hogs, where the family fills their spare time with meaningful work and togetherness.</p>
            </div>
            <div className="feature">
              <div className="feature-img-circle">
                <img src="/images/staff/talitha-groshek.webp" alt="Talitha Groshek, Student Midwife at Sifra Birth Center" width={700} height={700} loading="lazy" decoding="async" />
              </div>
              <h4>Talitha Groshek</h4>
              <p className="staff-role">Student Midwife</p>
              <p>Over the past ten years, Talitha has become passionate about women&apos;s health from a holistic perspective, particularly pregnancy and birth. Her journey into midwifery began after the birth of her second child, when she chose to have her next two babies at home under the care of excellent midwives &mdash; an experience that delighted her. She is now pursuing her training through Windy Hill Midwifery and BioBirth Academy, with plans to become a licensed midwife in 2027. Talitha is certified in Neonatal Resuscitation and CPR/AED and attends as many additional trainings and workshops as family life comfortably allows. She lives in central Wisconsin with her husband and four children on their beginner homestead, raising sheep and chickens.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
