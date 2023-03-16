import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleComment } from "../api";
import timeFormat from "./utils";
import CommentAdder from "../components/CommentAdder";

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
      <CommentAdder comments={comments} setComments={setComments} />
      <ul>
        {comments.map((comment) => {
          return (
            <li className="commentList" key={comment.comment_id}>
              <p className="commentUser">User: {comment.author}</p>
              <p className="commentDate">
                Comment Created - {timeFormat(comment.created_at)}
              </p>
              <p className="commentBody">{comment.body}</p>
              <p className="commentVote" aria-label="commentVote">
                Vote 👍:
                {comment.votes}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Comments;
