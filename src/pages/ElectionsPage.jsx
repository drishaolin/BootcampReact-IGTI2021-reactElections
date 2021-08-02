import { useState, useEffect } from "react";
import { apiGetCities } from "../api/apiElections";
import Elections from "../components/Elections";
import Header from "../components/Header";
import Main from "../components/Main";
import Select from "../components/Select";

export default function ElectionsPage() {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState("");

    useEffect(() => {
        async function getAllCities() {
            const allCities = await apiGetCities();
            setCities(allCities);
        }
        getAllCities();
    }, []);

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
                <Elections
                    cityElectionData={cities.find((city) => city.id === selectedCity)}
                ></Elections>
            </Main>
        </div>
    );
}
