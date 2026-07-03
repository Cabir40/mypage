import type { Project } from "../types";

const AUTHOR = {
  name: "Cabir Çelik",
  avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&q=80",
  bio: "Software Engineer and Mathematician",
};

const article: Project = {
  id: "013",
  section: "projects",
  title: "Arduino Arm-Car Robot",
  subtitle: "A remote-controlled rover with a robotic arm, driven from an Android companion app",
  category: "Hardware",
  date: "2019",
  readTime: "3 min",
  image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=1920&q=80",
  author: AUTHOR,
  content: {
    introduction:
      "An Arduino-based mobile robot combining a driving chassis with a multi-joint arm, controlled wirelessly from an Android phone.",
    sections: [
      {
        heading: "The problem",
        content:
          "Design a small platform that can both move around and manipulate objects, and make it easy to drive from a phone.",
      },
      {
        heading: "The approach",
        content:
          "Firmware in C on Arduino handled motor and servo control, while an Android app sent commands over wireless. Mechanical layout focused on stable driving plus an arm with enough reach to pick up small items.",
      },
      { heading: "Tech stack", content: "C · Arduino · Android" },
    ],
    conclusion: "An end-to-end hardware + mobile project bridging embedded firmware and app development.",
  },
  tags: ["C", "Arduino", "Android"],
};

export default article;
