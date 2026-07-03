import type { Project } from "../types";

const AUTHOR = {
  name: "Cabir Çelik",
  avatar:
    "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&q=80",
  bio: "Lead Data Scientist — Healthcare AI & Clinical NLP at John Snow Labs",
};

const article: Project = {
  id: "009",
  section: "projects",
  title: "Arduino Arm-Car Robot",
  subtitle: "Remotely controlled robotic arm-car with Android companion app",
  category: "Robotics",
  date: "2019",
  readTime: "2 min",
  image:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80",
  author: AUTHOR,
  content: {
    introduction:
      "Remotely controlled robotic arm-car system built with Arduino and controlled via Android application.",
    sections: [
      {
        heading: "About this project",
        content:
          "An undergraduate robotics build pairing an Arduino-driven chassis and arm with a custom Android app over Bluetooth. Hands-on exercise in embedded C, real-time control loops, and end-to-end product wiring.",
      },
      {
        heading: "Tech stack",
        content: "C · Arduino · Android",
      },
    ],
    conclusion: "",
  },
  tags: ["Arduino", "C", "Android", "Robotics", "Embedded"],
};

export default article;
