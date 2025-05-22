import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByArticleId } from "../api";
import { SingleCommentCard } from "./SingleCommentCard";
import loadingGif from '../src/assets/loading.gif'

export const CommentsList = () => {
    const { article_id } = useParams();
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getCommentsByArticleId(article_id)
        .then((comments) => {
            setComments(comments)
            setIsLoading(false)
        })
        .catch((err) => {
            console.log(err)
            setIsLoading(false)
        })
    }, [])

    return (
    <div>
        <h2>Comments</h2>
        {isLoading ? (
        <img src={loadingGif} alt="Loading..." />) : (
        comments.map((comment) => (
        <SingleCommentCard key={comment.comment_id} comment={comment} />
        ))
        )}
    </div>
    )
}