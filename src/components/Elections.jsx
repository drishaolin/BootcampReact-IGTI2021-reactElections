import FormattedNumber from "./FormattedNumber";

export default function Elections({
    children: candidates,
    cityElectionData = {
        name: "Município",
        votingPopulation: 0,
        absence: 0,
        presence: 0,
    },    
}) {
    let { name, votingPopulation, absence, presence } = cityElectionData;
    
    return (
        <div className="border-2 border-yellow-300 flex flex-col items-center">
            <h2 className="font-bold">Eleição em {name}</h2>
            <div className="space-x-10">
                <span>
                    <span className="font-medium">Total de eleitores: </span>
                    <FormattedNumber>{votingPopulation}</FormattedNumber>
                </span>
                <span>
                    <span className="font-medium">Abstenção: </span>
                    <FormattedNumber>{absence}</FormattedNumber>
                </span>
                <span>
                    <span className="font-medium">Comparecimento: </span>
                    <FormattedNumber>{presence}</FormattedNumber>
                </span>
            </div>
            <div>
                {candidates}
            </div>
        </div>
    );
}
