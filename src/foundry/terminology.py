from .models import CanonicalTerm
class TerminologyRegistry:
    def __init__(self): self._terms={}; self._translations={}
    def register(self,term:CanonicalTerm)->None:
        existing=self._terms.get(term.canonical_id)
        if existing and existing.semantic_version==term.semantic_version and existing!=term: raise ValueError("same canonical id/version cannot conflict")
        self._terms[term.canonical_id]=term
    def add_translation(self,canonical_id:str,locale:str,display:str)->None:
        if canonical_id not in self._terms: raise KeyError("unknown canonical term")
        self._translations[(canonical_id,locale)]=display
    def resolve(self,canonical_id:str,locale:str="en")->str:
        t=self._terms[canonical_id]; return self._translations.get((canonical_id,locale),t.display_term)
    def canonical(self,canonical_id:str)->CanonicalTerm: return self._terms[canonical_id]
