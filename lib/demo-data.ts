export type ViewId = "executive" | "operator" | "expert" | "audit" | "explain";

export const cases = [
  { id: "CG-2407", vessel: "Aurelia Star", route: "Ras Laffan → Rotterdam", status: "REVIEW", progress: 82, gaps: 2, product: "LNG", value: "$1.84M", date: "04 Sep 2026" },
  { id: "CG-2406", vessel: "North Atlas", route: "Bonny → Milford Haven", status: "READY", progress: 100, gaps: 0, product: "LNG", value: "$940K", date: "02 Sep 2026" },
  { id: "CG-2405", vessel: "Silver Meridian", route: "Fujairah → Singapore", status: "BLOCKED", progress: 61, gaps: 4, product: "Crude", value: "$2.12M", date: "29 Aug 2026" },
];

export const timeline = [
  { time: "02:14", title: "Notice of readiness tendered", source: "NOR-001.pdf", state: "VERIFIED" },
  { time: "03:08", title: "Berth all fast", source: "Terminal log · row 118", state: "ATTESTED" },
  { time: "04:22", title: "Custody transfer meter opened", source: "Meter batch 7A", state: "VERIFIED" },
  { time: "07:46", title: "Quantity variance recorded", source: "Ship / shore comparison", state: "CONTRADICTION" },
  { time: "09:15", title: "Final gauging document expected", source: "Evidence request ER-19", state: "MISSING" },
];

export const reviews = [
  { label: "Domain review", owner: "M. Chen", state: "APPROVED" },
  { label: "Evidence review", owner: "S. Okafor", state: "PENDING" },
  { label: "Adversarial review", owner: "Unassigned", state: "NOT STARTED" },
];
