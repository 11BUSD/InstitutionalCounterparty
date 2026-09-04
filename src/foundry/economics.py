from .models import Contribution
def allocate_contribution_pool(revenue:float,direct_costs:float,reserve_rate:float,contribution_pool_rate:float,contributions:list[Contribution])->dict:
    if revenue<0 or direct_costs<0: raise ValueError("revenue and direct_costs must be non-negative")
    margin_base=max(0.0,revenue-direct_costs); reserve=margin_base*reserve_rate; distributable=max(0.0,margin_base-reserve); pool=distributable*contribution_pool_rate
    total=sum(max(0.0,c.weight) for c in contributions); allocations={}
    if total>0:
        for c in contributions: allocations[c.actor_id]=pool*max(0.0,c.weight)/total
    return {"revenue":revenue,"direct_costs":direct_costs,"margin_base":margin_base,"reserve":reserve,"contribution_pool":pool,"allocations":allocations,"retained_after_pool":distributable-pool}
