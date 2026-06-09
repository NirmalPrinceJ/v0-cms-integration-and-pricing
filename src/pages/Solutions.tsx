import { useEffect, useRef } from 'react';
import { ArrowRight, Users, BarChart3, Lock, Zap, Layers } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSeo } from '../hooks/useSeo';

gsap.registerPlugin(ScrollTrigger);

export default function Solutions() {
  useSeo(
    "Solutions by Persona — IntegrateWise Continuity Bridge",
    "Solutions for CTOs, Enterprise Architects, InfoSec & Compliance leaders, and Operations teams. How the Bridge addresses each buyer's unique challenges."
  );
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-headline', { y: 40, opacity: 0, duration: 1, ease: 'power3.out' });
      gsap.from('.persona-card', { y: 30, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: '.personas-grid', start: 'top 80%' } });
    });
    return () => ctx.revert();
  }, []);

  const personas = [
    {
      icon: Zap,
      role: 'CTO / VP Engineering',
      title: 'Scaling AI Without Technical Debt',
      problem: 'Every new AI tool requires custom integration. Engineering burns cycles rebuilding connectors. You need a model-agnostic foundation that scales.',
      solution: 'The Bridge abstracts away vendor lock-in. Integrations happen once. Your engineering team owns the capability layer, not plays catch-up with vendor updates.',
      benefits: ['Vendor independence reduces re-engineering', 'Model selection becomes a business decision, not an engineering constraint', 'API-first architecture scales with new AI vendors'],
      color: 'border-l-4 border-iw-forest',
    },
    {
      icon: BarChart3,
      role: 'Enterprise Architect',
      title: 'Solving the N×M Integration Problem',
      problem: 'Your organization is in chaos: 4 enterprise apps, 3 AI models already deployed, and more coming. Integrating everything point-to-point is exponential complexity.',
      solution: 'The Bridge is an ESB for AI. Connect apps once (N), connect AI once (M). Total integrations drop from N×M to N+M. Maintenance becomes manageable.',
      benefits: ['80% fewer integrations at scale', 'Centralized data governance and compliance', 'Architectural flexibility for future models'],
      color: 'border-l-4 border-iw-gold',
    },
    {
      icon: Lock,
      role: 'CISO / Compliance Officer',
      title: 'Enterprise Security & Governance',
      problem: 'AI tools access your most sensitive data. Each vendor has different security controls. Audit trails are fragmented. Compliance is impossible to prove.',
      solution: 'The Bridge enforces security at the organizational layer. One compliance policy protects all connected AI systems. Unified audit trails. Role-based access that actually works.',
      benefits: ['Unified security policy across all AI systems', 'Compliance-first architecture (SOC2, HIPAA, FedRamp ready)', 'Audit trails that satisfy enterprise requirements'],
      color: 'border-l-4 border-iw-forest',
    },
    {
      icon: Layers,
      role: 'Operations Director',
      title: 'Consistent Governance at Scale',
      problem: 'Your teams use different AI tools. Knowledge is scattered. Approval workflows are inconsistent. Switching to a better model means weeks of re-work.',
      solution: 'The Bridge centralizes operational control. Governance policies apply uniformly. Organizational knowledge persists across model transitions. Operations becomes predictable.',
      benefits: ['Model switches without operational disruption', 'Unified approval and compliance workflows', 'Organizational knowledge protected across transitions'],
      color: 'border-l-4 border-iw-gold',
    },
    {
      icon: Users,
      role: 'AI Center of Excellence Lead',
      title: 'Empowering Teams While Maintaining Control',
      problem: 'You want different teams to pick the best AI for their needs, but you need unified governance. Decentralized = chaos. Centralized = doesn\'t scale.',
      solution: 'The Bridge enables controlled decentralization. Teams pick their AI model. The Bridge enforces your governance. Everyone operates from the same organizational knowledge.',
      benefits: ['Teams pick the best AI per use case', 'Governance enforced automatically', 'Shared organizational knowledge layer'],
      color: 'border-l-4 border-iw-forest',
    },
    {
      icon: BarChart3,
      role: 'Finance / Procurement',
      title: 'Optimizing AI Vendor Spend',
      problem: 'You\'ve invested heavily in AI licensing. New models offer 40% savings but switching costs are too high. You\'re locked in.',
      solution: 'The Bridge eliminates switching costs. Evaluate new vendors based on ROI alone. Change models without technical debt. Negotiate from strength.',
      benefits: ['Vendor independence = better negotiating leverage', 'True cost comparison based on value, not switching cost', 'Maximize ROI on existing integrations'],
      color: 'border-l-4 border-iw-gold',
    },
  ];

  return (
    <div ref={ref}>
      {/* HERO */}
      <section className="min-h-[60vh] bg-iw-forest flex items-center section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="hero-headline editorial-heading text-5xl md:text-6xl text-iw-paper mb-6">Solutions for Every Enterprise Role</h1>
          <p className="editorial-serif text-lg text-iw-paper/80 max-w-2xl mx-auto">
            Whether you're an architect, security leader, or operations exec, the Continuity Bridge solves your specific challenge with the N×M integration problem.
          </p>
        </div>
      </section>

      {/* PERSONAS GRID */}
      <section className="personas-grid py-24 bg-iw-paper section-padding">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {personas.map((persona, i) => (
              <div key={i} className={`persona-card bg-iw-paper border rounded-lg p-10 ${persona.color}`}>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-iw-forest/10 flex items-center justify-center flex-shrink-0">
                    <persona.icon className="w-6 h-6 text-iw-forest" />
                  </div>
                  <div>
                    <p className="font-iw-mono text-xs uppercase tracking-widest text-iw-gold mb-1">{persona.role}</p>
                    <h3 className="font-iw-sans font-semibold text-2xl text-iw-forest">{persona.title}</h3>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="font-iw-mono text-xs uppercase tracking-widest text-iw-red mb-2 font-semibold">Your Challenge</p>
                    <p className="editorial-serif text-iw-slate">{persona.problem}</p>
                  </div>

                  <div>
                    <p className="font-iw-mono text-xs uppercase tracking-widest text-iw-gold mb-2 font-semibold">How Bridge Helps</p>
                    <p className="editorial-serif text-iw-slate">{persona.solution}</p>
                  </div>

                  <div>
                    <p className="font-iw-mono text-xs uppercase tracking-widest text-iw-forest mb-3 font-semibold">Key Benefits</p>
                    <ul className="space-y-2">
                      {persona.benefits.map((benefit, j) => (
                        <li key={j} className="flex gap-3">
                          <span className="text-iw-gold font-semibold flex-shrink-0">→</span>
                          <span className="editorial-serif text-iw-slate">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMON THREAD */}
      <section className="py-24 bg-iw-forest/5 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="editorial-heading text-4xl md:text-5xl text-iw-forest mb-6">A Common Thread</h2>
          <p className="editorial-serif text-lg text-iw-slate mb-10 max-w-2xl mx-auto">
            Regardless of role, every stakeholder faces the same core reality: the organization must own its AI capability layer. The Continuity Bridge is that layer.
          </p>
          <div className="bg-iw-paper border border-iw-rule rounded-lg p-8">
            <p className="editorial-serif text-xl text-iw-forest font-semibold">
              "The Bridge makes your organization AI-vendor independent while maintaining the security, governance, and integration discipline that enterprises require."
            </p>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 bg-iw-paper section-padding">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="editorial-heading text-3xl md:text-4xl text-iw-forest mb-6">Which Role Describes Your Situation?</h2>
          <p className="editorial-serif text-lg text-iw-slate mb-10">
            Let us talk through how the Bridge addresses your specific organizational challenges.
          </p>
          <a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className="inline-flex items-center justify-center px-10 py-4 bg-iw-forest text-iw-paper font-iw-sans font-semibold rounded-full hover:bg-iw-forest-bright transition-colors">
            Schedule Strategy Call <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
