import type { Project } from "../types";

const AUTHOR = {
  name: "Cabir Çelik",
  avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&q=80",
  bio: "Software Engineer and Mathematician",
};

const article: Project = {
  id: "014",
  section: "projects",
  title: "Recommender System with NLP",
  subtitle: "Word2Vec and GloVe embeddings with cosine similarity for product recommendations",
  category: "Machine Learning",
  date: "Nov 2020",
  readTime: "4 min",
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80",
  author: AUTHOR,
  content: {
    introduction:
      "Built during my data science internship at GittiGidiyor (eBay Turkey): a recommender that uses NLP embeddings of product text to surface relevant items.",
    sections: [
      {
        heading: "The problem",
        content:
          "Traditional collaborative filtering struggles on long-tail and cold-start items. Text-based product signal can fill those gaps.",
      },
      {
        heading: "The approach",
        content:
          "Trained and evaluated Word2Vec and GloVe embeddings over product titles and descriptions, then used cosine similarity in embedding space to retrieve nearest products for each query item.",
      },
      { heading: "Tech stack", content: "Python · Word2Vec · GloVe · Cosine Similarity" },
    ],
    conclusion: "A practical NLP-driven recommender that improved discovery on a large e-commerce catalog.",
  },
  tags: ["NLP", "Word2Vec", "GloVe", "Recommender System"],
};

export default article;
