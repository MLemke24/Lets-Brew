
const { AuthenticationError } = require("apollo-server-express")
const { Chemex, AeroPress, BeeHouse, FrenchPress, MokaPot, Siphon, V60, Wave, User, Post, Reaction } = require("../Models");
const { signToken } = require("../utils/auth")
//import an auth function from utils folder 

const resolvers = {
  Query: {
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("posts");
    },
    
    user: async (parent, { username }) => {s
      return User.findOne({ username })
        .select("-__v -password")
    },

    me: async (parent, args) => {
      const userData = await User.findOne({})
        .select("-__v -password")
        .populate("posts");
  
      return userData;
    },

    allposts: async () => {
      return Post.find().sort({ createdAt: -1 });
    },

    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },

    post: async (parent, { _id }) => {
      return Post.findOne({ _id });
    },

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

  //Mutations
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if(!user){
          throw new AuthenticationError("Incorrect credentials");
      }
      const correctPw = await user.isCorrectPassword(password);

      if(!correctPw) {
          throw new AuthenticationError("Incorrect Credentials");
      }
      const token = signToken(user);
      
      return {token, user};
    },
    addPost: async (parent, args, context) => {
      if (context.user) {
        const post = await Post.create({ ...args, username: context.user.username });
    
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { post: post._id } },
          { new: true }
        );
    
        return post;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addReaction: async (parent, { postId, reactionBody }) => {
      if (context.user) {
        const updatedPost = await Post.findOneAndUpdate(
          { _id: postId },
          { $push: { reactions: { reactionBody, username: context.user.username } } },
          { new: true, runValidators: true }
        );
    
        return updatedPost;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    }
  },
};

module.exports = resolvers;