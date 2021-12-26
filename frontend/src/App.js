import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar></NavBar>

      <Routes>
        <Route path="/" element={<div></div>}></Route>
        <Route path="/dining" element={<h1>test 3</h1>}></Route>
      </Routes>
    </>
  );
}

export default App;
