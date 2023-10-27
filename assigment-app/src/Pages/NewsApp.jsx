import React, { useState, useEffect } from "react";
import Header from "../components/News/Header";
import LatestNews from "../components/News/LatestNews";
import CategoryNews from "../components/News/CategoryNews";
import NewsDetail from "../components/News/NewsDetail";
import NewsPortal from "../components/News/NewsPortal";
import "../css/NewsApp.css"; // Import file CSS Anda

function NewsApp() {
  const [news, setNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    // Gantilah 'URL_API_ANDA' dengan URL API yang sesuai
    fetch("URL_API_ANDA")
      .then((response) => response.json())
      .then((data) => {
        setNews(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div className="news-app">
      <Header />
      <LatestNews newsData={news} />
      <CategoryNews
        newsData={news}
        selectedCategory={selectedCategory}
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      {selectedArticle ? (
        <NewsDetail article={selectedArticle} />
      ) : (
        <NewsPortal
          newsData={news}
          onSelectArticle={(article) => setSelectedArticle(article)}
        />
      )}
    </div>
  );
}

export default NewsApp;
