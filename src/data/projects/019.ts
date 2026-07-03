import type { Project } from "../types";

const AUTHOR = {
  name: "Cabir Çelik",
  avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&q=80",
  bio: "Software Engineer and Mathematician",
};

const article: Project = {
  id: "019",
  section: "projects",
  title: "Stock Price Prediction",
  subtitle: "Bi-LSTM and RNN models for stock price forecasting, with Streamlit and Flask interfaces",
  category: "Time Series",
  date: "2022",
  readTime: "4 min",
  image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&q=80",
  author: AUTHOR,
  content: {
    introduction:
      "A time-series forecasting project that models historical stock prices with recurrent networks and exposes predictions through a demo app and an API.",
    sections: [
      {
        heading: "The problem",
        content:
          "Stock prices are noisy, non-stationary sequences. Build a forecasting setup that captures temporal dependencies and is easy to interact with.",
      },
      {
        heading: "The approach",
        content:
          "Trained Bi-LSTM and standard RNN architectures over historical price windows, evaluated them on held-out periods, and shipped them behind a Streamlit UI for exploration and a Flask API for programmatic forecasts.",
      },
      { heading: "Tech stack", content: "Bi-LSTM · RNN · Streamlit · Flask" },
    ],
    conclusion: "A practical time-series project covering modeling, evaluation, and serving.",
  },
  tags: ["Bi-LSTM", "RNN", "Time Series", "Streamlit", "Flask"],
};

export default article;
