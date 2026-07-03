import type { Project } from "../types";

const AUTHOR = {
  name: "Cabir Çelik",
  avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&q=80",
  bio: "Software Engineer and Mathematician",
};

const article: Project = {
  id: "018",
  section: "projects",
  title: "AI Captcha Solver",
  subtitle: "A CNN-powered captcha recognizer exposed via a Flask API and integrated with ASP.NET",
  category: "Computer Vision",
  date: "2021",
  readTime: "3 min",
  image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1920&q=80",
  author: AUTHOR,
  content: {
    introduction:
      "A computer vision tool that reads text from captcha images using a CNN, exposed through a Flask API and consumed by an ASP.NET client.",
    sections: [
      {
        heading: "The problem",
        content:
          "Build a reliable image-to-text recognizer for noisy, distorted captcha images, and integrate it with an existing .NET application.",
      },
      {
        heading: "The approach",
        content:
          "Trained a CNN in TensorFlow on labeled captcha images, served predictions through a Flask REST API, and called the API from an ASP.NET client.",
      },
      { heading: "Tech stack", content: "TensorFlow · CNN · Flask API · ASP.NET" },
    ],
    conclusion: "A focused CV + integration project bridging Python ML services with the .NET ecosystem.",
  },
  tags: ["TensorFlow", "CNN", "Flask", "ASP.NET"],
};

export default article;
