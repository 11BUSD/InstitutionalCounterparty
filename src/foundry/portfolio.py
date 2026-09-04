STAGES=["F0_HYPOTHESIS","F1_PROTOTYPE","F2_DESIGN_PARTNER","F3_PAYING_PILOT","F4_REPEATABLE_REVENUE","F5_INSTITUTIONAL_SCALE","F6_INDEPENDENT_FINANCING","F7_GROWTH_COMPANY"]
def next_stage(current:str,proof:dict)->dict:
    if current not in STAGES: raise ValueError("unknown stage")
    i=STAGES.index(current)
    if i==len(STAGES)-1: return {"advance":False,"stage":current,"reason":"MAX_STAGE"}
    req={"F0_HYPOTHESIS":"validated_problem","F1_PROTOTYPE":"working_proof","F2_DESIGN_PARTNER":"paying_pilot","F3_PAYING_PILOT":"repeatable_revenue","F4_REPEATABLE_REVENUE":"institutional_controls","F5_INSTITUTIONAL_SCALE":"financing_readiness","F6_INDEPENDENT_FINANCING":"growth_repeatability"}[current]
    if not proof.get(req,False): return {"advance":False,"stage":current,"reason":f"MISSING_PROOF:{req}"}
    return {"advance":True,"stage":STAGES[i+1],"reason":"PROOF_GATE_PASSED"}
