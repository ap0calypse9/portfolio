import { useEffect, useState } from 'react';
import { getChaoticFiles } from '../api/getChaoticFiles';
import ChaoticPost from '../components/ChaoticPosts';
import { Helmet } from "react-helmet";

export default function ChaoticFilePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getChaoticFiles().then(setPosts);
  }, []);

  return (
    <div className="chaotic-page">
      <Helmet><title>ChaoticFile | ap0calypse</title></Helmet>
      {posts.map(file => (
        <ChaoticPost key={file._id} file={file} />
      ))}
    </div>
  );
}
