export type ViewId = "executive" | "operator" | "expert" | "audit" | "explain";

export const cases = [
  { id: "CG-2407", vessel: "Aurelia Star", route: "Ras Laffan → Rotterdam", status: "REVIEW", progress: 82, gaps: 2, product: "LNG", value: "$1.84M", date: "04 Sep 2026" },
  { id: "CG-2406", vessel: "North Atlas", route: "Bonny → Milford Haven", status: "READY", progress: 100, gaps: 0, product: "LNG", value: "$940K", date: "02 Sep 2026" },
  { id: "CG-2405", vessel: "Silver Meridian", route: "Fujairah → Singapore", status: "BLOCKED", progress: 61, gaps: 4, product: "Crude", value: "$2.12M", date: "29 Aug 2026" },
];

export const timeline = [
  { time: "02:14", title: "Workflow milestone recorded", source: "Source record A-001", state: "VERIFIED" },
  { time: "03:08", title: "Counterparty event confirmed", source: "Source record B-118", state: "ATTESTED" },
  { time: "04:22", title: "Measurement set registered", source: "Structured input batch 7A", state: "VERIFIED" },
  { time: "07:46", title: "Material variance surfaced", source: "Independent source comparison", state: "CONTRADICTION" },
  { time: "09:15", title: "Required record expected", source: "Evidence request ER-19", state: "MISSING" },
];

export const reviews = [
  { label: "Domain review", owner: "M. Chen", state: "APPROVED" },
  { label: "Evidence review", owner: "S. Okafor", state: "PENDING" },
  { label: "Adversarial review", owner: "Unassigned", state: "NOT STARTED" },
];

export const builders = [
  { name: "Maya Chen", initials: "MC", role: "Venture lead", project: "Settlement exceptions", space: "Banking operations", stage: "PROTOTYPE", progress: 68, note: "Mapping exception handoffs between operations teams." },
  { name: "Sam Okafor", initials: "SO", role: "Evidence architect", project: "Claims evidence room", space: "Insurance workflows", stage: "DESIGN PARTNER", progress: 82, note: "Testing a closed-file claim reconstruction with synthetic records." },
  { name: "Elena Rossi", initials: "ER", role: "Product builder", project: "Asset ownership passport", space: "Real-world assets", stage: "EXPLORING", progress: 34, note: "Exploring ownership, valuation and encumbrance evidence." },
  { name: "Noah Williams", initials: "NW", role: "Domain researcher", project: "Property review desk", space: "Real estate", stage: "VALIDATING", progress: 51, note: "Interviewing portfolio teams about appraisal review friction." },
];

export const explorationSpaces = ["Banking", "Insurance", "Real-world assets", "Real estate", "Trade & cargo", "Private markets", "Healthcare", "Energy", "Your own idea"];
