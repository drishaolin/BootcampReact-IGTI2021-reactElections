import {getCities, getCandidates, getElectionsByCity} from './api/apiElections';
import ElectionsPage from './pages/ElectionsPage';

export default function App() {
  getElectionsByCity('a27c86ce-d99a-4f4f-8cbb-37302754734e');  
  return (
    <ElectionsPage/>
  );
}
