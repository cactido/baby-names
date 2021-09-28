import './App.css';
import Result from './components/Result';
import Login from './pages/Login';
import Entry from './pages/Entry';
import { Container, Row } from 'reactstrap';

function App() {
  return (
    <div>
      <Container>
        <Row>
          {/* Header goes here */}
        </Row>
        <Row>
        <Login></Login>
        <Entry></Entry>
        <Result />
        </Row>
        <Row>
          {/* Footer goes here */}
        </Row>
      </Container>
    </div>
  );
}

export default App;
