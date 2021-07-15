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

  type AeroPress {
    _id: ID
    cupSize: Int
    grindSize: String
    coffeeAmount: Int
    water: Int
  }

  type BeeHouse {
    _id: ID
    cupSize: Int
    grindSize: String
    coffeeAmount: Int
    water: Int
  }

  type FrenchPress {
    _id: ID
    cupSize: Int
    grindSize: String
    coffeeAmount: Int
    water: Int
  }

  type MokaPot {
    _id: ID
    cupSize: Int
    grindSize: String
    coffeeAmount: Int
    water: Int
  }

  type Siphon {
    _id: ID
    cupSize: Int
    grindSize: String
    coffeeAmount: Int
    water: Int
  }

  type V60 {
    _id: ID
    cupSize: Int
    grindSize: String
    coffeeAmount: Int
    water: Int
  }

  type Wave {
    _id: ID
    cupSize: Int
    grindSize: String
    coffeeAmount: Int
    water: Int
  }

  type Query {
    chemex(_id: ID!) CHEMEX
    aeropress(_id: ID!) AeroPress
    beehouse(_id: ID!) BeeHouse
    frenchpress(_id: ID!) FrenchPress
    mokapot(_id: ID!) MokaPot
    siphon(_id: ID!) Siphon
    v60(_id: ID!) V60
    wave(_id: ID!) Wave
  }
`;

module.exports = typeDefs;