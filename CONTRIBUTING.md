# Contributing

Contributions may clarify public documentation, improve accessibility, correct source interpretations or add bounded original examples. The author and maintainer is Ciprian Ștefan Pleșca, Independent Creator and Researcher.

## Proposing a change

1. Identify the affected page and the concrete problem.
2. Link a verified original source when making a factual correction.
3. Distinguish bibliographic verification from full-text appraisal and independent review.
4. Write original prose and verify rights to submitted assets.
5. Preserve educational limits, uncertainty, author attribution and data privacy.
6. Submit a pull request explaining the resulting behavior or interpretation.

No personal logs, credentials, internal research records or unrelated implementation source may enter the public repository. Do not provide individualized medical advice in issues.

## Validation

Use Node.js 22 or later for the public scripts:

```sh
node scripts/public-validation/validate.cjs
node scripts/public-validation/security.cjs
node scripts/public-validation/links.cjs
```

Update PUBLIC_MANIFEST.json for deliberately reviewed public files. Check Markdown, author diacritics, references, internal navigation and rendered Mermaid diagrams. Release review also runs Markdown lint and spelling checks. Automation supplements editorial judgment and does not constitute independent scientific review.

## Rights and conduct

Submissions must be yours to contribute. Read LICENSE.md and CODE_OF_CONDUCT.md. Respect disagreement and revise claims when sources support a narrower interpretation. No institutional affiliation or clinical accreditation is implied by participation.
