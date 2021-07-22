import React from 'react'
import {useParams} from 'react-router-dom'
import ReactionForm from '../components/ReactionForm'
import ReactionList from '../components/ReactionList'
import Auth from '../utils/auth'
import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../utils/queries';

const SingleComment = props => {
    const { postId } = useParams();
    console.log("is there anyone out there?")
    console.log( {postId} )
    
    const { loading, data } = useQuery(QUERY_POST, {
        variables: { id: {postId}.postId }
    })

    console.log({data})

    const post = data ? data.post : {};
    console.log(post)
    
    if (loading) {
        return <div>Loading...</div>;
    }

    return (

        <div className="single-comment">
            <div>
                <h4 className="single-title"> user {post.username} posted on {post.createdAt}</h4>
                <div>
                    <p className="single-title-deescription">{post.postText}</p>
                </div>
            </div>



            {Auth.loggedIn() && <ReactionForm postId={post._id} />}
            <div>
                <h4>{post.reactionCount} People reacted, join the conversation!</h4>
            </div>
            <ReactionList Comments={post.reactions} />
        </div>

    )
};

export default SingleComment