import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBarContainer from "./containers/NavBarContainer";
import MainContainer from "./containers/MainContainer";
import Dining from "./components/Dining";

function App() {
  return (
    <>
      <NavBarContainer></NavBarContainer>

      <Routes>
        <Route path="/" element={<MainContainer></MainContainer>}></Route>
        <Route path="/dining" element={<Dining></Dining>}></Route>
      </Routes>
    </>
  );
}

export default App;
