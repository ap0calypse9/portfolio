import { client } from './sanityClient';

export const getBlogPosts = async () => {
  const query = `*[_type == "blog"] | order(_createdAt desc) {
    _id,
    title,
    content,
    date,
    author,
    mainImage
  }`;
  return await client.fetch(query);
};
