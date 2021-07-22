import React from 'react'
import {useParams} from 'react-router-dom'
import ReactionForm from '../components/ReactionForm'
import ReactionList from '../components/ReactionList'
import Auth from '../utils/auth'
import { useQuery } from '@apollo/react-hooks';
import { QUERY_POST } from '../utils/queries';

const SingleComment = props => {
    const { postId : id } = useParams();
    console.log("is there anyone out there?")
    console.log( {postId : id} )
    
    const { loading, data } = useQuery(QUERY_POST, {
        variables: { postId : id }
    })

    const post = data?.post || {};

    if (loading) {
        return <div>Loading...</div>;
    }

    return (

        <div>
            <div>
                <h4> user {post.username} posted on {post.createdAt}</h4>
                <div>
                    <p>{post.postText}</p>
                </div>
            </div>



            {Auth.loggedIn() && <ReactionForm reactionId={post._id} />}
            <div>
                <h4>{post.reactionCount} People reacted, join the conversation!</h4>
            </div>
            <ReactionList Comments={post.reactions} />
        </div>

    )
}

export default SingleComment