import type { Project } from "../types";

const AUTHOR = {
  name: "Cabir Çelik",
  avatar:
    "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&q=80",
  bio: "Lead Data Scientist — Healthcare AI & Clinical NLP at John Snow Labs",
};

const article: Project = {
  id: "008",
  section: "projects",
  title: "Stock Price Prediction",
  subtitle: "Bidirectional LSTM forecasting with an interactive dashboard",
  category: "Machine Learning",
  date: "2021",
  readTime: "2 min",
  image:
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&q=80",
  author: AUTHOR,
  content: {
    introduction:
      "Time-series forecasting for stock prices using bidirectional LSTM networks with an interactive Streamlit dashboard.",
    sections: [
      {
        heading: "About this project",
        content:
          "A bidirectional LSTM trained on historical price series to produce short-horizon forecasts, wrapped in a Streamlit + Flask dashboard for interactive exploration of model behavior across tickers and time windows.",
      },
      {
        heading: "Tech stack",
        content: "Bi-LSTM · RNN · Streamlit · Flask",
      },
    ],
    conclusion: "",
  },
  tags: ["Bi-LSTM", "RNN", "Streamlit", "Flask", "Time Series"],
};

export default article;
