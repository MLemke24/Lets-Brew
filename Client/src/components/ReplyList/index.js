import React from 'react';
import { Link } from 'react-router-dom';

const ReactionList = ({ reactions }) => {
  return (
    <div >
      <div >
        <span >Replys</span>
      </div>
      <div className="">
        {reactions &&
          reactions.map(reaction => (
            <p className="pill mb-3" key={reaction._id}>
              {reaction.reactionBody} //{' '}
              <Link to={`/profile/${reaction.username}`} style={{ fontWeight: 700 }}>
                {reaction.username} on {reaction.createdAt}
              </Link>
            </p>
          ))}
      </div>
    </div>
  );
};

export default ReactionList;
