import React from 'react';
import Login from './pages/Login';
import Entry from './pages/Entry';
import Header from './components/Header';
import Compare from './pages/Compare';
import List from './pages/List';
import Home from './pages/Home';
import { Container, Row } from 'reactstrap';
import './App.css';
import { GET_USER } from './utils/queries.js';
import { useQuery } from '@apollo/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}`: ''
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

      <Router>
        <>
      <Container fluid>
      <Header></Header>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/Home' component={Home} />
        <Route exact path='/Entry' component={Entry} />
        <Route exact path='/List' component={List} />
        <Route exact path='/Compare' component={Compare} />
      </Switch>
        
        {/* <Result user1Data={user1Data} user2Data={user2Data}></Result> */}
    </Container>
      </>
    </Router>
    </ApolloProvider>
    
  );
}

export default App;
