import React from "react";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../api/sanityClient";
import "../styles.css"; // assuming your CSS file includes the above styles

const builder = imageUrlBuilder(client);

function ChaoticPost({ file }) {
  const myPortableComponents = {
    types: {
      image: ({ value }) => (
        <img
          src={builder.image(value).url()}
          alt="chaotic-img"
          className="chaotic-image"
        />
      ),
    },
  };

  return (
    <div className="chaotic-post">
      <div className="chaotic-post-header">
        <h2>{file.title}</h2>
      </div>
      <div className="chaotic-content">
        <PortableText value={file.content} components={myPortableComponents} />
      </div>
      <div className="chaotic-tags">
        {file.tags &&
          file.tags.map((tag, index) => (
            <span className="chaotic-tag" key={index}>
              #{tag}
            </span>
          ))}
      </div>
      

    </div>
  );
}

export default ChaoticPost;
