import type { Project } from "../types";

const AUTHOR = {
  name: "Cabir Çelik",
  avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&q=80",
  bio: "Software Engineer and Mathematician",
};

const article: Project = {
  id: "017",
  section: "projects",
  title: "Brain Tumor Detection",
  subtitle: "A CNN-based classifier for MRI brain scans, served through Streamlit and Flask",
  category: "Computer Vision",
  date: "2022",
  readTime: "4 min",
  image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1920&q=80",
  author: AUTHOR,
  content: {
    introduction:
      "A deep learning project that classifies brain MRI scans for tumor presence, packaged with an interactive demo and a serving API.",
    sections: [
      {
        heading: "The problem",
        content:
          "Make a CNN-based brain tumor classifier usable beyond a notebook — both for exploration and for integration into other tools.",
      },
      {
        heading: "The approach",
        content:
          "Trained a convolutional neural network in TensorFlow on labeled MRI data, then exposed it through a Streamlit app for visual exploration and a Flask API for programmatic access.",
      },
      { heading: "Tech stack", content: "TensorFlow · CNN · Streamlit · Flask" },
    ],
    conclusion: "An end-to-end CV project covering training, evaluation, demo, and API serving.",
  },
  tags: ["TensorFlow", "CNN", "Computer Vision", "Streamlit", "Flask"],
};

export default article;
