import { ArrowRight } from 'lucide-react';
import SectionLabel from '../components/SectionLabel';
import { useSeo } from '../hooks/useSeo';

export default function ContinuityBridge() {
  useSeo(
    'Continuity Bridge | IntegrateWise',
    'The missing layer in enterprise AI. One Memory. One Context. One Truth. Across every AI, system, and conversation.'
  );

  return (
    <div>
      {/* HERO */}
      <section className="pt-32 pb-16 section-padding bg-iw-forest text-iw-paper">
        <div className="max-w-4xl text-center">
          <SectionLabel label="IW_CONTINUITY_BRIDGE" />
          <h1 className="editorial-heading text-4xl sm:text-5xl md:text-6xl text-iw-paper mt-6 leading-none">
            THE MISSING LAYER IN ENTERPRISE AI
          </h1>
          <p className="font-iw-serif text-lg text-iw-paper/70 mt-6 max-w-2xl mx-auto leading-relaxed italic">
            One Memory. One Context. One Truth. Across Every AI, Every System, and Every Conversation.
          </p>
          <p className="font-iw-sans text-base text-iw-paper/60 mt-5 max-w-xl mx-auto leading-relaxed">
            Organizations are adopting ChatGPT, Claude, Gemini, Copilot, internal agents, and dozens of AI-powered applications. But every interaction starts over. IW_Continuity_Bridge creates the continuity layer that allows humans, AI systems, and enterprise applications to operate from the same organizational reality.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className="btn-primary">Request Demo <ArrowRight size={16} className="ml-2" /></a>
            <a href="#architecture" className="btn-outline">See Architecture <ArrowRight size={16} className="ml-2" /></a>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="section-padding-y">
        <div className="max-w-4xl">
          <SectionLabel label="The Problem" />
          <h2 className="editorial-heading text-3xl sm:text-4xl text-iw-ink mt-4 mb-6">
            THE AI ERA HAS RECREATED AN OLD PROBLEM
          </h2>
          <p className="font-iw-sans text-base text-iw-slate leading-relaxed mb-6">
            Twenty years ago, enterprises struggled with application fragmentation. Every system connected directly to every other system. The result was complexity, duplication, and chaos. Integration platforms and API gateways solved that problem.
          </p>
          <p className="font-iw-sans text-base text-iw-slate leading-relaxed mb-8">
            Today, AI is creating the same challenge again. Every AI maintains its own:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {['Memory', 'Context', 'Understanding', 'Conversation History', 'Work State'].map((item) => (
              <div key={item} className="font-iw-mono text-sm text-iw-forest border-l-4 border-iw-gold pl-3 py-2">
                {item}
              </div>
            ))}
          </div>
          <p className="font-iw-sans text-base text-iw-slate leading-relaxed italic">
            Organizations now have intelligence everywhere, but continuity nowhere.
          </p>
        </div>
      </section>

      {/* THE GAP */}
      <section className="section-padding-y bg-iw-paper-warm">
        <div className="max-w-4xl text-center">
          <SectionLabel label="The Gap" />
          <h2 className="editorial-heading text-3xl sm:text-4xl text-iw-ink mt-4 mb-6">
            ENTERPRISES HAVE INTEGRATION INFRASTRUCTURE.<br className="hidden sm:block" />THEY DON'T HAVE CONTINUITY INFRASTRUCTURE.
          </h2>
          <p className="font-iw-sans text-base text-iw-slate leading-relaxed max-w-2xl mx-auto mb-10">
            Modern organizations need more than AI access. They need a layer that exists independently of any model, application, or conversation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-iw-rule max-w-3xl mx-auto">
            {[
              { title: 'Shared Memory', desc: 'Knowledge persists across every conversation and system' },
              { title: 'Shared Context', desc: 'Work continues when tools, models, or teams change' },
              { title: 'Shared Reasoning', desc: 'Organizational thinking compounds over time' },
              { title: 'Shared Organizational Truth', desc: 'One reality. Every participant. Always current.' },
            ].map((item, i) => (
              <div
                key={i}
                className={`p-8 ${i % 2 === 0 ? 'sm:border-r' : ''} ${i < 2 ? 'border-b' : ''} border-iw-rule`}
              >
                <h3 className="font-iw-display text-xl text-iw-ink mb-2">{item.title}</h3>
                <p className="font-iw-sans text-sm text-iw-slate">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE PRODUCT */}
      <section id="architecture" className="section-padding-y">
        <div className="max-w-5xl">
          <div className="text-center mb-12">
            <SectionLabel label="The Product" />
            <h2 className="editorial-heading text-3xl sm:text-4xl text-iw-ink mt-4 mb-6">
              INTRODUCING IW_CONTINUITY_BRIDGE
            </h2>
            <p className="font-iw-sans text-base text-iw-slate leading-relaxed max-w-2xl mx-auto">
              IW_Continuity_Bridge is continuity infrastructure for the AI era. It sits between humans, AI systems, enterprise applications, and organizational knowledge — creating a persistent continuity layer that every participant can access.
            </p>
          </div>

          <div className="bg-iw-paper-warm border-2 border-iw-rule rounded p-8 overflow-x-auto">
            <svg
              viewBox="0 0 840 400"
              style={{ width: '100%', height: 'auto', minWidth: '700px' }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <style>{`
                  .cb-mono { font-family: 'IBM Plex Mono', monospace; }
                  .cb-display { font-family: 'Bebas Neue', sans-serif; }
                `}</style>
              </defs>
              <rect width="840" height="400" fill="#EBE5D8" />

              {/* Title */}
              <text
                x="420"
                y="22"
                textAnchor="middle"
                fill="#1A3A2A"
                className="cb-mono"
                fontSize="9"
                letterSpacing="0.2em"
                opacity="0.5"
              >
                CONTINUITY BRIDGE · KNOWLEDGE SURVIVES CHANGE
              </text>

              {/* LEFT BANK: FRAGMENTED */}
              <text
                x="130"
                y="48"
                textAnchor="middle"
                fill="#1A3A2A"
                className="cb-mono"
                fontSize="8"
                letterSpacing="0.12em"
                opacity="0.5"
              >
                BEFORE · FRAGMENTED
              </text>

              {/* Tools (left side) */}
              {[
                { x: 40, y: 62, label: 'CRM' },
                { x: 105, y: 72, label: 'Slack' },
                { x: 165, y: 58, label: 'Docs' },
                { x: 55, y: 108, label: 'Email' },
                { x: 120, y: 118, label: 'Tasks' },
                { x: 185, y: 102, label: 'Chat' },
              ].map((tool, i) => (
                <g key={i} opacity="0.45">
                  <rect x={tool.x} y={tool.y} width="52" height="22" rx="3" fill="none" stroke="#1A3A2A" strokeWidth="1.3" />
                  <text x={tool.x + 26} y={tool.y + 15} textAnchor="middle" fill="#1A3A2A" className="cb-mono" fontSize="6">
                    {tool.label}
                  </text>
                </g>
              ))}

              {/* BRIDGE CENTER */}
              <text
                x="420"
                y="48"
                textAnchor="middle"
                fill="#1A3A2A"
                className="cb-mono"
                fontSize="8"
                letterSpacing="0.12em"
                opacity="0.5"
              >
                CONTINUITY BRIDGE
              </text>

              {/* Bridge box */}
              <rect x="340" y="62" width="160" height="220" rx="4" fill="none" stroke="#1A3A2A" strokeWidth="2.5" opacity="0.8" />
              <rect x="348" y="70" width="144" height="30" rx="2" fill="#F0E0B0" opacity="0.3" />
              <text x="420" y="90" textAnchor="middle" fill="#1A3A2A" className="cb-mono" fontSize="7" letterSpacing="0.1em" fontWeight="600">
                SHARED MEMORY
              </text>

              {/* RIGHT BANK: CONNECTED */}
              <text
                x="710"
                y="48"
                textAnchor="middle"
                fill="#1A3A2A"
                className="cb-mono"
                fontSize="8"
                letterSpacing="0.12em"
                opacity="0.5"
              >
                AFTER · CONNECTED
              </text>

              {/* Connected tools (right side) */}
              {[
                { x: 640, y: 62, label: 'GPT-4' },
                { x: 705, y: 72, label: 'Claude' },
                { x: 765, y: 58, label: 'Gemini' },
                { x: 655, y: 108, label: 'Internal Agent' },
                { x: 720, y: 118, label: 'Custom AI' },
                { x: 785, y: 102, label: 'Copilot' },
              ].map((tool, i) => (
                <g key={i} opacity="0.8">
                  <rect x={tool.x} y={tool.y} width="52" height="22" rx="3" fill="none" stroke="#1A3A2A" strokeWidth="1.3" />
                  <text x={tool.x + 26} y={tool.y + 15} textAnchor="middle" fill="#1A3A2A" className="cb-mono" fontSize="6" fontWeight="600">
                    {tool.label}
                  </text>
                </g>
              ))}

              {/* Connection lines */}
              <line x1="293" y1="173" x2="340" y2="173" stroke="#B8943F" strokeWidth="2" opacity="0.6" />
              <line x1="500" y1="173" x2="640" y2="173" stroke="#B8943F" strokeWidth="2" opacity="0.6" />

              {/* Flow indicator */}
              <circle cx="305" cy="173" r="4" fill="#B8943F" />
              <circle cx="510" cy="173" r="4" fill="#B8943F" />
            </svg>
          </div>

          <p className="font-iw-mono text-xs text-iw-slate text-center mt-6 opacity-60">
            One unified continuity layer. Every AI system. Every participant. Operating from shared organizational truth.
          </p>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="section-padding-y bg-iw-paper-warm">
        <div className="max-w-4xl">
          <div className="text-center mb-12">
            <SectionLabel label="Capabilities" />
            <h2 className="editorial-heading text-3xl sm:text-4xl text-iw-ink mt-4 mb-6">
              WHAT CONTINUITY BRIDGE ENABLES
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { title: 'Persistent Memory', desc: 'AI learns from every interaction. Knowledge compounds over time, not erased between conversations.' },
              { title: 'Cross-System Context', desc: 'Work flows seamlessly across ChatGPT, Claude, internal agents, and enterprise apps without context loss.' },
              { title: 'Organizational Reasoning', desc: 'Every AI operates from the same understanding of company strategy, decisions, and operational reality.' },
              { title: 'Continuity Across Models', desc: 'Switch from GPT-4 to Claude to Gemini without losing context, memory, or work state.' },
            ].map((item, i) => (
              <div key={i} className="border border-iw-rule rounded p-6">
                <h3 className="font-iw-display text-lg text-iw-ink mb-3">{item.title}</h3>
                <p className="font-iw-sans text-sm text-iw-slate leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-y">
        <div className="max-w-2xl text-center mx-auto">
          <h2 className="editorial-heading text-3xl sm:text-4xl text-iw-ink mb-4">
            READY FOR CONTINUITY?
          </h2>
          <p className="font-iw-sans text-base text-iw-slate leading-relaxed mb-8">
            Talk to our team about how Continuity Bridge can transform your AI infrastructure.
          </p>
          <a href="https://calendar.app.google/EcRkSqxwtchuF4Qf6" className="btn-primary">
            Request Demo <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
}
