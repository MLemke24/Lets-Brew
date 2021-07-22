const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas')
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../Client/build')));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../Client/build/index.html"));
});

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}`);
        // route to test GQL API's
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
});

mongoose.set('debug', true);

