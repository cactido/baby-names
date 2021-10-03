const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
// const mongoose = require('mongoose');
const typeDefs = require('./schema/typeDefs');
const resolvers = require('./schema/resolvers');
const cors = require('cors');
const { authMiddleware } = require('./utils/auth');

const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001



// app.use(cors());
// require('dotenv').config();

// database connection
// mongoose.connect(process.env.MONGODB_URI)
// mongoose.connection.once('open', () => { console.log('Database connected') });
// middleware
// apollo server
async function startServer() {
    const server = new ApolloServer({ typeDefs, resolvers, context: authMiddleware });
    await server.start();
    server.applyMiddleware({ app });
}
startServer();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }

app.get('*', (req, res) => {
    res.sendFile(path.json(__dirname, '../client/build/index.html'))
})

db.once('open', () => {
    app.listen(PORT, () => { console.log('Listening on port 3001') });
})
