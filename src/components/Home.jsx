import { useState, useEffect } from "react";
import { fetchAllArticles } from "../api";
import { HomeArticleCard } from "../components/HomeArticleCard";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchAllArticles().then((fetchedArticles) => {
      //filter out only football topics for home page
      const filteredArticles = fetchedArticles.filter(
        (article) => article.topic === "football"
      );
      const limitedArticles = filteredArticles.slice(0, 3); // limit to 3 articles
      setIsLoading(false);
      setArticles(limitedArticles);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p className="introParagraph">
        Welcome to Northcoders News! This was a project I created at Northcoders
        that is now used as part of my portfolio. Since completion of the
        Northcoders course, I have revisited this project and changed the design
        and layout with a more modern flavour. I will continue to work on this
        in my free time. Hope you enjoy!
      </p>
      <ul className="HomeArticleCard">
        {articles.map((article) => {
          return <HomeArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </div>
  );
}

export default Articles;
