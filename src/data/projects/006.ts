import type { Project } from "../types";

const AUTHOR = {
  name: "Cabir Çelik",
  avatar:
    "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&q=80",
  bio: "Lead Data Scientist — Healthcare AI & Clinical NLP at John Snow Labs",
};

const article: Project = {
  id: "006",
  section: "projects",
  title: "Brain Tumor Multi-Classification",
  subtitle: "Deep learning for multi-class brain tumor detection on MRI",
  category: "Computer Vision",
  date: "2022",
  readTime: "3 min",
  image:
    "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1920&q=80",
  author: AUTHOR,
  content: {
    introduction:
      "Deep learning model for multi-class brain tumor detection from MRI scans with an interactive web interface.",
    sections: [
      {
        heading: "About this project",
        content:
          "Convolutional neural network trained on MRI scans to classify multiple tumor types. Served behind a Flask API with a Streamlit front-end so clinicians and researchers can upload scans and inspect predictions interactively.",
      },
      {
        heading: "Tech stack",
        content: "TensorFlow · CNN · Streamlit · Flask",
      },
    ],
    conclusion: "",
  },
  tags: ["TensorFlow", "CNN", "Streamlit", "Flask", "Medical Imaging"],
};

export default article;
