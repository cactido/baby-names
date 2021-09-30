import './App.css';
import Result from './Components/Result';
import Test from './Components/Test';
import { GET_USER } from './queries.js';
import { useQuery } from '@apollo/client';

function App() {
  const { data: user1Data } = useQuery(GET_USER, { variables: { id: '6150c05b7afa685d78a9d919' } });
  const { data: user2Data } = useQuery(GET_USER, { variables: { id: '6153b9c8d58bd6ec1fe2340b' } });

  return (
    <div>
      <Result user1Data={user1Data} user2Data={user2Data} />
      <hr />
      <Test />
      Moo moo moo
    </div>
  );
}

export default App;
