import type { Experience } from "../types";

export const experience: Experience[] = [
  {
    role: "Lead Data Scientist (Healthcare)",
    org: "John Snow Labs",
    location: "Remote",
    dates: "Dec 2021 – Present",
    bullets: [
      "Design and deploy production-grade Healthcare NLP models (NER, classification, assertion, relation extraction, entity resolution) using Spark NLP and TensorFlow at scale",
      "Build and maintain clinical de-identification pipelines ensuring patient data privacy compliance across healthcare document workflows",
      "Develop and deploy multi-language speech recognition and translation systems for medical use cases",
      "Architect Retrieval-Augmented Generation (RAG) systems integrating LangChain, Haystack, and LlamaIndex on Databricks for intelligent healthcare document question-answering",
      "Build medical chatbots and multi-modal medical assistants leveraging Visual Language Models, Docker, and REST APIs",
      "Implement handwritten medication extraction systems combining Visual LMs, OCR, and interactive Streamlit interfaces",
    ],
  },
  {
    role: "Data Scientist",
    org: "EU Project",
    location: "Remote",
    dates: "Mar 2021 – Dec 2021",
    bullets: [
      "Designed and built a Smart Matching Tool using Machine Learning and NLP to intelligently pair resources and candidates within an EU-funded program",
      "Collaborated across a distributed remote team to deliver scalable, data-driven solutions within project timelines",
    ],
  },
  {
    role: "Software Engineer Intern",
    org: "JotForm",
    location: "Ankara, Turkey",
    dates: "Jul 2021 – Sep 2021",
    bullets: [
      "Developed a Mail Bulk Send and Sign feature using React and TypeScript, enabling large-scale document distribution and e-signature workflows",
    ],
  },
  {
    role: "Data Scientist Intern",
    org: "GittiGidiyor (eBay Turkey)",
    location: "Istanbul, Turkey",
    dates: "Jul 2020 – Nov 2020",
    bullets: [
      "Built a product Recommender System using NLP techniques (Word2Vec, GloVe, cosine similarity) to improve product discovery and user engagement on one of Turkey's largest e-commerce platforms",
    ],
  },
  {
    role: "Data Science Instructor",
    org: "Bootcamp EU",
    location: "Remote",
    dates: "Sep 2019 – Jul 2020",
    bullets: [
      "Mentored and coached students in Data Science, Machine Learning, and Python programming within an EU-funded bootcamp program",
      "Delivered hands-on workshops covering data preprocessing, model building, and evaluation",
    ],
  },
];
