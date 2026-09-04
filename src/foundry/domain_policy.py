from dataclasses import dataclass
from typing import Iterable
PROHIBITED={"weapons","explosives","explosive_precursors","chemical_warfare_agents","chemical_warfare_precursors","biological_agents","biological_precursors","nuclear_material","radiological_material","controlled_dual_use_precursors"}
SPECIAL_REVIEW={"fertilizer_supply_chains","unknown_chemical_feedstocks","controlled_materials","sanctions_sensitive_operations","money_movement","securities_execution","regulated_professional_opinion"}
@dataclass(frozen=True)
class DomainEligibility:
    status:str; reasons:tuple[str,...]
def evaluate_domain(tags:Iterable[str])->DomainEligibility:
    normalized={str(t).strip().lower() for t in tags}
    blocked=sorted(normalized & PROHIBITED)
    if blocked: return DomainEligibility("BLOCK",tuple(f"PROHIBITED:{x}" for x in blocked))
    review=sorted(normalized & SPECIAL_REVIEW)
    if review: return DomainEligibility("REVIEW",tuple(f"SPECIAL_REVIEW:{x}" for x in review))
    return DomainEligibility("PASS",("NO_PROHIBITED_DOMAIN_TAGS",))
