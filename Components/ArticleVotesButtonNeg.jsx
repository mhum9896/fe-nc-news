export const ArticleVotesButtonNeg = ({ onVote, disabled }) => {
  return (
    <button 
      onClick={onVote} disabled={disabled} className="vote-button downvote">
      DOWNVOTE
    </button>
  )
}