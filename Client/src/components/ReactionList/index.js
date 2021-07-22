import React from 'react';
import { Link } from 'react-router-dom';

const CommentList = ({ Comments }) => {
  return (
    <div >
      <div >
        <span >Comments: </span>
      </div>
      <div className="">
        {Comments &&
          Comments.map(comment => (
            <div>
              <p style={{ fontWeight: 700 }}>{comment.reactionBody}   || {comment.username} on {comment.createdAt}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CommentList;
