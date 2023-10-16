export default function CurtidasPost(props){
    return(
        <div className="CurtidasPost">
            <span className="strong">{props.quantidadeCurtidas}</span>
            <span>{props.texto}</span>
        </div>
    )
}