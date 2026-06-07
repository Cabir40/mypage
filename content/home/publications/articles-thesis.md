# Articles & Thesis — Cabir Celik

## M.Sc. Thesis

**Enhancing Retrieval-Augmented Generation: Optimizing Document Splits and Parameters for Improved Language Model Responses**

| | |
|---|---|
| Author | Cabir Çelik |
| Year | 2024 |
| Type | M.Sc. Thesis (Yüksek Lisans) |
| Language | English |
| Subject | Computer Engineering — Computer & Control |
| Institution | Atılım University / Graduate School of Natural and Applied Sciences / Department of Software Engineering |
| Advisor | Assoc. Prof. Dr. Beytullah Yıldız |

**Abstract:** Recent developments in Natural Language Processing (NLP) are very
exciting, especially with the advent of Large Language Models (LLMs), which
offer powerful applications in various domains. This thesis presents an
enhancement of the Retrieval-Augmented Generation (RAG) framework to support
LLMs in creating an effective health-related assistant. The focus is on
sentence-aware splitting algorithms to improve RAG processes in healthcare
document analysis. The research investigates the effectiveness of
sentence-aware splitting in RAG using a dataset of questions and books. These
documents are split into different lengths based on sentence awareness, using
either deep learning models or traditional character-based methods, and stored
in a vector database. For testing, questions are selected and relevant splits
are retrieved from the database using parameters such as Split Length, Top K,
and Window Size. Similarity scores are calculated to identify the most relevant
splits. The results show that sentence-aware splitting outperforms traditional
character-based splitting and that parameters such as Split Length, Top K, and
Window Size significantly improve RAG performance.

**Citation:**
> C. ÇELİK, "Enhancing retrieval-augmented generation: Optimizing document
> splits and parameters for improved language model responses," Yüksek lisans
> tezi, FEN BİLİMLERİ ENSTİTÜSÜ, ATILIM ÜNİVERSİTESİ, 2024.

---

## Papers

### Beyond Negation Detection: Comprehensive Assertion Detection Models for Clinical NLP
arXiv:2503.17425 · with Veysel Kocaman, Yigit Gul, M. Aytug Kaya, Hasham Ul Haq,
Mehmet Butgul, David Talby
Link: https://arxiv.org/abs/2503.17425

**TL;DR:** Fine-tuned clinical assertion-detection models (Present, Absent,
Hypothetical, Conditional, and more) that beat GPT-4o head-to-head — 0.962 vs.
0.901 accuracy — and outperform commercial cloud APIs, while staying
transparent and customizable inside Spark NLP instead of relying on black-box
systems.

### John_Snow_Labs@SMM4H'22: Social Media Mining for Health (#SMM4H) with Spark NLP
ACL Anthology · 2022.smm4h-1.13 · with Veysel Kocaman, Damla Gurbaz, Gursev
Pirge, Bunyamin Polat, Halil Saglamlar, Meryem Vildan Sarikaya, Gokhan Turer,
David Talby
Link: https://aclanthology.org/2022.smm4h-1.13/

**TL;DR:** Trained transformer-based NER and classification models on the
SMM4H 2022 health-related social-media datasets using Spark NLP's BERT
pipelines — shipped as production-grade, GPU-accelerated models that scale
across Spark clusters in Python, R, Scala, and Java.
