import {
  ArrowUpRight,
  Github,
  GraduationCap,
  Mail,
  MapPin,
} from 'lucide-react';
import type { ReactNode } from 'react';
import {
  awards,
  education,
  internships,
  patents,
  personal,
  publications,
  researchAreas,
} from './constants';

const navItems = [
  { href: '#profile', label: 'Profile' },
  { href: '#publications', label: 'Publications' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="section-heading">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="inline-link">
      {children}
      <ArrowUpRight size={15} aria-hidden="true" />
    </a>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Haowen Pang homepage">
          HP
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="kicker">{personal.role}</p>
            <h1>{personal.name}</h1>
            <p className="lead">{personal.summary}</p>
            <div className="hero-actions" aria-label="Profile links">
              <ExternalLink href={personal.googleScholar}>Google Scholar</ExternalLink>
              <ExternalLink href={personal.github}>GitHub</ExternalLink>
              <ExternalLink href={`mailto:${personal.email}`}>Email</ExternalLink>
            </div>
          </div>

          <aside className="profile-panel" aria-label="Contact details">
            <div>
              <span className="panel-label">Research Focus</span>
              <p>Medical image synthesis, diffusion models, and trustworthy AI for clinical imaging.</p>
            </div>
            <dl>
              <div>
                <dt>Affiliation</dt>
                <dd>{personal.affiliation}</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${personal.email}`}>{personal.email}</a>
                </dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{personal.location}</dd>
              </div>
            </dl>
          </aside>
        </section>

        <section id="profile" className="content-section">
          <SectionTitle eyebrow="Profile" title="Researching practical generative AI for medical imaging" />
          <div className="two-column">
            <div className="prose">
              {personal.profile.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="research-list">
              {researchAreas.map((area) => (
                <div key={area.title}>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="publications" className="content-section">
          <SectionTitle eyebrow="Selected Work" title="Publications" />
          <ol className="publication-list">
            {publications.map((paper) => (
              <li key={paper.title}>
                <div className="publication-meta">
                  <span>{paper.year}</span>
                  <span>{paper.venue}</span>
                </div>
                <div>
                  <h3>
                    {paper.url ? (
                      <a href={paper.url} target="_blank" rel="noreferrer">
                        {paper.title}
                      </a>
                    ) : (
                      paper.title
                    )}
                  </h3>
                  <p>{paper.authors}</p>
                  {paper.note && <p className="note">{paper.note}</p>}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="experience" className="content-section">
          <SectionTitle eyebrow="Background" title="Education and experience" />
          <div className="timeline-grid">
            <div>
              <h3 className="list-title">Education</h3>
              <div className="timeline">
                {education.map((item) => (
                  <article key={item.school}>
                    <span>{item.period}</span>
                    <h4>{item.school}</h4>
                    <p>{item.degree}</p>
                    <p className="muted">{item.focus}</p>
                  </article>
                ))}
              </div>
            </div>
            <div>
              <h3 className="list-title">Visiting and internship</h3>
              <div className="timeline">
                {internships.map((item) => (
                  <article key={item.organization}>
                    <span>{item.period}</span>
                    <h4>{item.organization}</h4>
                    <p>{item.role}</p>
                    <p className="muted">{item.focus}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="content-section split-section">
          <div>
            <SectionTitle eyebrow="Recognition" title="Awards and honors" />
            <ul className="compact-list">
              {awards.map((award) => (
                <li key={award.title}>
                  <span>{award.date}</span>
                  <p>{award.title}</p>
                  <small>{award.detail}</small>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionTitle eyebrow="IP" title="Selected patents" />
            <ul className="compact-list">
              {patents.map((patent) => (
                <li key={patent.id}>
                  <span>{patent.year}</span>
                  <p>{patent.title}</p>
                  <small>{patent.id}</small>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div>
            <p className="kicker">Contact</p>
            <h2>Open to research collaboration in medical image analysis.</h2>
          </div>
          <div className="contact-links">
            <a href={`mailto:${personal.email}`}>
              <Mail size={18} aria-hidden="true" />
              {personal.email}
            </a>
            <a href={personal.googleScholar} target="_blank" rel="noreferrer">
              <GraduationCap size={18} aria-hidden="true" />
              Google Scholar
            </a>
            <a href={personal.github} target="_blank" rel="noreferrer">
              <Github size={18} aria-hidden="true" />
              GitHub
            </a>
            <span>
              <MapPin size={18} aria-hidden="true" />
              {personal.address}
            </span>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Haowen Pang</p>
      </footer>
    </div>
  );
}

export default App;
