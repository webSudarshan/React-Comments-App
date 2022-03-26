import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {name: '', comment: '', commentsList: []}

  onChangeName = e => {
    this.setState({name: e.target.value})
  }

  onChangeComment = e => {
    this.setState({comment: e.target.value})
  }

  addComment = e => {
    e.preventDefault()
    const {name, comment} = this.state
    if (name === '') {
      // eslint-disable-next-line no-alert
      alert('Please enter the name')
    } else if (comment === '') {
      // eslint-disable-next-line no-alert
      alert('Please enter the comment')
    } else {
      const initialBackgroundIndex = Math.floor(
        Math.random() * initialContainerBackgroundClassNames.length,
      )
      const initialBackgroundClass =
        initialContainerBackgroundClassNames[initialBackgroundIndex]

      const commentItem = {
        id: uuidv4(),
        name,
        comment,
        isLiked: false,
        initialBackgroundClass,
      }
      this.setState(prevState => ({
        name: '',
        comment: '',
        commentsList: [...prevState.commentsList, commentItem],
      }))
    }
  }

  onLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isLiked: !eachItem.isLiked}
        }
        return eachItem
      }),
    }))
  }

  onDelete = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(
        eachItem => eachItem.id !== id,
      ),
    }))
  }

  render() {
    const {name, comment, commentsList} = this.state
    const count = commentsList.length
    return (
      <div className="container">
        <form className="top-container" onSubmit={this.addComment}>
          <h1 className="med-heading">Comments</h1>
          <div className="comment-container">
            <h1 className="large-heading">Comments</h1>
            <p>Say something about 4.0 Technologies</p>
            <input
              type="text"
              placeholder="Your Name"
              size="37"
              onChange={this.onChangeName}
              value={name}
            />
            <br />
            <textarea
              placeholder="Your Comment"
              rows="8"
              cols="38"
              onChange={this.onChangeComment}
              value={comment}
            />
            <br />
            <button type="submit" className="add-comment-btn">
              Add Comment
            </button>
          </div>
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </form>
        <div className="btm-container">
          <p className="comments-count">
            <span>{count}</span> Comments
          </p>
          <ul>
            {commentsList.map(eachItem => (
              <CommentItem
                commentItem={eachItem}
                key={eachItem.id}
                onLike={this.onLike}
                onDelete={this.onDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
