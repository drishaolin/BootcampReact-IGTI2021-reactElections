import { useState, useEffect } from "react";
import { apiGetCandidates, apiGetCities, apiGetElectionsByCity } from "../api/apiElections";
import Candidate from "../components/Candidate";
import Elections from "../components/Elections";
import Header from "../components/Header";
import Main from "../components/Main";
import Select from "../components/Select";

export default function ElectionsPage() {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState("");
    const [candidates, setCandidates] = useState([]);
    const [electionResult, setElectionResult] = useState([]);

    useEffect(() => {
        async function getAllCities() {
            const allCities = await apiGetCities();
            setCities(allCities);
        }
        async function getCandidates() {
            const allCandidates = await apiGetCandidates();
            setCandidates(allCandidates);
        }
        getAllCities();
        getCandidates();
    }, []);

    useEffect(() => {
        async function getElections() {
            const elections = await apiGetElectionsByCity(selectedCity);
            setElectionResult(elections);
        }
        getElections();
    }, [selectedCity]);

    function handleCityChange(e) {
        setSelectedCity(e.currentTarget.value);
    }
        
    return (
        <div>
            <Header>React Elections</Header>

            <Main>
                <div className="flex flex-col items-center mb-4">
                    <Select
                        selectedValue={selectedCity}
                        labelDescription="Selecione o Município"
                        onSelectChange={handleCityChange}
                    >
                        {cities.map(({ id, name }) => ({ id: id, description: name }))}
                    </Select>
                </div>
                <Elections cityElectionData={cities.find((city) => city.id === selectedCity)}>
                    {electionResult.map((election) => {
                        let candidate = candidates.find(
                            (candidate) => candidate.id === election.candidateId
                        );
                        return (
                            <Candidate
                                key={election.id}
                                candidate={candidate}
                                electionResult={election}
                            />
                        );
                    })}
                </Elections>
            </Main>
        </div>
    );
}
