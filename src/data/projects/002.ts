import type { Project } from "../types";

const AUTHOR = {
  name: "Cabir Çelik",
  avatar:
    "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&q=80",
  bio: "Lead Data Scientist — Healthcare AI & Clinical NLP at John Snow Labs",
};

const article: Project = {
  id: "002",
  section: "projects",
  title: "Medical Multi-Modal Chatbot",
  subtitle:
    "Conversational medical assistant for text and clinical image inputs",
  category: "Healthcare AI",
  date: "2024",
  readTime: "3 min",
  image:
    "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1920&q=80",
  author: AUTHOR,
  content: {
    introduction:
      "Conversational medical assistant capable of processing both text and image inputs (clinical notes, scans) via a containerized API stack.",
    sections: [
      {
        heading: "About this project",
        content:
          "Combines Visual Language Models with LangChain orchestration to handle multi-modal clinical inputs. Wrapped in REST APIs and shipped as a Docker container so it can be embedded in existing healthcare workflows without bespoke infrastructure.",
      },
      {
        heading: "Tech stack",
        content: "Visual Language Models · LangChain · Docker · REST APIs",
      },
    ],
    conclusion: "",
  },
  tags: ["Visual LMs", "LangChain", "Docker", "REST APIs", "Chatbot"],
};

export default article;
