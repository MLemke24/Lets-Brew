const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas/index')

const app = express();
const PORT = process.env.PORT || 3001;
const db = require('./config/connection');

const server = new ApolloServer({
    typeDefs,
    resolvers
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// server.applyMiddleware({ app });

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}`);
        // route to test GQL API's
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
});

mongoose.set('debug', true);

