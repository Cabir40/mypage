import type { Project } from "../types";

const AUTHOR = {
  name: "Cabir Çelik",
  avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&q=80",
  bio: "Software Engineer and Mathematician",
};

const article: Project = {
  id: "016",
  section: "projects",
  title: "MLOps Pipelines",
  subtitle: "Reproducible ML workflows with Kubeflow and DVC for training and deployment",
  category: "MLOps",
  date: "2022",
  readTime: "4 min",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80",
  author: AUTHOR,
  content: {
    introduction:
      "A set of MLOps pipelines for orchestrating model training, evaluation, and deployment with versioned data and reproducible runs.",
    sections: [
      {
        heading: "The problem",
        content:
          "Ad-hoc model training rarely reproduces. Data, code, and parameters drift over time, and deployment becomes a manual handoff.",
      },
      {
        heading: "The approach",
        content:
          "Used Kubeflow to orchestrate training and deployment as DAGs, and DVC to version datasets and intermediate artifacts so any run can be reproduced end-to-end.",
      },
      { heading: "Tech stack", content: "Kubeflow · DVC · Python" },
    ],
    conclusion: "A repeatable foundation for moving ML work from notebook to production.",
  },
  tags: ["MLOps", "Kubeflow", "DVC"],
};

export default article;
