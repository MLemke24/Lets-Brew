// import graphQL to write our typeDefs 
const { gql } = require('apollo-server-express');

const typeDefs = gql `
  type AeroPress {
    _id: ID
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
    aeropress: [AeroPress]
  }
`;

module.exports = typeDefs;