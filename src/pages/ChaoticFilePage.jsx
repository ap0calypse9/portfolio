// pages/ChaoticFilePage.jsx
import { useEffect, useState } from "react";
import { getChaoticFiles } from "../api/getChaoticFiles";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./chaoticLists.css";


export default function ChaoticFilePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getChaoticFiles().then(setPosts);
  }, []);

  return (
    <div className="chaotic-page">
      <Helmet>
        <title>Chaotic Files | ap0calypse</title>
      </Helmet>
      <h1 className="page-title">Chaotic Files</h1>

      {posts.map((file) => (
        <div key={file._id} className="chaotic-item">
          <Link to={`/chaotic-files/${file._id}`}>
            <h2 className="chaotic-title">{file.title}</h2>
          </Link>
          <p className="chaotic-meta">
            {file.date} — {file.author}
          </p>

          {/* Preview content safely */}
          <p className="chaotic-excerpt">
            {Array.isArray(file.content)
              ? file.content[0]?.children?.[0]?.text?.substring(0, 150) + "..."
              : typeof file.content === "string"
              ? file.content.substring(0, 150) + "..."
              : ""}
          </p>

          {/* Read more link */}
          <Link to={`/chaotic-files/${file._id}`} className="read-more">
            Read More →
          </Link>
        </div>
      ))}
    </div>
  );
}
