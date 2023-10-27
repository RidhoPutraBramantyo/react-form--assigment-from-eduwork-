import React from "react";
import "../../css/News/CategoryNews.css";

export default function CategoryNews({ category, newsData }) {
  const filteredNews = newsData.filter(
    (article) => article.category === category
  );

  return (
    <section className="category-news">
      <h2>{category} Berita</h2>
      {filteredNews.map((article) => (
        <div key={article.id}>
          <h3>{article.title}</h3>
          <img src={article.imageUrl} alt={article.title} />
          <p>{article.description}</p>
        </div>
      ))}
    </section>
  );
}
