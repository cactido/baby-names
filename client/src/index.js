import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink
// } from "@apollo/client";
// import { setContext } from '@apollo/client/link/context';

// require('dotenv').config()
// const client = new ApolloClient({
//   uri: 'http://localhost:3001/graphql',
//   cache: new InMemoryCache()
// });

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);
