import type { Education } from "../types";

export const education: Education[] = [
  {
    degree: "M.Sc. Software Engineering (English, Thesis-based)",
    institution: "Atılım University",
    location: "Ankara, Turkey",
    dates: "GPA 3.21 / 4.0 — Graduated July 2024",
    thesis: {
      title:
        "Enhancing Retrieval-Augmented Generation: Optimizing Document Splits and Parameters for Improved Language Model Responses",
      citation:
        'C. ÇELİK, "Enhancing retrieval-augmented generation: Optimizing document splits and parameters for improved language model responses," Yüksek lisans tezi, FEN BİLİMLERİ ENSTİTÜSÜ, ATILIM ÜNİVERSİTESİ, 2024.',
    },
    body: "Investigated sentence-aware document splitting algorithms and systematic parameter optimization (Split Length, Top-K, Window Size) for RAG-powered healthcare LLM assistants. Demonstrated that sentence-aware splitting significantly outperforms character-based methods, improving retrieval quality in clinical document analysis.",
  },
  {
    degree: "B.Sc. Computer Engineering",
    institution: "Kırşehir Ahi Evran University",
    location: "Kırşehir, Turkey",
    dates: "GPA 3.23 / 4.0 — Graduated June 2022",
  },
  {
    degree: "M.Sc. + B.Sc. Mathematics Teaching (5-year program)",
    institution: "Marmara University",
    location: "Istanbul, Turkey",
    dates: "GPA 75.7 / 100 — Graduated June 2013",
  },
];
