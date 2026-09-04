HIGH_IMPACT_ACTIONS={"TRANSFER_FUNDS","TRADE_ASSET","PUBLISH_CUSTOMER_DATA","ACCEPT_CONTRACT","CHANGE_PRODUCTION_CREDENTIALS","RELEASE_PRODUCTION","ACTIVATE_METHODOLOGY","DELETE_PRODUCTION_DATA"}
def authorize(action_id:str,granted_actions:set[str],human_approved:bool)->dict:
    if action_id not in granted_actions: return {"allowed":False,"reason":"ACTION_NOT_GRANTED"}
    if action_id in HIGH_IMPACT_ACTIONS and not human_approved: return {"allowed":False,"reason":"HUMAN_APPROVAL_REQUIRED"}
    return {"allowed":True,"reason":"AUTHORIZED"}
