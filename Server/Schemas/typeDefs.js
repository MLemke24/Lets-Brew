// import graphQL to write our typeDefs 
const { gql } = require('apollo-server-express');

const typeDefs = gql `

  type User {
    _id: ID
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
  }
  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, password: String!): Auth
  }
  type Auth {
      token: ID!
      user: User
  }
`;

module.exports = typeDefs;