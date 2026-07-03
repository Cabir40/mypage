import type { Project } from "../types";

const AUTHOR = {
  name: "Cabir Çelik",
  avatar:
    "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&q=80",
  bio: "Lead Data Scientist — Healthcare AI & Clinical NLP at John Snow Labs",
};

const article: Project = {
  id: "P003",
  section: "blogs",
  title:
    "John Snow Labs @ SMM4H'22: Social Media Mining for Health (#SMM4H) with Spark NLP",
  subtitle:
    "ACL Anthology · 2022.smm4h-1.13 — with Veysel Kocaman, Damla Gurbaz, Gursev Pirge, Bunyamin Polat, Halil Saglamlar, Meryem Vildan Sarikaya, Gokhan Turer, David Talby",
  category: "Paper",
  date: "2022",
  readTime: "Paper",
  image:
    "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1920&q=80",
  author: AUTHOR,
  link: "https://aclanthology.org/2022.smm4h-1.13/",
  content: {
    introduction:
      "Trained transformer-based NER and classification models on the SMM4H 2022 health-related social-media datasets using Spark NLP's BERT pipelines — shipped as production-grade, GPU-accelerated models that scale across Spark clusters in Python, R, Scala, and Java.",
    sections: [
      {
        heading: "Venue",
        content:
          "ACL Anthology · 2022.smm4h-1.13 — with Veysel Kocaman, Damla Gurbaz, Gursev Pirge, Bunyamin Polat, Halil Saglamlar, Meryem Vildan Sarikaya, Gokhan Turer, David Talby.",
      },
      {
        heading: "Read it",
        content: "https://aclanthology.org/2022.smm4h-1.13/",
      },
    ],
    conclusion: "",
  },
  tags: ["Paper", "Spark NLP", "BERT", "NER", "Health NLP"],
};

export default article;
