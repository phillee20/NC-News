import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleComment } from "../api";

function Comments() {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchArticleComment(article_id).then((commentsFromAPI) => {
      setComments(commentsFromAPI);
    });
  }, [article_id]);

  return (
    <section>
      <h2 id="CommentTitle">Comments</h2>
      <ul>
        {comments.map((comment) => {
          const createdAt = new Date(comment.created_at);
          //console.log(createdAt);
          const time = new Date(createdAt).toLocaleTimeString("en", {
            timeStyle: "short",
            hour12: false,
            timeZone: "GMT",
          });
          const day = createdAt.getDate();
          const year = createdAt.getFullYear();
          const month = createdAt.getMonth();
          return (
            <li className="commentList" key={comment.comment_id}>
              <p id="commentUser">User: {comment.author}</p>
              <p id="commentDate">
                Comment Created - {`${day}.${month}.${year} ${time}`}
              </p>
              <p id="commentBody">{comment.body}</p>
              <p id="commentVote">Votes: {comment.votes}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Comments;
