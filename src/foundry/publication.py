PUBLIC={"PUBLIC_SOURCE","OPEN_SOURCE"}
def may_publish(classification:str,*,contains_customer_data:bool,contains_secret:bool,approved:bool)->bool:
    if contains_customer_data or contains_secret: return False
    if classification not in PUBLIC: return False
    return bool(approved)
