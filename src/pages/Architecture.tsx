import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSeo } from '../hooks/useSeo';

gsap.registerPlugin(ScrollTrigger);

export default function Architecture() {
  useSeo(
    "Technical Architecture — IntegrateWise Continuity Bridge",
    "Understand the N×M integration problem and how Continuity Bridge solves it with normalized context and unified governance."
  );
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-headline', { y: 40, opacity: 0, duration: 1, ease: 'power3.out' });
      gsap.from('.arch-section', { y: 30, opacity: 0, duration: 0.6, stagger: 0.2, ease: 'power3.out', scrollTrigger: { trigger: '.arch-content', start: 'top 80%' } });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref}>
      {/* HERO */}
      <section className="min-h-[50vh] bg-iw-forest flex items-center section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="hero-headline editorial-heading text-5xl md:text-6xl text-iw-paper mb-6">How Continuity Bridge Solves N×M</h1>
          <p className="editorial-serif text-lg text-iw-paper/80 max-w-2xl mx-auto">
            The mathematical problem behind enterprise AI integration and how unified architecture scales where point-to-point breaks.
          </p>
        </div>
      </section>

      {/* THE N×M PROBLEM */}
      <section className="arch-content py-24 bg-iw-paper section-padding">
        <div className="max-w-5xl mx-auto">
          <h2 className="editorial-heading text-4xl md:text-5xl text-center text-iw-forest mb-16">The N×M Integration Explosion</h2>

          <div className="arch-section grid md:grid-cols-2 gap-12 mb-16">
            {/* Problem visualization */}
            <div>
              <h3 className="font-iw-sans font-semibold text-xl text-iw-forest mb-8">Without Continuity Bridge: Point-to-Point</h3>
              <div className="bg-red-50 border-2 border-red-300 rounded-lg p-8">
                <div className="text-center mb-6">
                  <div className="text-sm font-iw-mono text-red-700 font-semibold mb-4">AI SYSTEMS → ENTERPRISE SYSTEMS</div>
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {['ChatGPT', 'Claude', 'Gemini'].map((ai) => (
                      <div key={ai} className="bg-red-600 text-white text-xs font-bold py-2 px-2 rounded text-center">{ai}</div>
                    ))}
                  </div>
                  <div className="text-4xl font-bold text-red-600 mb-4">⬌</div>
                  <div className="grid grid-cols-3 gap-2">
                    {['Salesforce', 'NetSuite', 'Data WH'].map((app) => (
                      <div key={app} className="bg-red-200 text-red-900 text-xs font-bold py-2 px-2 rounded text-center">{app}</div>
                    ))}
                  </div>
                </div>
                <div className="text-center border-t border-red-300 pt-6">
                  <div className="text-2xl font-bold text-red-600 mb-2">9 Integrations</div>
                  <p className="text-sm text-red-700">3 AI systems × 3 enterprise systems = 3² connections</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-red-100 border-l-4 border-red-600 rounded">
                <p className="font-iw-mono text-xs text-red-900 font-semibold">Add one more AI system?</p>
                <p className="editorial-serif text-sm text-red-800">3 more integrations required</p>
                <p className="font-iw-mono text-xs text-red-900 font-semibold mt-2">Add one more enterprise app?</p>
                <p className="editorial-serif text-sm text-red-800">3 more integrations required</p>
              </div>
            </div>

            {/* Solution visualization */}
            <div>
              <h3 className="font-iw-sans font-semibold text-xl text-iw-forest mb-8">With Continuity Bridge: Unified Hub</h3>
              <div className="bg-green-50 border-2 border-green-300 rounded-lg p-8">
                <div className="text-center mb-6">
                  <div className="text-sm font-iw-mono text-green-700 font-semibold mb-4">AI SYSTEMS ← BRIDGE → ENTERPRISE SYSTEMS</div>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {['ChatGPT', 'Claude', 'Gemini'].map((ai) => (
                      <div key={ai} className="bg-green-600 text-white text-xs font-bold py-2 px-2 rounded text-center">{ai}</div>
                    ))}
                  </div>
                  <div className="text-2xl font-bold text-iw-gold mb-4">→ BRIDGE ←</div>
                  <div className="grid grid-cols-3 gap-2">
                    {['Salesforce', 'NetSuite', 'Data WH'].map((app) => (
                      <div key={app} className="bg-green-200 text-green-900 text-xs font-bold py-2 px-2 rounded text-center">{app}</div>
                    ))}
                  </div>
                </div>
                <div className="text-center border-t border-green-300 pt-6">
                  <div className="text-2xl font-bold text-green-600 mb-2">6 Integrations</div>
                  <p className="text-sm text-green-700">3 AI + 3 Enterprise → one hub</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-100 border-l-4 border-green-600 rounded">
                <p className="font-iw-mono text-xs text-green-900 font-semibold">Add one more AI system?</p>
                <p className="editorial-serif text-sm text-green-800">1 integration required</p>
                <p className="font-iw-mono text-xs text-green-900 font-semibold mt-2">Add one more enterprise app?</p>
                <p className="editorial-serif text-sm text-green-800">1 integration required</p>
              </div>
            </div>
          </div>

          {/* Math explanation */}
          <div className="arch-section bg-iw-forest/5 border border-iw-forest/20 rounded-lg p-10">
            <h3 className="font-iw-sans font-semibold text-lg text-iw-forest mb-6">The Mathematics of Scale</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-iw-mono text-xs text-iw-forest font-bold uppercase mb-4">Point-to-Point</h4>
                <p className="editorial-serif text-sm text-iw-slate mb-4">Number of integrations: <span className="font-bold">N × M</span></p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span>3 AI × 3 Apps:</span><span className="font-bold">9</span></div>
                  <div className="flex justify-between"><span>5 AI × 5 Apps:</span><span className="font-bold">25</span></div>
                  <div className="flex justify-between"><span>10 AI × 10 Apps:</span><span className="font-bold">100</span></div>
                </div>
              </div>

              <div>
                <h4 className="font-iw-mono text-xs text-iw-forest font-bold uppercase mb-4">With Continuity Bridge</h4>
                <p className="editorial-serif text-sm text-iw-slate mb-4">Number of integrations: <span className="font-bold">N + M</span></p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span>3 AI + 3 Apps:</span><span className="font-bold">6</span></div>
                  <div className="flex justify-between"><span>5 AI + 5 Apps:</span><span className="font-bold">10</span></div>
                  <div className="flex justify-between"><span>10 AI + 10 Apps:</span><span className="font-bold">20</span></div>
                </div>
              </div>

              <div>
                <h4 className="font-iw-mono text-xs text-iw-gold font-bold uppercase mb-4">Savings at Scale</h4>
                <p className="editorial-serif text-sm text-iw-slate mb-4">Integration reduction:</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span>3 AI × 3 Apps:</span><span className="font-bold text-iw-gold">33%</span></div>
                  <div className="flex justify-between"><span>5 AI × 5 Apps:</span><span className="font-bold text-iw-gold">60%</span></div>
                  <div className="flex justify-between"><span>10 AI × 10 Apps:</span><span className="font-bold text-iw-gold">80%</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE LAYERS */}
      <section className="py-24 bg-iw-forest section-padding">
        <div className="max-w-5xl mx-auto">
          <h2 className="editorial-heading text-4xl md:text-5xl text-center text-iw-paper mb-16">Three-Layer Continuity Architecture</h2>

          <div className="space-y-8">
            <div className="arch-section">
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h3 className="font-iw-sans font-semibold text-2xl text-iw-paper my-auto">Enterprise Systems Layer</h3>
              </div>
              <div className="bg-iw-paper/10 border border-iw-paper/20 rounded-lg p-8 ml-16">
                <p className="editorial-serif text-lg text-iw-paper/90 mb-4">
                  Your CRM, ERP, data warehouse, billing system, and all applications containing business data. Continuity Bridge connects to each system once through standardized adapters or APIs.
                </p>
                <p className="font-iw-mono text-sm text-iw-paper/70">Salesforce, NetSuite, Postgres, Snowflake, Stripe, HubSpot, Jira, Slack...</p>
              </div>
            </div>

            <div className="arch-section">
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 bg-iw-gold rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-iw-forest font-bold text-lg">2</span>
                </div>
                <h3 className="font-iw-sans font-semibold text-2xl text-iw-paper my-auto">Continuity Bridge (Control Plane)</h3>
              </div>
              <div className="bg-iw-paper/10 border border-iw-paper/20 rounded-lg p-8 ml-16">
                <p className="editorial-serif text-lg text-iw-paper/90 mb-4">
                  The normalized intelligence layer that transforms disparate data models into unified organizational context. Defines capabilities, enforces governance, and orchestrates access across all connected systems and all AI models.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div>
                    <p className="font-iw-mono text-xs text-iw-paper/60 uppercase mb-2">Core Functions</p>
                    <ul className="space-y-1 text-sm text-iw-paper/80">
                      <li>→ Context normalization</li>
                      <li>→ Entity resolution</li>
                      <li>→ Capability mapping</li>
                      <li>→ Governance enforcement</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-iw-mono text-xs text-iw-paper/60 uppercase mb-2">Output Format</p>
                    <ul className="space-y-1 text-sm text-iw-paper/80">
                      <li>→ Normalized context</li>
                      <li>→ Unified capabilities</li>
                      <li>→ Consistent permissions</li>
                      <li>→ Audit-traced actions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="arch-section">
              <div className="flex gap-4 mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h3 className="font-iw-sans font-semibold text-2xl text-iw-paper my-auto">AI Models Layer</h3>
              </div>
              <div className="bg-iw-paper/10 border border-iw-paper/20 rounded-lg p-8 ml-16">
                <p className="editorial-serif text-lg text-iw-paper/90 mb-4">
                  Any AI model accessed through the Bridge receives unified context, consistent permissions, and inherits all governance policies. Models consume capabilities through a standardized API, making them interchangeable.
                </p>
                <p className="font-iw-mono text-sm text-iw-paper/70">ChatGPT, Claude, Gemini, custom models, future models...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY THIS ARCHITECTURE */}
      <section className="py-24 bg-iw-paper section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="editorial-heading text-3xl md:text-4xl text-center text-iw-forest mb-16">Why This Architecture Matters</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="arch-section">
              <h3 className="font-iw-sans font-semibold text-lg text-iw-forest mb-4">Scalability</h3>
              <p className="editorial-serif text-iw-slate mb-4">
                Adding systems becomes addition, not multiplication. New AI model? One integration. New enterprise app? One integration. Integration burden grows linearly, not exponentially.
              </p>
            </div>

            <div className="arch-section">
              <h3 className="font-iw-sans font-semibold text-lg text-iw-forest mb-4">Independence</h3>
              <p className="editorial-serif text-iw-slate mb-4">
                Organizations own the context layer, not AI vendors. Switch AI models without rebuilding integrations. Your organizational knowledge persists across vendor changes.
              </p>
            </div>

            <div className="arch-section">
              <h3 className="font-iw-sans font-semibold text-lg text-iw-forest mb-4">Governance</h3>
              <p className="editorial-serif text-iw-slate mb-4">
                Compliance policies, audit trails, and permission rules defined once in the Bridge apply to all AI systems. No fragmented governance across multiple tools.
              </p>
            </div>

            <div className="arch-section">
              <h3 className="font-iw-sans font-semibold text-lg text-iw-forest mb-4">Continuity</h3>
              <p className="editorial-serif text-iw-slate mb-4">
                Organizational context, decisions, and knowledge live in the Bridge, not in ephemeral AI sessions. Context survives model changes, team changes, and organizational transitions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-iw-forest section-padding">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="editorial-heading text-3xl md:text-4xl text-iw-paper mb-6">Ready to Understand Your Integration Problem?</h2>
          <p className="editorial-serif text-lg text-iw-paper/80 mb-10">
            Our architects can map your current integrations and show you exactly where the N×M problem is costing you.
          </p>
          <a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className="inline-flex items-center justify-center px-10 py-4 bg-iw-gold text-iw-forest font-iw-sans font-semibold rounded-full hover:bg-iw-gold-light transition-colors">
            Schedule Demo <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
