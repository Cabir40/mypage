---
title: Healthcare RAG LLM System
subtitle: Optimizing document splits and retrieval parameters for clinical question-answering
volume: "Vol. 01"
issue: "Healthcare NLP / LLMs"
pullquote: >
  Sentence-aware splitting outperforms traditional character-based splitting —
  and Split Length, Top-K, and Window Size each materially change retrieval
  quality in clinical document analysis.
pullquoteCite: M.Sc. Thesis, Atılım University, 2024
media:
  - type: image
    caption: "Pipeline overview — ingestion, sentence-aware splitting, vector store, retrieval, and LLM response generation"
    placeholder: true
  - type: image
    caption: "Retrieval-quality comparison across Split Length, Top-K, and Window Size configurations"
    placeholder: true
links:
  - label: Open-source code (hls-llm-doc-qa)
    url: "https://github.com/Cabir40/hls-llm-doc-qa"
    style: primary
  - label: Thesis write-up
    url: ""
    style: secondary
  - label: Related publication — RAG thesis
    url: ""
    style: secondary
---
An end-to-end Retrieval-Augmented Generation pipeline for healthcare document
question-answering, built around the central research question of my M.Sc.
thesis: how do document-splitting strategy and retrieval parameters affect the
quality of LLM responses over clinical text?

## The problem

General-purpose RAG pipelines typically split documents by raw character
count, which routinely cuts clinical sentences — and the medical concepts
inside them — in half. For healthcare question-answering, where a single
fragmented sentence can change a retrieved answer from correct to dangerously
wrong, this is not a cosmetic issue.

## The approach

The system integrates Spark NLP, LangChain, and Haystack on Databricks, and
investigates **sentence-aware document splitting** as an alternative to
character-based methods. On top of the splitting strategy itself, the pipeline
systematically sweeps three retrieval parameters:

- **Split Length** — how large each retrievable chunk is
- **Top-K** — how many candidate chunks are retrieved per query
- **Window Size** — how much surrounding context is attached to each chunk

Each configuration is benchmarked with similarity scoring against a dataset of
clinical questions and source documents, so the comparison is empirical rather
than anecdotal.

## The result

Sentence-aware splitting consistently and significantly outperformed
character-based splitting, and tuning Split Length, Top-K, and Window Size
produced measurable improvements in retrieval quality — directly improving the
accuracy of the downstream LLM-generated answers in clinical document
analysis. These findings now inform how I architect production RAG systems for
healthcare document Q&A at John Snow Labs.

## Source code

The open-source companion implementation, `hls-llm-doc-qa`, is available on
GitHub and demonstrates the question-answering pipeline over custom document
collections using open-source LLMs and LangChain.
