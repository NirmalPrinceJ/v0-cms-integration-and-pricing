import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSeo } from '../hooks/useSeo';

gsap.registerPlugin(ScrollTrigger);

function BrowserFrame({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl overflow-hidden shadow-2xl border border-iw-rule bg-iw-paper ${className}`}>
      <div className="flex items-center gap-2 px-4 py-2.5 bg-iw-paper border-b border-iw-rule">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <span className="ml-3 font-iw-mono text-xs text-iw-slate/50 select-none">integratewise.ai</span>
      </div>
      <div className="overflow-hidden">{children}</div>
    </div>
  );
}

function SectionLabel({ label }: { label: string }) {
  return <span className="font-iw-mono text-xs uppercase tracking-widest text-iw-gold block mb-4">{label}</span>;
}

export default function Home() {
  useSeo("IW Continuity Bridge | Never Lose Context Again", "Preserve conversations, decisions, and context across AI systems. IW Continuity Bridge maintains organizational memory across ChatGPT, Claude, Gemini, and enterprise systems.");
  const [activeSurface, setActiveSurface] = useState<'data' | 'twin' | 'governance'>('data');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-headline', { y: 40, opacity: 0, duration: 1, ease: 'power3.out' });
      gsap.from('.hero-sub', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 });
      gsap.from('.hero-body', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out', delay: 0.4 });
      gsap.from('.hero-buttons', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out', delay: 0.5 });
      gsap.from('.problem-item', { y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.problem-section', start: 'top 80%' } });
      gsap.from('.capability-item', { y: 30, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: '.capabilities-section', start: 'top 80%' } });
      gsap.from('.pillar-item', { y: 30, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: '.pillars-section', start: 'top 80%' } });
      gsap.from('.twin-item', { y: 30, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: '.twin-section', start: 'top 80%' } });
      gsap.from('.surface-card', { y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.surfaces-section', start: 'top 80%' } });
      gsap.from('.expansion-item', { y: 20, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.expansion-section', start: 'top 85%' } });
      gsap.from('.cta-final', { y: 40, opacity: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '.cta-final', start: 'top 80%' } });
    });
    return () => ctx.revert();
  }, []);

  const surfaceImages = {
    data: './images/portfolio-overview.webp',
    twin: './images/morning-brief.webp',
    governance: './images/governance-view.webp',
  };
  const surfaceLabels: Record<string, string> = { data: 'Your Data', twin: 'Digital Twin', governance: 'Governance' };

  return (
    <div ref={ref}>
      {/* ─── HERO: IW CONTINUITY BRIDGE ─── */}
      <section className="min-h-screen bg-gradient-to-b from-iw-forest to-iw-forest-mid flex items-center">
        <div className="section-padding w-full py-24">
          <div className="max-w-4xl mx-auto text-center">
            <SectionLabel label="Enterprise Continuity Layer" />
            <h1 className="hero-headline editorial-heading text-4xl md:text-5xl lg:text-6xl text-iw-paper leading-[1.1]">NEVER LOSE CONTEXT AGAIN</h1>
            <p className="hero-sub editorial-serif text-xl text-iw-paper/80 mt-6 max-w-2xl mx-auto leading-relaxed italic">IW Continuity Bridge preserves conversations, decisions, knowledge, and reasoning across AI systems, teams, and business operations.</p>
            <p className="hero-body font-iw-sans text-base text-iw-paper/60 mt-6 max-w-2xl mx-auto leading-relaxed">Move seamlessly between ChatGPT, Claude, Gemini, Open WebUI, internal agents, and enterprise systems. One shared continuity layer. Persistent organizational memory.</p>
            <div className="hero-buttons flex flex-wrap gap-4 mt-10 justify-center">
              <a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className="inline-flex items-center justify-center px-7 py-3 bg-iw-gold text-iw-forest font-iw-sans font-semibold text-sm rounded-full whitespace-nowrap transition-all duration-300 hover:bg-iw-gold-pale">Book Demo</a>
              <Link to="/continuity-bridge" className="inline-flex items-center justify-center px-7 py-3 border-2 border-iw-paper/30 text-iw-paper font-iw-sans font-semibold text-sm rounded-full whitespace-nowrap transition-all duration-300 hover:border-iw-paper/60">See Architecture <ArrowRight size={16} className="ml-2" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE PROBLEM: AI FRAGMENTATION ─── */}
      <section className="problem-section section-padding-y bg-iw-paper">
        <div className="section-padding">
          <SectionLabel label="The Problem" />
          <h2 className="editorial-heading text-3xl sm:text-4xl text-iw-ink mb-6 text-center">EVERY AI SESSION STARTS OVER</h2>
          <p className="font-iw-sans text-base text-iw-slate leading-relaxed mb-10 max-w-2xl mx-auto text-center">Each conversation exists in isolation. Knowledge is trapped. Context disappears. Teams repeat the same work. Organizational memory never compounds.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {['Knowledge trapped in conversations', 'Context disappears between tools', 'Teams repeat the same work', 'No organizational memory', 'AI starts from zero every time'].map((item, i) => (
              <div key={i} className="problem-item font-iw-mono text-xs text-iw-forest uppercase tracking-widest border-l-2 border-iw-gold pl-3">{item}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOLUTION: CONTINUITY BRIDGE ─── */}
      <section className="capabilities-section section-padding-y bg-iw-paper-warm">
        <div className="section-padding">
          <div className="text-center mb-12">
            <SectionLabel label="The Solution" />
            <h2 className="editorial-heading text-3xl sm:text-4xl text-iw-ink">INTRODUCING IW CONTINUITY BRIDGE</h2>
            <p className="font-iw-sans text-base text-iw-slate mt-4 max-w-2xl mx-auto">The continuity layer between humans, AI systems, enterprise applications, and organizational memory.</p>
          </div>
          {/* Bento Grid - Asymmetrical Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto auto-rows-max">
            {/* Large item - top left, spans 2 cols */}
            <div className="capability-item md:col-span-2 p-8 bg-iw-paper rounded-lg border border-iw-rule">
              <h3 className="font-iw-display text-2xl tracking-wide text-iw-ink mb-3">Preserve Conversations</h3>
              <p className="font-iw-sans text-base text-iw-slate leading-relaxed">Every thread and turn persists across ChatGPT, Claude, Gemini, and your internal systems. No context is ever lost.</p>
            </div>
            {/* Small item - top right */}
            <div className="capability-item p-6 bg-iw-paper rounded-lg border border-iw-rule">
              <h3 className="font-iw-display text-lg tracking-wide text-iw-ink mb-2">Maintain Decisions</h3>
              <p className="font-iw-sans text-sm text-iw-slate leading-relaxed">Decisions stay connected to their full reasoning context.</p>
            </div>
            {/* Small item - middle left */}
            <div className="capability-item p-6 bg-iw-paper rounded-lg border border-iw-rule">
              <h3 className="font-iw-display text-lg tracking-wide text-iw-ink mb-2">Compound Context</h3>
              <p className="font-iw-sans text-sm text-iw-slate leading-relaxed">Knowledge builds over time, never resets.</p>
            </div>
            {/* Large item - middle/bottom right, spans 2 cols */}
            <div className="capability-item md:col-span-2 p-8 bg-iw-paper rounded-lg border border-iw-rule">
              <h3 className="font-iw-display text-2xl tracking-wide text-iw-ink mb-3">Enable Reasoning</h3>
              <p className="font-iw-sans text-base text-iw-slate leading-relaxed">AI understands the why behind every decision. Organizational reasoning becomes visible, auditable, and executable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WORKS ACROSS AI STACK ─── */}
      <section className="section-padding-y bg-iw-forest">
        <div className="section-padding">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="editorial-heading text-3xl sm:text-4xl text-iw-paper mb-6">WORKS ACROSS YOUR AI STACK</h2>
            <p className="font-iw-sans text-base text-iw-paper/70 leading-relaxed mb-8">ChatGPT ↔ Claude ↔ Gemini ↔ Open WebUI ↔ Internal Agents</p>
            <p className="font-iw-sans text-base text-iw-paper/70 leading-relaxed">One shared continuity layer. One source of truth for organizational memory.</p>
          </div>
        </div>
      </section>

      {/* ─── EXPANSION: BEYOND CONTINUITY ─── */}
      <section className="expansion-section section-padding-y bg-iw-paper">
        <div className="section-padding">
          <SectionLabel label="The Expansion" />
          <h2 className="editorial-heading text-3xl sm:text-4xl text-iw-ink mb-12 text-center">ONCE CONTINUITY EXISTS, ORGANIZATIONS UNLOCK</h2>
          {/* Bento Grid - Mixed sizes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Item 1 - Large, spans 1 col */}
            <div className="expansion-item p-8 bg-iw-paper-warm rounded-lg border border-iw-rule lg:row-span-2 flex flex-col justify-center">
              <h3 className="font-iw-display text-2xl tracking-wide text-iw-ink mb-3">Digital Twins</h3>
              <p className="font-iw-sans text-base text-iw-slate leading-relaxed">Persistent AI counterparts for people, teams, and functions that understand your business.</p>
            </div>
            {/* Item 2 */}
            <div className="expansion-item p-6 bg-iw-paper-warm rounded-lg border border-iw-rule">
              <h3 className="font-iw-display text-lg tracking-wide text-iw-ink mb-2">Governance</h3>
              <p className="font-iw-sans text-sm text-iw-slate leading-relaxed">Approval flows, policies, and controls across all systems.</p>
            </div>
            {/* Item 3 */}
            <div className="expansion-item p-6 bg-iw-paper-warm rounded-lg border border-iw-rule">
              <h3 className="font-iw-display text-lg tracking-wide text-iw-ink mb-2">Knowledge Layer</h3>
              <p className="font-iw-sans text-sm text-iw-slate leading-relaxed">Organizational memory that compounds over time.</p>
            </div>
            {/* Item 4 */}
            <div className="expansion-item p-6 bg-iw-paper-warm rounded-lg border border-iw-rule">
              <h3 className="font-iw-display text-lg tracking-wide text-iw-ink mb-2">Operations</h3>
              <p className="font-iw-sans text-sm text-iw-slate leading-relaxed">Work gets executed directly from context.</p>
            </div>
            {/* Item 5 */}
            <div className="expansion-item p-6 bg-iw-paper-warm rounded-lg border border-iw-rule">
              <h3 className="font-iw-display text-lg tracking-wide text-iw-ink mb-2">Integrations</h3>
              <p className="font-iw-sans text-sm text-iw-slate leading-relaxed">Connect enterprise systems through one capability layer.</p>
            </div>
            {/* Item 6 - Large, spans 1 col */}
            <div className="expansion-item p-8 bg-iw-paper-warm rounded-lg border border-iw-rule lg:row-span-2 flex flex-col justify-center">
              <h3 className="font-iw-display text-2xl tracking-wide text-iw-ink mb-3">Architecture</h3>
              <p className="font-iw-sans text-base text-iw-slate leading-relaxed">L1–L7 framework connecting humans, AI, and business seamlessly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INTEGRATEWISE PLATFORM (Supporting) ─── */}
      <section className="twin-section section-padding-y bg-iw-forest text-iw-paper">
        <div className="section-padding max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel label="The Platform" />
              <h2 className="editorial-heading text-3xl sm:text-4xl text-iw-paper mb-4">ONE CONNECTED WORKSPACE</h2>
              <p className="font-iw-sans text-base text-iw-paper/70 leading-relaxed mb-6">IntegrateWise is the workspace where continuity becomes operational. Your Digital Twin understands your business. Governance ensures nothing happens without your approval. Knowledge compounds. Work gets done.</p>
              <p className="font-iw-sans text-sm text-iw-paper/60 leading-relaxed mb-8">Built on five foundational pillars: One Surface, Memory, Operating Environment, Governance, and Continuity.</p>
              <Link to="/platform" className="inline-flex items-center justify-center px-6 py-3 bg-iw-gold text-iw-forest font-iw-sans font-semibold text-sm rounded-full hover:bg-iw-gold-pale">Explore IntegrateWise <ArrowRight size={16} className="ml-2" /></Link>
            </div>
            <div><BrowserFrame className="h-96"><img src="./images/twin-workbench.webp" alt="Twin Workbench" className="w-full object-contain" /></BrowserFrame></div>
          </div>
        </div>
      </section>

      {/* ─── THE FIVE PILLARS ─── */}
      <section className="pillars-section section-padding-y bg-iw-paper-warm">
        <div className="section-padding">
          <div className="text-center mb-12">
            <SectionLabel label="Foundation" />
            <h2 className="editorial-heading text-3xl sm:text-4xl text-iw-ink">BUILT FOR HOW YOU ACTUALLY WORK</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-heavy border-iw-rule max-w-5xl mx-auto">
            {[
              { num: '01', title: 'One Surface', desc: 'One workspace for everything.' },
              { num: '02', title: 'Memory', desc: 'Your AI remembers what matters.' },
              { num: '03', title: 'Operating Environment', desc: 'Your Twin understands your business.' },
              { num: '04', title: 'Governance', desc: 'Nothing happens without your approval.' },
              { num: '05', title: 'Continuity', desc: 'Knowledge compounds over time.' },
            ].map((pillar, i) => (
              <div key={i} className="pillar-item p-6 sm:p-8 border-b border-iw-rule"><span className="font-iw-mono text-xs text-iw-gold uppercase tracking-widest block mb-3">{pillar.num}</span><h3 className="font-iw-display text-xl tracking-wide text-iw-ink mb-3">{pillar.title}</h3><p className="font-iw-sans text-sm text-iw-slate leading-relaxed">{pillar.desc}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THREE SURFACES ─── */}
      <section className="surfaces-section section-padding-y bg-iw-paper">
        <div className="section-padding text-center">
          <SectionLabel label="Experience" />
          <h2 className="editorial-heading text-3xl sm:text-4xl text-iw-ink mb-4">THREE SURFACES. ONE CONTEXT.</h2>
          <div className="inline-flex gap-1 p-1 bg-iw-paper-warm border border-iw-rule rounded-full mb-8">
            {(['data', 'twin', 'governance'] as const).map((tab) => (
              <button key={tab} onClick={() => setActiveSurface(tab)} className={`px-5 py-2 font-iw-sans text-sm font-semibold rounded-full ${activeSurface === tab ? 'bg-iw-forest text-iw-paper' : 'text-iw-slate'}`}>{tab === 'data' ? 'Your Data' : tab === 'twin' ? 'Digital Twin' : 'Governance'}</button>
            ))}
          </div>
          <BrowserFrame className="h-96"><img src={surfaceImages[activeSurface]} alt={surfaceLabels[activeSurface]} className="w-full h-96 object-cover object-top" /></BrowserFrame>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="cta-final section-padding-y bg-iw-forest">
        <div className="section-padding text-center max-w-2xl mx-auto">
          <h2 className="editorial-heading text-3xl sm:text-4xl text-iw-paper mb-6">READY FOR CONTINUITY?</h2>
          <p className="font-iw-sans text-base text-iw-paper/70 leading-relaxed mb-8">See how IW Continuity Bridge transforms your AI operations and unlocks organizational memory.</p>
          <a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className="inline-flex items-center justify-center px-7 py-3 bg-iw-gold text-iw-forest font-iw-sans font-semibold text-sm rounded-full hover:bg-iw-gold-pale">Book a Demo</a>
        </div>
      </section>
    </div>
  );
}
