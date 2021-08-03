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
    const formattedNumber = (value) => new Intl.NumberFormat("pt-br").format(value);
    return (
        <div className="border-2 border-yellow-300 flex flex-col items-center">
            <h2 className="font-bold">Eleição em {name}</h2>
            <div className="space-x-10">
                <span>
                    <span className="font-medium">Total de eleitores: </span>
                    {formattedNumber(votingPopulation)}
                </span>
                <span>
                    <span className="font-medium">Abstenção: </span>
                    {formattedNumber(absence)}
                </span>
                <span>
                    <span className="font-medium">Comparecimento: </span>
                    {formattedNumber(presence)}
                </span>
            </div>
            <div>
                {candidates}
            </div>
        </div>
    );
}
