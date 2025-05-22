import axios from "axios"

const newsApi = axios.create({
    baseURL: "https://humadis-news.onrender.com/api"
})

export const getArticles = () => {
    return newsApi
    .get("/articles")
    .then(({data}) => {
        return data.articles
    })
}

export const getArticlesbyArticleId = (articleId) => {
    return newsApi
    .get(`/articles/${articleId}`)
    .then(({data}) => {
        return data.article
    })
}

export const getCommentsByArticleId = (articleId) => {
    return newsApi
    .get(`/articles/${articleId}/comments`)
    .then(({data}) => {
        return data.comments
    })
}

export const incArticleVote = (articleId, incVote) => {
  return newsApi
    .patch(`/articles/${articleId}`, { inc_votes: incVote })
    .then(({ data }) => {
      return data.article;
    })
}

export const decArticleVote = (articleId, decVote) => {
  return newsApi
    .patch(`/articles/${articleId}`, { inc_votes: decVote })
    .then(({ data }) => {
      return data.article;
    })
}