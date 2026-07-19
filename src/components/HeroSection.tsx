import { Mail, Linkedin, Github, BookOpen } from "lucide-react";
import { contact } from "@/data/contact/contact";
import heroHomeUrl from "@/assets/hero-home.jpg";

const iconMap: Record<string, typeof Mail> = {
  Email: Mail,
  LinkedIn: Linkedin,
  GitHub: Github,
  Medium: BookOpen,
};

const HeroSection = () => {
  return (
    <section className="relative rounded-[2.5rem] overflow-hidden bg-muted my-12 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-6 md:gap-12 p-6 md:p-12 lg:p-16">
        {/* Left side - Image */}
        <div className="relative aspect-[4/3] md:aspect-auto rounded-[2rem] overflow-hidden animate-scale-in">
          <img
            src={heroHomeUrl}
            alt="Abstract composition of code, mathematical shapes, and neural networks in a warm minimal studio"
            className="w-full h-full object-cover transition-transform duration-[1200ms] hover:scale-105"
            width={1536}
            height={1152}
          />
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col justify-center space-y-6 md:space-y-8">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-7xl leading-[1.1] tracking-tight -tracking-[0.01em] animate-slide-down">
              Building Ideas That Matter
            </h1>
            <p className="text-muted-foreground/90 text-lg md:text-xl leading-[1.8] max-w-xl animate-slide-up stagger-1">
              Welcome to Cabir Çelik's personal space on the web—a place where curiosity becomes code and ideas evolve into meaningful projects. Here, I share my work in software engineering, artificial intelligence, and open-source development, along with the insights and experiences gained along the way.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 md:gap-4 pt-2 animate-slide-up stagger-2">
            {contact.profiles.map(({ label, url }) => {
              const Icon = iconMap[label] ?? Mail;
              const external = !url.startsWith("mailto:");
              return (
                <a
                  key={label}
                  href={url}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="inline-flex items-center gap-2 h-12 px-5 rounded-full border-2 border-border hover:border-primary hover:bg-muted transition-all hover:scale-105 text-sm font-medium"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
