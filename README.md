# Institutional Vertical Foundry V3

**Build narrow institutional software companies from repeatable workflows — without letting agents, code, capital, terminology, or domain assumptions outrun evidence and authority.**

This repository is a **clean-room V3 specification and executable reference kernel**. It assumes no earlier implementation exists.

## What it is

Institutional Vertical Foundry is a software factory for creating B2B / institutional vertical companies.

It helps a team:

1. identify a painful institutional workflow;
2. verify that a real buyer, budget and repeatable problem exist;
3. reject prohibited or poorly supported domains;
4. create a narrow domain pack;
5. build a simple role-specific product over a sophisticated evidence backend;
6. test calculations, claims, permissions and threat models;
7. run three independent release reviews;
8. publish a safe public proof surface while keeping proprietary operations private;
9. onboard a design partner with a bounded historical/synthetic proof environment;
10. attribute revenue to human operators and agent-originated work;
11. decide whether to scale, spin out, raise capital, hold, or kill the venture.

## The simple explanation

Think of the Foundry as a machine that helps create specialist software companies.

A company says:

> "This job takes us eight hours and five people."

The Foundry asks:

> "Can we make it take twenty minutes without lying, losing evidence, breaking a rule, or making a dangerous decision?"

If the answer survives research and review, the Foundry builds a narrow tool and gives the customer a safe proof environment.

## The technical explanation

V3 uses a deterministic control kernel around probabilistic agents.

```text
idea / client signal / agent proposal
                |
                v
        domain eligibility
                |
                v
        opportunity scoring
                |
                v
       evidence + buyer proof
                |
                v
           domain pack
                |
                v
 workflow + role + decision model
                |
                v
       bounded implementation
                |
        +-------+-------+
        |       |       |
        v       v       v
     domain   evidence  adversarial
     review   review    review
        |       |       |
        +-------+-------+
                |
         unanimous release
                |
                v
       sandbox / closed-file pilot
                |
                v
       revenue + usage evidence
                |
                v
      SCALE / SPINOUT / HOLD / KILL
```

No consequential automation may exceed the **evidence, authority and trust envelope** supporting it.

## V3 hard constraints

- Institutional/B2B first. Consumer products are not the target.
- No weapons, explosives, explosive precursors, biological agents, radiological/nuclear material, chemical-warfare material, or controlled dual-use precursor workflows.
- No autonomous movement of money, securities, customer assets, or production root credentials.
- No model may promote its own output into authoritative policy.
- No calculation used for an institutional decision may ship without deterministic reproduction tests.
- No material claim may exist without source/evidence/assumption status.
- No customer data belongs in Git.
- Public source is not automatically open source.
- Public proof and private advantage must derive from one canonical capability truth.
- Translation cannot broaden authority.
- One serious reviewer blocker prevents release.
- Compatibility must be proven before merge; passing tests alone is insufficient.
- Unknown is a valid state. The system may abstain.

## Initial opportunity families

These are **research universes**, not automatically approved products.

| Family | Example workflows | V3 posture |
|---|---|---|
| Cargo / hydrocarbons | custody replay, claims evidence, quantity/quality evidence, document reconciliation | priority reference pack |
| Banking | settlement exceptions, reconciliation, asset/cash evidence, tokenized-asset lifecycle | research / domain-pack candidate |
| Private assets | ownership evidence, valuation evidence, encumbrances, administrator/auditor handoff | research / domain-pack candidate |
| High-value art | provenance, fiduciary workflow, private-sale evidence, collection inventory | research / distribution candidate |
| Real estate | appraisal evidence, portfolio review, property-data reconciliation | research / domain-pack candidate |
| Metals | copper/aluminum commercial evidence, assay/warehouse/shipment provenance | research / domain-pack candidate |
| Ordinary petrochemicals | approved non-dual-use products only | explicit eligibility review required |

Historic databases involving Sotheby's, Christie's, Bonhams, Phillips, family offices, private banks, funds, insurers and similar entities should be imported only into **private counterparty intelligence stores**. They are research/distribution inputs, not product truth.

## Repository map

```text
src/foundry/             executable zero-dependency reference kernel
tests/                   deterministic unit tests
schemas/                 canonical machine-readable contracts
config/                  eligibility and review policy
domain-packs/            bounded vertical specifications
docs/architecture/       system design
docs/governance/         authority, terminology, portfolio governance
docs/security/           threat model and control maps
docs/ux/                 role-based institutional UX standard
docs/commercial/         proof-to-pilot-to-contract motion
docs/portfolio/          operator economics and spinout/fundraising model
docs/build/              no-drift build protocol
repo-templates/public/   safe public proof repository template
repo-templates/private/  private operating repository template
examples/                sample venture records and decisions
```

## Run the reference kernel

Requires Python 3.11+ and no third-party packages.

```bash
python -m unittest discover -s tests -v
python examples/run_demo.py
```

## V3 release definition

V3 is not "done" because many files exist.

A venture is ready to progress only when:

- domain eligibility passes;
- buyer and workflow are identifiable;
- measurable value exists;
- evidence requirements are explicit;
- the user workflow has a five-second executive state and a drill-down forensic state;
- calculations reproduce;
- terminology is canonical and versioned;
- permissions are least-privilege;
- public/private classifications are explicit;
- domain, evidence and adversarial reviews all approve;
- rollback exists;
- a bounded proof environment works;
- commercial claims match implemented capability.

Read `docs/build/BUILD_SEQUENCE.md` next.
