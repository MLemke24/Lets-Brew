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

export const QUERY_POST = gql`
  query post($id: ID!) {
    post(_id: $id) {
      _id
      postText
      postTitle
      createdAt
      username
      reactions
    }
  }
`;


export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
    }
  }
`;