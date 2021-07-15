import Header from './components/Header';
import Main from './components/Main';
import {getCities, getCandidates, getElectionsByCity} from './api/apiElections';

export default function App() {
  getElectionsByCity('a27c86ce-d99a-4f4f-8cbb-37302754734e');  
  return (
    <div>
      <Header>React Elections</Header>

      <Main></Main>
    </div>
  );
}
