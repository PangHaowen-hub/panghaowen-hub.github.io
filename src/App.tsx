import { Award, BookOpen, BriefcaseBusiness, Github, GraduationCap, Mail, MapPin, Menu, Microscope, Phone, X } from 'lucide-react';
import { useState } from 'react';
import GoatCounter from './GoatCounter';
import { awards, education, internships, personal, publications, skills } from './constants';

type MarkedItem = { authors: string; coFirstAuthors?: string[]; correspondingAuthors?: string[] };
const navItems = [
  ['About', '#about'], ['Publications', '#publications'], ['Experience', '#experience'],
  ['Honors', '#honors'], ['Skills', '#skills'],
];

function splitAuthors(authors: string) {
  return authors.replace(/, and /g, ', ').replace(/ and /g, ', ').split(',').map((a) => a.trim()).filter(Boolean);
}

function AuthorList({ item }: { item: MarkedItem }) {
  const authors = splitAuthors(item.authors);
  return <span className="authors">{authors.map((author, index) => {
    const name = author.replace(/\s*\(Supervisor\)/, '');
    return <span key={`${author}-${index}`}>
      {index > 0 && (index === authors.length - 1 ? ', and ' : ', ')}
      <span className={name === personal.name ? 'current-author' : undefined}>{name}</span>
      {item.coFirstAuthors?.includes(name) && <sup>†</sup>}
      {item.correspondingAuthors?.includes(name) && <sup>*</sup>}
    </span>;
  })}</span>;
}

function SectionHeading({ eyebrow, title, icon }: { eyebrow: string; title: string; icon: React.ReactNode }) {
  return <div className="section-heading"><span className="section-icon">{icon}</span><div><p>{eyebrow}</p><h2>{title}</h2></div></div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <>
    <GoatCounter />
    <header className="site-header"><div className="nav-shell">
      <a className="site-name" href="#about" onClick={() => setMenuOpen(false)}>{personal.name}</a>
      <button className="menu-button" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Primary navigation">
        {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
      </nav>
    </div></header>

    <main className="page-shell">
      <aside className="profile-card" aria-label="Profile">
        <div className="avatar" aria-label="Haowen Pang monogram">HP</div>
        <h1>{personal.name}</h1><p className="profile-role">Ph.D. Candidate</p>
        <p className="profile-affiliation">Beijing Institute of Technology</p>
        <p className="profile-focus">Medical image analysis · Generative models · Trustworthy AI</p>
        <div className="profile-links">
          <span><MapPin /> Beijing, China</span><a href={`mailto:${personal.email}`}><Mail /> Email</a>
          <a href={personal.googleScholar} target="_blank" rel="noreferrer"><GraduationCap /> Google Scholar</a>
          <a href={personal.github} target="_blank" rel="noreferrer"><Github /> GitHub</a>
          <a href={`tel:${personal.phone}`}><Phone /> {personal.phone}</a>
        </div>
        <div className="profile-stats"><div><strong>{publications.length}</strong><span>Selected papers</span></div><div><strong>{awards.length}</strong><span>Honors</span></div></div>
      </aside>

      <div className="content-column">
        <section className="content-section hero" id="about">
          <p className="hero-kicker">Medical Imaging · Generative AI</p>
          <h2>Building reliable generative models for clinical imaging.</h2>
          <div className="intro-copy">{personal.profile.map((p) => <p key={p}>{p}</p>)}</div>
          <div className="research-interests"><span>Research interests</span><ul><li>Medical image synthesis</li><li>Diffusion models</li><li>Vision-language models</li><li>Trustworthy AI</li></ul></div>
        </section>

        <section className="content-section" id="publications">
          <SectionHeading eyebrow="Research" title="Selected Publications" icon={<BookOpen />} />
          <p className="section-note"><strong>{personal.name}</strong> is highlighted · † Co-first author · * Corresponding author</p>
          <div className="publication-list">{publications.map((paper, index) => <article className="publication" key={paper.title}>
            <span className="publication-number">{String(index + 1).padStart(2, '0')}</span><div>
              <h3>{paper.url ? <a href={paper.url} target="_blank" rel="noreferrer">{paper.title}</a> : paper.title}</h3>
              <p className="publication-authors"><AuthorList item={paper} /></p>
              <p className="publication-meta"><em>{paper.venue}</em> · {paper.year}</p><span className="publication-note">{paper.note}</span>
            </div></article>)}</div>
        </section>

        <section className="content-section" id="experience">
          <SectionHeading eyebrow="Background" title="Education & Experience" icon={<BriefcaseBusiness />} />
          <div className="timeline">
            {education.map((item) => <article className="timeline-item" key={item.school}><div className="timeline-date">{item.period}</div><div><h3>{item.school}</h3><p className="timeline-subtitle">{item.degree}</p><p className="timeline-location">{item.location}</p>{item.details.map((d) => <p className="timeline-detail" key={d}>{d}</p>)}</div></article>)}
            {internships.map((item) => <article className="timeline-item" key={item.organization}><div className="timeline-date">{item.period}</div><div><h3>{item.organization}</h3><p className="timeline-subtitle">{item.role}</p><p className="timeline-location">{item.location}</p><p className="timeline-detail">{item.focus}</p></div></article>)}
          </div>
        </section>

        <section className="content-section" id="honors">
          <SectionHeading eyebrow="Recognition" title="Awards & Honors" icon={<Award />} />
          <div className="honors-grid">{awards.map((award) => <article className="honor-card" key={award.title}><span>{award.date}</span><h3>{award.title}</h3><p>{award.detail}</p></article>)}</div>
        </section>

        <section className="content-section" id="skills">
          <SectionHeading eyebrow="Toolkit" title="Technical Skills" icon={<Microscope />} />
          <dl className="skills-list">{skills.map((skill) => <div key={skill.label}><dt>{skill.label}</dt><dd>{skill.value}</dd></div>)}</dl>
        </section>
        <footer><p>© {new Date().getFullYear()} {personal.name}. Built for an open academic web.</p><a href="#about">Back to top ↑</a></footer>
      </div>
    </main>
  </>;
}

export default App;
