import type { Project } from "../types";

const AUTHOR = {
  name: "Cabir Çelik",
  avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&q=80",
  bio: "Software Engineer and Mathematician",
};

const article: Project = {
  id: "010",
  section: "projects",
  title: "E-Markets Web Site",
  subtitle: "A full-stack e-commerce site built on ASP.NET MVC with classic web fundamentals",
  category: "Web Development",
  date: "2020",
  readTime: "3 min",
  image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80",
  author: AUTHOR,
  content: {
    introduction:
      "An e-commerce web site built end-to-end on the ASP.NET MVC stack, covering product browsing, cart, and checkout flows with a clean separation between models, views, and controllers.",
    sections: [
      {
        heading: "The problem",
        content:
          "Build a working e-markets experience from scratch — product catalog, cart, and basic order flow — while keeping the codebase organized enough to extend later.",
      },
      {
        heading: "The approach",
        content:
          "Used ASP.NET MVC for the application layer with HTML and CSS templates for the storefront. Followed standard MVC conventions for routing, controllers, and views to keep concerns separated.",
      },
      { heading: "Tech stack", content: "ASP.NET · MVC · HTML · CSS" },
    ],
    conclusion: "A foundational full-stack project that grounded my back-end skills in the .NET ecosystem.",
  },
  tags: ["ASP.NET", "MVC", "HTML", "CSS"],
};

export default article;
