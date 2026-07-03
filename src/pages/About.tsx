import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { Mail, MapPin, Phone, ExternalLink, GraduationCap, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { about } from "@/data/about/about";
import { experience } from "@/data/about/experience";
import { education } from "@/data/about/education";

const renderBio = (text: string) => {
  // Inline [label](url) markdown links → <a>
  const parts: (string | JSX.Element)[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(
      <a
        key={key++}
        href={m[2]}
        target="_blank"
        rel="noreferrer"
        className="text-foreground underline underline-offset-4 hover:text-primary"
      >
        {m[1]}
      </a>,
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
};

const About = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      <SEO title="About — Cabir Çelik, Software Engineer & Mathematician" description="Cabir Çelik — software engineer and mathematician with 6+ years building ML, DL, NLP, and LLM systems. Currently leading clinical AI work at John Snow Labs." path="/about" ogType="profile" jsonLd={{"@context":"https://schema.org","@type":"ProfilePage","mainEntity":{"@type":"Person","name":"Cabir Çelik","jobTitle":"Software Engineer and Mathematician","worksFor":{"@type":"Organization","name":"John Snow Labs"},"url":"/about","sameAs":["https://www.linkedin.com/in/cabircelik/","https://github.com/Cabir40","https://medium.com/@cabircelik"]}}} />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <section className="mb-16 text-center space-y-6 animate-slide-down">
          <img
            src={about.avatar}
            alt={`Portrait of ${about.name}`}
            className="mx-auto h-32 w-32 sm:h-40 sm:w-40 rounded-full object-cover ring-2 ring-border shadow-sm"
            loading="eager"
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
            {about.name} — {about.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              {about.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Mail className="h-4 w-4" />
              <a
                href={`mailto:${about.email}`}
                className="hover:text-foreground"
              >
                {about.email}
              </a>
            </span>
            {about.phone && (
              <span className="inline-flex items-center gap-1.5">
                <Phone className="h-4 w-4" />
                {about.phone}
              </span>
            )}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {about.profiles.map((p) => (
              <Button
                key={p.label}
                asChild
                variant="outline"
                size="sm"
              >
                <a href={p.url} target="_blank" rel="noreferrer">
                  {p.label}
                  <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                </a>
              </Button>
            ))}
          </div>
        </section>

        {/* Bio */}
        <section className="mb-12 animate-slide-up stagger-1">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            {renderBio(about.bio)}
          </p>
        </section>

        {/* Expertise */}
        <section className="mb-16 animate-slide-up stagger-2 space-y-8">
          <h2 className="text-2xl">Expertise</h2>
          {(about.expertise ?? []).map((group) => (
            <div key={group.group}>
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-3">
                {group.group}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-muted px-3 py-1.5 text-sm text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Experience */}
        <section className="mb-16 animate-slide-up stagger-3">
          <h2 className="text-3xl mb-8 flex items-center gap-3">
            <Briefcase className="h-7 w-7" />
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((job, idx) => (
              <article
                key={`${job.org}-${idx}`}
                className="border-l-2 border-border pl-6 relative"
              >
                <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-foreground" />
                <header className="mb-2">
                  <h3 className="text-xl text-foreground">{job.role}</h3>
                  <p className="text-muted-foreground">
                    {job.org} · {job.location}
                  </p>
                  <p className="text-sm text-muted-foreground">{job.dates}</p>
                </header>
                <ul className="space-y-2 mt-3 text-muted-foreground">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-16 animate-slide-up stagger-4">
          <h2 className="text-3xl mb-8 flex items-center gap-3">
            <GraduationCap className="h-7 w-7" />
            Education
          </h2>
          <div className="space-y-8">
            {education.map((ed, idx) => (
              <article
                key={`${ed.institution}-${idx}`}
                className="border-l-2 border-border pl-6 relative"
              >
                <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-foreground" />
                <header className="mb-2">
                  <h3 className="text-xl text-foreground">{ed.degree}</h3>
                  <p className="text-muted-foreground">
                    {ed.institution} · {ed.location}
                  </p>
                  <p className="text-sm text-muted-foreground">{ed.dates}</p>
                </header>
                {ed.thesis && (
                  <div className="mt-3 rounded-lg bg-card p-4 text-sm text-muted-foreground">
                    <p className="text-foreground font-medium mb-1">Thesis</p>
                    <p className="italic">"{ed.thesis.title}"</p>
                    {ed.thesis.citation && (
                      <p className="mt-2 text-xs">{ed.thesis.citation}</p>
                    )}
                  </div>
                )}
                {ed.body && (
                  <p className="mt-3 text-muted-foreground">{ed.body}</p>
                )}
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
