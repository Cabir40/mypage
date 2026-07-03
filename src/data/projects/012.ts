import type { Project } from "../types";

const AUTHOR = {
  name: "Cabir Çelik",
  avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&q=80",
  bio: "Software Engineer and Mathematician",
};

const article: Project = {
  id: "012",
  section: "projects",
  title: "Android Family Tracker",
  subtitle: "A mobile app that shares live location across a family group using GPS and Firebase",
  category: "Mobile",
  date: "2021",
  readTime: "3 min",
  image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1920&q=80",
  author: AUTHOR,
  content: {
    introduction:
      "A native Android app that lets family members opt in to live location sharing and view each other on a shared map.",
    sections: [
      {
        heading: "The problem",
        content:
          "Coordinate where family members are in real time without relying on third-party messaging — and keep the data scoped to a private group.",
      },
      {
        heading: "The approach",
        content:
          "Built in Android Studio using GPS for location capture, Google Maps for visualization, and Firebase for authentication, realtime data, and group membership.",
      },
      { heading: "Tech stack", content: "Android · Google Maps · GPS · Firebase" },
    ],
    conclusion: "A focused mobile project that combined location services with a realtime backend.",
  },
  tags: ["Android", "Google Maps", "GPS", "Firebase"],
};

export default article;
