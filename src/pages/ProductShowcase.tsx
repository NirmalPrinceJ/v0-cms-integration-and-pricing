import { useState } from 'react';
import { Check, X, ArrowRight, Brain, Activity, Microphone, ShieldCheck, Book, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductShowcase() {
  const [expandedCapability, setExpandedCapability] = useState<string | null>(null);
  const [expandedStep, setExpandedStep] = useState<string | null>(null);
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);

  const capabilities = [
    {
      id: 'memory',
      icon: Brain,
      name: 'Memory',
      desc: 'Sessions compound. Decisions persist. The AI never starts cold again.',
      color: 'bg-green-100 text-green-700',
      details: 'Every conversation is stored in a persistent, queryable format. Your AI learns from all past interactions and maintains context across sessions. No more forgotten context or repeated explanations.'
    },
    {
      id: 'entity360',
      icon: Users,
      name: 'Entity 360',
      desc: 'One entity. One history. One relationship graph across all tools.',
      color: 'bg-teal-100 text-teal-700',
      details: 'A single unified view of every customer, prospect, or team. Relationship history, timeline, and interactions from all connected systems appear in one place.'
    },
    {
      id: 'intelligence',
      icon: Activity,
      name: 'Intelligence',
      desc: 'Signals, health scores, churn risk, renewal alerts — always current.',
      color: 'bg-purple-100 text-purple-700',
      details: 'Real-time scoring and intelligence layers detect signals automatically. Health scores update as data flows in. Predictive alerts trigger before problems escalate.'
    },
    {
      id: 'voice',
      icon: Microphone,
      name: 'Voice continuity',
      desc: 'Good morning. Three things need your attention. Not: how can I help?',
      color: 'bg-amber-100 text-amber-700',
      details: 'Your AI Twin speaks in your voice and proactively tells you what matters. No more generic chatbot responses. Context-aware, personalized briefings.'
    },
    {
      id: 'governance',
      icon: ShieldCheck,
      name: 'Governance',
      desc: 'Every AI proposal is reviewed before execution. Full audit trail.',
      color: 'bg-blue-100 text-blue-700',
      details: 'Approval workflows ensure every action is reviewed before execution. Complete audit trail for compliance. Policies apply consistently across all AI systems.'
    },
    {
      id: 'collaboration',
      icon: Zap,
      name: 'Agent collaboration',
      desc: 'Claude, GPT, Gemini, Grok — all read from one Spine. No relay needed.',
      color: 'bg-red-100 text-red-700',
      details: 'All your AI systems connect to the same continuity layer. Perfect information consistency. No translation layer, no data loss, no silos between models.'
    },
    {
      id: 'knowledge',
      icon: Book,
      name: 'Knowledge',
      desc: 'Why did we make this decision? Find it. Every document, linked.',
      color: 'bg-pink-100 text-pink-700',
      details: 'Organizational memory that compounds. Decisions stay linked to their reasoning. Knowledge graph connects every fact, assumption, and outcome.'
    },
    {
      id: 'integration',
      icon: Users,
      name: 'Integrations',
      desc: 'Connect HubSpot, Salesforce, Slack, email, documents in minutes.',
      color: 'bg-gray-100 text-gray-700',
      details: '100+ pre-built connectors to enterprise systems. Add new data sources without code. One normalized query layer regardless of source system.'
    }
  ];

  const steps = [
    {
      id: 'step1',
      num: '01',
      title: 'Connect your tools',
      desc: 'Add Salesforce, HubSpot, Slack, email, docs. We normalize and encrypt. You stay in control.',
      details: 'Our connectors handle OAuth, API keys, and permissions securely. Data flows into an encrypted data layer. You can audit, revoke, or isolate any connection.'
    },
    {
      id: 'step2',
      num: '02',
      title: 'AI reads the Spine',
      desc: 'ChatGPT, Claude, Gemini, and your agents all query one normalized memory.',
      details: 'Instead of building M×N integrations, every AI system reads from our continuity layer. Context is consistent. Updates are immediate. No sync delays.'
    },
    {
      id: 'step3',
      num: '03',
      title: 'Your Twin briefs you',
      desc: 'Decisions are made, approved, and logged. You never repeat yourself again.',
      details: 'Your Digital Twin understands your business logic and makes decisions in context. Governance ensures nothing happens without your approval. Every action is audited.'
    }
  ];

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '$299',
      period: '/month',
      desc: 'For teams exploring AI automation',
      features: ['3 tool integrations', 'Memory up to 90 days', 'Basic governance', '100K requests/month'],
      featured: false
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$999',
      period: '/month',
      desc: 'Our most popular plan',
      features: ['Unlimited integrations', 'Memory up to 2 years', 'Advanced governance', '1M requests/month', 'Priority support', 'Custom workflows'],
      featured: true,
      badge: 'MOST POPULAR'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      desc: 'For large organizations',
      features: ['Dedicated infrastructure', 'Custom SLA', 'Org-wide governance', 'Unlimited everything', 'Account management'],
      featured: false
    },
    {
      id: 'api',
      name: 'API',
      price: 'Pay as you go',
      period: '',
      desc: 'For developers',
      features: ['$0.001 per request', 'No minimum', 'Unlimited scale', 'Webhooks & events'],
      featured: false
    }
  ];

  return (
    <div className="bg-gradient-to-b from-iw-paper to-iw-paper-warm">
      {/* ─── HERO ─── */}
      <section className="pt-24 pb-16 px-6 text-center border-b border-iw-rule">
        <p className="text-sm font-iw-mono text-iw-gold uppercase tracking-widest mb-4">The continuity bridge for AI</p>
        <h1 className="text-5xl md:text-6xl font-iw-display tracking-wide text-iw-ink mb-6 max-w-3xl mx-auto leading-tight">Your AI already knows your tools. Now make it remember.</h1>
        <p className="text-xl text-iw-slate max-w-2xl mx-auto mb-8 leading-relaxed">Connect IntegrateWise once. Every AI you use reads from one normalized, governed, persistent truth — forever.</p>
        <div className="flex gap-4 justify-center mb-12">
          <a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className="px-8 py-3 bg-iw-forest text-iw-paper font-iw-sans font-semibold rounded-lg hover:opacity-90">Start for free</a>
          <button className="px-8 py-3 border-2 border-iw-forest text-iw-forest font-iw-sans font-semibold rounded-lg hover:bg-iw-forest hover:text-iw-paper transition-colors">Watch demo</button>
        </div>
        <div className="flex gap-12 justify-center text-center">
          <div>
            <div className="text-2xl font-bold text-iw-ink">1:N</div>
            <div className="text-sm text-iw-slate">not M×N connections</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-iw-ink">879</div>
            <div className="text-sm text-iw-slate">governed memory entries</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-iw-ink">&lt;10ms</div>
            <div className="text-sm text-iw-slate">Spine read latency</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-iw-ink">20</div>
            <div className="text-sm text-iw-slate">MCP tools live</div>
          </div>
        </div>
      </section>

      {/* ─── PRODUCT SCREEN MOCK ─── */}
      <section className="py-16 px-6 border-b border-iw-rule">
        <div className="max-w-4xl mx-auto border border-iw-rule rounded-xl overflow-hidden bg-iw-paper">
          <div className="bg-iw-paper-warm border-b border-iw-rule px-4 py-2 flex gap-2 items-center">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <span className="text-xs text-iw-slate ml-2">app.integratewise.ai</span>
          </div>
          <div className="grid grid-cols-4 gap-0">
            {/* Sidebar */}
            <div className="col-span-1 border-r border-iw-rule bg-iw-paper p-3">
              <div className="text-xs font-iw-sans font-semibold text-iw-ink mb-3 pb-3 border-b border-iw-rule">IW</div>
              {['Home', 'Catch-up', 'Entity 360', 'Twin', 'Governance', 'Knowledge', 'Continuity'].map((item) => (
                <div key={item} className={`text-xs py-2 px-2 rounded mb-1 ${item === 'Home' ? 'bg-iw-forest text-iw-paper' : 'text-iw-slate hover:bg-iw-paper-warm'}`}>
                  <span className="inline-block w-1 h-1 rounded-full mr-2 bg-current"></span>
                  {item}
                </div>
              ))}
            </div>
            {/* Main content */}
            <div className="col-span-3 p-4">
              <div className="grid grid-cols-4 gap-2 mb-4">
                <div className="bg-iw-paper-warm border border-iw-rule rounded p-2">
                  <div className="text-lg font-bold text-iw-ink">3</div>
                  <div className="text-xs text-iw-slate">Critical signals</div>
                </div>
                <div className="bg-iw-paper-warm border border-iw-rule rounded p-2">
                  <div className="text-lg font-bold text-iw-ink">12</div>
                  <div className="text-xs text-iw-slate">Renewals &lt;90d</div>
                </div>
                <div className="bg-iw-paper-warm border border-iw-rule rounded p-2">
                  <div className="text-lg font-bold text-iw-ink">879</div>
                  <div className="text-xs text-iw-slate">Org memories</div>
                </div>
                <div className="bg-iw-paper-warm border border-iw-rule rounded p-2">
                  <div className="text-lg font-bold text-iw-ink">72</div>
                  <div className="text-xs text-iw-slate">Avg health</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex gap-2 items-center p-2 bg-iw-paper-warm border border-iw-rule rounded text-xs">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <div className="flex-1">Acme Corp — health dropped 18pts. Renewal in 12 days.</div>
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">Twin proposed</span>
                  <div className="text-iw-slate">2m</div>
                </div>
                <div className="flex gap-2 items-center p-2 bg-iw-paper-warm border border-iw-rule rounded text-xs">
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <div className="flex-1">TechFlow — engagement drop, 23 days silent.</div>
                  <div className="text-iw-slate">1h</div>
                </div>
                <div className="flex gap-2 items-center p-2 bg-iw-paper-warm border border-iw-rule rounded text-xs">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <div className="flex-1">GlobalRetail — ARR expansion signal detected.</div>
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">Auto-approved</span>
                  <div className="text-iw-slate">3h</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BEFORE/AFTER INVERSION ─── */}
      <section className="py-16 px-6 border-b border-iw-rule bg-iw-paper-warm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-iw-display text-iw-ink mb-2 text-center">The inversion that changes everything</h2>
          <p className="text-center text-iw-slate mb-12">You're already paying for Claude. We make it worth what you paid.</p>
          <div className="grid grid-cols-3 gap-8">
            {/* Before */}
            <div className="border border-iw-rule rounded-lg p-6 bg-iw-paper">
              <h3 className="text-sm font-iw-mono font-semibold text-iw-slate uppercase tracking-wide mb-4">Before — Direct connections</h3>
              <div className="space-y-3 text-sm">
                <div className="flex gap-2"><X className="text-red-500 flex-shrink-0" size={18} /><span className="text-iw-slate">Claude reads HubSpot directly — stateless</span></div>
                <div className="flex gap-2"><X className="text-red-500 flex-shrink-0" size={18} /><span className="text-iw-slate">ChatGPT reads HubSpot directly — different view</span></div>
                <div className="flex gap-2"><X className="text-red-500 flex-shrink-0" size={18} /><span className="text-iw-slate">Every Monday you re-brief the AI</span></div>
                <div className="flex gap-2"><X className="text-red-500 flex-shrink-0" size={18} /><span className="text-iw-slate">3 agents × 10 tools = 30 connections</span></div>
                <div className="flex gap-2"><X className="text-red-500 flex-shrink-0" size={18} /><span className="text-iw-slate">You are the memory. You are the API.</span></div>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center">
              <ArrowRight className="text-iw-gold" size={32} />
            </div>

            {/* After */}
            <div className="border-2 border-iw-forest rounded-lg p-6 bg-iw-paper">
              <h3 className="text-sm font-iw-mono font-semibold text-iw-forest uppercase tracking-wide mb-4">After — One continuity bridge</h3>
              <div className="space-y-3 text-sm">
                <div className="flex gap-2"><Check className="text-iw-forest flex-shrink-0" size={18} /><span className="text-iw-ink font-semibold">Claude reads Spine — normalized truth</span></div>
                <div className="flex gap-2"><Check className="text-iw-forest flex-shrink-0" size={18} /><span className="text-iw-ink font-semibold">ChatGPT reads same Spine — same truth</span></div>
                <div className="flex gap-2"><Check className="text-iw-forest flex-shrink-0" size={18} /><span className="text-iw-ink font-semibold">Twin briefs you. You never explain twice.</span></div>
                <div className="flex gap-2"><Check className="text-iw-forest flex-shrink-0" size={18} /><span className="text-iw-ink font-semibold">10 tools × 1 Spine = 10 connections total</span></div>
                <div className="flex gap-2"><Check className="text-iw-forest flex-shrink-0" size={18} /><span className="text-iw-ink font-semibold">Spine is the memory. You bring judgment.</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CAPABILITIES (INTERACTIVE) ─── */}
      <section className="py-16 px-6 border-b border-iw-rule">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-iw-display text-iw-ink mb-2 text-center">What the continuity bridge gives your AI</h2>
          <p className="text-center text-iw-slate mb-12">Connect once. Your AI gets all of this — immediately.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              const isExpanded = expandedCapability === cap.id;
              return (
                <button
                  key={cap.id}
                  onClick={() => setExpandedCapability(isExpanded ? null : cap.id)}
                  className="text-left border border-iw-rule rounded-lg p-4 hover:border-iw-forest transition-all bg-iw-paper hover:shadow-lg"
                >
                  <div className={`w-8 h-8 rounded-lg ${cap.color} flex items-center justify-center mb-3`}>
                    <Icon size={18} />
                  </div>
                  <h3 className="font-iw-display text-iw-ink font-semibold mb-1">{cap.name}</h3>
                  <p className="text-sm text-iw-slate leading-relaxed">{cap.desc}</p>
                  
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-iw-rule">
                      <p className="text-sm text-iw-slate leading-relaxed">{cap.details}</p>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS (INTERACTIVE) ─── */}
      <section className="py-16 px-6 border-b border-iw-rule bg-iw-paper-warm">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-iw-display text-iw-ink mb-2 text-center">How it works</h2>
          <p className="text-center text-iw-slate mb-12">Three steps to persistent, governed AI memory.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step) => {
              const isExpanded = expandedStep === step.id;
              return (
                <button
                  key={step.id}
                  onClick={() => setExpandedStep(isExpanded ? null : step.id)}
                  className="text-left border border-iw-rule rounded-lg p-6 bg-iw-paper hover:border-iw-forest transition-all"
                >
                  <div className="text-sm font-iw-mono font-semibold text-iw-forest mb-3">{step.num}</div>
                  <h3 className="font-iw-display text-iw-ink font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-iw-slate leading-relaxed">{step.desc}</p>
                  
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-iw-rule">
                      <p className="text-sm text-iw-slate leading-relaxed">{step.details}</p>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── MULESOFT FOUNDER STORY ─── */}
      <section className="py-16 px-6 border-b border-iw-rule">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-iw-mono text-iw-forest uppercase tracking-widest mb-4">THE FOUNDER STORY</p>
          <h2 className="text-2xl font-iw-display text-iw-ink mb-6 leading-relaxed">"Every company becomes an integration company. We built the integration layer. Now we're building the continuity layer."</h2>
          <p className="text-base text-iw-slate leading-relaxed mb-6 italic">IntegrateWise was founded to solve the problem we saw at MuleSoft: systems were connected, but they didn't talk to AI. And AI didn't remember. This is the missing piece.</p>
          <p className="text-sm text-iw-slate"><strong className="text-iw-ink">Ross Mason</strong> — Founder, MuleSoft & IntegrateWise</p>
        </div>
      </section>

      {/* ─── PRICING (INTERACTIVE) ─── */}
      <section className="py-16 px-6 border-b border-iw-rule bg-iw-paper-warm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-iw-display text-iw-ink mb-2 text-center">Simple, transparent pricing</h2>
          <p className="text-center text-iw-slate mb-12">Choose the plan that fits your scale.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {plans.map((plan) => {
              const isExpanded = expandedPlan === plan.id;
              return (
                <button
                  key={plan.id}
                  onClick={() => setExpandedPlan(isExpanded ? null : plan.id)}
                  className={`text-left rounded-lg p-6 transition-all ${
                    plan.featured
                      ? 'border-2 border-iw-forest bg-iw-paper shadow-lg'
                      : 'border border-iw-rule bg-iw-paper hover:border-iw-forest'
                  }`}
                >
                  {plan.badge && (
                    <div className="text-xs font-iw-mono font-semibold text-iw-forest bg-green-100 px-2 py-1 rounded-full inline-block mb-3">
                      {plan.badge}
                    </div>
                  )}
                  <h3 className="font-iw-display text-iw-ink font-semibold mb-1">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-2xl font-bold text-iw-ink">{plan.price}</span>
                    {plan.period && <span className="text-sm text-iw-slate">{plan.period}</span>}
                  </div>
                  <p className="text-sm text-iw-slate mb-4">{plan.desc}</p>
                  
                  {isExpanded ? (
                    <div className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="text-sm text-iw-slate flex gap-2">
                          <Check className="text-iw-forest flex-shrink-0" size={16} />
                          {feature}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-xs text-iw-slate">{plan.features.length} features</div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-16 px-6 border-b border-iw-rule text-center">
        <h2 className="text-3xl font-iw-display text-iw-ink mb-4">Ready to make your AI remember?</h2>
        <p className="text-iw-slate mb-8 max-w-xl mx-auto">See how IntegrateWise transforms your AI operations. Get persistent memory, governed decisions, and one source of truth.</p>
        <div className="flex gap-4 justify-center">
          <a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className="px-8 py-3 bg-iw-forest text-iw-paper font-iw-sans font-semibold rounded-lg hover:opacity-90">Book a demo</a>
          <Link to="/" className="px-8 py-3 border-2 border-iw-forest text-iw-forest font-iw-sans font-semibold rounded-lg hover:bg-iw-forest hover:text-iw-paper transition-colors">Back to home</Link>
        </div>
      </section>
    </div>
  );
}
