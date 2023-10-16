import {AiOutlineHeart} from "react-icons/ai";

export default function ComentariosPost(props){
    return(
        <div className="ComentariosPost">
            <div className="ConteudoComentario">
                <span className="strong">{props.userName3}</span>
                <span>{props.comentario}</span>
            </div>
                <span><AiOutlineHeart/></span>
        </div>
    )
}