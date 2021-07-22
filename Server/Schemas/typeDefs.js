const { gql } = require('apollo-server-express');

const typeDefs = gql `
  type User {
    _id: ID
    username: String
    email: String
    post: [Post]
  }

  type Post {
    _id: ID
    postTitle: String
    postText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }

  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(_id: ID!): Post
    allposts: [Post]
  }

  type Mutation {
    login(email: String!, password: String!) : Auth
    addUser(username: String!, email: String!, password: String!) : Auth
    addPost(postText: String!, postTitle: String!, username: String!): Post
    addReaction(postId: ID!, reactionBody: String!): Post
  }

  type Auth {
      token: ID!
      user: User
  }
`;

module.exports = typeDefs;