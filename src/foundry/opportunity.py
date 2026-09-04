from .models import VentureCandidate
def score_venture(v:VentureCandidate)->dict:
    if not v.identifiable_buyer: return {"score":0,"decision":"KILL","reason":"NO_IDENTIFIABLE_BUYER"}
    if not v.measurable_roi: return {"score":0,"decision":"HOLD","reason":"NO_MEASURABLE_ROI"}
    scores={"economic_pain":min(15,max(0,v.economic_pain_score)),"institutional_acv":min(15,max(0,round(v.estimated_acv_usd/25000))),"recurrence":min(10,max(0,v.recurrence_score)),"evidence_density":min(10,max(0,v.evidence_density_score)),"expert_validation":min(10,max(0,v.expert_validation_score)),"workflow_fragmentation":min(10,max(0,v.fragmentation_score)),"expansion":min(10,max(0,v.expansion_score)),"foundry_reuse":min(10,max(0,v.reuse_score)),"buyer_access":min(5,max(0,v.access_score)),"sales_cycle":min(5,max(0,v.sales_cycle_score))}
    penalties=max(0,v.regulatory_penalty)+max(0,v.proprietary_data_penalty)+max(0,v.competition_penalty)
    final=max(0,min(100,sum(scores.values())-penalties))
    decision="GO" if final>=85 else "EXPERIMENT" if final>=75 else "HOLD" if final>=60 else "KILL"
    return {"score":final,"decision":decision,"components":scores,"penalties":penalties}
