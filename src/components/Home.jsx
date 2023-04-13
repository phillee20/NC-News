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
      // limit to 3 articles
      const limitedArticles = filteredArticles.slice(0, 3);
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
        Welcome to Northcoders News!
        <br />
        <br />
        This was a project I created at Northcoders that is now used as part of
        my portfolio. Since completion of the Northcoders course, I have
        revisited this project and changed the design and layout with a more
        modern flavour. I will continue to work on this in my free time. Hope
        you enjoy!
      </p>
      <ul className="homeArticleList">
        {articles.map((article, index) => {
          const articleClass = `homeArticleCard${index}`;
          return (
            <HomeArticleCard
              key={article.article_id}
              article={article}
              className={articleClass}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Articles;
