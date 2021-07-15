const { AuthenticationError } = require('apollo-server-express')
const { CHEMEX } = require('../Models')
//import an auth function from utils folder 

const resolvers = {
  Query: {
    chemex: async(parent, args) => {
      const findBrew = await CHEMEX.findOne(args)

      return findBrew
    },
  }
}

module.exports = resolvers;