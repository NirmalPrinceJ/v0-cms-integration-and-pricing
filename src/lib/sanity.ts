/**
 * Sanity Client Configuration
 *
 * To set up your own Sanity project:
 * 1. Go to https://sanity.io/manage and create a project
 * 2. Create a dataset (e.g., "production")
 * 3. Get your project ID from the dashboard
 * 4. Create a read-only API token at https://sanity.io/manage/p/YOUR_PROJECT_ID/api#tokens
 * 5. Set the environment variables below (or in a .env file)
 *
 * For local development, create a .env file in the project root:
 * VITE_SANITY_PROJECT_ID=your_project_id
 * VITE_SANITY_DATASET=production
 * VITE_SANITY_API_TOKEN=your_read_token
 *
 * When no Sanity config is provided, the site falls back to static data.
 */
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || '';
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';
const apiVersion = '2024-06-01';
const token = import.meta.env.VITE_SANITY_API_TOKEN || '';

export const hasSanityConfig = Boolean(projectId && dataset);

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: 'published',
  ...(token ? { token } : {}),
});

// Image URL builder
const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source: Parameters<typeof builder.image>[0]) => builder.image(source);

// Preview client (for drafts — requires token)
export const previewClient = token
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      token,
      perspective: 'previewDrafts',
    })
  : null;
