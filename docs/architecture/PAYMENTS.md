# Payments architecture

## Current product posture

Big Gs should use Stripe Connect as the first platform payment and payout rail. The implementation remains in synthetic/demo mode until the business model, platform country, connected-account configuration, pricing, liability allocation, and production credentials are approved.

## Intended flow

1. A client pays through a provider-hosted checkout or invoice surface.
2. A signature-verified webhook records payment state idempotently.
3. Provider settlement makes funds available on its own schedule.
4. The deterministic contribution ledger calculates proposed allocations and records fees.
5. An authorized human approves the payout instruction.
6. Stripe Connect pays an eligible connected account to its configured external account.
7. Provider webhooks move payout state from pending to paid or failed; Big Gs never infers success.

## Onboarding and verification

- Prefer Stripe-hosted or embedded Connect onboarding so Stripe collects changing identity and business requirements.
- Monitor `account.updated`, outstanding requirements, and capability status before enabling charges or payouts.
- Do not claim that Stripe removes all platform compliance obligations. Product configuration determines which responsibilities remain with Big Gs.

## Timing and fees

- “2–5 business days” is a planning target, not a product guarantee. Availability and timing vary by country, risk model, settlement delay, payout schedule, and payout method.
- Store provider fees, platform fees, reversals, refunds, disputes, taxes, and net recipient amount as separate ledger entries.
- Never display an estimated fee as final until the provider returns actual balance-transaction data.

## Stablecoins

- USDC through Stripe Connect is currently a limited/private-preview path with platform, recipient-type, and country restrictions.
- USDT and USDG remain research items with no approved provider, custody, treasury, compliance, or accounting path.
- No stablecoin rail may activate without legal/compliance review, supported-country checks, wallet controls, sanctions controls, reconciliation, incident response, and human release approval.

## Required production work

- Stripe account and Connect configuration approval.
- Authenticated, tenant-isolated users and connected accounts.
- Relational ledger with idempotency and immutable payment events.
- Secret-managed Stripe keys and signature-verified webhooks.
- Refund, dispute, negative-balance, payout-failure, tax, and support workflows.
- Sandbox end-to-end tests followed by independent security, evidence, and adversarial reviews.
