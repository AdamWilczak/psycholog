import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Image from "./Image";
import { Pagination } from "./Pagination";

const Blog = ({ articles }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderArticles = () => {
    const articlesOnPage = articles.slice(
      (currentPage - 1) * 5,
      currentPage * 5
    );
    return articlesOnPage.map((article) => (
      <article key={article.id}>
        <h2>{article.title}</h2>
        <Image src={article.image} />
        <p>{article.content.slice(0, 80)}</p>
        <Link to={`/blog/${article.slug}`}>Czytaj dalej</Link>
      </article>
    ));
  };

  return (
    <div>
      <h1>Blog</h1>
      <Pagination
        totalPages={Math.ceil(articles.length / 5)}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      {renderArticles()}
    </div>
  );
};

export default Blog;
