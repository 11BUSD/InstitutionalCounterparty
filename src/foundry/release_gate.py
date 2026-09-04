from .models import Review,ReviewType,ReviewDecision
REQUIRED={ReviewType.DOMAIN,ReviewType.EVIDENCE,ReviewType.ADVERSARIAL}
def release_decision(reviews:list[Review],*,compatibility_proven:bool,rollback_present:bool,deterministic_checks_pass:bool)->dict:
    by_type={r.review_type:r for r in reviews}; missing=REQUIRED-set(by_type)
    if missing: return {"release":False,"reason":f"MISSING_REVIEW:{','.join(sorted(x.value for x in missing))}"}
    if any(r.blocker for r in reviews): return {"release":False,"reason":"BLOCKING_REVIEW_FINDING"}
    if any(r.decision!=ReviewDecision.APPROVE for r in reviews): return {"release":False,"reason":"REVIEW_REJECTED"}
    if not compatibility_proven: return {"release":False,"reason":"UNPROVEN_COMPATIBILITY"}
    if not rollback_present: return {"release":False,"reason":"MISSING_ROLLBACK"}
    if not deterministic_checks_pass: return {"release":False,"reason":"DETERMINISTIC_CHECK_FAILURE"}
    return {"release":True,"reason":"UNANIMOUS_APPROVAL"}
