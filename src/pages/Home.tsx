import { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSeo } from '../hooks/useSeo';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useSeo("IntegrateWise - Continuity Bridge for AI", "Your AI already knows your tools. Now make it remember. Preserve conversations, decisions, knowledge, and context across ChatGPT, Claude, Gemini, Open WebUI, Cursor, Windsurf, and enterprise systems.");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-badge', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' });
      gsap.from('.hero-headline', { y: 40, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.1 });
      gsap.from('.hero-sub', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 });
      gsap.from('.hero-body', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out', delay: 0.3 });
      gsap.from('.hero-buttons', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out', delay: 0.4 });
      gsap.from('.hero-features', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out', delay: 0.5 });
      gsap.from('.problem-item', { y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.problem-section', start: 'top 80%' } });
      gsap.from('.feature-card', { y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.features-section', start: 'top 80%' } });
      gsap.from('.twin-item', { y: 30, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: '.twin-section', start: 'top 80%' } });
      gsap.from('.step-item', { y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.steps-section', start: 'top 80%' } });
      gsap.from('.outcome-item', { y: 20, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.outcomes-section', start: 'top 85%' } });
      gsap.from('.pricing-card', { y: 20, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.pricing-section', start: 'top 85%' } });
      gsap.from('.cta-final', { y: 40, opacity: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '.cta-final', start: 'top 80%' } });
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
            <h1 className="hero-headline editorial-heading text-4xl md:text-5xl lg:text-6xl text-iw-paper leading-[1.1] mb-6">Your AI already knows your tools. Now make it remember.</h1>
            <p className="hero-sub editorial-serif text-lg md:text-xl text-iw-paper/80 mb-8 leading-relaxed italic max-w-2xl mx-auto">IW Continuity Bridge preserves conversations, decisions, knowledge, and context across ChatGPT, Claude, Gemini, Open WebUI, Cursor, Windsurf, and enterprise systems.</p>
            <div className="hero-features flex flex-wrap items-center justify-center gap-3 mb-8 text-sm font-iw-mono text-iw-paper/70">
              <span>Works with:</span>
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
            <div className="hero-buttons flex flex-wrap gap-4 justify-center mb-12">
              <a href="#" className="inline-flex items-center justify-center px-7 py-3 bg-iw-gold text-iw-forest font-iw-sans font-semibold text-sm rounded-full whitespace-nowrap transition-all duration-300 hover:bg-iw-gold-light">Start Free</a>
              <a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className="inline-flex items-center justify-center px-7 py-3 border-2 border-iw-paper/30 text-iw-paper font-iw-sans font-semibold text-sm rounded-full whitespace-nowrap transition-all duration-300 hover:border-iw-paper/60">Book Demo</a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 text-center text-iw-paper/60 font-iw-mono text-xs">
              <div><div className="font-iw-sans font-bold text-iw-gold text-lg mb-1">1M+</div>memories stored</div>
              <div className="w-px h-6 bg-iw-paper/20"></div>
              <div><div className="font-iw-sans font-bold text-iw-gold text-lg mb-1">870+</div>organizations</div>
              <div className="w-px h-6 bg-iw-paper/20"></div>
              <div><div className="font-iw-sans font-bold text-iw-gold text-lg mb-1">&lt;100ms</div>query latency</div>
              <div className="w-px h-6 bg-iw-paper/20"></div>
              <div><div className="font-iw-sans font-bold text-iw-gold text-lg mb-1">99.9%</div>uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="problem-section section-padding-y bg-iw-paper">
        <div className="section-padding">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="font-iw-mono text-xs uppercase tracking-widest text-iw-gold block mb-4">The Problem</span>
            <h2 className="editorial-heading text-3xl md:text-4xl text-iw-ink mb-6">AI WAS NEVER THE PROBLEM. CONTINUITY IS.</h2>
            <p className="font-iw-sans text-base text-iw-slate leading-relaxed">Every AI session starts over. Knowledge gets trapped in conversations. Context disappears between tools. Teams repeat work. Decisions are lost. Your AI is powerful. It simply has no memory.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {['Every AI session starts over', 'Knowledge gets trapped in conversations', 'Context disappears between tools', 'Teams repeat work', 'Decisions are lost', 'Information silos multiply'].map((item, i) => (
              <div key={i} className="problem-item p-4 bg-iw-paper-warm border border-iw-rule rounded-lg font-iw-mono text-xs text-iw-forest uppercase tracking-widest">{item}</div>
            ))}
          </div>
        </div>
      </section>

      {/* BRIDGE SECTION */}
      <section className="section-padding-y bg-iw-paper-warm">
        <div className="section-padding max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-iw-mono text-xs uppercase tracking-widest text-iw-gold block mb-4">The Solution</span>
            <h2 className="editorial-heading text-3xl md:text-4xl text-iw-ink">INTRODUCING IW CONTINUITY BRIDGE</h2>
            <p className="font-iw-sans text-base text-iw-slate leading-relaxed mt-4">The continuity layer between humans, AI systems, enterprise applications, and organizational memory.</p>
          </div>
          <div className="bg-iw-paper p-8 md:p-12 rounded-xl border-2 border-iw-rule">
            <div className="space-y-8">
              <div className="text-center">
                <p className="font-iw-sans text-sm text-iw-slate mb-6">Human</p>
                <div className="w-8 h-8 mx-auto bg-iw-gold rounded-full flex items-center justify-center text-iw-forest mb-6">↓</div>
              </div>
              <div className="text-center">
                <p className="font-iw-display text-2xl text-iw-ink tracking-wide">IW Continuity Bridge</p>
                <div className="w-8 h-8 mx-auto bg-iw-gold rounded-full flex items-center justify-center text-iw-forest my-6">↓</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="font-iw-display text-xl text-iw-ink mb-2">AI Systems</p>
                  <p className="font-iw-mono text-xs text-iw-slate">Claude, ChatGPT, Gemini</p>
                </div>
                <div>
                  <p className="font-iw-display text-xl text-iw-ink mb-2">Applications</p>
                  <p className="font-iw-mono text-xs text-iw-slate">CRM, Email, Calendar</p>
                </div>
                <div>
                  <p className="font-iw-display text-xl text-iw-ink mb-2">Knowledge</p>
                  <p className="font-iw-mono text-xs text-iw-slate">Documents, Decisions</p>
                </div>
              </div>
            </div>
            <p className="text-center font-iw-sans text-sm text-iw-slate mt-8 pt-8 border-t border-iw-rule">One source of context. One memory layer. Every AI reads the same truth.</p>
          </div>
        </div>
      </section>

      {/* BEFORE/AFTER SECTION */}
      <section className="section-padding-y bg-iw-paper">
        <div className="section-padding max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-iw-mono text-xs uppercase tracking-widest text-iw-gold block mb-4">Transformation</span>
            <h2 className="editorial-heading text-3xl md:text-4xl text-iw-ink">THE INVENTION THAT CHANGES EVERYTHING</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-iw-paper-warm border-2 border-iw-rule rounded-xl">
              <h3 className="font-iw-display text-2xl text-iw-ink mb-6 tracking-wide">Before</h3>
              <ul className="space-y-3 font-iw-sans text-sm text-iw-slate">
                <li className="flex items-start gap-3">
                  <span className="text-iw-forest mt-1">×</span>
                  <span>Claude reads HubSpot directly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-iw-forest mt-1">×</span>
                  <span>ChatGPT reads HubSpot directly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-iw-forest mt-1">×</span>
                  <span>Every AI creates its own view</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-iw-forest mt-1">×</span>
                  <span>10 tools = 10 integrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-iw-forest mt-1">×</span>
                  <span>You become the API</span>
                </li>
              </ul>
            </div>
            <div className="p-8 bg-iw-gold/10 border-2 border-iw-gold rounded-xl">
              <h3 className="font-iw-display text-2xl text-iw-ink mb-6 tracking-wide">After</h3>
              <ul className="space-y-3 font-iw-sans text-sm text-iw-slate">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-iw-gold mt-0 flex-shrink-0" />
                  <span>Claude reads Continuity Bridge</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-iw-gold mt-0 flex-shrink-0" />
                  <span>ChatGPT reads Continuity Bridge</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-iw-gold mt-0 flex-shrink-0" />
                  <span>Every AI sees the same truth</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-iw-gold mt-0 flex-shrink-0" />
                  <span>10 tools = 1 integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-iw-gold mt-0 flex-shrink-0" />
                  <span>The Bridge becomes memory</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features-section section-padding-y bg-iw-paper-warm">
        <div className="section-padding">
          <div className="text-center mb-12">
            <span className="font-iw-mono text-xs uppercase tracking-widest text-iw-gold block mb-4">Capabilities</span>
            <h2 className="editorial-heading text-3xl md:text-4xl text-iw-ink">WHAT CONTINUITY UNLOCKS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'Memory', desc: 'Search conversations, decisions, artifacts, and organizational history.' },
              { title: 'Knowledge', desc: 'Every document, process, and relationship connected.' },
              { title: 'Entity360', desc: 'Customers, projects, partners, systems, and teams.' },
              { title: 'Intelligence', desc: 'Signals, insights, patterns, recommendations.' },
              { title: 'Governance', desc: 'Approvals, audit trails, policies, controls.' },
              { title: 'Agent Collaboration', desc: 'Multiple agents operating from the same memory.' },
            ].map((feature, i) => (
              <div key={i} className="feature-card p-6 bg-iw-paper border-2 border-iw-rule rounded-lg hover:border-iw-gold transition-colors">
                <h3 className="font-iw-display text-xl text-iw-ink mb-3 tracking-wide">{feature.title}</h3>
                <p className="font-iw-sans text-sm text-iw-slate leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIGITAL TWIN SECTION */}
      <section className="twin-section section-padding-y bg-iw-forest text-iw-paper">
        <div className="section-padding max-w-4xl mx-auto">
          <div className="text-center">
            <span className="font-iw-mono text-xs uppercase tracking-widest text-iw-gold block mb-4">Intelligence</span>
            <h2 className="editorial-heading text-3xl md:text-4xl mb-6">MEET YOUR DIGITAL TWIN</h2>
            <p className="font-iw-sans text-base text-iw-paper/80 leading-relaxed mb-8 max-w-2xl mx-auto">When continuity compounds, memory becomes understanding. Your Twin remembers conversations, decisions, processes, knowledge, and relationships. And helps you operate from them.</p>
            <p className="font-iw-sans text-sm text-iw-paper/60 italic mb-8">The more continuity accumulates, the smarter your Twin becomes.</p>
            <a href="/twin" className="inline-flex items-center justify-center px-6 py-3 bg-iw-gold text-iw-forest font-iw-sans font-semibold text-sm rounded-full hover:bg-iw-gold-light transition-colors">
              Explore the Digital Twin <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="steps-section section-padding-y bg-iw-paper">
        <div className="section-padding">
          <div className="text-center mb-12">
            <span className="font-iw-mono text-xs uppercase tracking-widest text-iw-gold block mb-4">Getting Started</span>
            <h2 className="editorial-heading text-3xl md:text-4xl text-iw-ink">HOW IT WORKS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { num: '01', title: 'Connect your AI', desc: 'Add IntegrateWise to ChatGPT, Claude, Gemini, Open WebUI, Cursor, Windsurf, or MCP clients. Time: Under 2 minutes.' },
              { num: '02', title: 'Bridge normalizes', desc: 'Data, conversations, entities, memory, and knowledge become a shared model.' },
              { num: '03', title: 'AI remembers forever', desc: 'Every AI accesses the same organizational memory across every session, model, and agent.' },
            ].map((step, i) => (
              <div key={i} className="step-item">
                <span className="font-iw-mono text-sm text-iw-gold font-bold block mb-4">{step.num}</span>
                <h3 className="font-iw-display text-xl text-iw-ink mb-3 tracking-wide">{step.title}</h3>
                <p className="font-iw-sans text-sm text-iw-slate leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES SECTION */}
      <section className="outcomes-section section-padding-y bg-iw-paper-warm">
        <div className="section-padding">
          <div className="text-center mb-12">
            <span className="font-iw-mono text-xs uppercase tracking-widest text-iw-gold block mb-4">Growth</span>
            <h2 className="editorial-heading text-3xl md:text-4xl text-iw-ink">ONE PLATFORM. MULTIPLE OUTCOMES.</h2>
            <p className="font-iw-sans text-base text-iw-slate leading-relaxed mt-4">Start with Continuity Bridge. Expand into:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {['Digital Twins', 'Knowledge Systems', 'Governance', 'Operations', 'Workbenches', 'Agent Orchestration', 'Insights', 'Custom Workflows'].map((outcome, i) => (
              <div key={i} className="outcome-item p-4 bg-iw-paper border border-iw-rule rounded-lg text-center">
                <p className="font-iw-sans text-sm text-iw-forest font-medium">• {outcome}</p>
              </div>
            ))}
          </div>
          <p className="text-center font-iw-sans text-sm text-iw-slate mt-8">No migration required.</p>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="pricing-section section-padding-y bg-iw-paper">
        <div className="section-padding">
          <div className="text-center mb-12">
            <span className="font-iw-mono text-xs uppercase tracking-widest text-iw-gold block mb-4">Pricing</span>
            <h2 className="editorial-heading text-3xl md:text-4xl text-iw-ink">SIMPLE. TRANSPARENT.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'Free', aiSystems: '1 AI System', features: ['Basic memory', 'Single AI', 'Community support'] },
              { name: 'Starter', aiSystems: '3 AI Systems', features: ['Extended memory', 'Multiple AIs', 'Email support', 'Basic analytics'] },
              { name: 'Pro', aiSystems: 'Unlimited AI Systems', features: ['Unlimited memory', 'All AIs', 'Priority support', 'Advanced analytics', 'Custom integrations'], highlight: true },
              { name: 'Enterprise', aiSystems: 'Organization-wide', features: ['Dedicated instance', 'SSO & SAML', 'Custom SLA', 'Dedicated support', 'Advanced governance'] },
            ].map((plan, i) => (
              <div key={i} className={`pricing-card p-6 rounded-lg border-2 transition-all ${plan.highlight ? 'border-iw-gold bg-iw-gold/5' : 'border-iw-rule bg-iw-paper-warm'}`}>
                <h3 className="font-iw-display text-xl text-iw-ink mb-2 tracking-wide">{plan.name}</h3>
                <p className="font-iw-mono text-xs text-iw-gold mb-6">{plan.aiSystems}</p>
                <ul className="space-y-2 font-iw-sans text-sm text-iw-slate mb-6">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-iw-gold mt-1 flex-shrink-0">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-2 rounded-full font-iw-sans font-semibold text-sm transition-colors ${plan.highlight ? 'bg-iw-gold text-iw-forest hover:bg-iw-gold-light' : 'border border-iw-rule text-iw-forest hover:bg-iw-paper'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="cta-final section-padding-y bg-iw-forest text-iw-paper">
        <div className="section-padding text-center max-w-2xl mx-auto">
          <h2 className="editorial-heading text-4xl md:text-5xl mb-6">YOUR AI IS READY. GIVE IT MEMORY.</h2>
          <p className="font-iw-sans text-base text-iw-paper/80 mb-8 leading-relaxed">Connect IntegrateWise to any MCP-compatible AI in minutes. No migration. No replacement. Just continuity.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#" className="inline-flex items-center justify-center px-7 py-3 bg-iw-gold text-iw-forest font-iw-sans font-semibold text-sm rounded-full hover:bg-iw-gold-light transition-colors">Start Free</a>
            <a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className="inline-flex items-center justify-center px-7 py-3 border-2 border-iw-paper/30 text-iw-paper font-iw-sans font-semibold text-sm rounded-full hover:border-iw-paper/60 transition-colors">Talk to Founder</a>
          </div>
        </div>
      </section>
    </div>
  );
}
