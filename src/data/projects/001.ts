import type { Project } from "../types";

const AUTHOR = {
  name: "Cabir Çelik",
  avatar:
    "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&q=80",
  bio: "Lead Data Scientist — Healthcare AI & Clinical NLP at John Snow Labs",
};

const article: Project = {
  id: "001",
  section: "projects",
  title: "Healthcare RAG LLM System",
  subtitle:
    "Optimizing document splits and retrieval parameters for clinical question-answering",
  category: "Healthcare AI",
  date: "Jul 2024",
  readTime: "8 min",
  image:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=80",
  author: AUTHOR,
  link: "https://github.com/Cabir40/hls-llm-doc-qa",
  content: {
    introduction:
      "An end-to-end Retrieval-Augmented Generation pipeline for healthcare document question-answering, built around the central research question of my M.Sc. thesis: how do document-splitting strategy and retrieval parameters affect the quality of LLM responses over clinical text?",
    sections: [
      {
        heading: "The problem",
        content:
          "General-purpose RAG pipelines typically split documents by raw character count, which routinely cuts clinical sentences — and the medical concepts inside them — in half. For healthcare question-answering, where a single fragmented sentence can change a retrieved answer from correct to dangerously wrong, this is not a cosmetic issue.",
      },
      {
        heading: "The approach",
        content:
          "The system integrates Spark NLP, LangChain, and Haystack on Databricks, and investigates sentence-aware document splitting as an alternative to character-based methods. On top of the splitting strategy itself, the pipeline systematically sweeps three retrieval parameters: Split Length (how large each retrievable chunk is), Top-K (how many candidate chunks are retrieved per query), and Window Size (how much surrounding context is attached to each chunk). Each configuration is benchmarked with similarity scoring against a dataset of clinical questions and source documents, so the comparison is empirical rather than anecdotal.",
      },
      {
        heading: "The result",
        content:
          "Sentence-aware splitting consistently and significantly outperformed character-based splitting, and tuning Split Length, Top-K, and Window Size produced measurable improvements in retrieval quality — directly improving the accuracy of the downstream LLM-generated answers in clinical document analysis. These findings now inform how I architect production RAG systems for healthcare document Q&A at John Snow Labs.",
      },
      {
        heading: "Tech stack",
        content: "Spark NLP · LangChain · Haystack · LLMs · Databricks",
      },
    ],
    conclusion:
      "The open-source companion implementation, hls-llm-doc-qa, is available on GitHub and demonstrates the question-answering pipeline over custom document collections using open-source LLMs and LangChain.",
  },
  tags: ["Spark NLP", "LangChain", "Haystack", "LLMs", "Databricks", "RAG"],
};

export default article;
