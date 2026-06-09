import { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSeo } from '../hooks/useSeo';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useSeo("IntegrateWise - The Continuity Layer for AI", "Your AI already knows your tools. Now make it remember. Give AI memory across ChatGPT, Claude, Gemini, and enterprise systems.");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-badge', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' });
      gsap.from('.hero-headline', { y: 40, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.1 });
      gsap.from('.hero-sub', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 });
      gsap.from('.hero-buttons', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out', delay: 0.3 });
      gsap.from('.trust-strip', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out', delay: 0.4 });
      gsap.from('.problem-card', { y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.problem-section', start: 'top 80%' } });
      gsap.from('.solution-card', { y: 30, opacity: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: '.solution-section', start: 'top 80%' } });
      gsap.from('.comparison-item', { y: 30, opacity: 0, duration: 0.6, ease: 'power3.out', scrollTrigger: { trigger: '.comparison-section', start: 'top 80%' } });
      gsap.from('.capability-item', { y: 30, opacity: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: '.capabilities-section', start: 'top 80%' } });
      gsap.from('.pricing-card', { y: 20, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.pricing-section', start: 'top 85%' } });
      gsap.from('.final-cta', { y: 40, opacity: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '.final-cta', start: 'top 80%' } });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref}>
      {/* HERO SECTION */}
      <section className="min-h-screen bg-iw-forest flex items-center">
        <div className="section-padding w-full py-24">
          <div className="max-w-3xl mx-auto text-center">
            <span className="hero-badge inline-block font-iw-mono text-xs uppercase tracking-widest text-iw-gold mb-6">The Continuity Layer for AI</span>
            <h1 className="hero-headline editorial-heading text-5xl md:text-6xl lg:text-7xl text-iw-paper leading-[1.1] mb-6">Your AI already knows your tools. Now make it remember.</h1>
            <p className="hero-sub editorial-serif text-lg md:text-xl text-iw-paper/80 mb-10 leading-relaxed max-w-2xl mx-auto">IW Continuity Bridge preserves context, memory, decisions, and knowledge across AI systems, enterprise applications, and teams.</p>
            
            <div className="hero-buttons flex flex-wrap gap-4 justify-center mb-12">
              <a href="#" className="inline-flex items-center justify-center px-8 py-3 bg-iw-gold text-iw-forest font-iw-sans font-semibold text-sm rounded-full whitespace-nowrap transition-all duration-300 hover:bg-iw-gold-light">
                Start Free
              </a>
              <a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className="inline-flex items-center justify-center px-8 py-3 border-2 border-iw-paper/40 text-iw-paper font-iw-sans font-semibold text-sm rounded-full whitespace-nowrap transition-all duration-300 hover:border-iw-paper/80">
                Book Demo
              </a>
            </div>

            <div className="trust-strip flex flex-wrap items-center justify-center gap-2 text-xs font-iw-mono text-iw-paper/60">
              <span>Works with</span>
              <span>ChatGPT</span>
              <span className="text-iw-gold">•</span>
              <span>Claude</span>
              <span className="text-iw-gold">•</span>
              <span>Gemini</span>
              <span className="text-iw-gold">•</span>
              <span>Open WebUI</span>
              <span className="text-iw-gold">•</span>
              <span>Cursor</span>
              <span className="text-iw-gold">•</span>
              <span>Windsurf</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="problem-section section-padding-y bg-iw-paper">
        <div className="section-padding max-w-3xl mx-auto text-center">
          <span className="font-iw-mono text-xs uppercase tracking-widest text-iw-gold block mb-6">The Problem</span>
          <h2 className="editorial-heading text-4xl md:text-5xl text-iw-ink mb-6">AI Forgets</h2>
          
          <div className="space-y-4 mb-12">
            <p className="font-iw-sans text-base md:text-lg text-iw-slate leading-relaxed">Every conversation starts over.</p>
            <p className="font-iw-sans text-base md:text-lg text-iw-slate leading-relaxed">Knowledge gets trapped.</p>
            <p className="font-iw-sans text-base md:text-lg text-iw-slate leading-relaxed">Context disappears.</p>
            <p className="font-iw-sans text-base md:text-lg text-iw-slate leading-relaxed">Teams repeat work.</p>
          </div>

          <p className="font-iw-sans text-base text-iw-forest/70 italic mb-8">Your AI is powerful. It simply has no memory.</p>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="solution-section section-padding-y bg-iw-paper-warm">
        <div className="section-padding max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-iw-mono text-xs uppercase tracking-widest text-iw-gold block mb-6">The Solution</span>
            <h2 className="editorial-heading text-4xl md:text-5xl text-iw-ink mb-8">Introducing IW Continuity Bridge</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="solution-card text-center">
              <p className="font-iw-mono text-xs uppercase tracking-widest text-iw-forest mb-6">Human</p>
              <div className="h-12 flex items-center justify-center text-iw-gold mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
            
            <div className="solution-card text-center order-first md:order-none">
              <div className="p-6 bg-iw-paper rounded-lg border-2 border-iw-gold">
                <p className="font-iw-display text-2xl text-iw-ink tracking-wide">IW Continuity Bridge</p>
              </div>
            </div>

            <div className="solution-card text-center">
              <div className="h-12 flex items-center justify-center text-iw-gold mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </div>
              <p className="font-iw-mono text-xs uppercase tracking-widest text-iw-forest">AI Systems</p>
            </div>
          </div>

          <div className="text-center">
            <p className="font-iw-sans text-base md:text-lg text-iw-slate mb-4">One continuity layer.</p>
            <p className="font-iw-sans text-base md:text-lg text-iw-slate mb-4">Every AI sees the same truth.</p>
            <p className="font-iw-sans text-base md:text-lg text-iw-slate">Every session starts with context.</p>
          </div>
        </div>
      </section>

      {/* BEFORE vs AFTER */}
      <section className="comparison-section section-padding-y bg-iw-paper">
        <div className="section-padding max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-iw-mono text-xs uppercase tracking-widest text-iw-gold block mb-6">Transformation</span>
            <h2 className="editorial-heading text-4xl md:text-5xl text-iw-ink">Before vs After</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="comparison-item p-8 bg-iw-paper-warm border-2 border-iw-rule rounded-lg">
              <h3 className="font-iw-display text-xl text-iw-ink mb-6 tracking-wide">Before</h3>
              <ul className="space-y-3 font-iw-sans text-sm text-iw-slate">
                <li className="flex items-start gap-3">
                  <span className="text-iw-forest font-bold mt-0.5">✕</span>
                  <span>ChatGPT → HubSpot</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-iw-forest font-bold mt-0.5">✕</span>
                  <span>Claude → HubSpot</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-iw-forest font-bold mt-0.5">✕</span>
                  <span>Gemini → HubSpot</span>
                </li>
                <p className="text-xs text-iw-slate italic mt-4">Every AI builds its own view.</p>
              </ul>
            </div>

            <div className="comparison-item p-8 bg-iw-gold/10 border-2 border-iw-gold rounded-lg">
              <h3 className="font-iw-display text-xl text-iw-ink mb-6 tracking-wide">After</h3>
              <ul className="space-y-3 font-iw-sans text-sm text-iw-slate">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-iw-gold flex-shrink-0 mt-0.5" />
                  <span>HubSpot → Bridge</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-iw-gold flex-shrink-0 mt-0.5" />
                  <span>Salesforce → Bridge</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-iw-gold flex-shrink-0 mt-0.5" />
                  <span>Bridge → All AIs</span>
                </li>
                <p className="text-xs text-iw-slate italic mt-4 font-semibold">Connect once. Normalize once. Remember forever.</p>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT CONTINUITY UNLOCKS */}
      <section className="capabilities-section section-padding-y bg-iw-paper-warm">
        <div className="section-padding">
          <div className="text-center mb-12">
            <span className="font-iw-mono text-xs uppercase tracking-widest text-iw-gold block mb-6">Capabilities</span>
            <h2 className="editorial-heading text-4xl md:text-5xl text-iw-ink">What Continuity Unlocks</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'Memory', desc: 'Conversations, decisions, and history.' },
              { title: 'Knowledge', desc: 'Documents, processes, and relationships.' },
              { title: 'Intelligence', desc: 'Signals, patterns, and recommendations.' },
              { title: 'Governance', desc: 'Approvals, audit trails, and controls.' },
              { title: 'Digital Twin', desc: 'Persistent AI counterparts for people and teams.' },
              { title: 'Operations', desc: 'Work executed from shared context.' },
            ].map((item, i) => (
              <div key={i} className="capability-item p-6 bg-iw-paper border-2 border-iw-rule rounded-lg hover:border-iw-gold transition-colors">
                <h3 className="font-iw-display text-lg text-iw-ink mb-2 tracking-wide">{item.title}</h3>
                <p className="font-iw-sans text-sm text-iw-slate leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIGITAL TWIN */}
      <section className="section-padding-y bg-iw-forest text-iw-paper">
        <div className="section-padding max-w-3xl mx-auto text-center">
          <span className="font-iw-mono text-xs uppercase tracking-widest text-iw-gold block mb-6">Intelligence</span>
          <h2 className="editorial-heading text-4xl md:text-5xl mb-6">Meet Your Digital Twin</h2>
          <p className="font-iw-sans text-base md:text-lg text-iw-paper/80 leading-relaxed mb-4">When continuity compounds, memory becomes understanding.</p>
          <p className="font-iw-sans text-base md:text-lg text-iw-paper/80 leading-relaxed mb-8">Your Twin remembers conversations, decisions, knowledge, processes, and relationships.</p>
          <p className="font-iw-sans text-sm text-iw-paper/60 italic">The more continuity accumulates, the smarter your Twin becomes.</p>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing-section section-padding-y bg-iw-paper">
        <div className="section-padding">
          <div className="text-center mb-12">
            <span className="font-iw-mono text-xs uppercase tracking-widest text-iw-gold block mb-6">Pricing</span>
            <h2 className="editorial-heading text-4xl md:text-5xl text-iw-ink">Simple. Transparent.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'Free', aiSystems: '1 AI System' },
              { name: 'Starter', aiSystems: '3 AI Systems' },
              { name: 'Pro', aiSystems: 'Unlimited AI Systems', highlight: true },
              { name: 'Enterprise', aiSystems: 'Organization-wide' },
            ].map((plan, i) => (
              <div key={i} className={`pricing-card p-6 rounded-lg border-2 transition-all text-center ${plan.highlight ? 'border-iw-gold bg-iw-gold/5' : 'border-iw-rule bg-iw-paper-warm'}`}>
                <h3 className="font-iw-display text-xl text-iw-ink mb-3 tracking-wide">{plan.name}</h3>
                <p className="font-iw-mono text-xs text-iw-gold">{plan.aiSystems}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta section-padding-y bg-iw-forest text-iw-paper">
        <div className="section-padding max-w-3xl mx-auto text-center">
          <h2 className="editorial-heading text-4xl md:text-5xl mb-8">Your AI is ready.</h2>
          <p className="font-iw-sans text-xl md:text-2xl text-iw-paper/80 mb-12">Give it memory.</p>
          
          <div className="mb-8">
            <p className="font-iw-sans text-base text-iw-paper/70 mb-4">Start using IW Continuity Bridge in minutes.</p>
            <ul className="font-iw-sans text-sm text-iw-paper/70 space-y-2 mb-8">
              <li>No migration.</li>
              <li>No replacement.</li>
              <li>Just continuity.</li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#" className="inline-flex items-center justify-center px-8 py-3 bg-iw-gold text-iw-forest font-iw-sans font-semibold text-sm rounded-full hover:bg-iw-gold-light transition-colors">
              Start Free
            </a>
            <a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className="inline-flex items-center justify-center px-8 py-3 border-2 border-iw-paper/40 text-iw-paper font-iw-sans font-semibold text-sm rounded-full hover:border-iw-paper/80 transition-colors">
              Book Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
