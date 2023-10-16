import { FiMoreHorizontal} from "react-icons/fi";

export default function HeaderPost(props){

    return(
        <div className="HeaderPost">
            <div className="elementosHeader">
                    <span>{props.userImg}</span>
                    <p className="strong">{props.userName}</p>
                    <span className="colorCinza"> • </span>
                    <span className="colorCinza">{props.postDate}</span>
            </div>
            <span> <FiMoreHorizontal className='icons-post'/> </span>
        </div>
    )
}