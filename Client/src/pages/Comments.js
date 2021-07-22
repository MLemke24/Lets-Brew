import React from 'react'
import {useParams} from 'react-router-dom'
import ReactionForm from '../components/ReactionForm'
import ReactionList from '../components/ReactionList'
import Auth from '../utils/auth'
import { useQuery } from '@apollo/react-hooks';
import { QUERY_POST } from '../utils/queries';

const SingleComment = () => {
    const { postId : id } = useParams();
    console.log("is there anyone in there?")
    
    const { loading, data } = useQuery(QUERY_POST, {
        variables: { postid : id }
    })

    const post = data?.post || {};

    if (loading) {
        return <div>Loading...</div>;
    }

    return (

        <div>
            <div>
                <h2>Reply to this comment!</h2>
                <p>
                    <span style={{ fontWeight: 700 }} className="text-light">
                        {post.username}
                    </span>{' '}
                    posted on {post.createdAt}
                </p>
                <div>
                    <p>{post.postText}</p>
                </div>
            </div>

            {post.reactionCount > 0 && <ReactionList Comments={post.reactions} />}

            {Auth.loggedIn() && <ReactionForm reactionId={post._id} />}
        </div>


    )
}

export default SingleComment