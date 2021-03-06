import React from 'react';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';

import Auth from '../utils/auth'
import { useQuery } from '@apollo/client';
import { QUERY_All_POSTS } from '../utils/queries';

const Social = () => {
    const {loading, data} = useQuery(QUERY_All_POSTS)
    const comments = data?.allposts || [];
    const loggedIn  = Auth.loggedIn()


 return ( 
    <main>
        <h3 className="social-title">Welcome to the Coffee Forum</h3>
    <div>
      {loggedIn && (
        <div>
          <CommentForm />
        </div>
      )}
      <div>
        {loading ? (
          <div>Loading comments ...</div>
        ) : (
          <CommentList 
            comments={comments} 
            title="See how others love coffee too!..." />
        )}
      </div>

     
    </div>
  </main>
 )
}

export default Social;