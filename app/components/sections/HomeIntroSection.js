import Link from 'next/link';

export default function HomeIntroSection() {
  return (
    <section id="mission" className="fade-section">
      <div className="container home-intro">
        <p className="home-intro-lead">
          Sifra Birth Center is a freestanding birth center proposed by
          Anabaptist Health Ministries in Merrill, Wisconsin.
        </p>
        <p>
          We are uniquely positioned to serve the growing families of
          north-central Wisconsin with compassionate, high-quality,
          personalized maternity care that honors both clinical excellence and
          biblical values.
        </p>
        <p className="home-intro-highlight">
          We aim to begin welcoming babies in early 2029.
        </p>
        <p>
          To keep birth fees modest and affordable for most
          families&mdash;regardless of income&mdash;we are funding the entire
          facility through charitable donations rather than debt. We cannot
          serve our neighbors well while carrying significant capital debt. An
          affordable birth experience for all is only possible if our
          community invests in the center itself.
        </p>
        <p>
          Construction will begin once we have secured 70% of the $7,000,000
          needed. We are actively seeking donations and partnership
          commitments from individuals, churches, businesses, local
          organizations, and private foundations who share our vision of
          bringing hope, healing, and excellent care to rural families.
        </p>
        <p>
          If you are interested in helping fund this facility, please{' '}
          <Link href="/contact?subject=Sifra%20Sponsorship">contact us</Link>.
        </p>
        <p>
          Your generous investment today will create a lasting legacy of
          life-affirming maternity care rooted in safety and
          compassion&mdash;right here in our own communities.
        </p>
        <div className="home-intro-cta">
          <Link href="/donate" className="btn">Get Involved</Link>
        </div>
      </div>
    </section>
  );
}
