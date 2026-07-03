import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { getProjectById, getRelatedProjects } from "@/data/articles/articles";
import ProjectCard from "@/components/ProjectCard";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <SEO
          title="Not found — Cabir Çelik"
          description="The page you're looking for doesn't exist."
          path={`/blogs/${id ?? ""}`}
        />
        <Header />
        <main className="max-w-3xl mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl mb-4">Not found</h1>
          <Link to="/" className="text-primary underline">
            Back to home
          </Link>
        </main>
      </div>
    );
  }

  const related = getRelatedProjects(project.id, 3);
  const basePath = project.section === "blogs" ? "blogs" : "projects";
  const routePath = `/${basePath}/${project.id}`;
  const seoDescription = (project.content.introduction || project.subtitle).slice(0, 160);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.title,
    image: project.image,
    datePublished: project.date,
    author: { "@type": "Person", name: project.author.name },
    description: seoDescription,
    url: routePath,
  };

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <SEO
        title={`${project.title.length > 45 ? project.title.slice(0, 44) + "…" : project.title} — Cabir Çelik`}
        description={seoDescription}
        path={routePath}
        ogType="article"
        image={project.image}
        jsonLd={articleSchema}
      />
      <Header />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="space-y-8">
          <header className="space-y-4">
            <p className="text-sm uppercase tracking-wide text-muted-foreground">
              {project.category} · {project.date} · {project.readTime}
            </p>
            <h1 className="text-4xl md:text-5xl leading-tight">{project.title}</h1>
            <p className="text-lg text-muted-foreground">{project.subtitle}</p>
          </header>

          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-lg object-cover"
          />

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <p>{project.content.introduction}</p>
            {project.content.sections.map((s, i) => (
              <section key={i}>
                <h2>{s.heading}</h2>
                <p>{s.content}</p>
              </section>
            ))}
            <p>{project.content.conclusion}</p>
          </div>

          <div className="flex flex-wrap gap-2 pt-6 border-t">
            {project.tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
              >
                #{t}
              </span>
            ))}
          </div>
        </article>

        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl mb-6">Related</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p) => (
                <ProjectCard key={p.id} {...p} />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default ProjectDetail;
