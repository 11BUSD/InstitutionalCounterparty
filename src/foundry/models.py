from dataclasses import dataclass, field
from enum import Enum
from typing import List, Optional
class Status(str, Enum):
    PASS="PASS"; REVIEW="REVIEW"; BLOCK="BLOCK"; UNKNOWN="UNKNOWN"
class ReviewType(str, Enum):
    DOMAIN="DOMAIN"; EVIDENCE="EVIDENCE"; ADVERSARIAL="ADVERSARIAL"
class ReviewDecision(str, Enum):
    APPROVE="APPROVE"; REJECT="REJECT"
@dataclass(frozen=True)
class VentureCandidate:
    venture_id:str; name:str; domain_family:str; workflow:str; buyer:str; estimated_acv_usd:float
    economic_pain_score:int; recurrence_score:int; evidence_density_score:int; expert_validation_score:int; fragmentation_score:int
    expansion_score:int; reuse_score:int; access_score:int; sales_cycle_score:int
    regulatory_penalty:int=0; proprietary_data_penalty:int=0; competition_penalty:int=0
    measurable_roi:bool=True; identifiable_buyer:bool=True
@dataclass(frozen=True)
class Review:
    review_type:ReviewType; decision:ReviewDecision; blocker:bool=False; rationale:str=""
@dataclass(frozen=True)
class Contribution:
    actor_id:str; actor_type:str; role:str; weight:float
@dataclass(frozen=True)
class EvidenceRecord:
    evidence_id:str; source_type:str; source_ref:str; content_hash:str; verification_state:str
    observed_at:Optional[str]=None; retrieved_at:Optional[str]=None; notes:str=""
@dataclass(frozen=True)
class CanonicalTerm:
    canonical_id:str; display_term:str; definition:str; semantic_version:str
    allowed_synonyms:List[str]=field(default_factory=list); forbidden_synonyms:List[str]=field(default_factory=list)
