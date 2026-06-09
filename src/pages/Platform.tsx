import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSeo } from '../hooks/useSeo';

gsap.registerPlugin(ScrollTrigger);

export default function Platform() {
  useSeo(
    "Platform — IntegrateWise Continuity Bridge",
    "The enterprise capability fabric that connects your systems, normalizes organizational context, and makes AI models replaceable without rebuilding integrations."
  );
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-headline', { y: 40, opacity: 0, duration: 1, ease: 'power3.out' });
      gsap.from('.platform-section', { y: 30, opacity: 0, duration: 0.6, stagger: 0.2, ease: 'power3.out', scrollTrigger: { trigger: '.platform-sections', start: 'top 80%' } });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref}>
      {/* HERO */}
      <section className="min-h-[60vh] bg-iw-forest flex items-center section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="hero-headline editorial-heading text-5xl md:text-6xl text-iw-paper mb-6">The Platform That Owns AI Integration</h1>
          <p className="editorial-serif text-lg text-iw-paper/80 max-w-2xl mx-auto">
            Continuity Bridge is infrastructure for organizational capability, not a tool for connecting tools. Connect enterprise systems once, serve any AI through a unified, governance-enforced layer.
          </p>
        </div>
      </section>

      {/* ARCHITECTURE OVERVIEW */}
      <section className="py-24 bg-iw-paper section-padding">
        <div className="max-w-5xl mx-auto">
          <h2 className="editorial-heading text-4xl md:text-5xl text-center text-iw-forest mb-16">The Three-Layer Architecture</h2>

          <div className="space-y-8">
            {/* Layer 1: Enterprise */}
            <div className="platform-section bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-600 rounded-lg p-10">
              <h3 className="font-iw-sans font-semibold text-2xl text-blue-900 mb-4">Layer 1: Enterprise Systems</h3>
              <p className="editorial-serif text-lg text-blue-800 mb-4">
                Your CRM, ERP, data warehouse, billing system, and all other enterprise applications. The Continuity Bridge reads from each of these and keeps context synchronized.
              </p>
              <div className="flex gap-2">
                <span className="inline-block px-3 py-1 bg-blue-200 text-blue-900 font-iw-mono text-xs rounded">Salesforce</span>
                <span className="inline-block px-3 py-1 bg-blue-200 text-blue-900 font-iw-mono text-xs rounded">NetSuite</span>
                <span className="inline-block px-3 py-1 bg-blue-200 text-blue-900 font-iw-mono text-xs rounded">Postgres</span>
                <span className="inline-block px-3 py-1 bg-blue-200 text-blue-900 font-iw-mono text-xs rounded">Any Integration</span>
              </div>
            </div>

            {/* Layer 2: Continuity Bridge */}
            <div className="platform-section bg-gradient-to-r from-iw-gold/20 to-iw-gold/30 border-l-4 border-iw-gold rounded-lg p-10">
              <h3 className="font-iw-sans font-semibold text-2xl text-iw-forest mb-4">Layer 2: Continuity Bridge (The Control Plane)</h3>
              <p className="editorial-serif text-lg text-iw-slate mb-6">
                The normalized intelligence layer that transforms point-to-point chaos into orchestrated control. Continuity Bridge normalizes context, enforces governance, and manages capabilities across all connected systems and all AI models.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-iw-paper rounded p-4">
                  <h4 className="font-iw-sans font-semibold text-iw-forest mb-2">Context Normalization</h4>
                  <p className="editorial-serif text-sm text-iw-slate">Transform disparate data models from enterprise systems into unified organizational context.</p>
                </div>
                <div className="bg-iw-paper rounded p-4">
                  <h4 className="font-iw-sans font-semibold text-iw-forest mb-2">Capability Definition</h4>
                  <p className="editorial-serif text-sm text-iw-slate">Define what AI agents can do—permissions, data access, workflows, and business logic in one place.</p>
                </div>
                <div className="bg-iw-paper rounded p-4">
                  <h4 className="font-iw-sans font-semibold text-iw-forest mb-2">Governance Enforcement</h4>
                  <p className="editorial-serif text-sm text-iw-slate">All AI systems inherit the same compliance rules, audit trails, and access controls. Compliance once, enforced everywhere.</p>
                </div>
                <div className="bg-iw-paper rounded p-4">
                  <h4 className="font-iw-sans font-semibold text-iw-forest mb-2">Knowledge Persistence</h4>
                  <p className="editorial-serif text-sm text-iw-slate">Organizational learning lives in the Bridge, not in AI models. Context survives vendor changes.</p>
                </div>
              </div>
            </div>

            {/* Layer 3: AI Systems */}
            <div className="platform-section bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-600 rounded-lg p-10">
              <h3 className="font-iw-sans font-semibold text-2xl text-green-900 mb-4">Layer 3: AI Models</h3>
              <p className="editorial-serif text-lg text-green-800 mb-4">
                Any AI model that can accept API inputs. ChatGPT, Claude, Gemini, custom models, or future models you haven't adopted yet. The Bridge abstracts away vendor differences through unified capability consumption.
              </p>
              <div className="flex gap-2">
                <span className="inline-block px-3 py-1 bg-green-200 text-green-900 font-iw-mono text-xs rounded">ChatGPT</span>
                <span className="inline-block px-3 py-1 bg-green-200 text-green-900 font-iw-mono text-xs rounded">Claude</span>
                <span className="inline-block px-3 py-1 bg-green-200 text-green-900 font-iw-mono text-xs rounded">Gemini</span>
                <span className="inline-block px-3 py-1 bg-green-200 text-green-900 font-iw-mono text-xs rounded">Future Models</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="platform-sections py-24 bg-iw-forest section-padding">
        <div className="max-w-5xl mx-auto">
          <h2 className="editorial-heading text-4xl md:text-5xl text-center text-iw-paper mb-16">How Continuity Bridge Works</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="platform-section bg-iw-paper/10 border border-iw-paper/20 rounded-lg p-10">
              <h3 className="font-iw-sans font-semibold text-xl text-iw-gold mb-4 uppercase">Connect Once</h3>
              <p className="editorial-serif text-iw-paper/90 mb-4">
                Integrate each enterprise system to the Continuity Bridge one time. Create connectors for your CRM, ERP, data warehouse, and any other system containing organizational data.
              </p>
              <ul className="space-y-2 text-sm text-iw-paper/80">
                <li className="flex gap-2"><span className="text-iw-gold">→</span> OAuth, API keys, custom connectors</li>
                <li className="flex gap-2"><span className="text-iw-gold">→</span> Real-time sync or batch updates</li>
                <li className="flex gap-2"><span className="text-iw-gold">→</span> Data transformation rules</li>
              </ul>
            </div>

            <div className="platform-section bg-iw-paper/10 border border-iw-paper/20 rounded-lg p-10">
              <h3 className="font-iw-sans font-semibold text-xl text-iw-gold mb-4 uppercase">Normalize Context</h3>
              <p className="editorial-serif text-iw-paper/90 mb-4">
                Data from disparate systems is unified into a normalized representation. A customer in Salesforce + customer in your data warehouse + interactions from your support system = one unified customer context.
              </p>
              <ul className="space-y-2 text-sm text-iw-paper/80">
                <li className="flex gap-2"><span className="text-iw-gold">→</span> Entity resolution and deduplication</li>
                <li className="flex gap-2"><span className="text-iw-gold">→</span> Relationship mapping across systems</li>
                <li className="flex gap-2"><span className="text-iw-gold">→</span> Knowledge graph construction</li>
              </ul>
            </div>

            <div className="platform-section bg-iw-paper/10 border border-iw-paper/20 rounded-lg p-10">
              <h3 className="font-iw-sans font-semibold text-xl text-iw-gold mb-4 uppercase">Define Capabilities</h3>
              <p className="editorial-serif text-iw-paper/90 mb-4">
                Capabilities are the contract between your enterprise systems and your AI models. Define what your AI agents can do: query customer records, update opportunities, approve expenses, check inventory.
              </p>
              <ul className="space-y-2 text-sm text-iw-paper/80">
                <li className="flex gap-2"><span className="text-iw-gold">→</span> RBAC and data access rules</li>
                <li className="flex gap-2"><span className="text-iw-gold">→</span> Business logic and workflow integrations</li>
                <li className="flex gap-2"><span className="text-iw-gold">→</span> Approval requirements and audit trails</li>
              </ul>
            </div>

            <div className="platform-section bg-iw-paper/10 border border-iw-paper/20 rounded-lg p-10">
              <h3 className="font-iw-sans font-semibold text-xl text-iw-gold mb-4 uppercase">Serve Any AI</h3>
              <p className="editorial-serif text-iw-paper/90 mb-4">
                All AI models access capabilities through the same API. ChatGPT, Claude, or any AI system you adopt gets the same organizational context, the same permissions, the same governance.
              </p>
              <ul className="space-y-2 text-sm text-iw-paper/80">
                <li className="flex gap-2"><span className="text-iw-gold">→</span> Unified capability interface</li>
                <li className="flex gap-2"><span className="text-iw-gold">→</span> Consistent context format</li>
                <li className="flex gap-2"><span className="text-iw-gold">→</span> Vendor-agnostic integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* THE ESB PARALLEL */}
      <section className="py-24 bg-iw-paper section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="editorial-heading text-3xl md:text-4xl text-center text-iw-forest mb-16">Why Continuity Bridge is ESB for AI</h2>

          <div className="space-y-8">
            <div className="bg-iw-forest/5 rounded-lg p-10 border border-iw-forest/20">
              <h3 className="font-iw-sans font-semibold text-lg text-iw-forest mb-4">ESBs Solved the Application Integration Problem (2004-2015)</h3>
              <p className="editorial-serif text-iw-slate mb-6">
                Before ESBs, companies faced exponential integration burden: each new application required custom point-to-point connectors to every other application. An organization with 10 applications needed 45 different integrations. A new application meant 9 more integrations to build.
              </p>
              <p className="editorial-serif text-iw-slate font-semibold">
                The ESB solved this by introducing a normalized hub: connect each application once, and it can talk to any other application through the ESB's common data format and routing rules.
              </p>
            </div>

            <div className="bg-iw-gold/10 rounded-lg p-10 border border-iw-gold/30">
              <h3 className="font-iw-sans font-semibold text-lg text-iw-forest mb-4">Continuity Bridge Solves the AI Integration Problem (Now)</h3>
              <p className="editorial-serif text-iw-slate mb-6">
                Organizations now face the exact same problem at the AI layer: each new AI model requires custom integrations to every enterprise application. An organization with 3 AI systems and 3 enterprise systems needs 9 different integrations. A new AI tool means 3 more integrations.
              </p>
              <p className="editorial-serif text-iw-slate font-semibold">
                Continuity Bridge solves this the same way ESBs did: introduce a normalized hub that connects enterprise systems once, then serves any AI through unified normalized context and capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-iw-forest section-padding">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="editorial-heading text-4xl md:text-5xl text-iw-paper mb-6">See Continuity Bridge in Action</h2>
          <p className="editorial-serif text-lg text-iw-paper/80 mb-10">
            A 30-minute demo with our architecture team to see how the three-layer platform works in your environment.
          </p>
          <a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className="inline-flex items-center justify-center px-10 py-4 bg-iw-gold text-iw-forest font-iw-sans font-semibold rounded-full hover:bg-iw-gold-light transition-colors">
            Schedule Demo <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
