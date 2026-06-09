import { useEffect, useRef } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSeo } from '../hooks/useSeo';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useSeo(
    "IntegrateWise — Enterprise Capability Fabric for AI",
    "Make AI replaceable. Keep capabilities persistent. Stop building point-to-point integrations. The continuity layer that decouples enterprise systems from AI vendors."
  );
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-badge', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' });
      gsap.from('.hero-headline', { y: 40, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.1 });
      gsap.from('.hero-sub', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 });
      gsap.from('.hero-buttons', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out', delay: 0.3 });
      gsap.from('.trust-strip', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out', delay: 0.4 });
      gsap.from('.problem-card', { y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.problem-section', start: 'top 80%' } });
      gsap.from('.solution-graphic', { y: 40, opacity: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '.solution-section', start: 'top 85%' } });
      gsap.from('.comparison-column', { y: 30, opacity: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: '.comparison-section', start: 'top 80%' } });
      gsap.from('.value-card', { y: 30, opacity: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: '.value-section', start: 'top 80%' } });
      gsap.from('.pricing-tier', { y: 20, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.pricing-section', start: 'top 85%' } });
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
            <span className="hero-badge inline-block font-iw-mono text-xs uppercase tracking-widest text-iw-gold mb-6">Enterprise Capability Fabric</span>
            <h1 className="hero-headline editorial-heading text-5xl md:text-6xl lg:text-7xl text-iw-paper leading-[1.1] mb-6">Make AI replaceable. Keep capabilities persistent.</h1>
            <p className="hero-sub editorial-serif text-lg md:text-xl text-iw-paper/80 mb-10 leading-relaxed max-w-2xl mx-auto">Stop recreating the point-to-point integration mess at the AI layer. The Continuity Bridge decouples your enterprise systems from AI vendors—just like API gateways solved application integration 20 years ago.</p>
            
            <div className="hero-buttons flex flex-wrap gap-4 justify-center mb-12">
              <a href="#" className="inline-flex items-center justify-center px-8 py-3 bg-iw-gold text-iw-forest font-iw-sans font-semibold text-sm rounded-full whitespace-nowrap transition-all duration-300 hover:bg-iw-gold-light">
                Request Demo
              </a>
              <a href="/architecture" className="inline-flex items-center justify-center px-8 py-3 border-2 border-iw-paper/40 text-iw-paper font-iw-sans font-semibold text-sm rounded-full whitespace-nowrap transition-all duration-300 hover:border-iw-paper/80">
                Learn Architecture <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>

            <div className="trust-strip flex flex-wrap items-center justify-center gap-2 text-xs font-iw-mono text-iw-paper/60">
              <span>Used by Fortune 500 enterprises in</span>
              <span className="text-iw-gold font-semibold">Financial Services • Healthcare • Technology</span>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM: Point-to-Point Integration Explosion */}
      <section className="problem-section py-24 bg-iw-paper section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="editorial-heading text-4xl md:text-5xl text-iw-forest mb-6">The N×M Integration Problem</h2>
            <p className="editorial-serif text-lg text-iw-slate/80 max-w-2xl mx-auto">
              Every new AI system requires custom integrations to every enterprise application. This creates an integration explosion that grows exponentially as you adopt multiple AI tools.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="problem-card bg-red-50 border border-red-200 rounded-lg p-8">
              <div className="text-3xl font-bold text-red-600 mb-3">N × M</div>
              <p className="editorial-serif text-iw-slate">
                N AI systems × M enterprise applications = exponential integration burden
              </p>
            </div>

            <div className="problem-card bg-red-50 border border-red-200 rounded-lg p-8">
              <div className="text-3xl font-bold text-red-600 mb-3">Vendor Lock-in</div>
              <p className="editorial-serif text-iw-slate">
                Switching AI vendors means rebuilding every integration from scratch
              </p>
            </div>

            <div className="problem-card bg-red-50 border border-red-200 rounded-lg p-8">
              <div className="text-3xl font-bold text-red-600 mb-3">No Continuity</div>
              <p className="editorial-serif text-iw-slate">
                Context, decisions, and organizational knowledge disappear when switching AI systems
              </p>
            </div>
          </div>

          <div className="bg-iw-forest/5 rounded-lg p-12 text-center border-l-4 border-iw-gold">
            <p className="editorial-serif text-lg text-iw-slate italic">
              This is exactly the problem enterprises solved 20 years ago with ESBs and API Gateways. You're not building a chatbot wrapper. You're building the infrastructure layer.
            </p>
          </div>
        </div>
      </section>

      {/* THE SOLUTION: Continuity Bridge Architecture */}
      <section className="solution-section py-24 bg-iw-forest section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="editorial-heading text-4xl md:text-5xl text-iw-paper mb-6">The Continuity Bridge</h2>
            <p className="editorial-serif text-lg text-iw-paper/80 max-w-2xl mx-auto">
              A unified capability layer that sits between your enterprise and your AI systems, making both replaceable while preserving organizational knowledge.
            </p>
          </div>

          <div className="solution-graphic bg-iw-paper/10 border border-iw-paper/20 rounded-lg p-12 text-center">
            <div className="grid grid-cols-3 gap-8 items-center">
              <div>
                <h3 className="font-iw-sans font-semibold text-iw-paper mb-4 text-sm uppercase tracking-widest">Enterprise Layer</h3>
                <div className="space-y-2">
                  <div className="bg-iw-paper/20 rounded px-3 py-2 text-xs text-iw-paper">CRM</div>
                  <div className="bg-iw-paper/20 rounded px-3 py-2 text-xs text-iw-paper">ERP</div>
                  <div className="bg-iw-paper/20 rounded px-3 py-2 text-xs text-iw-paper">Data Warehouse</div>
                </div>
              </div>

              <div className="border-l border-r border-iw-gold/30">
                <div className="font-iw-mono text-xs uppercase tracking-widest text-iw-gold mb-4">Continuity Bridge</div>
                <div className="space-y-3">
                  <div className="bg-iw-gold/20 rounded px-3 py-2 text-xs text-iw-gold">Context Normalization</div>
                  <div className="bg-iw-gold/20 rounded px-3 py-2 text-xs text-iw-gold">Capability Mapping</div>
                  <div className="bg-iw-gold/20 rounded px-3 py-2 text-xs text-iw-gold">Knowledge Persistence</div>
                </div>
              </div>

              <div>
                <h3 className="font-iw-sans font-semibold text-iw-paper mb-4 text-sm uppercase tracking-widest">AI Layer</h3>
                <div className="space-y-2">
                  <div className="bg-iw-paper/20 rounded px-3 py-2 text-xs text-iw-paper">ChatGPT</div>
                  <div className="bg-iw-paper/20 rounded px-3 py-2 text-xs text-iw-paper">Claude</div>
                  <div className="bg-iw-paper/20 rounded px-3 py-2 text-xs text-iw-paper">Gemini</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE/AFTER Transformation */}
      <section className="comparison-section py-24 bg-iw-paper section-padding">
        <div className="max-w-5xl mx-auto">
          <h2 className="editorial-heading text-4xl md:text-5xl text-center text-iw-forest mb-16">From Chaos to Control</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="comparison-column">
              <h3 className="font-iw-sans font-semibold text-lg text-red-600 mb-8 uppercase">Without Continuity Bridge</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✕</span>
                  <span className="editorial-serif text-iw-slate">Every AI tool requires custom integrations to every system (N×M problem)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✕</span>
                  <span className="editorial-serif text-iw-slate">Switching AI vendors means rebuilding from scratch</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✕</span>
                  <span className="editorial-serif text-iw-slate">No organizational memory across AI transitions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✕</span>
                  <span className="editorial-serif text-iw-slate">Complex permission and compliance logic everywhere</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">✕</span>
                  <span className="editorial-serif text-iw-slate">Siloed data, isolated AI agents, no enterprise context</span>
                </li>
              </ul>
            </div>

            <div className="comparison-column">
              <h3 className="font-iw-sans font-semibold text-lg text-iw-gold mb-8 uppercase">With Continuity Bridge</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle2 className="text-iw-gold w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="editorial-serif text-iw-slate">Connect enterprise systems once. Any AI consumes capabilities once.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-iw-gold w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="editorial-serif text-iw-slate">Swap AI vendors without rebuilding integrations</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-iw-gold w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="editorial-serif text-iw-slate">Organizational knowledge and context persists across AI transitions</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-iw-gold w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="editorial-serif text-iw-slate">Unified governance, compliance, and data access policies</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-iw-gold w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="editorial-serif text-iw-slate">Enterprise-wide AI agents operating from shared understanding</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUE PROPOSITIONS */}
      <section className="value-section py-24 bg-iw-forest section-padding">
        <div className="max-w-5xl mx-auto">
          <h2 className="editorial-heading text-4xl md:text-5xl text-center text-iw-paper mb-16">The 4 Cs of Continuity</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="value-card bg-iw-paper/10 border border-iw-paper/20 rounded-lg p-8">
              <h3 className="font-iw-sans font-semibold text-lg text-iw-gold mb-4 uppercase">Connect Once</h3>
              <p className="editorial-serif text-iw-paper/90 mb-4">Integrate your enterprise systems to the Continuity Bridge once, then grant access to any AI system—new or existing.</p>
              <p className="font-iw-mono text-xs text-iw-paper/60">No more point-to-point integrations</p>
            </div>

            <div className="value-card bg-iw-paper/10 border border-iw-paper/20 rounded-lg p-8">
              <h3 className="font-iw-sans font-semibold text-lg text-iw-gold mb-4 uppercase">Continuity Owned</h3>
              <p className="editorial-serif text-iw-paper/90 mb-4">Your organization owns the context layer, not the AI vendor. Switch models, change AI platforms, keep your organizational knowledge intact.</p>
              <p className="font-iw-mono text-xs text-iw-paper/60">Strategic independence from vendor</p>
            </div>

            <div className="value-card bg-iw-paper/10 border border-iw-paper/20 rounded-lg p-8">
              <h3 className="font-iw-sans font-semibold text-lg text-iw-gold mb-4 uppercase">Capabilities</h3>
              <p className="editorial-serif text-iw-paper/90 mb-4">Define what your AI agents can do through unified capabilities—permissions, data access, workflow integrations, and business logic all in one place.</p>
              <p className="font-iw-mono text-xs text-iw-paper/60">Enterprise governance meets AI agents</p>
            </div>

            <div className="value-card bg-iw-paper/10 border border-iw-paper/20 rounded-lg p-8">
              <h3 className="font-iw-sans font-semibold text-lg text-iw-gold mb-4 uppercase">Compliance-First</h3>
              <p className="editorial-serif text-iw-paper/90 mb-4">Data access rules, audit trails, and compliance policies enforce once across all AI models. No duplicate governance infrastructure.</p>
              <p className="font-iw-mono text-xs text-iw-paper/60">One place for all compliance controls</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="audience-section py-24 bg-iw-paper section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="editorial-heading text-4xl md:text-5xl text-center text-iw-forest mb-16">Built for Enterprise Architecture</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-iw-sans font-semibold text-lg text-iw-forest mb-4">CIOs & CTOs</h3>
              <p className="editorial-serif text-iw-slate">
                Solve the AI integration problem at the infrastructure layer, not as a one-off project per AI tool.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-iw-sans font-semibold text-lg text-iw-forest mb-4">Integration Architects</h3>
              <p className="editorial-serif text-iw-slate">
                The ESB is back. Stop building point-to-point integrations. Build once, serve all.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-iw-sans font-semibold text-lg text-iw-forest mb-4">AI Center of Excellence</h3>
              <p className="editorial-serif text-iw-slate">
                Empower teams to pick the best AI model for each task while maintaining enterprise governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="pricing-section py-24 bg-iw-forest section-padding">
        <div className="max-w-5xl mx-auto">
          <h2 className="editorial-heading text-4xl md:text-5xl text-center text-iw-paper mb-16">Pricing by Scale</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="pricing-tier bg-iw-paper/10 border border-iw-paper/20 rounded-lg p-8">
              <h3 className="font-iw-sans font-semibold text-lg text-iw-gold mb-4">Startup</h3>
              <div className="text-3xl font-bold text-iw-paper mb-6">$499<span className="text-sm text-iw-paper/60">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2 text-sm text-iw-paper/80"><span className="text-iw-gold">+</span> Up to 3 AI systems</li>
                <li className="flex gap-2 text-sm text-iw-paper/80"><span className="text-iw-gold">+</span> Up to 2 enterprise systems</li>
                <li className="flex gap-2 text-sm text-iw-paper/80"><span className="text-iw-gold">+</span> Basic governance</li>
              </ul>
              <button className="w-full py-2 bg-iw-gold text-iw-forest font-semibold rounded-lg hover:bg-iw-gold-light transition-colors">Get Started</button>
            </div>

            <div className="pricing-tier bg-iw-paper/10 border-2 border-iw-gold rounded-lg p-8">
              <h3 className="font-iw-sans font-semibold text-lg text-iw-gold mb-4">Growth</h3>
              <div className="text-3xl font-bold text-iw-paper mb-6">$1,499<span className="text-sm text-iw-paper/60">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2 text-sm text-iw-paper/80"><span className="text-iw-gold">+</span> Up to 10 AI systems</li>
                <li className="flex gap-2 text-sm text-iw-paper/80"><span className="text-iw-gold">+</span> Up to 10 enterprise systems</li>
                <li className="flex gap-2 text-sm text-iw-paper/80"><span className="text-iw-gold">+</span> Advanced governance & audit</li>
              </ul>
              <button className="w-full py-2 bg-iw-gold text-iw-forest font-semibold rounded-lg hover:bg-iw-gold-light transition-colors">Get Started</button>
            </div>

            <div className="pricing-tier bg-iw-paper/10 border border-iw-paper/20 rounded-lg p-8">
              <h3 className="font-iw-sans font-semibold text-lg text-iw-gold mb-4">Enterprise</h3>
              <div className="text-3xl font-bold text-iw-paper mb-6">Custom</div>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2 text-sm text-iw-paper/80"><span className="text-iw-gold">+</span> Unlimited AI systems</li>
                <li className="flex gap-2 text-sm text-iw-paper/80"><span className="text-iw-gold">+</span> Unlimited enterprise systems</li>
                <li className="flex gap-2 text-sm text-iw-paper/80"><span className="text-iw-gold">+</span> Full governance suite</li>
              </ul>
              <button className="w-full py-2 border-2 border-iw-gold text-iw-gold font-semibold rounded-lg hover:bg-iw-gold/10 transition-colors">Contact Sales</button>
            </div>

            <div className="pricing-tier bg-iw-paper/10 border border-iw-paper/20 rounded-lg p-8">
              <h3 className="font-iw-sans font-semibold text-lg text-iw-gold mb-4">On-Premise</h3>
              <div className="text-3xl font-bold text-iw-paper mb-6">Custom</div>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2 text-sm text-iw-paper/80"><span className="text-iw-gold">+</span> Your infrastructure</li>
                <li className="flex gap-2 text-sm text-iw-paper/80"><span className="text-iw-gold">+</span> Your security controls</li>
                <li className="flex gap-2 text-sm text-iw-paper/80"><span className="text-iw-gold">+</span> Dedicated support</li>
              </ul>
              <button className="w-full py-2 border-2 border-iw-gold text-iw-gold font-semibold rounded-lg hover:bg-iw-gold/10 transition-colors">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta py-24 bg-iw-paper section-padding">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="editorial-heading text-4xl md:text-5xl text-iw-forest mb-6">Ready to Own Your AI Integration Layer?</h2>
          <p className="editorial-serif text-lg text-iw-slate mb-10">
            Schedule a demo with our enterprise architects to see how Continuity Bridge solves the point-to-point integration problem at your organization.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className="inline-flex items-center justify-center px-10 py-4 bg-iw-forest text-iw-paper font-iw-sans font-semibold text-base rounded-full transition-all duration-300 hover:bg-iw-forest-bright">
              Schedule a Demo
            </a>
            <a href="/architecture" className="inline-flex items-center justify-center px-10 py-4 border-2 border-iw-forest text-iw-forest font-iw-sans font-semibold text-base rounded-full transition-all duration-300 hover:bg-iw-forest/5">
              Learn the Architecture
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
