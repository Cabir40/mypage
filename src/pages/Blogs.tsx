import Header from "@/components/Header";
import SEO from "@/components/SEO";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/articles/articles";

const Blogs = () => {
  const blogArticles = projects.filter((a) => a.section === "blogs");

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      <SEO title="Blogs & Publications — Cabir Çelik" description="Research papers, thesis work, and articles on clinical NLP, assertion detection, retrieval-augmented generation, and healthcare LLMs." path="/blogs" />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight animate-slide-down">
            Clinical AI Research & Blog Insights
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
            Essays and notes across blogs, source, creativity, and growth.
          </p>
        </div>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogArticles.map((article, index) => (
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

export default Blogs;
