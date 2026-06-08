import type { PortableTextBlock } from '@portabletext/types';

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
  caption?: string;
}

export interface SanitySlug {
  _type: 'slug';
  current: string;
}

export interface SanityAuthor {
  _id: string;
  name: string;
  role?: string;
  avatar?: SanityImage;
}

// ─── Pricing Types ──────────────────────────────────────────

export interface SanityPricingTier {
  _id: string;
  _type: 'pricingTier';
  name: string;
  price: number;
  currency?: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  order: number;
}

export interface SanityPricingPage {
  _id: string;
  _type: 'pricingPage';
  title: string;
  subtitle: string;
  description?: string;
  tiers: SanityPricingTier[];
  seoTitle?: string;
  seoDescription?: string;
}

// ─── Blog & Content Types ───────────────────────────────────

export interface SanityBlogPost {
  _id: string;
  title: string;
  slug: SanitySlug;
  excerpt: string;
  content: PortableTextBlock[];
  author: SanityAuthor;
  publishedAt: string;
  category: string;
  tags?: string[];
  featured?: boolean;
  readTime?: string;
  coverImage?: SanityImage;
  seoTitle?: string;
  seoDescription?: string;
}

export interface SanityCaseStudy {
  _id: string;
  title: string;
  slug: SanitySlug;
  subtitle: string;
  tag: string;
  metric: string;
  metricLabel: string;
  challenge: PortableTextBlock[];
  approach: PortableTextBlock[];
  results: PortableTextBlock[];
  quote?: string;
  quoteAuthor?: string;
  coverImage?: SanityImage;
  publishedAt: string;
  seoTitle?: string;
  seoDescription?: string;
}

export interface SanityResource {
  _id: string;
  title: string;
  description: string;
  resourceType: 'guide' | 'video' | 'webinar' | 'template' | 'documentation';
  category: string;
  link?: string;
  externalLink?: boolean;
  coverImage?: SanityImage;
  publishedAt: string;
  featured?: boolean;
}
