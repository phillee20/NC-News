import { Link } from "react-router-dom";

export const ArticleCard = ({ article }) => {
  //console.log(article);
  return (
    <Link to={`/articles/${article.article_id}`}>
      <div>
        <img
          className="imgSize"
          src={article.article_img_url}
          alt="article image"
        />
        <h2 className="articleTitle">{article.title}</h2>
      </div>
    </Link>
  );
};
