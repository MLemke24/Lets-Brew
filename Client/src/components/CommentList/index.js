import React from 'react';
import { Link } from 'react-router-dom';

const CommentList = ({ comments, title }) => {
  if (!comments.length) {
    return <h3>No Comments Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {comments &&
        comments.map(comment => (
          <div key={comment._id} className="card mb-3">
            <p className="card-header">
              
              {comment.username} commented on {comment.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/comment/${comment._id}`}>
                <p>{comment.commentText}</p>
                <p className="mb-0">
                  Reactions: {comment.reactionCount} || Click to{' '}
                  {comment.reactionCount ? 'see' : 'start'} the discussion!
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CommentList;
