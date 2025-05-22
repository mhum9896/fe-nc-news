import { Link } from "react-router-dom";

export const SeeCommentsButton = ({ article_id }) => {
  return (
    <Link to={`/article/${article_id}/comments`}>
      See all comments...</Link>
  )
}