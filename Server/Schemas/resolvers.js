const { AuthenticationError } = require('apollo-server-express')
const { CHEMEX } = require('../Models')
//import an auth function from utils folder 

const resolvers = {
  Query: {
    key: async(parent, args, context) => {
      if (context.object) {
        const brewData = await CHEMEX.findOne({ _id: context.object.id})
        .select('-__v')

        return brewData
      }
      throw new Error('No data found')
    },
  }
}

module.exports = resolvers;