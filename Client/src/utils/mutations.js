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
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($postText: String, $postTitle: String) {
    addPost(postText: $postText, postTitle: $postTitle) {
      _id
      postTitle
      postText
      createdAt
      username
    }
  }
`;

export const ADD_REACTION = gql `
  mutation addReaction( $reactionBody: String!){
    addReaction( reactionBody: $reactionBody){
      _id
      reactionBody
      createdAt
      username
    }
  }  
`
