import { useEffect, useState } from 'react';
import { getBlogPosts } from '../api/getBlogPosts';
import { PortableText } from '@portabletext/react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getBlogPosts().then(setPosts);
  }, []);

  return (
    <div className="blog-container">
      {posts.map((post) => (
        <div key={post._id} className="blog-post">
          <h2>{post.title}</h2>
          <Helmet><title>Blog | ap0calypse</title></Helmet>
          <p className="date">{new Date(post.date).toLocaleDateString()}</p>
          <p className="post-preview">
  {post.content[0]?.children[0]?.text.slice(0, 200)}...
</p>

          <Link to={`/blog/${post._id}`}>
            <button className="read-more-btn">Read More...</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
