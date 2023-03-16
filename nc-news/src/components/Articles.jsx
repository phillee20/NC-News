import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchAllArticles } from "../api";
import { ArticleCard } from "../components/ArticleCard";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchAllArticles().then((fetchedArticles) => {
      setIsLoading(false);
      setArticles(fetchedArticles);
    });
  }, []);

  if (isLoading) {
    return <p>Loading Articles...</p>;
  }

  return (
    <ul className="articleCard">
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </ul>
  );
}

export default Articles;
