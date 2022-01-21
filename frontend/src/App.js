import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { withCookies, useCookies } from "react-cookie";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Dining from "./components/Dining";
import NotFound from "./components/NotFount";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
function App() {
  const [cookies, removeCookie] = useCookies(["user"]);
  const [hasCookie, setHasCookie] = useState(false);

  useEffect(() => {
    if (cookies.user && cookies.user !== "undefined") {
      setHasCookie(true);
    }
  }, [cookies]);
  return (
    <>
      <NavBar
        hasCookie={hasCookie}
        removeCookie={removeCookie}
        setHasCookie={setHasCookie}
      ></NavBar>

      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/dining" element={<Dining></Dining>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route
          path="/login"
          element={<SignIn setHasCookie={setHasCookie}></SignIn>}
        ></Route>
        <Route path="/share" element={<h1>공유 공간</h1>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  );
}

export default withCookies(App);
