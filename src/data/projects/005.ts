import type { Project } from "../types";

const AUTHOR = {
  name: "Cabir Çelik",
  avatar:
    "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&q=80",
  bio: "Lead Data Scientist — Healthcare AI & Clinical NLP at John Snow Labs",
};

const article: Project = {
  id: "005",
  section: "projects",
  title: "LLM Document Q&A System",
  subtitle: "Open-source Q&A over custom document collections",
  category: "LLMs",
  date: "2023",
  readTime: "3 min",
  image:
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80",
  author: AUTHOR,
  link: "https://github.com/Cabir40/hls-llm-doc-qa",
  content: {
    introduction:
      "Open-source question-answering system over custom document collections using open-source LLMs.",
    sections: [
      {
        heading: "About this project",
        content:
          "A reference implementation that lets you point an LLM at your own document corpus and ask natural-language questions. Built with LangChain in Python and used as the foundation for the Healthcare RAG research published in my M.Sc. thesis.",
      },
      {
        heading: "Tech stack",
        content: "Open-source LLMs · Python · LangChain",
      },
    ],
    conclusion:
      "Source code is open and available on GitHub at Cabir40/hls-llm-doc-qa.",
  },
  tags: ["LLMs", "LangChain", "Python", "Open Source", "RAG"],
};

export default article;
