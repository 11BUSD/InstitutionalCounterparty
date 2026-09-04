# System Architecture

V3 separates five planes: Experience, Workflow, Domain, Trust, and Venture.

- Experience: role-specific UI and explanation modes.
- Workflow: cases, tasks, approvals and pilots.
- Domain: packs, terminology, rules, schemas and decision contracts.
- Trust: identity, permissions, provenance, audit, reviews and action gateway.
- Venture: opportunity scoring, counterparty intelligence, economics, capital stage and portfolio governance.

Authoritative state should live in relational storage plus append-only event/audit records. Object storage holds raw evidence. Search and graph projections are derived views, not unaudited truth.

Deterministic code owns permissions, state transitions, calculations, release gates, money attribution, eligibility, versioning and idempotency. Models may research, extract, summarize, classify and propose.
