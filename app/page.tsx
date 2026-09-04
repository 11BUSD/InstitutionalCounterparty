import Link from "next/link";
import { ArrowUpRight, CheckCircle, Database, LockKey, ShieldCheck } from "@phosphor-icons/react/dist/ssr";

const pillars = [
  { n: "01", title: "Find the real problem", body: "Score buyer pain, evidence quality and economic value before a venture earns the right to be built." },
  { n: "02", title: "Build inside the lines", body: "Deterministic rules own permissions, calculations, state changes and release decisions." },
  { n: "03", title: "Prove before publishing", body: "Domain, evidence and adversarial reviewers must agree. One serious blocker stops release." },
];

export default function Home() {
  return (
    <main className="landing">
      <nav className="topbar wrap">
        <Link className="brand" href="/"><span className="brand-mark">G</span><span>BIG GS</span></Link>
        <div className="nav-links"><a href="#system">System</a><a href="#principles">Principles</a></div>
        <Link className="nav-cta" href="/console">Open proof console <ArrowUpRight size={16} /></Link>
      </nav>

      <section className="hero wrap">
        <div className="eyebrow"><span /> Institutional software foundry · V3</div>
        <h1>Build companies that<br /><em>earn trust.</em></h1>
        <p className="hero-copy">A governed operating system for turning painful institutional workflows into narrow, evidence-backed software ventures.</p>
        <div className="hero-actions">
          <Link className="button gold" href="/console">Enter the foundry <ArrowUpRight size={18} /></Link>
          <a className="button ghost" href="#system">See how it works</a>
        </div>
        <div className="hero-proof">
          <div><strong>10</strong><span>Kernel tests passing</span></div>
          <div><strong>3×</strong><span>Independent review gates</span></div>
          <div><strong>0</strong><span>Autonomous high-impact actions</span></div>
        </div>
      </section>

      <section className="system-section" id="system">
        <div className="wrap">
          <div className="section-head"><p>THE OPERATING MODEL</p><h2>Complex beneath.<br />Clear on the surface.</h2></div>
          <div className="flow" aria-label="Foundry workflow">
            {['Signal','Eligibility','Evidence','Build','Review','Pilot','Scale'].map((item, i) => <div className="flow-item" key={item}><span>{String(i+1).padStart(2,'0')}</span><b>{item}</b></div>)}
          </div>
          <div className="pillar-grid" id="principles">
            {pillars.map((p) => <article className="pillar" key={p.n}><span>{p.n}</span><h3>{p.title}</h3><p>{p.body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="trust wrap">
        <div className="trust-copy"><p className="kicker">CONTROL BY DESIGN</p><h2>The system can say<br /><em>“I don’t know.”</em></h2><p>Unknown is a valid state. Claims remain attached to their evidence, authority stays with people, and every consequential decision leaves an audit trail.</p></div>
        <div className="trust-card">
          <div className="trust-row"><ShieldCheck size={24}/><span><b>Deterministic gates</b><small>Rules, not guesses</small></span><CheckCircle className="ok" size={20}/></div>
          <div className="trust-row"><Database size={24}/><span><b>Evidence provenance</b><small>Source and status preserved</small></span><CheckCircle className="ok" size={20}/></div>
          <div className="trust-row"><LockKey size={24}/><span><b>Human authority</b><small>High-impact actions gated</small></span><CheckCircle className="ok" size={20}/></div>
        </div>
      </section>

      <footer className="wrap footer"><div className="brand"><span className="brand-mark">G</span><span>BIG GS</span></div><p>Institutional Vertical Foundry · Synthetic proof environment</p><Link href="/console">Launch console →</Link></footer>
    </main>
  );
}
