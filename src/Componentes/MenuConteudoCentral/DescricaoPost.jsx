export default function DescricaoPost(props){
    return(
        <div className="DescricaoPost">
            <span className="strong">{props.userName}</span>
            <span>{props.texto}</span>
        </div>
    )
}