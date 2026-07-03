import type { Project } from "../types";

const AUTHOR = {
  name: "Cabir Çelik",
  avatar:
    "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&q=80",
  bio: "Lead Data Scientist — Healthcare AI & Clinical NLP at John Snow Labs",
};

const article: Project = {
  id: "clinical-nlp-101",
  section: "blogs",
  title: "Clinical NLP 101: Extracting Insights From Unstructured Medical Notes",
  subtitle:
    "A practical introduction to clinical natural language processing — entities, assertions, de-identification, and where to start.",
  category: "Guide",
  date: "Jun 2026",
  readTime: "12 min read",
  image:
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=80",
  author: AUTHOR,
  content: {
    introduction:
      "Around 80% of clinical data lives in unstructured text — discharge summaries, progress notes, radiology reports, pathology results. Clinical NLP turns that free text into structured signal that downstream systems can actually use. This guide walks through the core building blocks, the pitfalls that trip up general-purpose NLP in the medical domain, and how to put a first pipeline together.",
    sections: [
      {
        heading: "Why clinical NLP is different from general NLP",
        content:
          "Medical notes are dense with abbreviations (MI, CABG, SOB), negations (\"no evidence of pneumonia\"), hedging (\"likely viral\"), and section structure (HPI, Assessment, Plan). General language models trained on web text miss most of this nuance, which is why clinical NLP relies on models pretrained on biomedical corpora (PubMed, MIMIC) and on task-specific components for assertion status, entity resolution, and de-identification.",
      },
      {
        heading: "The core building blocks",
        content:
          "A typical clinical NLP pipeline chains together: (1) sentence segmentation and tokenization tuned for clinical text, (2) named entity recognition for problems, drugs, procedures, anatomy, and lab values, (3) assertion detection to flag whether each entity is present, absent, hypothetical, or about someone else, (4) entity resolution that maps surface forms to standard terminologies like SNOMED CT, RxNorm, ICD-10, and LOINC, and (5) relation extraction to connect drugs to dosages or symptoms to body sites.",
      },
      {
        heading: "De-identification comes first",
        content:
          "Before any analysis, PHI has to come out. HIPAA's Safe Harbor lists 18 identifiers — names, dates, MRNs, locations, contact info — and missing even one breaks compliance. Modern de-identification systems combine NER models with rule-based post-processing and obfuscation strategies (redact, replace with realistic surrogates, or shift dates while preserving intervals).",
      },
      {
        heading: "Where LLMs fit in",
        content:
          "Large language models are powerful for summarization and question answering over clinical notes, but they hallucinate confidently and don't ground their answers by default. Retrieval-Augmented Generation (RAG) — pulling relevant passages from the patient chart and forcing the model to cite them — is the dominant pattern. Pair RAG with structured extraction from a clinical NER pipeline and you get answers that are both fluent and traceable.",
      },
      {
        heading: "Getting started",
        content:
          "If you're new to the space, start with an open dataset like MIMIC-IV or n2c2 challenge data, pick one task (de-identification or problem-list extraction is a good first project), and use an off-the-shelf clinical NLP library (spaCy + scispaCy, Spark NLP for Healthcare, or Hugging Face biomedical models). Measure with the right metric — entity-level F1 for NER, not token accuracy — and benchmark against a human-annotated subset before scaling out.",
      },
    ],
    conclusion:
      "Clinical NLP isn't a single model — it's a pipeline of small, well-tuned components, with de-identification at the front and standard terminologies at the back. Get those guardrails right and you can build everything from cohort discovery to clinical decision support on top of text that was previously locked inside PDFs.",
  },
  tags: ["Clinical NLP", "Healthcare AI", "Guide", "NER", "RAG"],
};

export default article;
