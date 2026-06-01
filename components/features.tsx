'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    title: 'Reduce Churn',
    description: 'Identify at-risk accounts early with AI-powered health scores and automated interventions.',
    icon: '📉',
  },
  {
    title: 'Improve NRR',
    description: 'Cross-functional visibility enables smarter upsells and expansion opportunities.',
    icon: '📈',
  },
  {
    title: 'Accelerate Onboarding',
    description: 'Org Memory stores institutional knowledge for faster team ramp-up and continuity.',
    icon: '⚡',
  },
  {
    title: 'Automate Workflows',
    description: 'Eliminate manual tasks with intelligent automation and process orchestration.',
    icon: '🔄',
  },
  {
    title: 'Make Better Decisions',
    description: 'Simulate scenarios before committing resources with Twin Workbench.',
    icon: '🎯',
  },
  {
    title: 'Enterprise Governance',
    description: 'Built-in compliance, audit trails, and policy management for regulated industries.',
    icon: '🔐',
  },
];

export function Features() {
  return (
    <section id="features" className="px-6 py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Built for customer success teams at scale
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to professionalize account management and drive business outcomes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <Card key={idx} className="border-border">
              <CardHeader>
                <div className="text-4xl mb-3">{feature.icon}</div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
