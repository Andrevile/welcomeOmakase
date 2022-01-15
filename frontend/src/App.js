import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Dining from "./components/Dining";

function App() {
  return (
    <>
      <NavBar></NavBar>

      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/dining" element={<Dining></Dining>}></Route>
      </Routes>
    </>
  );
}

export default App;
