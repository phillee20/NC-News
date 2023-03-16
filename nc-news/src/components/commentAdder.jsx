import { useState } from "react";
import { postComment } from "../api";
import { useParams } from "react-router-dom";

function CommentAdder({ comments, setComments }) {
  const { article_id } = useParams();
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(article_id, newComment).then((response) => {
      //console.log(response);
      setComments([response, ...comments]);
      setNewComment("");
    });
  };

  return (
    <form className="commentAdder" onSubmit={handleSubmit}>
      <section>Name</section>
      <section>
        <label htmlFor="newComment">Comment: </label>
        <textarea
          placeholder="Please enter a comment here"
          rows="5"
          cols="40"
          id="newComment"
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
