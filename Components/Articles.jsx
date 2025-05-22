import { ArticlesList } from "./ArticlesList";
import { getArticles } from "../api";
import {useState, useEffect} from "react"
import loadingGif from '../src/assets/loading.gif'

export const Articles = ({ articlesList, setArticlesList }) => {
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        getArticles()
        .then((result) => {
            setArticlesList(result)
            setIsLoading(false)
        })
        .catch((err) => {
            console.log(err)
            setIsLoading(false)
        })
    }, [])

    return (
    <>
      {isLoading ? (
        <img src={loadingGif} alt="Loading..." />) : (
        <ArticlesList articlesList={articlesList} />
      )}
    </>
  )
}