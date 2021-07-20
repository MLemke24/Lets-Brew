// import graphQL to create CRUD executions 
import { gql } from '@apollo/client'
//////////////////////
// these are placeholder mutations sourced from module.22
//////////////////////
export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
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
    $username: String!,
    $password: String!
  ) {
    addUser(
      username: $username,
      password: $password
    ) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation addReview($reviewText: String!) {
    addReview(reviewText: $reviewText) {
      _id
      reviewText
      createdAt
      username
    }
  }
`;
