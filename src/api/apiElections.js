import axios from 'axios'

const baseURL = 'http://localhost:8080';

export async function apiGetCities() {
    const {data} = await axios.get(`${baseURL}/cities`);
    const cities = data.sort((a,b) => a.name.localeCompare(b.name))
    return cities;
}

export async function apiGetCandidates() {
    const {data} = await axios.get(`${baseURL}/candidates`);
    console.log(data);
    return data;
}

export async function apiGetElectionsByCity(selectedCityId) {
    const {data} = await axios.get(`${baseURL}/election`);
    const elections = data.filter(item => item.cityId === selectedCityId).sort((a, b) => b.votes - a.votes);
    return elections;
}