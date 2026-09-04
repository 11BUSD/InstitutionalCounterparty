import hashlib
from .models import EvidenceRecord
def sha256_bytes(data:bytes)->str: return hashlib.sha256(data).hexdigest()
def evidence_from_bytes(evidence_id:str,source_type:str,source_ref:str,raw:bytes,verification_state:str="UNVERIFIED")->EvidenceRecord:
    return EvidenceRecord(evidence_id,source_type,source_ref,sha256_bytes(raw),verification_state)
def claims_may_rely(evidence:list[EvidenceRecord])->bool:
    return bool(evidence) and all(x.verification_state in {"VERIFIED","ATTESTED"} for x in evidence)
