import type { Project } from "../types";

const AUTHOR = {
  name: "Cabir Çelik",
  avatar:
    "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&q=80",
  bio: "Lead Data Scientist — Healthcare AI & Clinical NLP at John Snow Labs",
};

const article: Project = {
  id: "P002",
  section: "blogs",
  title:
    "Beyond Negation Detection: Comprehensive Assertion Detection Models for Clinical NLP",
  subtitle:
    "arXiv:2503.17425 — with Veysel Kocaman, Yigit Gul, M. Aytug Kaya, Hasham Ul Haq, Mehmet Butgul, David Talby",
  category: "Paper",
  date: "Mar 2025",
  readTime: "Paper",
  image:
    "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?w=1920&q=80",
  author: AUTHOR,
  link: "https://arxiv.org/abs/2503.17425",
  content: {
    introduction:
      "Fine-tuned clinical assertion-detection models (Present, Absent, Hypothetical, Conditional, and more) that beat GPT-4o head-to-head — 0.962 vs. 0.901 accuracy — and outperform commercial cloud APIs, while staying transparent and customizable inside Spark NLP instead of relying on black-box systems.",
    sections: [
      {
        heading: "Venue",
        content:
          "arXiv:2503.17425 — with Veysel Kocaman, Yigit Gul, M. Aytug Kaya, Hasham Ul Haq, Mehmet Butgul, David Talby.",
      },
      {
        heading: "Read it",
        content: "https://arxiv.org/abs/2503.17425",
      },
    ],
    conclusion: "",
  },
  tags: ["Paper", "Healthcare NLP", "Assertion Detection", "Spark NLP"],
};

export default article;
