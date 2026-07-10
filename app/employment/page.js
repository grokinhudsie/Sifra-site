import { pageMetadata } from '../lib/seo';

export const metadata = pageMetadata({
  title: 'Employment | Careers at Sifra Birth Center',
  description:
    'Explore careers with Sifra Birth Center in Merrill, Wisconsin — midwifery, birth assistant, and support roles as our freestanding birth center takes shape.',
  path: '/employment',
});

export default function EmploymentPage() {
  return (
    <div style={{ background: 'linear-gradient(135deg, var(--cream), #fce4d6)', flex: 1 }}>
      <header className="page-header" style={{ background: 'transparent' }}>
        <h1>Employment at Sifra</h1>
        <p>Join our team of compassionate, skilled caregivers.</p>
      </header>
      <section>
        <div className="container" style={{ textAlign: 'center', color: 'var(--muted)' }}>
          <p>No open positions at this time.</p>
        </div>
      </section>
    </div>
  );
}
