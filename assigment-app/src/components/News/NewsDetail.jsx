import React from "react";
import "../../css/News/NewsDetail.css";

function NewsDetail({ article }) {
  return (
    <div className="news-detail">
      <h1>{article.title}</h1>
      <img src={article.imageUrl} alt={article.title} />
      <p>{article.content}</p>
      <p>Tanggal Publikasi: {article.date}</p>
      {/* Tambahkan komponen komentar pengguna jika diperlukan */}
    </div>
  );
}

export default NewsDetail;
