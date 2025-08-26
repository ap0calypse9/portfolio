// pages/chaotic-files/ChaoticFileSingle.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getChaoticFileById } from "../../api/getChaoticFiles";
import { Helmet } from "react-helmet";
import { PortableText } from "@portabletext/react";

export default function ChaoticFileSingle() {
  const { id } = useParams();
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (id) getChaoticFileById(id).then(setFile);
  }, [id]);

  if (!file) return <p>Loading...</p>;

  return (
    <div className="chaotic-single">
      <Helmet>
        <title>{file.title} | Chaotic Files</title>
      </Helmet>

      <h1 className="chaotic-title">{file.title}</h1>
      <p className="chaotic-meta">
        {file.date} — {file.author}
      </p>

      <div className="chaotic-content">
        {Array.isArray(file.content) ? (
          <PortableText value={file.content} />
        ) : (
          <p>{file.content}</p>
        )}
      </div>
    </div>
  );
}
