import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const NavBar = ({ hasCookie, removeCookie, setHasCookie, modalOn }) => {
  let navigate = useNavigate();
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
              <NavLink
                to="/share"
                className="link"
                onClick={
                  hasCookie
                    ? null
                    : (e) => {
                        e.preventDefault();
                        modalOn(true);
                      }
                }
              >
                공유
              </NavLink>
            </li>
          </ul>
          <div className="sm-device">
            {!hasCookie ? (
              <>
                <Link to="/signin" className="signIn-icon" title="로그인">
                  <i className="fa-solid fa-right-to-bracket"></i>
                </Link>
                <Link to="/signup" className="signUp-icon" title="회원가입">
                  <i className="fa-solid fa-user-plus"></i>
                </Link>
              </>
            ) : (
              <button
                className="signOut-icon"
                onClick={() => {
                  setHasCookie(false);
                  removeCookie("user");
                  navigate("/");
                }}
              >
                <i className="fa-solid fa-power-off"></i>
              </button>
            )}
          </div>

          <ul className="side-menu">
            {!hasCookie ? (
              <>
                {" "}
                <li className="menu-item SignIn-btn">
                  <Link to="/signin">로그인</Link>
                </li>
                <li className="menu-item SignUp-btn">
                  <Link to="/signup">회원가입</Link>
                </li>
              </>
            ) : (
              <li className="menu-item">
                <button
                  className="SignOut-btn"
                  onClick={() => {
                    setHasCookie(false);
                    removeCookie("user");
                    navigate("/");
                  }}
                >
                  로그 아웃
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
