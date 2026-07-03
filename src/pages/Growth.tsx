import Header from "@/components/Header";
import SEO from "@/components/SEO";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/articles/articles";

const Growth = () => {
  const posts = projects.filter(
    (a) => a.category.toLowerCase() === "blog post",
  );

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      <SEO title="Blog Posts — Cabir Çelik" description="Long-form articles on building healthcare AI, clinical NLP pipelines, and LLM systems in production." path="/growth" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight animate-slide-down">
            Blog Posts
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
            Industry write-ups on healthcare-specific LLMs, clinical entity
            extraction, and applied NLP in production.
          </p>
        </div>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((article, index) => (
              <div
                key={article.id}
                className={`animate-slide-up stagger-${Math.min(index + 2, 6)}`}
              >
                <ProjectCard {...article} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Growth;
