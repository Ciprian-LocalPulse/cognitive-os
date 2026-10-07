# Public architecture overview
## Research pipeline
```mermaid
flowchart LR
  S[Sources] --> R[Research Review]
  R --> C[Evidence Classification]
  C --> E[Evidence Card]
  E --> D[Educational Content]
  D --> T[Cognitive OS Tools]
```

## Product layers
```mermaid
flowchart TB
  R[Research Layer] --> E[Evidence Layer]
  E --> D[Documentation Layer]
  E --> A[Application Layer]
  D --> B[Commercial Build Layer]
  A --> B
```

These are information-flow diagrams, not claims of biological causation. Detailed research databases and build implementation remain private.

## Public / private boundary
```mermaid
flowchart LR
  subgraph Public[PUBLIC GITHUB]
    P[Documentation and Architecture]
    X[Selected Examples and Screenshots]
    M[Roadmap and Policies]
  end
  subgraph Private[PRIVATE / LOCAL]
    R[Full Research Library]
    C[Commercial Content and Paid Product]
    B[Build Pipeline and Customer Deliverables]
  end
  Private -. Curated non-proprietary updates only .-> Public
```

There is no automatic mirror. Screenshots use synthetic observations. Only deliberately selected public files enter this repository. The private dashboard uses a lightweight browser runtime, localStorage and customer-controlled exports; no public backend is required.

![Selected public and private product layers](assets/diagrams/architecture-overview.png)

![Evidence-review editorial process](assets/diagrams/evidence-pipeline.png)
