import {BsEmojiSmile} from "react-icons/bs";

export default function FooterPost(props){
    return(
        <div className="FooterPost">
            <p>Ver todos os {props.todos_comentarios} comentários</p>
            {props.children}
            <div className="AddComentario">
                <p className="colorCinza">Adicione um comentário...</p>
                <span><BsEmojiSmile/></span>
            </div>
        </div>
    )
}