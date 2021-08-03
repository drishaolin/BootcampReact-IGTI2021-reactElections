export default function FormattedNumber({children: value}) {
    return (
        <span>
            {new Intl.NumberFormat("pt-br").format(value)}
        </span>
    )
}
