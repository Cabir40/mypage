import type { Project } from "../types";

const AUTHOR = {
  name: "Cabir Çelik",
  avatar:
    "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&q=80",
  bio: "Lead Data Scientist — Healthcare AI & Clinical NLP at John Snow Labs",
};

const article: Project = {
  id: "003",
  section: "projects",
  title: "Handwritten Medication Extraction",
  subtitle:
    "Visual LMs + OCR for automated parsing of handwritten prescriptions",
  category: "Healthcare AI",
  date: "2024",
  readTime: "3 min",
  image:
    "https://images.unsplash.com/photo-1583912267550-d6c2ac3196c0?w=1920&q=80",
  author: AUTHOR,
  content: {
    introduction:
      "Automated extraction of handwritten prescriptions and medication orders, combining visual language models with OCR post-processing.",
    sections: [
      {
        heading: "About this project",
        content:
          "Pairs Visual Language Models with Tesseract OCR to read handwritten medication orders, then exposes the pipeline through a Streamlit interface for clinician review. Containerized with Docker and deployable on Databricks for scaled batch processing.",
      },
      {
        heading: "Tech stack",
        content:
          "Visual LMs · OCR (Tesseract) · Streamlit · Docker · Databricks",
      },
    ],
    conclusion: "",
  },
  tags: ["Visual LMs", "OCR", "Streamlit", "Docker", "Databricks"],
};

export default article;
