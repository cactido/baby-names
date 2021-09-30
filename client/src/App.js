import React from 'react';
import Login from './pages/Login';
import Entry from './pages/Entry';
import Header from './components/Header';
import Compare from './pages/Compare';
import List from './pages/List';
import Home from './pages/Home';
import { Container, Row } from 'reactstrap';
import './App.css';
import Result from './components/Result';
import Test from './components/Test';
import { GET_USER } from './utils/queries.js';
import { useQuery } from '@apollo/client';

import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql'
});

const authLink = setContext(({ headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}`: ''
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})



function App() {
  // const { data: user1Data } = useQuery(GET_USER, { variables: { id: '6150c05b7afa685d78a9d919' } });
  // const { data: user2Data } = useQuery(GET_USER, { variables: { id: '6153b9c8d58bd6ec1fe2340b' } });

  return (
    <ApolloProvider client={client}>
      <Container fluid>
      <Header></Header>
        <Login></Login>
        {/* <Entry></Entry> */}
        {/* <Compare></Compare> */}
        {/* <Home></Home> */}
        {/* <Result user1Data={user1Data} user2Data={user2Data}></Result> */}
      <Row>
        {/* Footer goes here */}
      </Row>
    </Container>
    </ApolloProvider>
    
  );
}

export default App;
