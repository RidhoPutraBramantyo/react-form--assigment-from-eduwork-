import React, { Component } from "react";
import axios from "axios";
import "./NewsApp.css"; // Import file CSS Anda

class NewsApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      selectedCategory: "all",
      selectedArticle: null,
      searchTerm: "",
    };
  }

  componentDidMount() {
    this.fetchNewsData();
  }

  fetchNewsData() {
    const API_KEY = "231cf509958443008bff398d363fd7b3"; // Gantilah dengan kunci API Anda
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

    axios
      .get(apiUrl)
      .then((response) => {
        this.setState({ news: response.data.articles });
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }

  handleCategoryChange = (category) => {
    this.setState({ selectedCategory: category });
  };

  handleArticleSelect = (article) => {
    this.setState({ selectedArticle: article });
  };

  handleSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    const { news, selectedCategory, selectedArticle, searchTerm } = this.state;

    // Filter berita berdasarkan kategori yang dipilih
    const filteredNews =
      selectedCategory === "all"
        ? news
        : news.filter((article) => article.category === selectedCategory);

    // Filter berita berdasarkan kata kunci pencarian
    const filteredNewsWithSearch = searchTerm
      ? filteredNews.filter((article) =>
          article.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : filteredNews;

    // Batasi konten hingga 20 kartu berita
    const limitedNews = filteredNewsWithSearch.slice(0, 20);

    return (
      <div className="news-app">
        <h1>News Portal</h1>
        <div className="category-selector">
          <span>Category:</span>
          <select
            value={selectedCategory}
            onChange={(e) => this.handleCategoryChange(e.target.value)}
          >
            <option value="all">All</option>
            <option value="business">Business</option>
            <option value="technology">Technology</option>
            <option value="health">Health</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Search News"
          value={searchTerm}
          onChange={this.handleSearchChange}
        />
        {limitedNews.length > 0 ? (
          limitedNews.map((article, index) => (
            <div
              key={index}
              className="news-item"
              onClick={() => this.handleArticleSelect(article)}
            >
              <h2>{article.title}</h2>
              <p>{article.description}</p>
            </div>
          ))
        ) : (
          <div className="no-news-message">No news available.</div>
        )}
        {selectedArticle && (
          <div className="news-detail">
            <h2>{selectedArticle.title}</h2>
            <p>{selectedArticle.description}</p>
          </div>
        )}
      </div>
    );
  }
}

export default NewsApp;
