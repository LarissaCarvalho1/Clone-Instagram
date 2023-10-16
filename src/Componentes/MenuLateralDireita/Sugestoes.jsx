export default function Sugestoes(props){
    return(
        <div className='Sugestoes'>
            <div className='Sugestoes02'>
                <span>{props.imgUsuarios}</span>
                <div>
                    <p className="strong">{props.nameUsuarios}</p>
                    <p className="colorCinza textAlternative">{props.texto}</p>
                </div>
            </div>
            <p className='colorAzul'>Seguir</p>
        </div>
    )
}