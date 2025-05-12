// src/api/getProjects.js
import { client } from './sanityClient';

export async function getProjects() {
    const query = `*[_type == "project"]{
      _id,
      title,
      description,
      techStack,
      link,
      "imageUrl": image.asset->url
    }`;
  
    return await client.fetch(query);
  }