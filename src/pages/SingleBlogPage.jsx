import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBlogPosts } from '../api/getBlogPosts';
import { PortableText } from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '../api/sanityClient';
import { Helmet } from "react-helmet";


const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}
export default function SingleBlogPage() {
  const { id } = useParams(); // Get the blog post ID from the URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    getBlogPosts().then((posts) => {
      const selectedPost = posts.find((post) => post._id === id);
      setPost(selectedPost);
    });
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
  <div className="single-post-wrapper">
    <div className="single-post-container">
      <Helmet><title>Blogs | ap0calypse</title></Helmet>
      <h1>{post.title}</h1>
      <p className="date">{new Date(post.date).toLocaleDateString()}</p>
      <PortableText value={post.content} />
      {post.mainImage && (
        <img
          src={urlFor(post.mainImage).width(800).url()}
          alt={post.title}
          className="blog-post-image"
        />
      )}
    </div>
  </div>
);

}
