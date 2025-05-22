export const ArticleVotesButtonPos = ({ onVote, disabled }) => {
  return (
    <button 
      onClick={onVote} disabled={disabled}className="vote-button upvote">
      UPVOTE
    </button>
  )
}