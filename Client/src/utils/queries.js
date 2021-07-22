import { gql } from '@apollo/client';

export const QUERY_POST = gql`
  query post($id: ID!) {
    post(_id: $id) {
      _id
      postText
      postTitle
      createdAt
      username
      reactionCount
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;

export const QUERY_POSTS = gql `
query posts($username: String!){
    posts(username: $username){
        _id
        postTitle
        postText
        createdAt
        username
        reactionCount
        reactions {
            _id
            createdAt
            username
            reactionBody
        }
    }
}
`;

export const QUERY_All_POSTS = gql `
query allposts{
    allposts{
        _id
        postTitle
        postText
        createdAt
        username
        reactionCount
        reactions {
            _id
            createdAt
            username
            reactionBody
        }
    }
}
`;


export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      post
    }
    posts {
      _id
      postTitle
      postText
      createdAt
      reactionCount
    }
  }
`;

export const QUERY_ME = gql`
 {
   me {
    _id
    username
    email
    posts {
      _id
      postTitle
      postText
      createdAt
      reactionCount
      reactions {
        _id
        createdAt
        reactionBody
        username
      }
    }
  }
}
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;