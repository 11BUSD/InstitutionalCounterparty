import sys
from pathlib import Path
sys.path.insert(0,str(Path(__file__).resolve().parents[1]/"src"))
from foundry.domain_policy import evaluate_domain
from foundry.models import VentureCandidate
from foundry.opportunity import score_venture
v=VentureCandidate("cargo-claims-001","Cargo Claims Evidence Workspace","cargo_hydrocarbons","closed historical cargo file reconstruction","marine claims executive",200000,15,10,10,10,10,9,10,4,3,regulatory_penalty=3)
print("DOMAIN:",evaluate_domain(["cargo_hydrocarbons"]))
print("VENTURE:",score_venture(v))
