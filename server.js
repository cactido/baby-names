const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const typeDefs = require('./schema/typeDefs');
const resolvers = require('./schema/resolvers');

const app = express();
require('dotenv').config();

// database connection
mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.once('open', () => { console.log('Database connected') });
// middleware
// apollo server
async function startServer() {
    server = new ApolloServer({ typeDefs, resolvers });
    await server.start();
    server.applyMiddleware({ app });
}
startServer();

app.listen(3001, () => { console.log('Listening on port 3001') });