const IntroSection = () => {
  return (
    <section className="max-w-4xl mx-auto py-12 md:py-16 px-4 animate-fade-in">
      <div className="text-center space-y-6">
        <h2 className="text-3xl md:text-4xl leading-tight animate-slide-up">
          A place for my projects, writing, and the resources I've gathered along the way.
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-slide-up stagger-1">
          Explore software projects in <strong>Projects</strong>, long-form thinking
          in <strong>Blogs</strong>, and a curated library of books, papers, media,
          and references in <strong>Source</strong>.
        </p>
      </div>
    </section>
  );
};

export default IntroSection;
