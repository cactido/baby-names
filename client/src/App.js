import Login from './pages/Login';
import Entry from './pages/Entry';
import Header from './components/Header';
import { Container, Row } from 'reactstrap';

function App() {
  return (
    <Container fluid>
      <Header></Header>
        <Login></Login>
        <Entry></Entry>
      <Row>
        {/* Footer goes here */}
      </Row>
    </Container>
  );
}

export default App;
