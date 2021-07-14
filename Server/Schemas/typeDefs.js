// import graphQL to write our typeDefs 
const { gql } = require('apollo-server-express')

const typeDefs = gql `
  type CHEMEX {
    _id: ID
    cupSize: Int
    grindSize: String
    coffeeAmount: Int
    water: Int
  }

  type Query {
    findBrew(cupSize: Int!, grindSize: String!, coffeeAmount: Int!, water: Int!): CHEMEX
  }
`;

module.exports = typeDefs;