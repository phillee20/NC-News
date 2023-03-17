import axios from "axios";

const articlesAPI = axios.create({
  baseURL: "https://phil-solo-backend-project.onrender.com/api/",
});

export const fetchAllArticles = () => {
  return articlesAPI.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

export const fetchSingleArticle = (article_id) => {
  return articlesAPI.get(`/articles/${article_id}`).then(({ data }) => {
    return data.articles;
  });
};

export const fetchArticleComment = (article_id) => {
  return axios
    .get(
      `https://phil-solo-backend-project.onrender.com/api/articles/${article_id}/comments`
    )
    .then((response) => {
      return response.data.comments;
    });
};

export const patchArticle = (article_id, singleVote) => {
  return articlesAPI
    .patch(`/articles/${article_id}`, { inc_votes: singleVote })
    .then(({ data }) => {
      return data.article;
    });
};

export const postComment = (article_id, newComment) => {
  return articlesAPI
    .post(`/articles/${article_id}/comments`, {
      body: newComment,
      username: "grumpy19", //MAKE DYNAMIC
    })
    .then(({ data }) => {
      return data.postedComment;
    });
};
