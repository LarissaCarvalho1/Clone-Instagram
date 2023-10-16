export default function HeaderDireito(props){
    return(
        <div className='ConteinerHeaderDireito'>
            <div className='HeaderDireito'>
                <div className="Borda">
                    <span>{props.userImg4}</span>
                </div>
                <div>
                    <p className="strong">{props.userName4}</p>
                    <p className="colorCinza txtAlternativeHeaderSugestao">{props.name}</p>
                </div>
            </div>
        <p className="colorAzul">Mudar</p>
    </div>
    )
}