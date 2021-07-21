// import graphQL to write our typeDefs 
const { gql } = require('apollo-server-express');

const typeDefs = gql `

  type User {
    _id: ID
    username: String
    email: String
    post: [Post]
  }

  type Post {
    _id: ID
    postTitle: String
    postText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }

  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }

  type AeroPress {
    id: ID
    name: String
    cupSize: Int
    grindSize: String
    coffeeAmount: Int
    water: Int
    instructions: String
  }

  type BeeHouse {
    _id: ID
    name: String
    cupSize: Int
    grindSize: String
    coffeeAmount: Int
    water: Int
    instructions: String
  }

  type Chemex {
    _id: ID
    name: String
    cupSize: Int
    grindSize: String
    coffeeAmount: Int
    water: Int
    instructions: String
  }

  type FrenchPress {
    _id: ID
    name: String
    cupSize: Int
    grindSize: String
    coffeeAmount: Int
    water: Int
    instructions: String
  }

  type MokaPot {
    _id: ID
    name: String
    cupSize: Int
    grindSize: String
    coffeeAmount: Int
    water: Int
    instructions: String
  }

  type Siphon {
    _id: ID
    name: String
    cupSize: Int
    grindSize: String
    coffeeAmount: Int
    water: Int
    instructions: String
  }

  type V60 {
    _id: ID
    name: String
    cupSize: Int
    grindSize: String
    coffeeAmount: Int
    water: Int
    instructions: String
  }

  type Wave {
    _id: ID
    name: String
    cupSize: Int
    grindSize: String
    coffeeAmount: Int
    water: Int
    instructions: String
  }

  type Query {
    aeropress(id: Int): [AeroPress]
    beehouse(id: Int): [BeeHouse]
    chemex(id: Int): [Chemex]
    frenchpress(id: Int): [FrenchPress]
    mokapot(id: Int): [MokaPot]
    siphon(id: Int): [Siphon]
    v60(id: Int): [V60]
    wave(id: Int): [Wave]
    me: User
    users: [User]
    user(username: String!): User
    post(username: String): [Post]
    posts(_id: ID!): Post
  }

  type Mutation {
    login(email: String!, password: String!) : Auth
    addUser(username: String!, email: String!, password: String!) : Auth
    addPost(postText: String!, postTitle: String!): Post
    addReaction(postId: ID!, reactionBody: String!): Post
  }

  type Auth {
      token: ID!
      user: User
  }
`;

module.exports = typeDefs;