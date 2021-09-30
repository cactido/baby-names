import Login from './pages/Login';
import Entry from './pages/Entry';
import Header from './components/Header';
import Compare from './pages/Compare';
import List from './pages/List';
import Home from './pages/Home';
import { Container, Row } from 'reactstrap';
import './App.css';
import Result from './Components/Result';
import Test from './Components/Test';
import { GET_USER } from './queries.js';
import { useQuery } from '@apollo/client';

function App() {
    const { data: user1Data } = useQuery(GET_USER, { variables: { id: '6150c05b7afa685d78a9d919' } });
  const { data: user2Data } = useQuery(GET_USER, { variables: { id: '6153b9c8d58bd6ec1fe2340b' } });
  return (
    <Container fluid>
      <Header></Header>
        {/* <Login></Login> */}
        {/* <Entry></Entry> */}
        {/* <Compare></Compare> */}
        {/* <List></List> */}
        <Home></Home>
<Result user1Data={user1Data} user2Data={user2Data} />
      <Row>
        {/* Footer goes here */}
      </Row>
    </Container>
  );
}

export default App;
