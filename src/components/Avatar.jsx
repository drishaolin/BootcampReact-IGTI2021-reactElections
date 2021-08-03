export default function Avatar({
    imgSrc = "./img/batman.png",
    imgAlt = "Descrição da Imagem",
}) {
    return (
        <div>
            <img
                src={imgSrc}
                alt={imgAlt}
                width="50px"
                heigth="50px"
                className="rounded-full"
            />
        </div>
    );
}
