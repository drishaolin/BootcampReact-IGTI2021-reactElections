import Avatar from "./Avatar";
import FormattedNumber from "./FormattedNumber";

export default function Candidate({
    candidate = {
        name: "Batman",
        username: "batman",
    },
    electionResult = {
        votes: 0,
        elected: false,
    },
    percentage = 0
}) {
    let { name, username } = candidate;
    let { votes, elected } = electionResult;
    let colorClass = elected ? "text-green-500" : "text-yellow-500";
    let text = elected ? "Eleito" : "Não Eleito";
    
    return (
        <div className="border grid grid-cols-2 gap-5 p-5 m-5">
            <Avatar imgSrc={`./img/${username}.png`} imgAlt={`Imagem do ${name}`} />
            <div>
                <div className={colorClass}>{percentage}%</div>
                <div><FormattedNumber>{votes}</FormattedNumber> votos</div>
            </div>
            <div className="col-span-2 text-center">
                <p>{name}</p>
                <p className={colorClass}>{text}</p>
            </div>
        </div>
    );
}
