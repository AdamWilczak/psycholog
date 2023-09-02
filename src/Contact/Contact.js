import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Image from "./Image";

const Article = ({ article }) => {
  const [isExpanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!isExpanded);
  };

  return (
    <article key={article.id}>
      <h2>{article.title}</h2>
      <Image src={article.image} />
      <p>{article.content.slice(0, 80)}</p>
      <Link to={`/blog/${article.slug}`}>Czytaj dalej</Link>
      {isExpanded && <p>{article.content}</p>}
      <button onClick={handleExpand}>{isExpanded ? "Zwiń" : "Rozwiń"}</button>
    </article>
  );
};

export default Article;
