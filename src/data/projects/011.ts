import type { Project } from "../types";

const AUTHOR = {
  name: "Cabir Çelik",
  avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&q=80",
  bio: "Software Engineer and Mathematician",
};

const article: Project = {
  id: "011",
  section: "projects",
  title: "Mail Bulk Send & Sign",
  subtitle: "A React + TypeScript feature for sending and e-signing documents at scale",
  category: "Web Development",
  date: "Sep 2021",
  readTime: "3 min",
  image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1920&q=80",
  author: AUTHOR,
  content: {
    introduction:
      "Built during my software engineering internship at JotForm: a feature that lets users send documents in bulk and collect e-signatures through a single coordinated workflow.",
    sections: [
      {
        heading: "The problem",
        content:
          "Sending a document to many recipients and tracking each signature separately is slow and error-prone. The goal was one flow that handles distribution and signing for large recipient lists.",
      },
      {
        heading: "The approach",
        content:
          "Implemented the UI and client logic in React with TypeScript, focusing on a clear recipient flow, status tracking per signer, and reusable typed components.",
      },
      { heading: "Tech stack", content: "React · TypeScript" },
    ],
    conclusion: "A practical product feature that shipped real workflow value for JotForm users.",
  },
  tags: ["React", "TypeScript"],
};

export default article;
