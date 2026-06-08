import { ArrowRight, Check, HelpCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import SectionLabel from '../components/SectionLabel';
import { useSeo } from '../hooks/useSeo';
import { fetchPricingPage, type PricingPageData } from '../lib/cms-data';

const faqs = [
  { q: 'What is a "view"?', a: 'A view is a connected workspace for a specific business function — like Account Success, Sales, Support, or Finance. Account Success gives you 1 view (Account + Technical Success combined). Business Operations gives you all 12 departmental views.' },
  { q: 'Can I upgrade later?', a: 'Yes. Start with Account Success and upgrade to Business Operations anytime. Your data, connections, and Twin memory carry over seamlessly.' },
  { q: 'Is there a free trial?', a: 'We do free guided demos instead of self-serve trials. This lets us connect your actual tools and show you real value in the first session.' },
  { q: 'What counts as a user?', a: 'Anyone who logs into IntegrateWise and interacts with their Twin or the workbench. View-only dashboard access is free.' },
  { q: 'Do you offer annual billing?', a: 'Yes. Annual billing gives you 2 months free. Contact us for enterprise annual contracts.' },
];

export default function Pricing() {
  const [pricing, setPricing] = useState<PricingPageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchPricingPage();
        setPricing(data);
      } catch (error) {
        console.error('[v0] Failed to load pricing:', error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  useSeo(pricing?.seoTitle || "Pricing | IntegrateWise", pricing?.seoDescription || "Account Success platform pricing. Transparent, scalable tiers with no hidden fees.");

  if (loading || !pricing) {
    return <div className="section-padding-y text-center">Loading pricing...</div>;
  }

  return (
    <div>
      <section className="pt-32 pb-16 section-padding">
        <div className="max-w-4xl">
          <SectionLabel label="Pricing" />
          <h1 className="editorial-heading text-4xl sm:text-5xl md:text-6xl text-iw-ink mt-6">{pricing.title.toUpperCase()}</h1>
          <p className="font-iw-sans text-base sm:text-lg text-iw-slate mt-6 leading-relaxed max-w-2xl">{pricing.subtitle}</p>
          {pricing.description && <p className="font-iw-sans text-sm text-iw-slate mt-4 leading-relaxed">{pricing.description}</p>}
        </div>
      </section>

      <section className="section-padding-y border-t border-iw-paper-deep">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-iw-rule max-w-6xl">
            {pricing.tiers.map((tier) => (
              <div key={tier._id} className={`p-6 sm:p-8 flex flex-col ${pricing.tiers.indexOf(tier) < pricing.tiers.length - 1 ? 'lg:border-r border-b lg:border-b-0 border-iw-rule' : ''} ${tier.highlighted ? 'bg-iw-forest text-iw-paper' : ''}`}>
                <div className="mb-6">
                  <span className={`inline-block font-iw-mono text-xs uppercase tracking-widest px-3 py-1.5 rounded border mb-4 ${tier.highlighted ? 'text-iw-gold-pale border-iw-gold/40' : 'text-iw-forest border-iw-rule'}`}>{tier.name}</span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-iw-display text-4xl tracking-wide">
                      {tier.price === 0 ? 'Custom' : `$${tier.price}`}
                    </span>
                    {tier.price > 0 && <span className={`font-iw-mono text-sm ${tier.highlighted ? 'text-iw-paper/60' : 'text-iw-slate'}`}>/month</span>}
                  </div>
                  <p className={`font-iw-sans text-sm mt-2 ${tier.highlighted ? 'text-iw-paper/70' : 'text-iw-slate'}`}>{tier.description}</p>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={16} className={`shrink-0 mt-0.5 ${tier.highlighted ? 'text-iw-gold' : 'text-iw-forest'}`} />
                      <span className={`font-iw-sans text-sm ${tier.highlighted ? 'text-iw-paper/80' : 'text-iw-slate'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className={`inline-flex items-center justify-center px-6 py-3 font-iw-sans font-semibold text-sm rounded-full transition-all ${tier.highlighted ? 'bg-iw-paper text-iw-forest hover:bg-iw-gold-pale' : 'bg-iw-ink text-iw-paper hover:bg-iw-forest'}`}>
                  {tier.cta} <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-y bg-iw-paper-warm">
        <div className="section-padding max-w-3xl">
          <SectionLabel label="FAQ" />
          <h2 className="editorial-heading text-2xl sm:text-3xl text-iw-ink mt-4 mb-10">COMMON QUESTIONS.</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-iw-rule pb-6">
                <div className="flex items-start gap-3">
                  <HelpCircle size={18} className="text-iw-forest shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-iw-display text-lg tracking-wide text-iw-ink mb-2">{faq.q}</h3>
                    <p className="font-iw-sans text-sm text-iw-slate leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-y">
        <div className="section-padding text-center max-w-2xl mx-auto">
          <h2 className="editorial-heading text-2xl sm:text-3xl text-iw-ink mb-4">NOT SURE WHICH TIER?</h2>
          <p className="font-iw-sans text-base text-iw-slate leading-relaxed mb-8">Talk to us. We will help you figure out the right scope for your team.</p>
          <a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className="btn-primary">Book a Demo <ArrowRight size={16} className="ml-2" /></a>
        </div>
      </section>
    </div>
  );
}
