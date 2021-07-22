import React from 'react'
import {useParams} from 'react-router-dom'
import ReactionForm from '../components/ReactionForm'
import ReactionList from '../components/ReactionList'
import Auth from '../utils/auth'
import { useQuery } from '@apollo/react-hooks';
import { QUERY_POST } from '../utils/queries';

const SinglePost = props => {
    const { id : postId } = useParams();
    console.log(postId)
    const { loading, data } = useQuery(QUERY_POST, {
        variables: { id: postId }
    })

    const post = data?.post || {};

    if (loading) {
        return <div>Loading...</div>;
    }

    return (

        <div>
            <div className="">
                <h2>Reply to this comment!</h2>
                <p className="">
                    <span style={{ fontWeight: 700 }} className="text-light">
                        {post.username}
                    </span>{' '}
                    posted on {post.createdAt}
                </p>
                <div className="">
                    <p>{post.postText}</p>
                </div>
            </div>

            {post.reactionCount > 0 && <ReactionList reactions={post.reactions} />}

            {Auth.loggedIn() && <ReactionForm postId={post._id} />}
        </div>


    )
}

export default SinglePost