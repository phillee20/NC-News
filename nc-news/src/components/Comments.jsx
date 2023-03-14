import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleComment } from "../api";
import { patchComment } from "../api";

function Comments() {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchArticleComment(article_id).then((commentsFromAPI) => {
      setComments(commentsFromAPI);
    });
  }, [article_id]);

  const upVote = (comment_id) => {
    patchComment(comment_id).then((newComment) => {
      setComments((currentComments) => {
        return currentComments.map((comment) => {
          if (comment.comment_id === comment_id) {
            //console.log(comment);
            return { ...comment, votes: comment.votes + 1 };
          }
          return comment;
        });
      });
    });
  };

  return (
    <section>
      <h2 id="CommentTitle">Comments</h2>
      <ul>
        {comments.map((comment) => {
          const createdAt = new Date(comment.created_at);
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
              <p className="commentUser">User: {comment.author}</p>
              <p className="commentDate">
                Comment Created - {`${day}.${month}.${year} ${time}`}
              </p>
              <p className="commentBody">{comment.body}</p>

              <button
                className="commentVote"
                onClick={() => upVote(comment.comment_id)}
              >
                <span aria-label="Vote">Vote 👍: </span>
                {comment.votes}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Comments;
