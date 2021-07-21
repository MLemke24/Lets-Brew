import React from 'react';
import { Link } from 'react-router-dom';

const CommentList = ({ Comments }) => {
  return (
    <div >
      <div >
        <span >Comments</span>
      </div>
      <div className="">
        {Comments &&
          Comments.map(comment => (
            <p className="pill mb-3" key={comment._id}>
              {comment.postText} || {' '}
              <Link to={`/comment/${comment.username}`} style={{ fontWeight: 700 }}>
                {comment.username} on {comment.createdAt}
              </Link>
            </p>
          ))}
      </div>
    </div>
  );
};

export default CommentList;
