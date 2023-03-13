import axios from "axios";

const articlesAPI = axios.create({
  baseURL: "https://phil-solo-backend-project.onrender.com/api/articles",
});

export const fetchAllArticles = () => {
  return articlesAPI
    .get("https://phil-solo-backend-project.onrender.com/api/articles")
    .then(({ data }) => {
      console.log(data.articles);
      return data.articles;
    });
};
