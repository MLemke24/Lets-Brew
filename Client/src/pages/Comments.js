import React from 'react'
import {useParams} from 'react-router-dom'


import ReplyForm from '../components/ReplyForm'
import ReplyList from '../components/ReplyList'

import Auth from '../utils/auth'
import { useQuery } from '@apollo/react-hooks';
import { QUERY_POST } from '../utils/queries';

const SinglePost = props => {

    const { id: postId } = useParams();

    const { loading, data } = useQuery(QUERY_POST, {
        variables: { id: postId }
    })

    const post = data?.post || {};

    if (loading) {
        return <div>Loading...</div>;
    }

    return (

        <div>
            <div className="card mb-3">
                <p className="card-header">
                    <span style={{ fontWeight: 700 }} className="text-light">
                        {post.username}
                    </span>{' '}
                    posted on {post.createdAt}
                </p>
                <div className="card-body">
                    <p>{post.thoughtText}</p>
                </div>
            </div>

            {post.reactionCount > 0 && <ReplyList reactions={post.reactions} />}

            {Auth.loggedIn() && <ReplyForm postId={post._id} />}
        </div>


    )
}

export default SinglePost