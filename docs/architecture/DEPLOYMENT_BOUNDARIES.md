# Deployment boundaries

## Public proof surface

- `/` explains the capability and control model.
- `/console` is a synthetic, read-only proof experience. It contains no customer records, private methodology, credentials, counterparty intelligence, or production claims.
- Static demo data lives in `lib/demo-data.ts` and is labelled synthetic in the UI.

## Private operating surface

- The GitHub repository is private and is the canonical source repository.
- The original Python deterministic kernel, schemas, governance specifications, domain packs, and future server-side integrations remain repository-private.
- Real customer evidence must live in tenant-isolated object/relational storage, never in Git or static web bundles.
- Production identity, authorization, persistence, audit storage, and secret-managed integrations are intentionally not represented as complete until those resources and authoritative requirements exist.

## Release posture

This deployment is a bounded proof environment, not a regulated production system. High-impact actions are visualized as human-gated and are not wired to side effects. Moving beyond synthetic proof requires identity, tenant isolation, relational and append-only audit storage, object storage, incident response, and three independent release approvals.
