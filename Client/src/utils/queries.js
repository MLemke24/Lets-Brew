// import graphQL to create our queries to corresponding typeDefs (models)
import { gql } from '@apollo/client';

//in our query we're telling the backend what we want it to send us. it needs and id to find our data
export const QUERY_AEROPRESS = gql`
  {
    aeropress {
      _id
      cupSize
      grindSize
      coffeeAmount
      water
    }
  }
`;

export const QUERY_FRENCHPRESS = gql`
  {
    frenchpress {
      _id
      cupSize
      grindSize
      coffeeAmount
      water
    }
  }
`;

export const QUERY_MOKAPOT = gql`
  {
    mokapot {
      _id
      cupSize
      grindSize
      coffeeAmount
      water
    }
  }
`;

export const QUERY_V60 = gql`
  {
    V60 {
      _id
      cupSize
      grindSize
      coffeeAmount
      water
    }
  }
`;

export const QUERY_SIPHON = gql`
  {
    siphon {
      _id
      cupSize
      grindSize
      coffeeAmount
      water
    }
  }
`;

export const QUERY_WAVE = gql`
  {
    wave {
      _id
      cupSize
      grindSize
      coffeeAmount
      water
    }
  }
`;

export const QUERY_BEEHOUSE = gql`
  {
    beehouse {
      _id
      cupSize
      grindSize
      coffeeAmount
      water
    }
  }
`;

export const QUERY_CHEMEX = gql`
  {
    chemex {
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
      reviewTitle
      createdAt
      username
    }
  }
`;