import React from "react";
import "../../css/News/Header.css";

export default function Header() {
  return (
    <header>
      <div className="logo">Logo Situs</div>
      <nav>
        <ul>
          <li>
            <a href="/">Beranda</a>
          </li>
        </ul>
        <ul>
          <li>
            <ul>
              <li>
                <a href="/kateegori/politik">Politik</a>
              </li>
            </ul>
            <a href="/katergori/olahraga">Olahraga</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
