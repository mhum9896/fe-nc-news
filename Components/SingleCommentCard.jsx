export const SingleCommentCard = ({comment}) => {
    return (
        <li className="commentCard">
            <p className="comment-body">{comment.body}</p>
            <p className="comment-votes">{comment.votes}</p>
            <p className="comment-author">Comment by: {comment.author}</p>
            <p className="comment-created_at">Commented: {comment.created_at}</p>
        </li>
    )
}