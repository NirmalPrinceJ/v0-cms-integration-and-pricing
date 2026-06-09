import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSeo } from '../hooks/useSeo';

gsap.registerPlugin(ScrollTrigger);

export default function Pricing() {
  useSeo(
    "Pricing — IntegrateWise Continuity Bridge",
    "Simple, transparent pricing based on organizational scale. From startups to enterprises, pricing that grows with your AI integration needs."
  );
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-headline', { y: 40, opacity: 0, duration: 1, ease: 'power3.out' });
      gsap.from('.pricing-tier', { y: 30, opacity: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: '.pricing-grid', start: 'top 80%' } });
      gsap.from('.faq-item', { y: 20, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.faq-section', start: 'top 85%' } });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref}>
      {/* HERO */}
      <section className="min-h-[50vh] bg-iw-forest flex items-center section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="hero-headline editorial-heading text-5xl md:text-6xl text-iw-paper mb-6">Simple, Transparent Pricing</h1>
          <p className="editorial-serif text-lg text-iw-paper/80 max-w-2xl mx-auto">
            Scale from startups to enterprises. Pay for what you use. No per-transaction costs, no surprise fees. One pricing model for all organizational sizes.
          </p>
        </div>
      </section>

      {/* PRICING TIERS */}
      <section className="pricing-grid py-24 bg-iw-paper section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="editorial-serif text-lg text-iw-slate max-w-2xl mx-auto">Pricing is based on your organizational scale: number of AI systems and enterprise applications connected through the Bridge, plus features and support.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {/* Starter */}
            <div className="pricing-tier bg-gradient-to-br from-iw-forest/5 to-iw-forest/10 border border-iw-forest/20 rounded-lg p-8">
              <h3 className="font-iw-sans font-semibold text-2xl text-iw-forest mb-2">Starter</h3>
              <p className="font-iw-mono text-xs text-iw-slate mb-6 uppercase tracking-widest">For early adoption</p>
              <div className="text-4xl font-bold text-iw-forest mb-8">$499<span className="text-sm text-iw-slate">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2 text-sm text-iw-slate">
                  <span className="text-iw-gold font-bold">✓</span>
                  <span>Up to 3 AI systems</span>
                </li>
                <li className="flex gap-2 text-sm text-iw-slate">
                  <span className="text-iw-gold font-bold">✓</span>
                  <span>Up to 2 enterprise apps</span>
                </li>
                <li className="flex gap-2 text-sm text-iw-slate">
                  <span className="text-iw-gold font-bold">✓</span>
                  <span>Basic governance</span>
                </li>
                <li className="flex gap-2 text-sm text-iw-slate">
                  <span className="text-iw-gold font-bold">✓</span>
                  <span>Email support</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-iw-forest text-iw-paper font-iw-sans font-semibold rounded-lg hover:bg-iw-forest-bright transition-colors">
                Get Started
              </button>
            </div>

            {/* Growth */}
            <div className="pricing-tier bg-gradient-to-br from-iw-gold/20 to-iw-gold/30 border-2 border-iw-gold rounded-lg p-8 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-iw-gold px-4 py-1 rounded-full">
                <span className="font-iw-mono text-xs text-iw-forest font-bold uppercase">Popular</span>
              </div>
              <h3 className="font-iw-sans font-semibold text-2xl text-iw-forest mb-2">Growth</h3>
              <p className="font-iw-mono text-xs text-iw-slate mb-6 uppercase tracking-widest">For scaling teams</p>
              <div className="text-4xl font-bold text-iw-forest mb-8">$1,499<span className="text-sm text-iw-slate">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2 text-sm text-iw-slate">
                  <span className="text-iw-gold font-bold">✓</span>
                  <span>Up to 10 AI systems</span>
                </li>
                <li className="flex gap-2 text-sm text-iw-slate">
                  <span className="text-iw-gold font-bold">✓</span>
                  <span>Up to 10 enterprise apps</span>
                </li>
                <li className="flex gap-2 text-sm text-iw-slate">
                  <span className="text-iw-gold font-bold">✓</span>
                  <span>Advanced governance & audit</span>
                </li>
                <li className="flex gap-2 text-sm text-iw-slate">
                  <span className="text-iw-gold font-bold">✓</span>
                  <span>Priority support</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-iw-gold text-iw-forest font-iw-sans font-semibold rounded-lg hover:bg-iw-gold-light transition-colors">
                Get Started
              </button>
            </div>

            {/* Enterprise */}
            <div className="pricing-tier bg-gradient-to-br from-iw-forest/5 to-iw-forest/10 border border-iw-forest/20 rounded-lg p-8">
              <h3 className="font-iw-sans font-semibold text-2xl text-iw-forest mb-2">Enterprise</h3>
              <p className="font-iw-mono text-xs text-iw-slate mb-6 uppercase tracking-widest">For large organizations</p>
              <div className="text-4xl font-bold text-iw-forest mb-8">Custom</div>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2 text-sm text-iw-slate">
                  <span className="text-iw-gold font-bold">✓</span>
                  <span>Unlimited AI systems</span>
                </li>
                <li className="flex gap-2 text-sm text-iw-slate">
                  <span className="text-iw-gold font-bold">✓</span>
                  <span>Unlimited enterprise apps</span>
                </li>
                <li className="flex gap-2 text-sm text-iw-slate">
                  <span className="text-iw-gold font-bold">✓</span>
                  <span>Full compliance suite</span>
                </li>
                <li className="flex gap-2 text-sm text-iw-slate">
                  <span className="text-iw-gold font-bold">✓</span>
                  <span>Dedicated support</span>
                </li>
              </ul>
              <button className="w-full py-3 border-2 border-iw-forest text-iw-forest font-iw-sans font-semibold rounded-lg hover:bg-iw-forest/5 transition-colors">
                Contact Sales
              </button>
            </div>

            {/* On-Premise */}
            <div className="pricing-tier bg-gradient-to-br from-iw-forest/5 to-iw-forest/10 border border-iw-forest/20 rounded-lg p-8">
              <h3 className="font-iw-sans font-semibold text-2xl text-iw-forest mb-2">On-Premise</h3>
              <p className="font-iw-mono text-xs text-iw-slate mb-6 uppercase tracking-widest">For regulated industries</p>
              <div className="text-4xl font-bold text-iw-forest mb-8">Custom</div>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2 text-sm text-iw-slate">
                  <span className="text-iw-gold font-bold">✓</span>
                  <span>Your infrastructure</span>
                </li>
                <li className="flex gap-2 text-sm text-iw-slate">
                  <span className="text-iw-gold font-bold">✓</span>
                  <span>Your security controls</span>
                </li>
                <li className="flex gap-2 text-sm text-iw-slate">
                  <span className="text-iw-gold font-bold">✓</span>
                  <span>Compliance by design</span>
                </li>
                <li className="flex gap-2 text-sm text-iw-slate">
                  <span className="text-iw-gold font-bold">✓</span>
                  <span>Dedicated support team</span>
                </li>
              </ul>
              <button className="w-full py-3 border-2 border-iw-forest text-iw-forest font-iw-sans font-semibold rounded-lg hover:bg-iw-forest/5 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE COMPARISON */}
      <section className="py-24 bg-iw-forest section-padding">
        <div className="max-w-5xl mx-auto">
          <h2 className="editorial-heading text-3xl md:text-4xl text-center text-iw-paper mb-16">What's Included in Every Plan</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-iw-sans font-semibold text-lg text-iw-gold mb-4">Platform Features</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-iw-paper/90">
                  <span className="text-iw-gold">✓</span>
                  <span className="editorial-serif">Context normalization across all enterprise systems</span>
                </li>
                <li className="flex gap-3 text-iw-paper/90">
                  <span className="text-iw-gold">✓</span>
                  <span className="editorial-serif">Unified capability definitions and permissions</span>
                </li>
                <li className="flex gap-3 text-iw-paper/90">
                  <span className="text-iw-gold">✓</span>
                  <span className="editorial-serif">Knowledge persistence across vendor changes</span>
                </li>
                <li className="flex gap-3 text-iw-paper/90">
                  <span className="text-iw-gold">✓</span>
                  <span className="editorial-serif">Real-time sync with enterprise systems</span>
                </li>
                <li className="flex gap-3 text-iw-paper/90">
                  <span className="text-iw-gold">✓</span>
                  <span className="editorial-serif">Audit logs for all actions and data access</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-iw-sans font-semibold text-lg text-iw-gold mb-4">All Plans Include</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-iw-paper/90">
                  <span className="text-iw-gold">✓</span>
                  <span className="editorial-serif">API access for all AI systems</span>
                </li>
                <li className="flex gap-3 text-iw-paper/90">
                  <span className="text-iw-gold">✓</span>
                  <span className="editorial-serif">99.9% uptime SLA</span>
                </li>
                <li className="flex gap-3 text-iw-paper/90">
                  <span className="text-iw-gold">✓</span>
                  <span className="editorial-serif">Single sign-on (SSO)</span>
                </li>
                <li className="flex gap-3 text-iw-paper/90">
                  <span className="text-iw-gold">✓</span>
                  <span className="editorial-serif">Data encryption in transit and at rest</span>
                </li>
                <li className="flex gap-3 text-iw-paper/90">
                  <span className="text-iw-gold">✓</span>
                  <span className="editorial-serif">SOC 2 Type II compliance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section py-24 bg-iw-paper section-padding">
        <div className="max-w-3xl mx-auto">
          <h2 className="editorial-heading text-3xl md:text-4xl text-center text-iw-forest mb-16">Questions About Pricing?</h2>

          <div className="space-y-4">
            {[
              { q: "What if I need more systems than my tier includes?", a: "Upgrade anytime. All tiers support unlimited expansion at standard rates. Contact sales for custom scaling arrangements." },
              { q: "Do you have startup or non-profit pricing?", a: "Yes. We offer 50% discounts for YC companies and non-profits. Contact our team at startups@integratewise.ai" },
              { q: "What about annual billing?", a: "Annual subscriptions receive 20% discount + one free month of service. Contact sales for custom annual contracts." },
              { q: "Is there a minimum contract?", a: "No minimum for Starter and Growth plans. Month-to-month, cancel anytime. Enterprise plans may include annual minimums." },
              { q: "How do you count 'enterprise apps' or 'AI systems'?", a: "Each unique application or AI model counts as one system. So Salesforce = 1 system, ChatGPT = 1 system, Postgres database = 1 system." },
            ].map((item, i) => (
              <div key={i} className="faq-item bg-iw-forest/5 border border-iw-forest/20 rounded-lg p-6">
                <h3 className="font-iw-sans font-semibold text-iw-forest mb-3">{item.q}</h3>
                <p className="editorial-serif text-iw-slate">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-iw-forest section-padding">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="editorial-heading text-3xl md:text-4xl text-iw-paper mb-6">Ready to Own Your AI Integration?</h2>
          <p className="editorial-serif text-lg text-iw-paper/80 mb-10">
            Start with a demo to understand how Continuity Bridge pricing scales with your organization. No pressure, no commitment.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className="inline-flex items-center justify-center px-10 py-4 bg-iw-gold text-iw-forest font-iw-sans font-semibold rounded-full hover:bg-iw-gold-light transition-colors">
              Schedule Demo
            </a>
            <a href="/platform" className="inline-flex items-center justify-center px-10 py-4 border-2 border-iw-gold text-iw-gold font-iw-sans font-semibold rounded-full hover:bg-iw-gold/10 transition-colors">
              Learn Platform <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
