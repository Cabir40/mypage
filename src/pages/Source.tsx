import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { source } from "@/data/articles/articles";
import * as Icons from "lucide-react";

const Source = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      <SEO title="Source — Reading List & Resources" description="Curated reading list, references, and resources used across Cabir Çelik's projects and writing on healthcare AI and clinical NLP." path="/source" />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight animate-slide-down">
            Source
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
            Resources, references, and reading material.
          </p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {source.map((item) => {
            const Icon = (Icons as unknown as Record<string, typeof Icons.FileText>)[item.icon] ?? Icons.FileText;
            return (
              <div
                key={item.id}
                className="p-6 rounded-lg border bg-card hover:shadow-md transition-shadow"
              >
                <Icon className="h-6 w-6 mb-4 text-primary" />
                <h3 className="text-lg mb-2">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                {item.comingSoon && (
                  <span className="inline-block mt-3 text-xs px-2 py-1 rounded bg-muted">
                    Coming soon
                  </span>
                )}
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default Source;
