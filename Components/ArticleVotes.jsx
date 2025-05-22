import { useState, useEffect } from "react"
import { incArticleVote, decArticleVote } from "../api.js"
import { ArticleVotesButtonNeg } from "./ArticleVotesButtonNeg.jsx"
import { ArticleVotesButtonPos } from "./ArticleVotesButtonPos.jsx"

export const ArticleVotes = ({ articleId, initialVotes }) => {
  const [votes, setVotes] = useState(0)
  const [hasVoted, setHasVoted] = useState(false)

  useEffect(() => {
    if (initialVotes !== undefined) {
      setVotes(initialVotes)
    }
  }, [initialVotes])

  const handleUpvote = () => {
    if (hasVoted) return
    
    incArticleVote(articleId, 1)
      .then((article) => {
        setVotes(article.votes)
        setHasVoted(true)
      })
  }

  const handleDownvote = () => {
    if (hasVoted) return
    
    decArticleVote(articleId, -1)
      .then((article) => {
        setVotes(article.votes)
        setHasVoted(true)
      })
  }

  return (
    <div className="article-votes">
      <p>Votes: {votes}</p>
      {hasVoted ? (
        <p>THANK YOU FOR VOTING!</p>
      ) : (
        <div className="vote-buttons">
          <ArticleVotesButtonPos 
            onVote={handleUpvote}
            disabled={hasVoted}
          />
          <ArticleVotesButtonNeg 
            onVote={handleDownvote}
            disabled={hasVoted}
          />
        </div>
      )}
    </div>
  )
}