

import { client } from './sanityClient'; 

export async function getChaoticFiles() {
  const query = `*[_type == "chaoticFile"] | order(_createdAt desc) {
    _id,
    title,
    content
  }`;

  return await client.fetch(query);
}
