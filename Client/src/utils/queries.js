// import graphQL to create our queries to corresponding typeDefs (models)
import { gql } from '@apollo/client';

//in our query we're telling the backend what we want it to send us. it needs and id to find our data
export const QUERY_BREW = gql`
  query chemex($id: ID!) {
    chemex(_id: ID!) {
      _id
      cupSize
      grindSize
      coffeeAmount
      water
    }
  }
`;
export const QUERY_REVIEW = gql`
  query review($id: ID!) {
    review(_id: $id) {
      _id
      reviewText
      createdAt
      username
    }
  }
`;