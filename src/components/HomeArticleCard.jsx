import { Link } from "react-router-dom";

export const HomeArticleCard = ({ article }) => {
  return (
    <Link to={`/articles/${article.article_id}`}>
      <div>
        <img
          className="HomeArticleImg"
          src={article.article_img_url}
          alt="article"
        />
        <h2 className="HomeArticleTitle">{article.title}</h2>
      </div>
    </Link>
  );
};
