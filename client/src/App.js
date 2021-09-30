import Login from './pages/Login';
import Entry from './pages/Entry';
import Header from './components/Header';
import Compare from './pages/Compare';
import List from './pages/List';
import Home from './pages/Home';
import { Container, Row } from 'reactstrap';

function App() {
  return (
    <Container fluid>
      <Header></Header>
        {/* <Login></Login> */}
        {/* <Entry></Entry> */}
        {/* <Compare></Compare> */}
        {/* <List></List> */}
        <Home></Home>
      <Row>
        {/* Footer goes here */}
      </Row>
    </Container>
  );
}

export default App;
