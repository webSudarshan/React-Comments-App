import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentItem, onLike, onDelete} = props
  const {id, name, comment, isLiked, initialBackgroundClass} = commentItem
  const initial = name.slice(0, 1)
  const time = formatDistanceToNow(new Date())
  const url = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeClass = isLiked ? 'liked' : ''

  const onClickLike = () => {
    onLike(id)
  }

  const onClickDelete = () => {
    onDelete(id)
  }

  return (
    <li>
      <div className="name-details">
        <span className={`${initialBackgroundClass} initial`}>{initial}</span>
        <p className="name">{name}</p>
        <p className="time">{time} ago</p>
      </div>
      <p className="comment">{comment}</p>
      <div className="button-container">
        <button type="button" className="like-btn" onClick={onClickLike}>
          <img src={url} alt="like" />
          <p className={likeClass}>Like</p>
        </button>
        <button type="button" onClick={onClickDelete} testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
