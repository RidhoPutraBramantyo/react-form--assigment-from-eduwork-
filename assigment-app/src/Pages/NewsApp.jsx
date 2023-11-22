import React, { useState, useEffect } from "react";
import "../css/NewsApp.css";

const NewsApp = () => {
  const [news, setNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchNewsData();
  }, []); // Effect ini hanya berjalan sekali setelah komponen dimount

  const fetchNewsData = async () => {
    const API_KEY = "231cf509958443008bff398d363fd7b3";
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      setNews(data.articles);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleArticleSelect = (article) => {
    setSelectedArticle(article);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    fetchNewsData();
  };

  const filteredNews =
    selectedCategory === "all"
      ? news
      : news.filter((article) => article.category === selectedCategory);

  const filteredNewsWithSearch = searchTerm
    ? filteredNews.filter((article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : filteredNews;

  const limitedNews = filteredNewsWithSearch.slice(0, 20);

  return (
    <div className="news-app">
      <h1>News Portal</h1>
      <div className="category-selector">
        <span>Category:</span>
        <select
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          <option value="all">All</option>
          <option value="business">Business</option>
          <option value="technology">Technology</option>
          <option value="health">Health</option>
        </select>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search News"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearchSubmit}>Cari</button>
      </div>
      <div className="news-container">
        {limitedNews.length > 0 ? (
          limitedNews.map((article, index) => (
            <div
              key={index}
              className="news-card"
              onClick={() => handleArticleSelect(article)}
            >
              <img src={article.urlToImage} alt={article.title} />
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </div>
          ))
        ) : (
          <div className="no-news-message">No news available.</div>
        )}
      </div>
      {selectedArticle && (
        <div className="news-detail">
          <h2>{selectedArticle.title}</h2>
          <p>{selectedArticle.description}</p>
        </div>
      )}
    </div>
  );
};

export default NewsApp;
