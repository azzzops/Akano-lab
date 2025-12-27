export default function Button({className, text, id}){
    return(
        <button className={className}>
            <a href={id}>{text}</a>
        </button>
    )
}