import React from 'react';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';

import Auth from '../utils/auth'
import { useQuery } from '@apollo/react-hooks';
import { QUERY_POST } from '../utils/queries';

const Social = () => {
    const {loading, data} = useQuery(QUERY_POST)

    const comments = data?.posts || [];
    const loggedIn  = Auth.loggedIn()


 return ( 
    <main>
        <h3>Welcome to the Coffee Forum</h3>
    <div className="flex-row justify-space-between">
      {loggedIn && (
        <div className="col-12 mb-3">
          <CommentForm />
        </div>
      )}
      <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <CommentList comments={comments} title="Some Feed for Thought(s)..." />
        )}
      </div>

     
    </div>
  </main>
 )
}

export default Social;