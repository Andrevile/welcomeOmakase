import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { withCookies, useCookies } from "react-cookie";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Dining from "./components/Dining";
import NotFound from "./components/NotFound";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Modal from "./components/Modal";
import Share from "./components/Share";
function App() {
  const [modalOff, modalOn] = useState(false);
  const [cookies, removeCookie] = useCookies(["user"]);
  const [hasCookie, setHasCookie] = useState(false);
  const appRef = useRef();

  useEffect(() => {
    if (cookies.user && cookies.user !== "undefined") {
      setHasCookie(true);
    }
  }, [cookies]);

  useEffect(() => {
    if (modalOff) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [modalOff]);
  return (
    <div className="App" ref={appRef}>
      {modalOff ? <Modal modalOn={modalOn}></Modal> : null}
      <NavBar
        hasCookie={hasCookie}
        removeCookie={removeCookie}
        setHasCookie={setHasCookie}
        modalOn={modalOn}
      ></NavBar>

      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/dining" element={<Dining></Dining>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route
          path="/signin"
          element={<SignIn setHasCookie={setHasCookie}></SignIn>}
        ></Route>
        <Route path="/share" element={<Share></Share>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default withCookies(App);
