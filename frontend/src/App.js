import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import NavBar from "./components/NavBar";
import "./App.css";
function App() {
  return (
    <>
      <NavBar></NavBar>

      <Routes>
        <Route path="/" element={<div></div>}></Route>
      </Routes>
    </>
  );
}

export default App;
