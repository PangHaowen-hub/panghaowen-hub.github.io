import { Github, GraduationCap, Mail, MapPin, Phone } from 'lucide-react';
import {
  awards,
  education,
  internships,
  personal,
  publications,
  skills,
} from './constants';

type MarkedItem = {
  authors: string;
  coFirstAuthors?: string[];
  correspondingAuthors?: string[];
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="cv-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function splitAuthors(authors: string) {
  return authors
    .replace(/, and /g, ', ')
    .replace(/ and /g, ', ')
    .split(',')
    .map((author) => author.trim())
    .filter(Boolean);
}

function AuthorList({ item }: { item: MarkedItem }) {
  const authors = splitAuthors(item.authors);

  return (
    <span className="authors">
      {authors.map((author, index) => {
        const plainName = author.replace(/\s*\(Supervisor\)/, '');
        const isCurrentAuthor = plainName === 'Haowen Pang';
        const isCoFirst = item.coFirstAuthors?.includes(plainName);
        const isCorresponding = item.correspondingAuthors?.includes(plainName);

        return (
          <span key={`${author}-${index}`}>
            {index > 0 && (index === authors.length - 1 ? ', and ' : ', ')}
            <span className={isCurrentAuthor ? 'current-author' : undefined}>
              {plainName}
            </span>
            {isCoFirst && <sup>†</sup>}
            {isCorresponding && <sup>*</sup>}
          </span>
        );
      })}
    </span>
  );
}

function App() {
  return (
    <main className="cv-page">
      <header className="cv-header">
        <h1>{personal.name}</h1>
        <div className="contact-row">
          <a href={`tel:${personal.phone}`}>
            <Phone size={14} aria-hidden="true" />
            {personal.phone}
          </a>
          <a href={`mailto:${personal.email}`}>
            <Mail size={14} aria-hidden="true" />
            {personal.email}
          </a>
          <a href={personal.website} target="_blank" rel="noreferrer">
            {personal.websiteLabel}
          </a>
        </div>
        <div className="contact-row">
          <a href={personal.googleScholar} target="_blank" rel="noreferrer">
            <GraduationCap size={14} aria-hidden="true" />
            Google Scholar
          </a>
          <a href={personal.github} target="_blank" rel="noreferrer">
            <Github size={14} aria-hidden="true" />
            GitHub
          </a>
        </div>
        <p className="address">
          <MapPin size={14} aria-hidden="true" />
          {personal.address}
        </p>
      </header>

      <Section title="Profile">
        <div className="profile-text">
          {personal.profile.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section title="Education">
        <div className="entry-list">
          {education.map((item) => (
            <article className="cv-entry" key={item.school}>
              <div className="entry-head">
                <div>
                  <h3>{item.school}</h3>
                  <p className="entry-subtitle">{item.degree}</p>
                </div>
                <div className="entry-meta">
                  <span>{item.period}</span>
                  <span>{item.location}</span>
                </div>
              </div>
              <ul>
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Selected Journals and Conferences">
        <p className="author-legend">† Co-first author · * Corresponding author</p>
        <div className="publication-list">
          {publications.map((paper, index) => (
            <article className="numbered-item" key={paper.title}>
              <div className="item-number">[{index + 1}]</div>
              <p>
                <AuthorList item={paper} />.{' '}
                {paper.url ? (
                  <a href={paper.url} target="_blank" rel="noreferrer">
                    {paper.title}
                  </a>
                ) : (
                  <strong>{paper.title}</strong>
                )}
                . <em>{paper.venue}</em>, {paper.year}.{' '}
                <span className="paper-note">({paper.note})</span>
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Awards and Honors">
        <div className="entry-list compact">
          {awards.map((award) => (
            <article className="cv-entry" key={award.title}>
              <div className="entry-head">
                <h3>{award.title}</h3>
                <div className="entry-meta">
                  <span>{award.date}</span>
                </div>
              </div>
              <ul>
                <li>{award.detail}</li>
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Internship and Visiting Experience">
        <div className="entry-list compact">
          {internships.map((item) => (
            <article className="cv-entry" key={item.organization}>
              <div className="entry-head">
                <div>
                  <h3>{item.organization}</h3>
                  <p className="entry-subtitle">{item.role}</p>
                </div>
                <div className="entry-meta">
                  <span>{item.period}</span>
                  <span>{item.location}</span>
                </div>
              </div>
              <p className="entry-description">{item.focus}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Technical Skills">
        <dl className="skills-list">
          {skills.map((skill) => (
            <div key={skill.label}>
              <dt>{skill.label}:</dt>
              <dd>{skill.value}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </main>
  );
}

export default App;
