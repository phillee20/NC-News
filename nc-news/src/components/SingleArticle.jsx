import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleArticle } from "../api";
import Comments from "./Comments";

export function SingleArticle() {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchSingleArticle(article_id).then((singleArticle) => {
      //console.log(singleArticle);
      setIsLoading(false);
      setSingleArticle(singleArticle);
    });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading Article...</p>;
  }

  return (
    <div>
      <h2 id="articleTitle">{singleArticle.title}</h2>
      <img
        id="singleArticleImage"
        src={singleArticle.article_img_url}
        alt="article Image"
      />
      <p id="singleArticleAuthor">
        <b>Author:</b> {singleArticle.author}
      </p>
      <br></br>
      <p id="topic">
        <b>Topic:</b> {singleArticle.topic}
      </p>
      <br></br>
      <br></br>
      <p id="descriptionHead">
        <b>Description:</b>
      </p>
      <p id="descriptionBody">{singleArticle.body}</p>
      <p id="commentCount">Comment count: {singleArticle.comment_count}</p>
      <p id="votes">Votes: {singleArticle.votes}</p>

      <Comments></Comments>
    </div>
  );
}
