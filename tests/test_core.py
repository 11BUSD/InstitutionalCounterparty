import sys,unittest
from pathlib import Path
sys.path.insert(0,str(Path(__file__).resolve().parents[1]/"src"))
from foundry.domain_policy import evaluate_domain
from foundry.models import VentureCandidate,Review,ReviewType,ReviewDecision,Contribution,CanonicalTerm
from foundry.opportunity import score_venture
from foundry.release_gate import release_decision
from foundry.economics import allocate_contribution_pool
from foundry.publication import may_publish
from foundry.authority import authorize
from foundry.terminology import TerminologyRegistry
from foundry.portfolio import next_stage
class TestV3(unittest.TestCase):
    def test_prohibited_domain_blocks(self): self.assertEqual(evaluate_domain(["explosives"]).status,"BLOCK")
    def test_special_review(self): self.assertEqual(evaluate_domain(["money_movement"]).status,"REVIEW")
    def test_opportunity(self):
        v=VentureCandidate("v1","Claims Evidence","insurance_operations","closed-file reconstruction","claims executive",250000,15,10,10,10,10,10,10,5,5)
        self.assertIn(score_venture(v)["decision"],{"GO","EXPERIMENT","HOLD","KILL"})
    def _reviews(self): return [Review(ReviewType.DOMAIN,ReviewDecision.APPROVE),Review(ReviewType.EVIDENCE,ReviewDecision.APPROVE),Review(ReviewType.ADVERSARIAL,ReviewDecision.APPROVE)]
    def test_release(self): self.assertTrue(release_decision(self._reviews(),compatibility_proven=True,rollback_present=True,deterministic_checks_pass=True)["release"])
    def test_unknown_compatibility_blocks(self): self.assertFalse(release_decision(self._reviews(),compatibility_proven=False,rollback_present=True,deterministic_checks_pass=True)["release"])
    def test_economics(self):
        x=allocate_contribution_pool(100000,20000,0.10,0.20,[Contribution("agent-a","AGENT","ORIGINATOR",1),Contribution("human-b","HUMAN","CLOSER",3)])
        self.assertAlmostEqual(sum(x["allocations"].values()),x["contribution_pool"]); self.assertGreater(x["allocations"]["human-b"],x["allocations"]["agent-a"])
    def test_customer_data_never_public(self): self.assertFalse(may_publish("PUBLIC_SOURCE",contains_customer_data=True,contains_secret=False,approved=True))
    def test_language_authority(self):
        g={"TRANSFER_FUNDS"}; self.assertFalse(authorize("TRANSFER_FUNDS",g,False)["allowed"]); self.assertTrue(authorize("TRANSFER_FUNDS",g,True)["allowed"])
    def test_terms(self):
        r=TerminologyRegistry(); r.register(CanonicalTerm("EVIDENCE_GAP","Evidence Gap","Required evidence unavailable","1.0.0")); r.add_translation("EVIDENCE_GAP","fr","Lacune de preuve")
        self.assertEqual(r.resolve("EVIDENCE_GAP","fr"),"Lacune de preuve"); self.assertEqual(r.canonical("EVIDENCE_GAP").canonical_id,"EVIDENCE_GAP")
    def test_portfolio_proof(self): self.assertFalse(next_stage("F2_DESIGN_PARTNER",{"paying_pilot":False})["advance"]); self.assertTrue(next_stage("F2_DESIGN_PARTNER",{"paying_pilot":True})["advance"])
if __name__=="__main__": unittest.main()
