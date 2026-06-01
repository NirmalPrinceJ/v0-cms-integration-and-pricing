'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const modules = [
  {
    id: 'account-success',
    title: 'Account Success Management',
    description: 'Streamline customer relationships and automate CSM workflows',
    features: ['Customer tracking', 'Health scores', 'Task automation', 'Timeline view'],
    icon: '📊',
  },
  {
    id: 'business-intelligence',
    title: 'Business Intelligence',
    description: '12-department operational view for cross-functional visibility',
    features: ['12-dept dashboard', 'Real-time metrics', 'Custom reports', 'Data integration'],
    icon: '🎯',
  },
  {
    id: 'twin-workbench',
    title: 'Twin Workbench',
    description: 'Digital twin simulation for risk-free scenario planning',
    features: ['Scenario modeling', 'What-if analysis', 'Decision support', 'Simulation engine'],
    icon: '⚙️',
  },
  {
    id: 'triage-bot',
    title: 'Triage Bot',
    description: 'AI-powered issue routing and response automation',
    features: ['Smart routing', 'Issue prioritization', 'Auto-responses', 'Learning model'],
    icon: '🤖',
  },
  {
    id: 'org-memory',
    title: 'Org Memory',
    description: 'Institutional knowledge base for continuity and onboarding',
    features: ['Knowledge base', 'Search', 'History tracking', 'Collaboration'],
    icon: '💾',
  },
  {
    id: 'governance',
    title: 'Governance Workbench',
    description: 'Policy management and compliance automation',
    features: ['Policy templates', 'Audit trails', 'Compliance checks', 'Documentation'],
    icon: '🔐',
  },
];

export function ModulesShowcase() {
  return (
    <section id="modules" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Powerful Modules</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the modules you need or unlock everything with Enterprise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <Card key={module.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-3">{module.icon}</div>
                <CardTitle className="text-xl">{module.title}</CardTitle>
                <CardDescription>{module.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {module.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
