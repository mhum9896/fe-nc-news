import {useEffect, useState} from "react"
import { getArticlesbyArticleId } from "../api"

export const SingleArticleCard = ({article}) => {
console.log('in single article card <<<<<')
    return (
        <>
        <li>
            <p className="article-title">{article.title}</p>
            <p className="article-author">{article.author}</p>
            <p className="article-created-at">{article.created_at}</p>
            <p className="article-img">{article.article_img_url}</p>
        </li>
        </>
    )
}