import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleArticle, patchArticle } from "../api";
import "../App.css";
import Comments from "./Comments";

export function SingleArticle() {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [upVotes, setUpVotes] = useState(0);
  const [downVotes, setDownVotes] = useState(0);
  const [upVotingErr, setUpVotingErr] = useState(false);
  const [downVotingErr, setDownVotingErr] = useState(false);
  const [hasUpVoted, setHasUpVoted] = useState(false);
  const [hasDownVoted, setHasDownVoted] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchSingleArticle(article_id).then((singleArticle) => {
      setIsLoading(false);
      setSingleArticle(singleArticle);
    });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading Article...</p>;
  }

  const upVote = () => {
    //Increment upVote
    setUpVotingErr(false);
    setUpVotes((currentVote) => {
      return currentVote + 1;
    });
    localStorage.setItem(singleArticle.article_id + "_up", "voted");
    patchArticle(singleArticle.article_id, 1).catch(() => {
      setUpVotes((currentVote) => {
        return currentVote - 1;
      });
      setUpVotingErr(true);
    });
  };

  const downVote = () => {
    //decrement downVote
    setDownVotingErr(false);
    setDownVotes((currentVote) => {
      return currentVote - 1;
    });
    localStorage.setItem(singleArticle.article_id + "_down", "voted");
    patchArticle(singleArticle.article_id, -1).catch(() => {
      setDownVotes((currentVote) => {
        return currentVote + 1;
      });
      setDownVotingErr(true);
    });
  };

  //   const hasUpVoted =
  //     upVotes !== 0 ||
  //     localStorage.getItem(singleArticle.article_id + "_up") === "voted";

  //   const hasDownVoted =
  //     downVotes !== 0 ||
  //     localStorage.getItem(singleArticle.article_id + "_down") === "voted";

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
      <p id="topic">
        <b>Topic:</b> {singleArticle.topic}
      </p>
      <br></br>
      <p id="descriptionHead">
        <b>Description:</b>
      </p>
      <p id="descriptionBody">{singleArticle.body}</p>
      <p id="commentCount">Comment count: {singleArticle.comment_count}</p>
      <p id="articleVotesCount">
        Votes: {singleArticle.votes + upVotes + downVotes}
      </p>

      <button //Increment Button
        className="articleVoteEmoji"
        onClick={() => {
          upVote();
          setHasUpVoted(true);
          setHasDownVoted(false);
        }}
        disabled={hasUpVoted}
      >
        <span className="articleVoteEmoji">Vote 👍:</span>
      </button>

      <button //Decrement Button
        className="articleVoteEmoji"
        onClick={() => {
          downVote();
          setHasDownVoted(true);
          setHasUpVoted(false);
        }}
        disabled={hasDownVoted}
      >
        <span className="articleVoteEmoji">Vote 👎:</span>
      </button>

      {upVotingErr || //Error Handling
        (downVotingErr && (
          <p id="voteErrorMsg">Please refresh and try again!</p>
        ))}
      <label className="commentLabel">
        <br></br>
        <Comments></Comments>
      </label>
    </div>
  );
}
