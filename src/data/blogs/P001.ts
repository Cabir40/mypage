import type { Project } from "../types";

const AUTHOR = {
  name: "Cabir Çelik",
  avatar:
    "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&q=80",
  bio: "Lead Data Scientist — Healthcare AI & Clinical NLP at John Snow Labs",
};

const article: Project = {
  id: "P001",
  section: "blogs",
  title:
    "Enhancing Retrieval-Augmented Generation: Optimizing Document Splits and Parameters for Improved Language Model Responses",
  subtitle: "M.Sc. Thesis — Atılım University, 2024",
  category: "Thesis",
  date: "Jul 2024",
  readTime: "Thesis",
  image:
    "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=1920&q=80",
  author: AUTHOR,
  content: {
    introduction:
      "Investigated sentence-aware splitting algorithms and parameter optimization (Split Length, Top-K, Window Size) for RAG-powered healthcare LLM assistants, showing that sentence-aware splitting significantly outperforms character-based methods for clinical document retrieval.",
    sections: [
      {
        heading: "Venue",
        content: "M.Sc. Thesis — Atılım University, 2024.",
      },
      {
        heading: "Citation",
        content:
          'C. ÇELİK, "Enhancing retrieval-augmented generation: Optimizing document splits and parameters for improved language model responses," Yüksek lisans tezi, FEN BİLİMLERİ ENSTİTÜSÜ, ATILIM ÜNİVERSİTESİ, 2024.',
      },
    ],
    conclusion: "Full PDF write-up available on request.",
  },
  tags: ["Thesis", "RAG", "Healthcare NLP", "LLMs"],
};

export default article;
