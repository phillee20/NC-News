import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleArticle, patchArticle } from "../api";
import "../App.css";
import Comments from "./Comments";

export function SingleArticle() {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [userVote, setUserVote] = useState(0);
  const [votingErr, setVotingErr] = useState(false);

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
    //Increment vote
    setVotingErr(false);
    setUserVote((currentVote) => {
      return currentVote + 1;
    });
    localStorage.setItem(singleArticle.article_id, "voted");
    patchArticle(singleArticle.article_id).catch(() => {
      setUserVote((currentVote) => {
        return currentVote - 1;
      });
      setVotingErr(true);
    });
  };

  const downVote = () => {
    //decrement vote
    setVotingErr(false);
    setUserVote((currentVote) => {
      return currentVote - 1;
    });
    localStorage.setItem(singleArticle.article_id, "voted");
    patchArticle(singleArticle.article_id).catch(() => {
      setUserVote((currentVote) => {
        return currentVote + 1;
      });
      setVotingErr(true);
    });
  };

  const hasVoted =
    userVote !== 0 ||
    localStorage.getItem(singleArticle.article_id) === "voted";

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
      <p id="descriptionHead">
        <b>Description:</b>
      </p>
      <p id="descriptionBody">{singleArticle.body}</p>
      <p id="commentCount">Comment count: {singleArticle.comment_count}</p>
      <p id="articleVotes">Votes: {singleArticle.votes}</p>

      <button //Increment Button
        className="articleVote"
        onClick={() => {
          upVote();
        }}
        disabled={hasVoted}
      >
        <span className="articleVotesBtn" aria-label="articleVoteBtn">
          Vote 👍:
        </span>
        {singleArticle.votes + userVote}
      </button>

      <button //Decrement Button
        className="articleVote"
        onClick={() => {
          downVote();
        }}
        disabled={hasVoted}
      >
        <span className="articleVotesBtn" aria-label="articleVoteBtn">
          Vote 👎:
        </span>
        {singleArticle.votes + userVote}
      </button>

      {votingErr && <p>Already voted!</p>}
      <Comments></Comments>
    </div>
  );
}
//singleArticle causing votes to updatefor two buttons together
