// src/sanityClient.js
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: '0l66v53y',       
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-05-07',           
});

