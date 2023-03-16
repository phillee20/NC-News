import { useState } from "react";
import { postComment } from "../api";

function commentAdder() {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="commentAdder">
      <label htmlFor="newComment">Add a comment</label>
      <textarea
        id="newComment"
        value={newComment}
        onChange={(event) => setNewComment(event.target.value)}
      ></textarea>
      <button type="submit">Submit Comment</button>
    </form>
  );
}

export default commentAdder;
