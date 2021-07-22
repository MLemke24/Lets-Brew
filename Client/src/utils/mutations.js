import { gql } from '@apollo/client'

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $password: String!
    $email: String!
  ) {
    addUser(
      username: $username
      password: $password
      email: $email
    ) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($postText: String!, $postTitle: String!, $username: String!) {
    addPost(postText: $postText, postTitle: $postTitle, username: $username) {
      _id
      postTitle
      postText
      createdAt
      username
      reactionCount
      reactions {
        _id
      }
    }
  }
`;

export const ADD_REACTION = gql `
  mutation addReaction($postId: ID!, $reactionBody: String!){
    addReaction(postId: $postId, reactionBody: $reactionBody){
      _id
      createdAt
      username
    }
  }  
`
