import Avatar from "./Avatar";

export default function Candidate({
    candidate = {
        name: "Candidato",
        username: "",
    },
    electionResult = {
        votes: 0,
        percentage: 0,
        elected: false,
    },
}) {
    let { name } = candidate;
    let { votes, percentage, elected } = electionResult;
    let colorClass = elected ? "text-green-500" : "text-yellow-500";
    let text = elected ? "Eleito" : "Não Eleito";
    return (
        <div className="border grid grid-cols-2 gap-5 p-5">
            <Avatar />
            <div>
                <div className={colorClass}>{percentage}%</div>
                <div>{votes} votos</div>
            </div>
            <div className="col-span-2 text-center">
                <p>{name}</p>
                <p className={colorClass}>{text}</p>
            </div>
        </div>
    );
}
