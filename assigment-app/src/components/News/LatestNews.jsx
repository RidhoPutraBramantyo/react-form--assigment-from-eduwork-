import React from "react";
import "../../css/News/LatestNews.css";

export default function LatestNews({ newsData }) {
  return (
    <section className="latest-news">
      <h2>Berita Terbaru</h2>
      {newsData.map((article) => (
        <div key={article.id}>
          <h3>{article.title}</h3>
          <img src={article.imgeUrl} alt={article.title} />
          <p>{article.description}</p>
        </div>
      ))}
    </section>
  );
}
