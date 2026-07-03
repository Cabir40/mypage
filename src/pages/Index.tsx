import { Link } from "react-router-dom";
import { BookOpen, FileText, File, Image as ImageIcon, FileAudio, Video } from "lucide-react";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import ProjectCard from "@/components/ProjectCard";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import Carousel from "@/components/Carousel";
import { projects } from "@/data/articles/articles";


const Index = () => {
  // Source items are media/resources — shown as category tiles below.
  const featuredProjects = projects.filter((a) => a.section === "projects");
  const featuredBlogs = projects.filter((a) => a.section === "blogs" || a.section === undefined);

  const featuredSources = [
    { icon: BookOpen, label: "Books", description: "Reading recommendations and full-length works." },
    { icon: FileText, label: "Papers & Text", description: "Essays, papers, and plain-text notes." },
    { icon: File, label: "PDFs", description: "Downloadable documents and references." },
    { icon: ImageIcon, label: "Images", description: "Diagrams, screenshots, and visuals." },
    { icon: FileAudio, label: "Audio", description: "Talks, interviews, recorded notes." },
    { icon: Video, label: "Videos", description: "Lectures, demos, walkthroughs." },
  ];

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      <SEO title="Cabir Çelik — Building Ideas That Matter" description="Personal space of Cabir Çelik — software engineering, AI, open-source development, and the journey of turning curiosity into practical, impactful projects." path="/" jsonLd={{"@context":"https://schema.org","@type":"WebSite","name":"Cabir Çelik","url":"/"}} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <HeroSection />

        {/* Intro Section */}
        <IntroSection />

        {/* Featured Projects */}
        <section id="projects" className="py-12">
          <div className="flex items-center justify-between mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl tracking-tight">Projects</h2>
            <Link to="/projects" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors px-4 py-2 rounded-full hover:bg-muted/60">
              View all →
            </Link>
          </div>

          <Carousel>
            {featuredProjects.map((article, index) => (
              <div key={article.id} className={`shrink-0 snap-start w-[85vw] sm:w-[380px] animate-slide-up stagger-${Math.min(index + 1, 6)}`}>
                <ProjectCard {...article} size="small" />
              </div>
            ))}
          </Carousel>
        </section>

        {/* Featured Blogs */}
        <section id="blogs" className="py-12 border-t border-border">
          <div className="flex items-center justify-between mb-12 mt-8 animate-slide-up">
            <h2 className="text-3xl md:text-4xl tracking-tight">Blogs</h2>
            <Link to="/blogs" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors px-4 py-2 rounded-full hover:bg-muted/60">
              View all →
            </Link>
          </div>

          <Carousel>
            {featuredBlogs.map((article, index) => (
              <div key={article.id} className={`shrink-0 snap-start w-[85vw] sm:w-[380px] animate-slide-up stagger-${Math.min(index + 1, 6)}`}>
                <ProjectCard {...article} size="small" />
              </div>
            ))}
          </Carousel>
        </section>

        {/* Featured Sources */}
        <section id="sources" className="py-12 border-t border-border">
          <div className="flex items-center justify-between mb-12 mt-8 animate-slide-up">
            <h2 className="text-3xl md:text-4xl tracking-tight">Source</h2>
            <Link to="/source" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors px-4 py-2 rounded-full hover:bg-muted/60">
              View all →
            </Link>
          </div>

          <Carousel>
            {featuredSources.map(({ icon: Icon, label, description }, index) => (
              <div
                key={label}
                className={`shrink-0 snap-start w-[260px] rounded-2xl bg-card p-6 border border-border animate-slide-up stagger-${Math.min(index + 1, 6)}`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl mb-2">{label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </Carousel>
        </section>



        {/* Newsletter Section */}
        <section className="my-20 rounded-[2.5rem] bg-card p-12 md:p-16 text-center animate-scale-in">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl tracking-tight">Stay Curious</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Reflections, insights, and discoveries delivered to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                placeholder="Your email"
                aria-label="Email address"
                className="flex-1 px-6 py-4 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              />
              <button className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:scale-105 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="mb-4">Explore</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/#projects" className="hover:text-accent transition-colors">Projects</Link></li>
                <li><Link to="/blogs" className="hover:text-accent transition-colors">Blogs</Link></li>
                <li><Link to="/source" className="hover:text-accent transition-colors">Source</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4">About</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-accent transition-colors">Our Story</Link></li>
                <li><Link to="/colleagues" className="hover:text-accent transition-colors">Colleagues</Link></li>
                <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/style-guide" className="hover:text-accent transition-colors">Style Guide</Link></li>
                <li><a href="#newsletter" className="hover:text-accent transition-colors">Newsletter</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 Cabir Çelik. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
