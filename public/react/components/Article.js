import React from "react";

export const Article = ({ page, setShowLanding }) => {
  return (
    <>
      <h3>{page.title}</h3>
      <div>
        {/* <p>Author: {page.author.name}</p> */}
        <p>{page.content}</p>
        <p>Tags:</p>
        {page.tags.map((tag) => (
          <p>{tag.name}</p>
        ))}
        <p>Date: {page.createdAt.substr(0, 10)}</p>
      </div>
      <button onClick={() => setShowLanding(true)}>Go back to wiki list</button>
    </>
  );
};
