import type { Project } from "../types";

const AUTHOR = {
  name: "Cabir Çelik",
  avatar:
    "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&q=80",
  bio: "Lead Data Scientist — Healthcare AI & Clinical NLP at John Snow Labs",
};

const article: Project = {
  id: "P004",
  section: "blogs",
  title: "Harnessing Healthcare-Specific LLMs for Clinical Entity Extraction",
  subtitle: "John Snow Labs Blog — January 2025",
  category: "Blog post",
  date: "Jan 2025",
  readTime: "Blog post",
  image:
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1920&q=80",
  author: AUTHOR,
  link: "https://www.johnsnowlabs.com/harnessing-healthcare-specific-llms-for-clinical-entity-extraction/",
  content: {
    introduction:
      "A practical look at using domain-specific LLMs to pull structured clinical entities — diagnoses, medications, procedures — out of unstructured medical text, and why purpose-built healthcare models outperform general-purpose LLMs on this task.",
    sections: [
      {
        heading: "Venue",
        content: "John Snow Labs Blog — January 2025.",
      },
      {
        heading: "Read it",
        content:
          "https://www.johnsnowlabs.com/harnessing-healthcare-specific-llms-for-clinical-entity-extraction/",
      },
    ],
    conclusion: "",
  },
  tags: ["Blog post", "Healthcare LLMs", "Clinical NLP", "Entity Extraction"],
};

export default article;
