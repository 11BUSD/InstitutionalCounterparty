"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Bell, Briefcase, CaretDown, Check, ClockCounterClockwise, Compass, FileMagnifyingGlass, Gauge, Info, List, LockKey, MagnifyingGlass, Plus, ShieldCheck, SignOut, SlidersHorizontal, Sparkle, UsersThree, X } from "@phosphor-icons/react";
import { builders, cases, explorationSpaces, reviews, timeline, type ViewId } from "@/lib/demo-data";

const views: {id: ViewId; label: string; icon: typeof Gauge}[] = [
  { id: "executive", label: "Executive", icon: Gauge }, { id: "operator", label: "Operator", icon: Briefcase },
  { id: "expert", label: "Expert", icon: FileMagnifyingGlass }, { id: "audit", label: "Audit", icon: ShieldCheck }, { id: "explain", label: "Explain", icon: Info },
];

function Status({ children }: {children: React.ReactNode}) { return <span className={`status ${String(children).toLowerCase().replace(' ','-')}`}>{children}</span> }

export function FoundryConsole() {
  const [view, setView] = useState<ViewId>("executive");
  const [mobileNav, setMobileNav] = useState(false);
  const [toast, setToast] = useState(false);
  const selected = cases[0];

  const requestReview = () => { setToast(true); window.setTimeout(() => setToast(false), 2800); };

  return <main className="console-shell">
    <aside className={`sidebar ${mobileNav ? 'open' : ''}`}>
      <div className="console-brand"><Link href="/"><span className="brand-mark">G</span><span>BIG GS</span></Link><button onClick={() => setMobileNav(false)} aria-label="Close menu"><X size={20}/></button></div>
      <div className="workspace"><span>WORKSPACE</span><button><i>GC</i><b>Global Cargo</b><CaretDown size={14}/></button></div>
      <nav className="view-nav">
        <p>VIEWS</p>
        {views.map(item => <button className={view === item.id ? 'active' : ''} onClick={() => {setView(item.id); setMobileNav(false)}} key={item.id}><item.icon size={19}/>{item.label}</button>)}
      </nav>
      <nav className="secondary-nav"><p>FOUNDRY</p><button><Sparkle size={19}/>Ventures</button><button><SlidersHorizontal size={19}/>Domain packs</button><button><ClockCounterClockwise size={19}/>Audit trail</button></nav>
      <div className="user"><span>PG</span><div><b>Peter</b><small>Foundry operator</small></div><SignOut size={18}/></div>
    </aside>

    <section className="console-main">
      <header className="console-top"><button className="menu-button" onClick={() => setMobileNav(true)}><List size={22}/></button><div className="breadcrumb"><span>Foundry</span><b>/</b><strong>{views.find(v=>v.id===view)?.label} view</strong></div><div className="top-actions"><button aria-label="Search"><MagnifyingGlass size={20}/></button><button aria-label="Notifications"><Bell size={20}/><i/></button><span className="environment"><i/> SYNTHETIC</span></div></header>
      <div className="console-content">
        <AnimatePresence mode="wait"><motion.div key={view} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-6}} transition={{duration:.22}}>
          {view === 'executive' && <Executive requestReview={requestReview}/>} 
          {view === 'operator' && <Operator selected={selected}/>} 
          {view === 'expert' && <Expert/>} 
          {view === 'audit' && <Audit/>} 
          {view === 'explain' && <Explain/>}
        </motion.div></AnimatePresence>
      </div>
    </section>
    <AnimatePresence>{toast && <motion.div className="toast" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:12}}><Check size={18}/> Review request staged for human approval.</motion.div>}</AnimatePresence>
  </main>
}

function Executive({requestReview}:{requestReview:()=>void}) {
  return <>
    <div className="page-title"><div><p>FOUNDRY OVERVIEW</p><h1>Good morning, Peter.</h1><span>See what your people are building, where they need help, and what could come next.</span></div><button className="primary-action" onClick={requestReview}><Plus size={17}/> Start an idea</button></div>
    <div className="metric-grid">
      <article><span>PEOPLE BUILDING</span><strong>4</strong><small><i className="gold-dot"/> Across one shared foundry</small></article>
      <article><span>ACTIVE PROJECTS</span><strong>4</strong><small className="positive">2 moving forward this week</small></article>
      <article><span>SPACES EXPLORED</span><strong>4</strong><small>Ideas can begin in any industry</small></article>
      <article><span>NEEDS YOUR INPUT</span><strong>2</strong><small>One decision, one introduction</small></article>
    </div>
    <div className="portfolio-layout">
      <section className="panel builders-panel"><div className="panel-head"><div><span>YOUR BUILDERS</span><h2>What everyone is working on</h2></div><button>See all people →</button></div>
        <div className="builder-list">{builders.map(builder => <button key={builder.name}><div className="builder-avatar">{builder.initials}</div><div className="builder-main"><div><b>{builder.name}</b><span>{builder.role}</span></div><h3>{builder.project}</h3><p>{builder.note}</p><div className="builder-progress"><i style={{width:`${builder.progress}%`}}/></div></div><div className="builder-meta"><Status>{builder.stage}</Status><small>{builder.space}</small><b>{builder.progress}%</b></div></button>)}</div>
      </section>
      <aside className="overview-side">
      <section className="panel attention"><div className="panel-head"><div><span>PETER&apos;S INBOX</span><h2>Where you can help</h2></div><UsersThree size={22}/></div>
        <div className="alert-card"><div><Compass size={20}/></div><span><b>Introduce Maya to an operations lead</b><small>Her banking prototype needs one more workflow interview.</small></span></div>
        <div className="alert-card muted"><div><FileMagnifyingGlass size={20}/></div><span><b>Review Sam&apos;s proof plan</b><small>A 15-minute decision will unblock the next test.</small></span></div>
        <button className="text-action">Open your full inbox <ArrowLeft className="rotate" size={16}/></button>
      </section>
      <section className="panel explore-card"><div className="panel-head"><div><span>OPEN EXPLORATION</span><h2>Explore any space</h2></div><Compass size={22}/></div><p>These are starting points, not fences. Builders can investigate any legitimate workflow and bring their own idea.</p><div>{explorationSpaces.map(space=><button key={space}>{space}</button>)}</div></section>
      </aside>
    </div>
    <section className="panel freedom-strip"><Compass size={24}/><div><span>EXPLORE FREELY · RELEASE CAREFULLY</span><h2>Any legitimate industry can be investigated.</h2><p>Industry labels help organize ideas; they do not limit them. Evidence and safety checks only apply before consequential actions or release.</p></div></section>
  </>
}

