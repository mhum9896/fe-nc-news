import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlesbyArticleId } from "../api";
import { SeeCommentsButton } from "./SeeCommentsButton.jsx";
import { ArticleVotes } from "./ArticleVotes.jsx";

export const SingleArticleCard = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);

  useEffect(() => {
    getArticlesbyArticleId(article_id)
      .then((data) => {
        setArticle(data)
      }, [])
  }, [article_id])

  return (
    <>
      <div>
        <h2 className="article-title">{article.title}</h2>
        <p className="article-author">Author: {article.author}</p>
        <p className="article-created-at">Published: {article.created_at}</p>
        <p className="article-img">
          <img src={article.article_img_url} alt={article.title} />
        </p>
        <p className="article-body">{article.body}</p>
        <ArticleVotes articleId={article_id} initialVotes={article.votes} />
        <SeeCommentsButton article_id={article_id} />
      </div>
    </>
  )
}
