import axios from "axios";

const articlesAPI = axios.create({
  baseURL: "https://phil-solo-backend-project.onrender.com/api/articles",
});

export const fetchAllArticles = () => {
  return articlesAPI
    .get("https://phil-solo-backend-project.onrender.com/api/articles")
    .then(({ data }) => {
      return data.articles;
    });
};

export const fetchSingleArticle = (article_id) => {
  return articlesAPI
    .get(
      `https://phil-solo-backend-project.onrender.com/api/articles/${article_id}`
    )
    .then(({ data }) => {
      return data.articles;
    });
};

export const fetchArticleComment = (article_id) => {
  return axios
    .get(
      `https://phil-solo-backend-project.onrender.com/api/articles/${article_id}/comments`
    )
    .then((response) => {
      //console.log(response.data);
      return response.data.comments;
    });
};
