
const { AuthenticationError } = require('apollo-server-express')
const { Chemex, AeroPress, BeeHouse, FrenchPress, MokaPot, Siphon, V60, Wave } = require('../Models');
//import an auth function from utils folder 

const resolvers = {
  Query: {
   aeropress: async () => {
     return AeroPress.find()
   }
  }
};

module.exports = resolvers;