import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Topics from "./components/Topics";
import Articles from "./components/Articles";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <Header className="Header" />
      <Nav className="Nav" />"
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/Topics" element={<Topics />} />
        <Route path="/Users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
