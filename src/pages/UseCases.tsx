import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSeo } from '../hooks/useSeo';

gsap.registerPlugin(ScrollTrigger);

export default function UseCases() {
  useSeo(
    "Use Cases — IntegrateWise Continuity Bridge",
    "Learn how enterprises solve N×M integration problems, maintain vendor independence, and scale AI adoption without rebuilding every integration."
  );
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-headline', { y: 40, opacity: 0, duration: 1, ease: 'power3.out' });
      gsap.from('.use-case-card', { y: 30, opacity: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: '.use-cases-grid', start: 'top 80%' } });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref}>
      {/* HERO */}
      <section className="min-h-[60vh] bg-iw-forest flex items-center section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="hero-headline editorial-heading text-5xl md:text-6xl text-iw-paper mb-6">Enterprise Scenarios Solved by Continuity</h1>
          <p className="editorial-serif text-lg text-iw-paper/80 max-w-2xl mx-auto">
            From vendor independence to compliance at scale, see how organizations across industries solve the AI integration problem.
          </p>
        </div>
      </section>

      {/* USE CASES GRID */}
      <section className="use-cases-grid py-24 bg-iw-paper section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Use Case 1 */}
            <div className="use-case-card bg-gradient-to-br from-iw-forest/5 to-iw-forest/10 border border-iw-forest/20 rounded-lg p-10">
              <h3 className="font-iw-sans font-semibold text-2xl text-iw-forest mb-4">Multi-AI Architecture</h3>
              <p className="editorial-serif text-iw-slate mb-6">
                Your organization uses ChatGPT for customer service, Claude for analysis, and Gemini for data processing. Each requires integrations to your CRM, data warehouse, and knowledge base.
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                <p className="font-iw-mono text-xs text-red-700 font-semibold">THE PROBLEM</p>
                <p className="editorial-serif text-sm text-red-600">3 AI systems × 3 enterprise systems = 9 integrations to maintain, each with its own data access rules and context mapping.</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-4">
                <p className="font-iw-mono text-xs text-green-700 font-semibold">WITH CONTINUITY BRIDGE</p>
                <p className="editorial-serif text-sm text-green-600">Connect each system once to the Bridge. Any AI can access any capability through normalized context. Add a new AI model without touching existing integrations.</p>
              </div>
            </div>

            {/* Use Case 2 */}
            <div className="use-case-card bg-gradient-to-br from-iw-forest/5 to-iw-forest/10 border border-iw-forest/20 rounded-lg p-10">
              <h3 className="font-iw-sans font-semibold text-2xl text-iw-forest mb-4">Vendor Independence</h3>
              <p className="editorial-serif text-iw-slate mb-6">
                You've built your AI strategy on GPT-4, but a new model released by Anthropic is 40% faster and cheaper. Switching means rebuilding all your integrations.
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                <p className="font-iw-mono text-xs text-red-700 font-semibold">THE PROBLEM</p>
                <p className="editorial-serif text-sm text-red-600">Custom integrations and context mapping tied to each AI platform lock you in. Switching requires months of re-engineering.</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-4">
                <p className="font-iw-mono text-xs text-green-700 font-semibold">WITH CONTINUITY BRIDGE</p>
                <p className="editorial-serif text-sm text-green-600">The Bridge abstracts away the AI vendor layer. Your organizational capabilities stay the same. Plug in a new model, connect once, and you're done.</p>
              </div>
            </div>

            {/* Use Case 3 */}
            <div className="use-case-card bg-gradient-to-br from-iw-forest/5 to-iw-forest/10 border border-iw-forest/20 rounded-lg p-10">
              <h3 className="font-iw-sans font-semibold text-2xl text-iw-forest mb-4">Compliance & Governance</h3>
              <p className="editorial-serif text-iw-slate mb-6">
                You need to enforce data residency rules, audit trails, and role-based access across multiple AI systems accessing your most sensitive customer and financial data.
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                <p className="font-iw-mono text-xs text-red-700 font-semibold">THE PROBLEM</p>
                <p className="editorial-serif text-sm text-red-600">Each AI tool has its own permission model and audit capabilities. Compliance becomes fragmented across multiple systems with no unified enforcement.</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-4">
                <p className="font-iw-mono text-xs text-green-700 font-semibold">WITH CONTINUITY BRIDGE</p>
                <p className="editorial-serif text-sm text-green-600">Define governance policies once in the Bridge. All AI systems inherit the same compliance rules, audit trails, and data access controls.</p>
              </div>
            </div>

            {/* Use Case 4 */}
            <div className="use-case-card bg-gradient-to-br from-iw-forest/5 to-iw-forest/10 border border-iw-forest/20 rounded-lg p-10">
              <h3 className="font-iw-sans font-semibold text-2xl text-iw-forest mb-4">AI Center of Excellence</h3>
              <p className="editorial-serif text-iw-slate mb-6">
                You're building an AI CoE to empower different teams to use best-of-breed models for their specific tasks while maintaining enterprise security and governance.
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                <p className="font-iw-mono text-xs text-red-700 font-semibold">THE PROBLEM</p>
                <p className="editorial-serif text-sm text-red-600">Each team builds its own integrations to the tools they need. No shared understanding, duplicated work, and compliance becomes team-specific.</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-4">
                <p className="font-iw-mono text-xs text-green-700 font-semibold">WITH CONTINUITY BRIDGE</p>
                <p className="editorial-serif text-sm text-green-600">The CoE builds capabilities once in the Bridge. Teams pick the AI model that works best while all agents operate from shared organizational context.</p>
              </div>
            </div>

            {/* Use Case 5 */}
            <div className="use-case-card bg-gradient-to-br from-iw-forest/5 to-iw-forest/10 border border-iw-forest/20 rounded-lg p-10">
              <h3 className="font-iw-sans font-semibold text-2xl text-iw-forest mb-4">Cross-Department Workflows</h3>
              <p className="editorial-serif text-iw-slate mb-6">
                Finance needs AI to process invoices, Sales needs it to qualify leads, and Customer Success needs it to detect churn. Each team should use the model that works best.
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                <p className="font-iw-mono text-xs text-red-700 font-semibold">THE PROBLEM</p>
                <p className="editorial-serif text-sm text-red-600">Choosing one AI tool fits nobody. Building separate AI strategies for each team creates fragmentation and loses economies of scale.</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-4">
                <p className="font-iw-mono text-xs text-green-700 font-semibold">WITH CONTINUITY BRIDGE</p>
                <p className="editorial-serif text-sm text-green-600">Finance uses one model, Sales uses another, Success uses a third. The Bridge normalizes context across all of them through shared organizational capabilities.</p>
              </div>
            </div>

            {/* Use Case 6 */}
            <div className="use-case-card bg-gradient-to-br from-iw-forest/5 to-iw-forest/10 border border-iw-forest/20 rounded-lg p-10">
              <h3 className="font-iw-sans font-semibold text-2xl text-iw-forest mb-4">Enterprise Knowledge Continuity</h3>
              <p className="editorial-serif text-iw-slate mb-6">
                Your AI agents learn about customers, contracts, and decisions. When you switch to a better model, all that organizational knowledge disappears and needs to be rebuilt.
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                <p className="font-iw-mono text-xs text-red-700 font-semibold">THE PROBLEM</p>
                <p className="editorial-serif text-sm text-red-600">Knowledge is locked inside each AI model. Vendor transitions mean losing years of learned context and organizational understanding.</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-4">
                <p className="font-iw-mono text-xs text-green-700 font-semibold">WITH CONTINUITY BRIDGE</p>
                <p className="editorial-serif text-sm text-green-600">Organizational knowledge lives in the Bridge, not in the AI model. Switch vendors, keep everything the AI has learned about your business.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON: ESB for Applications vs. Continuity for AI */}
      <section className="py-24 bg-iw-forest section-padding">
        <div className="max-w-5xl mx-auto">
          <h2 className="editorial-heading text-4xl md:text-5xl text-center text-iw-paper mb-16">The Continuity Bridge is ESB for AI</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-iw-paper/10 border border-iw-paper/20 rounded-lg p-10">
              <h3 className="font-iw-sans font-semibold text-xl text-iw-gold mb-6">Enterprise Service Bus (2004-2015)</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-iw-gold">→</span>
                  <span className="editorial-serif text-iw-paper/90">Solved N×M application integration problem</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-iw-gold">→</span>
                  <span className="editorial-serif text-iw-paper/90">Normalized data and messaging across platforms</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-iw-gold">→</span>
                  <span className="editorial-serif text-iw-paper/90">Centralized governance and routing rules</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-iw-gold">→</span>
                  <span className="editorial-serif text-iw-paper/90">Made applications replaceable without rebuilding integrations</span>
                </li>
              </ul>
            </div>

            <div className="bg-iw-paper/10 border border-iw-paper/20 rounded-lg p-10">
              <h3 className="font-iw-sans font-semibold text-xl text-iw-gold mb-6">Continuity Bridge (Now)</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-iw-gold">→</span>
                  <span className="editorial-serif text-iw-paper/90">Solves N×M AI integration problem</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-iw-gold">→</span>
                  <span className="editorial-serif text-iw-paper/90">Normalizes context and organizational knowledge across AI models</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-iw-gold">→</span>
                  <span className="editorial-serif text-iw-paper/90">Centralized compliance, governance, and capability definitions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-iw-gold">→</span>
                  <span className="editorial-serif text-iw-paper/90">Makes AI models replaceable without rebuilding integrations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 bg-iw-paper section-padding">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="editorial-heading text-3xl md:text-4xl text-iw-forest mb-6">Which Scenario Matches Your Organization?</h2>
          <p className="editorial-serif text-lg text-iw-slate mb-10">
            Talk to our enterprise architects about how Continuity Bridge solves your specific integration challenges.
          </p>
          <a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className="inline-flex items-center justify-center px-10 py-4 bg-iw-forest text-iw-paper font-iw-sans font-semibold rounded-full hover:bg-iw-forest-bright transition-colors">
            Schedule Demo <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}

