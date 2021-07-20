
const { AuthenticationError } = require('apollo-server-express')
const { Chemex, AeroPress, BeeHouse, FrenchPress, MokaPot, Siphon, V60, Wave, User } = require('../Models');
const { signToken } = require('../utils/auth')
//import an auth function from utils folder 

const resolvers = {
  Query: {
<<<<<<< HEAD
    users: async () => {
      return User.find()
        .select('-__v -password')
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
    },
=======
>>>>>>> 01e3bed045341063e64a8832ec3182f64a280b5f
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
      return Siphon.find(params);
    },

    v60: async (parent, { id }) => {
      const params = id ? { id } : {};
      return V60.find(params);
    },

    wave: async (parent, { id }) => {
      const params = id ? { id } : {};
      return Wave.find(params);
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if(!user){
          throw new AuthenticationError('Incorrect credentials');
      }
      const correctPw = await user.isCorrectPassword(password);

      if(!correctPw) {
          throw new AuthenticationError('Incorrect Credentials');
      }
      const token = signToken(user);
      return {token, user};
    },
  }
};

module.exports = resolvers;