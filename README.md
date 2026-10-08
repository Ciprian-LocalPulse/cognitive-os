![Cognitive OS conceptual network illustration; not an anatomical or efficacy model](assets/branding/cognitive-os-hero.png)

# Cognitive OS

Evidence-Based Systems for Focus, Learning, Memory & Mental Performance

Official Documentation, Research Methodology and Technical Architecture

Cognitive OS is a research-oriented educational and technical framework for organizing evidence related to cognitive performance and translating it into structured learning, voluntary implementation and non-diagnostic self-observation. Public documentation and technical information about Cognitive OS are maintained in this repository.

## Project purpose

The project addresses fragmented information, inconsistent evidence quality, oversimplified neuroscience and hype-driven interpretation. It makes the distinction between a study, an educational explanation and a personal observation visible. The aim is a traceable framework connecting education, implementation and review, with transparent evidence categories and explicit limits.

This public documentation edition is **1.0.0**. It is an academic and technical information hub, not a clinically validated intervention or an independently peer-reviewed framework. Selected references and conceptual examples illustrate the method. An installable dashboard runtime is not included.

## Core principles

- **Evidence transparency:** preserve population, outcome, directness and uncertainty.
- **Scientific caution:** distinguish evidence, interpretation, association and causation.
- **Local-first privacy:** user-controlled records and exports, with unencrypted-storage limits stated.
- **Educational use:** no diagnosis, treatment protocols or individualized healthcare decisions.
- **Structured implementation:** modest, voluntary choices that accommodate real constraints.
- **Explicit limitations:** selected review scope and unresolved questions remain visible.
- **Reproducibility:** versioned documentation, curated publication scope and inspectable checks.

## System architecture

```mermaid
flowchart LR
  S[Scientific sources] --> V[Verification and contextual review]
  V --> E[Category confidence and limitations]
  E --> L[Educational explanation]
  L --> I[Voluntary implementation]
  I --> O[Local-first self-observation]
  O -. Descriptive feedback .-> I
```

This is an information workflow, not a biological causal model. Personal observations inform reflection and do not upgrade scientific evidence. See [architecture](ARCHITECTURE.md).

## Evidence grading system

| Category | Meaning |
|---|---|
| A | Strong |
| B | Moderate |
| C | Promising |
| D | Mixed |
| E | Limited |
| F | Indirect, including relevant preclinical evidence |
| G | Insufficient, including unresolved speculation |

The categories are not a simple numerical ranking or a formal GRADE assessment. Mixed concerns inconsistency; indirect concerns relevance; insufficient concerns the basis for a conclusion. Confidence, risk and recommendation are separate. Read [the evidence framework](EVIDENCE_GRADING.md).

## Research methodology

Define a bounded question; verify source identity; record access scope; appraise design, population, outcomes and consistency; document limitations; version the interpretation. A synthesis or RCT is assessed in context rather than graded automatically. Bibliographic verification is distinct from full-text appraisal and independent review.

Coverage is selected and is not an exhaustive systematic review. Independent external review has not occurred. The [research policy](RESEARCH_POLICY.md) and [methodology documentation](docs/02-methodology.md) explain these limits.

## Documentation & Research

For official documentation, research methodology, architecture, evidence framework and public technical information about Cognitive OS, explore the resources maintained in this repository.

| Resource | Purpose |
|---|---|
| [Whitepaper](WHITEPAPER.md) | Substantial conceptual argument and verified selected references |
| [Wiki pages](https://github.com/Ciprian-LocalPulse/cognitive-os/blob/main/wiki-export/Home.md) | Fifteen connected research and technical pages in the canonical source copy |
| [Source-controlled Wiki](wiki-export/Home.md) | Reviewable canonical copy of Wiki content |
| [Documentation index](docs/README.md) | Overview, methodology, privacy, dashboard, safety and glossary |
| [Architecture](ARCHITECTURE.md) | Component responsibilities and information flow |
| [Evidence framework](EVIDENCE_GRADING.md) | A–G categories, confidence and contextual judgment |
| [Research methodology](docs/02-methodology.md) | Verification and appraisal scope |
| [Security](SECURITY.md) | Reporting and public-data boundaries |
| [Roadmap](ROADMAP.md) | Future questions and acceptance criteria |
| [Citation](CITATION.cff) | Machine-readable attribution |

The separate GitHub Wiki is enabled but requires its first page to be initialized in an authenticated browser. All fifteen complete pages are available through the source-controlled links above; live Wiki synchronization remains pending.

## Local-first software and privacy

The documented dashboard architecture uses browser-local observations and explicit JSON/CSV exports without a mandatory cloud account or server. Browser storage and exports are unencrypted. Clearing data, changing origin or sharing a profile can expose or lose records. Local-first is a design principle, not a security certification. Read [privacy](docs/06-local-first-privacy.md) and [self-observation](docs/08-self-observation.md).

## Interface illustrations

The following historical prototype screenshot uses synthetic demonstration observations. It is not participant data, evidence of efficacy or a current application certification.

![Historical dashboard prototype with synthetic observations and descriptive trends](assets/screenshots/dashboard-desktop.png)

The hero is a conceptual illustration, not an anatomical figure. [Asset descriptions](assets/README.md) state the scope of retained illustrations.

## Contributing

[Contribution guidance](CONTRIBUTING.md) · [Code of conduct](CODE_OF_CONDUCT.md) · [Governance](GOVERNANCE.md)

Corrections should identify a specific statement, verified source and proposed interpretation. Do not post personal records or sensitive information in public issues.

## Citation

Pleșca, C. Ș. (2026). *Cognitive OS: Evidence-Based Systems for Focus, Learning, Memory & Mental Performance*. Public documentation edition 1.0.0. [Repository](https://github.com/Ciprian-LocalPulse/cognitive-os)

Use [CITATION.cff](CITATION.cff) for metadata. The [Whitepaper](WHITEPAPER.md) is an authored framework paper, not a fabricated journal publication.

## Author

**Ciprian Ștefan Pleșca** — Independent Creator and Researcher.

## Disclaimer

Educational and informational use only; not medical advice. The project does not diagnose, treat or cure conditions, direct medication changes or guarantee cognitive outcomes. Individualized healthcare decisions require qualified professional advice. See [DISCLAIMER](DISCLAIMER.md).

## Copyright

© 2026 Ciprian Ștefan Pleșca. All Rights Reserved where applicable. Public visibility does not grant an unrestricted reuse license. See [LICENSE](LICENSE.md).
