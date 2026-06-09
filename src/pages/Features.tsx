import { useEffect, useRef } from 'react';
import { ArrowRight, Lock, Network, Zap, BarChart3, GitBranch, Shield } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSeo } from '../hooks/useSeo';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  useSeo(
    "Enterprise Capabilities — IntegrateWise Continuity Bridge",
    "The six core capabilities that make the Continuity Bridge the ESB for AI: vendor independence, unified governance, organizational knowledge, and strategic flexibility."
  );
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-headline', { y: 40, opacity: 0, duration: 1, ease: 'power3.out' });
      gsap.from('.capability-card', { y: 30, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: '.capabilities-grid', start: 'top 80%' } });
    });
    return () => ctx.revert();
  }, []);

  const capabilities = [
    {
      icon: GitBranch,
      title: 'Vendor Independence',
      description: 'Switch AI models without rebuilding integrations. Your organizational knowledge and connections persist.',
      details: ['One Bridge, many AI models', 'Zero vendor lock-in', 'Model selection per use case'],
      color: 'bg-iw-forest/10 border-iw-forest/20',
    },
    {
      icon: Network,
      title: 'Unified Context',
      description: 'Normalized organizational knowledge accessible to any AI. Context mapping happens once, benefits all systems.',
      details: ['Single source of context truth', 'Automatic data normalization', 'Cross-system awareness'],
      color: 'bg-iw-forest/10 border-iw-forest/20',
    },
    {
      icon: Shield,
      title: 'Governance at Scale',
      description: 'Define policies once, enforce across all AI systems. Compliance, approval workflows, and audit trails unified.',
      details: ['Policy-as-code governance', 'Unified audit compliance', 'Role-based AI access control'],
      color: 'bg-iw-forest/10 border-iw-forest/20',
    },
    {
      icon: BarChart3,
      title: 'Organizational Memory',
      description: 'AI learns about your business through the Bridge. Knowledge accumulates and persists across model transitions.',
      details: ['Persistent organizational knowledge', 'Learned patterns survive transitions', 'Tribal knowledge captured'],
      color: 'bg-iw-forest/10 border-iw-forest/20',
    },
    {
      icon: Zap,
      title: 'Scalable Integration',
      description: 'Connect enterprise systems once to the Bridge. All AI models access through normalized capabilities.',
      details: ['N+M integration model', '80% fewer integrations needed', 'Scale without exponential growth'],
      color: 'bg-iw-forest/10 border-iw-forest/20',
    },
    {
      icon: Lock,
      title: 'Strategic Control',
      description: 'Your organization owns the capability layer. Make AI adoption decisions independent of any vendor.',
      details: ['Organizational control maintained', 'Strategic flexibility preserved', 'Future-proof architecture'],
      color: 'bg-iw-forest/10 border-iw-forest/20',
    },
  ];

  return (
    <div ref={ref}>
      {/* HERO */}
      <section className="min-h-[60vh] bg-iw-forest flex items-center section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="hero-headline editorial-heading text-5xl md:text-6xl text-iw-paper mb-6">Six Capabilities That Make AI Replaceable</h1>
          <p className="editorial-serif text-lg text-iw-paper/80 max-w-2xl mx-auto">
            The Continuity Bridge unlocks enterprise-grade capabilities that keep organizational knowledge, compliance, and strategic control independent from any single AI vendor.
          </p>
        </div>
      </section>

      {/* CAPABILITIES GRID */}
      <section className="capabilities-grid py-24 bg-iw-paper section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => (
              <div key={i} className={`capability-card border rounded-lg p-10 ${cap.color}`}>
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-full bg-iw-forest/20 flex items-center justify-center mb-4">
                    <cap.icon className="w-7 h-7 text-iw-forest" />
                  </div>
                  <h3 className="font-iw-sans font-semibold text-2xl text-iw-forest mb-3">{cap.title}</h3>
                  <p className="editorial-serif text-iw-slate mb-6">{cap.description}</p>
                </div>
                <ul className="space-y-3">
                  {cap.details.map((detail, j) => (
                    <li key={j} className="flex gap-3 text-sm">
                      <span className="text-iw-gold font-semibold">+</span>
                      <span className="editorial-serif text-iw-slate">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON: Why These Capabilities Matter */}
      <section className="py-24 bg-iw-forest/5 section-padding">
        <div className="max-w-5xl mx-auto">
          <h2 className="editorial-heading text-4xl md:text-5xl text-center text-iw-forest mb-16">The Capability Advantage</h2>

          <div className="space-y-8">
            {/* Vendor Independence */}
            <div className="bg-iw-paper border border-iw-rule rounded-lg p-10">
              <h3 className="font-iw-sans font-semibold text-2xl text-iw-forest mb-4">Without Continuity Bridge</h3>
              <p className="editorial-serif text-iw-slate mb-6">
                Custom integrations to GPT-4. When Anthropic Claude 3.5 is cheaper and faster, you face months of re-engineering: new connector code, context re-mapping, integration testing, team retraining.
              </p>
              <h3 className="font-iw-sans font-semibold text-2xl text-iw-forest mb-4">With Continuity Bridge</h3>
              <p className="editorial-serif text-iw-slate">
                Integrations connect to the Bridge once. Switch to Claude 3.5: point to the new model, test in the Bridge's workbench, deploy. Same organizational knowledge, same data access, same compliance enforcement. Two days instead of two months.
              </p>
            </div>

            {/* Governance */}
            <div className="bg-iw-paper border border-iw-rule rounded-lg p-10">
              <h3 className="font-iw-sans font-semibold text-2xl text-iw-forest mb-4">Without Continuity Bridge</h3>
              <p className="editorial-serif text-iw-slate mb-6">
                Each AI tool has different permission models. GPT-4 doesn't know your RBAC. Claude doesn't have audit logging. OpenAI sandbox and Anthropic sandbox have different data residency. Compliance becomes fragmented across 5 different vendor dashboards.
              </p>
              <h3 className="font-iw-sans font-semibold text-2xl text-iw-forest mb-4">With Continuity Bridge</h3>
              <p className="editorial-serif text-iw-slate">
                One governance layer. Define RBAC once: "Finance AI cannot access Customer PII." All connected models respect that rule automatically. Audit log is unified. Data residency is enforced at the Bridge. Compliance becomes a single source of truth.
              </p>
            </div>

            {/* Organizational Knowledge */}
            <div className="bg-iw-paper border border-iw-rule rounded-lg p-10">
              <h3 className="font-iw-sans font-semibold text-2xl text-iw-forest mb-4">Without Continuity Bridge</h3>
              <p className="editorial-serif text-iw-slate mb-6">
                Your AI learns your business. When you switch models, that knowledge disappears. Months of prompt engineering and few-shot examples are lost. The new model starts from scratch.
              </p>
              <h3 className="font-iw-sans font-semibold text-2xl text-iw-forest mb-4">With Continuity Bridge</h3>
              <p className="editorial-serif text-iw-slate">
                Organizational knowledge lives in the Bridge, not the model. Your AI learns patterns, decisions, and context through the Bridge's knowledge layer. Switch models and that accumulated knowledge persists. Each new model inherits organizational understanding built by previous models.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 bg-iw-paper section-padding">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="editorial-heading text-3xl md:text-4xl text-iw-forest mb-6">Ready to Own Your AI Architecture?</h2>
          <p className="editorial-serif text-lg text-iw-slate mb-10">
            See how Continuity Bridge gives you complete organizational control over AI integrations.
          </p>
          <a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className="inline-flex items-center justify-center px-10 py-4 bg-iw-forest text-iw-paper font-iw-sans font-semibold rounded-full hover:bg-iw-forest-bright transition-colors">
            Book Demo <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
