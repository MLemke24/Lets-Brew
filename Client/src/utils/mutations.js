// import graphQL to create CRUD executions 
import { gql } from '@apollo/client'
//////////////////////
// these are placeholder mutations sourced from module.22
//////////////////////
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
  mutation addPost($postTitle: String, $postText: String) {
    addPost(postTitle: $postTitle, postText: $postText) {
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
      reactionBody
      createdAt
      username
    }
  }  
`