function Operator({selected}:{selected:typeof cases[number]}) { return <><div className="page-title"><div><p>OPERATOR VIEW</p><h1>{selected.vessel}</h1><span>{selected.id} · {selected.route} · Synthetic closed-file reconstruction</span></div><Status>{selected.status}</Status></div><section className="panel timeline-panel"><div className="panel-head"><div><span>CHRONOLOGY</span><h2>What happened, in order</h2></div><span className="coverage">82% evidence coverage</span></div><div className="timeline">{timeline.map((t,i)=><div key={t.time}><time>{t.time}</time><i className={t.state.toLowerCase()}/><span><b>{t.title}</b><small>{t.source}</small></span><Status>{t.state}</Status>{i<timeline.length-1&&<em/>}</div>)}</div></section></> }

function Expert() { return <><div className="page-title"><div><p>EXPERT VIEW</p><h1>Quantity reconciliation</h1><span>Canonical calculation · Version 3.0.0 · Synthetic values</span></div><Status>CONTRADICTION</Status></div><div className="expert-grid"><section className="panel calc"><div className="panel-head"><div><span>DETERMINISTIC REPRODUCTION</span><h2>Ship / shore comparison</h2></div><LockKey size={22}/></div>{[['Ship delivered quantity','142,840.00 m³'],['Shore received quantity','142,240.07 m³'],['Observed difference','599.93 m³'],['Variance','0.4200%']].map(([a,b],i)=><div className={i===3?'total':''} key={a}><span>{a}</span><b>{b}</b></div>)}<p>Formula: |ship − shore| ÷ ship × 100. Reproduced from preserved inputs; no model calculation used.</p></section><section className="panel"><div className="panel-head"><div><span>EVIDENCE BASIS</span><h2>Input lineage</h2></div></div>{['Signed bill of lading','Ship measurement report','Terminal meter statement'].map((x,i)=><div className="evidence-row" key={x}><span><i>{i+1}</i>{x}</span><Status>{i===2?'ATTESTED':'VERIFIED'}</Status></div>)}</section></div></> }

function Audit() { return <><div className="page-title"><div><p>COUNSEL / AUDIT VIEW</p><h1>Release control</h1><span>Every gate must pass. One blocker stops publication.</span></div><ShieldCheck size={32}/></div><section className="panel audit-table"><div className="panel-head"><div><span>TRIPLE REVIEW</span><h2>Independent decisions</h2></div></div>{reviews.map((r,i)=><div className="audit-row" key={r.label}><span className="audit-num">0{i+1}</span><div><b>{r.label}</b><small>{i===0?'Domain eligibility and bounded scope confirmed.':i===1?'Quantity contradiction requires resolution.':'Begins after evidence review closes.'}</small></div><span>{r.owner}</span><Status>{r.state}</Status></div>)}<div className="release-block"><LockKey size={22}/><span><b>Production release is locked</b><small>Evidence and adversarial approvals are missing. Human authority is required.</small></span></div></section></> }

function Explain() { return <><div className="page-title"><div><p>EXPLAIN VIEW</p><h1>The five-year-old version</h1><span>The same canonical state, written in plain language.</span></div><Sparkle size={32}/></div><div className="explain-grid">{[['1','We collect the puzzle pieces','Documents and measurements are the pieces. We keep the originals safe and remember where every piece came from.'],['2','We check whether they fit','The computer does the maths the exact same way every time. If two pieces disagree, it shows the disagreement.'],['3','Three grown-ups inspect it','A domain expert, an evidence expert and a challenger each review the work. Any one of them can stop it.'],['4','A person turns the final key','The system cannot publish, move money or change important rules by itself. A properly authorized human decides.']].map(([n,t,b])=><article className="panel explain-card" key={n}><span>{n}</span><h2>{t}</h2><p>{b}</p></article>)}</div></> }
