import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { Mail, MapPin, Languages, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact } from "@/data/contact/contact";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      <SEO title="Contact — Cabir Çelik" description="Get in touch with Cabir Çelik about healthcare AI, clinical NLP, or LLM systems — email, LinkedIn, GitHub, and Medium." path="/contact" jsonLd={{"@context":"https://schema.org","@type":"ContactPage","url":"/contact","mainEntity":{"@type":"Person","name":"Cabir Çelik","email":"cabirchelik@gmail.com","contactPoint":{"@type":"ContactPoint","contactType":"professional inquiries","email":"cabirchelik@gmail.com","availableLanguage":["English","Turkish","Dutch"]}}}} />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <div className="mb-12 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight animate-slide-down">
            {contact.heading}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up stagger-1">
            {contact.body}
          </p>
        </div>

        {/* Profile buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 animate-slide-up stagger-2">
          {contact.profiles.map((p) => (
            <Button key={p.label} asChild variant="outline" size="lg" className="rounded-full">
              <a href={p.url} target="_blank" rel="noreferrer">
                {p.label}
                <ExternalLink className="ml-1.5 h-4 w-4" />
              </a>
            </Button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6 animate-slide-up stagger-3">
          <div className="rounded-2xl bg-card p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="mb-1">Email</h3>
              <a
                href={`mailto:${contact.email}`}
                className="text-muted-foreground hover:text-foreground"
              >
                {contact.email}
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-card p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="mb-1">Location</h3>
              <p className="text-muted-foreground">{contact.location}</p>
            </div>
          </div>

          <div className="rounded-2xl bg-card p-6 flex items-start gap-4 sm:col-span-2">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
              <Languages className="w-5 h-5" />
            </div>
            <div>
              <h3 className="mb-2">Languages</h3>
              <ul className="space-y-1 text-muted-foreground">
                {contact.languages.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
