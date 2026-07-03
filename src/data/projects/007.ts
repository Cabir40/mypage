import type { Project } from "../types";

const AUTHOR = {
  name: "Cabir Çelik",
  avatar:
    "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&q=80",
  bio: "Lead Data Scientist — Healthcare AI & Clinical NLP at John Snow Labs",
};

const article: Project = {
  id: "007",
  section: "projects",
  title: "Mask Detection (YOLOv5)",
  subtitle: "Real-time face mask detection with YOLOv5",
  category: "Computer Vision",
  date: "2021",
  readTime: "2 min",
  image:
    "https://images.unsplash.com/photo-1584118624012-df056829fbd0?w=1920&q=80",
  author: AUTHOR,
  content: {
    introduction:
      "Real-time face mask detection system using YOLOv5 object detection.",
    sections: [
      {
        heading: "About this project",
        content:
          "Trained a YOLOv5 detector to identify masked and unmasked faces in live video feeds, optimized for real-time inference. Built during the COVID-19 era as a practical computer-vision deployment exercise.",
      },
      {
        heading: "Tech stack",
        content: "YOLOv5 · Python · Computer Vision",
      },
    ],
    conclusion: "",
  },
  tags: ["YOLOv5", "Python", "Computer Vision", "Object Detection"],
};

export default article;
