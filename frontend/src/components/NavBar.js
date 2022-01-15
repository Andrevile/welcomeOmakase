import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="section">
      <div className="inner">
        <div className="menu-group">
          <div className="title">
            <Link
              to="/"
              style={{
                color: "black",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              <p>이랏샤이</p>
              <p>오마카세</p>
            </Link>
          </div>
          <ul className="main-menu toggle">
            <li className="menu-item">
              <Link to="/" className="link">
                소개
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/dining?youtuber=all" className="link">
                맛집
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/share" className="link">
                공유
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
