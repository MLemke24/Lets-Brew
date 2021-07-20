
const { AuthenticationError } = require('apollo-server-express')
const { Chemex, AeroPress, BeeHouse, FrenchPress, MokaPot, Siphon, V60, Wave } = require('../Models');
//import an auth function from utils folder 

const resolvers = {
  Query: {
   aeropress: async (parent, { id }) => {
     const params = id ? { id } : {};
     return AeroPress.find(params);
   },

    beehouse: async (parent, { id }) => {
    const params = id ? { id } : {};
    return BeeHouse.find(params);
    },

    chemex: async (parent, { id }) => {
      const params = id ? { id } : {};
      return Chemex.find(params);
    },

    frenchpress: async (parent, { id }) => {
      const params = id ? { id } : {};
      return FrenchPress.find(params);
    },

    mokapot: async (parent, { id }) => {
      const params = id ? { id } : {};
      return MokaPot.find(params);
    },

    siphon: async (parent, { id }) => {
      const params = id ? { id } : {};
      return siphon.find(params);
    },

    v60: async (parent, { id }) => {
      const params = id ? { id } : {};
      return V60.find(params);
    },

    wave: async (parent, { id }) => {
      const params = id ? { id } : {};
      return Wave.find(params);
    }
  }
};

module.exports = resolvers;