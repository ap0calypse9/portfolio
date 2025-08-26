

/*import { client } from './sanityClient'; 

export async function getChaoticFiles() {
  const query = `*[_type == "chaoticFile"] | order(_createdAt desc) {
    _id,
    title,
    content
  }`;

  return await client.fetch(query);
}*/



// api/getChaoticFiles.js
import { client } from './sanityClient'; 

// Fetch all chaotic files
export async function getChaoticFiles() {
  const query = `*[_type == "chaoticFile"] | order(_createdAt desc) {
    _id,
    title,
    content,
    date,
    author
  }`;
  return await client.fetch(query);
}

// Fetch single chaotic file by _id
export async function getChaoticFileById(id) {
  const query = `*[_type == "chaoticFile" && _id == $id][0]{
    _id,
    title,
    content,
    date,
    author
  }`;
  return await client.fetch(query, { id });
}
