import { useState } from "react";
import { postComment } from "../api";
import { useParams } from "react-router-dom";

function CommentAdder({ comments, setComments }) {
  const { article_id } = useParams();
  const [newComment, setNewComment] = useState("");
  const [user, setUser] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(article_id, newComment, user).then((response) => {
      setComments([response, ...comments]);
      setNewComment("");
      setUser("");
    });
  };
  return (
    <form className="commentAdder" onSubmit={handleSubmit}>
      <section>
        <label htmlFor="nameInput">Name</label>
        <input
          className="nameInput"
          placeholder="Enter valid name"
          type="text"
          value={user}
          onChange={(event) => setUser(event.target.value)}
        />
      </section>
      <br></br>
      <section>
        <label htmlFor="textCommentArea">Comment: </label>
        <textarea
          placeholder="Please enter a comment here"
          rows="5"
          cols="40"
          className="textCommentArea"
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)}
          required
          validationErrors={{
            valueMissing: "Please enter a comment.",
          }}
        ></textarea>
      </section>
      <section>
        <br></br>
        <button className="commentSubmitBtn" type="submit">
          Submit Comment
        </button>
      </section>
    </form>
  );
}
export default CommentAdder;
