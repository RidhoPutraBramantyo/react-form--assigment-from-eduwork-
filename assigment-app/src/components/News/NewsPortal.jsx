import React, { useState, useEffect } from "react";
import "../../css/News/NewsPortal.css"; // Import CSS

function NewsPortal() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Gantilah 'URL_API_ANDA' dengan URL API yang sesuai
    fetch("URL_API_ANDA")
      .then((response) => response.json())
      .then((data) => setNews(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div className="news-portal">
      {" "}
      {/* Gunakan kelas CSS 'news-portal' */}
      {news.map((article) => (
        <div key={article.id} className="news-article">
          {" "}
          {/* Gunakan kelas CSS 'news-article' */}
          <h2 className="news-title">{article.title}</h2>{" "}
          {/* Gunakan kelas CSS 'news-title' */}
          <p className="news-description">{article.description}</p>{" "}
          {/* Gunakan kelas CSS 'news-description' */}
        </div>
      ))}
    </div>
  );
}

export default NewsPortal;
