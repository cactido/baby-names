import Login from './pages/Login';
import Entry from './pages/Entry';
import Header from './components/Header';
import Compare from './pages/Compare';
import { Container, Row } from 'reactstrap';

function App() {
  return (
    <Container fluid>
      <Header></Header>
        {/* <Login></Login> */}
        <Entry></Entry>
        {/* <Compare></Compare> */}
      <Row>
        {/* Footer goes here */}
      </Row>
    </Container>
  );
}

export default App;
