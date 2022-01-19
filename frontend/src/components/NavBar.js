import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  console.log(user);
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
              <NavLink to="/" className="link">
                소개
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/dining" className="link">
                맛집
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/share" className="link">
                공유
              </NavLink>
            </li>
          </ul>
          <div className="sm-device">
            {user !== null ? (
              <>
                <Link to="/login" className="signIn-icon" title="로그인">
                  <i className="fa-solid fa-right-to-bracket"></i>
                </Link>
                <Link to="/signup" className="signUp-icon" title="회원가입">
                  <i className="fa-solid fa-user-plus"></i>
                </Link>
              </>
            ) : (
              <button className="signOut-icon">
                <i className="fa-solid fa-power-off"></i>
              </button>
            )}
          </div>

          <ul className="side-menu">
            {user !== null ? (
              <>
                {" "}
                <li className="menu-item SignIn-btn">
                  <Link to="/login">로그인</Link>
                </li>
                <li className="menu-item SignUp-btn">
                  <Link to="/signup">회원가입</Link>
                </li>
              </>
            ) : (
              <li className="menu-item">
                <button className="SignOut-btn">로그 아웃</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
