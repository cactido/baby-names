import './App.css';
import Result from './Components/Result';
import { GET_USER } from './queries.js';
import { useQuery } from '@apollo/client';

function App() {
  const { data: user1Data } = useQuery(GET_USER, { variables: { userId: '6150c05b7afa685d78a9d919' } } );
  const { data: user2Data } = useQuery(GET_USER, { variables: { userId: '6153b9c8d58bd6ec1fe2340b' } } );

  return (
      <Result user1Data={ user1Data } user2Data={ user2Data }/>
  );
}

export default App;
