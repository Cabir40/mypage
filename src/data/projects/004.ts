import type { Project } from "../types";

const AUTHOR = {
  name: "Cabir Çelik",
  avatar:
    "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&q=80",
  bio: "Lead Data Scientist — Healthcare AI & Clinical NLP at John Snow Labs",
};

const article: Project = {
  id: "004",
  section: "projects",
  title: "Healthcare NLP Suite",
  subtitle:
    "Production clinical NLP models — NER, classification, assertion, resolution, and more",
  category: "Healthcare AI",
  date: "Ongoing",
  readTime: "4 min",
  image:
    "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=1920&q=80",
  author: AUTHOR,
  content: {
    introduction:
      "Full suite of clinical NLP models covering NER, text classification, assertion status detection, entity resolution, relation extraction, de-identification, summarization, and Q&A.",
    sections: [
      {
        heading: "About this project",
        content:
          "A library of production-grade clinical NLP models built on Spark NLP, TensorFlow, and BERT, with Streamlit interfaces for demos and clinical review. Used across healthcare document workflows for both research and large-scale deployments.",
      },
      {
        heading: "Tech stack",
        content: "Spark NLP · TensorFlow · BERT · Streamlit",
      },
    ],
    conclusion: "",
  },
  tags: ["Spark NLP", "TensorFlow", "BERT", "Streamlit", "Clinical NLP"],
};

export default article;
