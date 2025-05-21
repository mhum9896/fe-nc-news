import { ArticlesList } from "./ArticlesList";
import { getArticles } from "../api";
import {useState, useEffect} from "react"

export const Articles = ({ articlesList, setArticlesList }) => {
    useEffect(() => {
        getArticles()
        .then((result) => {
            setArticlesList(result)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <>
        <ArticlesList articlesList={articlesList}></ArticlesList>
        </>
    )
}