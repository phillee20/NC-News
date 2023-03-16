import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Topics from "./components/Topics";
import Articles from "./components/Articles";
import { SingleArticle } from "./components/SingleArticle";

function App() {
  return (
    <div className="App">
      <Header className="Header" />
      <Nav className="Nav" />
      <Routes>
        <Route path="/" element={<Articles />}></Route>
        <Route path="/Topics" element={<Topics />}></Route>
        <Route path="/articles/:article_id" element={<SingleArticle />}></Route>
      </Routes>
    </div>
  );
}

export default App;
