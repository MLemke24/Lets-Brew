import React from 'react';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';

import Auth from '../utils/auth'
import { useQuery } from '@apollo/react-hooks';
import { QUERY_POSTS } from '../utils/queries';

const Social = () => {
    const {loading, data} = useQuery(QUERY_POSTS)
    const comments = data?.posts || [];
    const loggedIn  = Auth.loggedIn()


 return ( 
    <main>
        <h3>Welcome to the Coffee Forum</h3>
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
            title="Some Feed for Thought(s)..." />
        )}
      </div>

     
    </div>
  </main>
 )
}

export default Social;