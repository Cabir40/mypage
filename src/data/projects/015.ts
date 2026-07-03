import type { Project } from "../types";

const AUTHOR = {
  name: "Cabir Çelik",
  avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&q=80",
  bio: "Software Engineer and Mathematician",
};

const article: Project = {
  id: "015",
  section: "projects",
  title: "Smart Matching Tool",
  subtitle: "An ML + NLP system for intelligently pairing resources and candidates in an EU project",
  category: "Machine Learning",
  date: "Dec 2021",
  readTime: "4 min",
  image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80",
  author: AUTHOR,
  content: {
    introduction:
      "Designed and shipped a Smart Matching Tool for an EU-funded program, pairing candidates with the right resources using machine learning and NLP.",
    sections: [
      {
        heading: "The problem",
        content:
          "Manual matching across many candidate profiles and resource descriptions is slow, inconsistent, and hard to scale.",
      },
      {
        heading: "The approach",
        content:
          "Encoded profiles and resources with NLP features, then scored matches with ML models tuned against historical pairings. Delivered as a tool a distributed team could operate.",
      },
      { heading: "Tech stack", content: "Python · Machine Learning · NLP" },
    ],
    conclusion: "An applied ML project that turned a manual workflow into a repeatable, data-driven one.",
  },
  tags: ["Machine Learning", "NLP", "Matching"],
};

export default article;
