export default function ItensStories(props){
    return(
        <div className="ItemStories">
                <div className="Borda">
                    <span>{props.fotoStorie}</span>
                </div>
                <p>{props.nomeStorie}</p>
        </div>
    )
}