import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { Mail, Linkedin, Github } from "lucide-react";

const Colleagues = () => {
  const colleagues = [
    {
      name: "Alex Müller",
      role: "Software Engineer",
      bio: "Backend specialist focused on distributed systems and developer experience. Alex builds resilient APIs and tooling that keep cross-team work moving without friction.",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&q=80",
      stat: "42 projects shipped",
    },
    {
      name: "Priya Raman",
      role: "UI/UX Designer",
      bio: "Product designer with a research-first mindset. Priya crafts accessible interfaces grounded in real user behavior and partners closely with engineering on every detail.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
      stat: "60+ design systems",
    },
    {
      name: "Daniel Okafor",
      role: "Data Scientist",
      bio: "ML practitioner working on forecasting, NLP, and experimentation platforms. Daniel turns messy data into models the business can actually trust and act on.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
      stat: "30 models in production",
    },
    {
      name: "Lin Wei",
      role: "Data Engineer",
      bio: "Pipelines, lakes, and warehouses. Lin owns the data platform end-to-end, from ingestion and orchestration to schema design and cost-aware query optimization.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
      stat: "12 petabytes managed",
    },
    {
      name: "Marco Bianchi",
      role: "Web Developer",
      bio: "Full-stack web developer obsessed with performance and accessibility. Marco ships pixel-perfect React and Next.js front-ends backed by clean, testable APIs.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
      stat: "120 sites launched",
    },
    {
      name: "Hana Sato",
      role: "Mobile Developer",
      bio: "iOS and Android engineer building polished native experiences with Swift, Kotlin, and React Native. Hana cares deeply about offline-first design and battery-friendly apps.",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80",
      stat: "18 apps in stores",
    },
  ];

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      <SEO
        title="Colleagues — Cabir Çelik"
        description="Meet the cross-functional team — engineers, designers, and data specialists collaborating on the work featured on Cabir Çelik's site."
        path="/colleagues"
        jsonLd={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Colleagues", url: "/colleagues" }}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight animate-slide-down">
            Meet the Colleagues
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
            A cross-functional crew of engineers, designers, and data specialists — the people
            behind the projects, prototypes, and platforms featured across this site.
          </p>
        </div>

        {/* Colleagues Grid */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          {colleagues.map((person, index) => (
            <div key={person.name} className={`rounded-2xl bg-card p-8 hover:shadow-xl transition-all duration-300 animate-slide-up stagger-${Math.min(index + 2, 6)}`}>
              <div className="flex items-start gap-6 mb-6">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h2 className="text-2xl mb-1">{person.name}</h2>
                  <p className="text-accent font-medium mb-3">{person.role}</p>
                  <p className="text-sm text-muted-foreground">{person.stat}</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {person.bio}
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="#email"
                  className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="#linkedin"
                  className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#github"
                  className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </section>

        {/* Collaborate Section */}
        <section className="text-center py-12 rounded-2xl bg-muted">
          <h2 className="text-3xl mb-4">Want to Collaborate?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Always open to working with thoughtful engineers, designers, and data folks on
            projects that mix solid craft with real-world impact. Reach out and let's talk.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </a>
        </section>
      </main>
    </div>
  );
};

export default Colleagues;
