import ItemMenuResponsivo from "./ItemMenuResponsivo";

import Perfil from '../../assets/imagens/Perfil2.jpeg'
import {AiFillHome} from "react-icons/ai";
import {BsSearch} from "react-icons/bs";
import {ImCompass2} from "react-icons/im";
import {BiMoviePlay} from "react-icons/bi";
import {PiMessengerLogo} from "react-icons/pi";
import {AiOutlineHeart} from "react-icons/ai";
import {CgAddR} from "react-icons/cg";
import {HiOutlineBars3} from "react-icons/hi2";
import {FiAtSign} from "react-icons/fi";

export default function MenuResponsivo(){
    return(
        <ul className="menuPc2">
            <ItemMenuResponsivo itemResponsivo={<AiFillHome className="iconeSimples"/>}/>
            <ItemMenuResponsivo itemResponsivo={<BsSearch className="iconeSimples"/>}/>
            <ItemMenuResponsivo itemResponsivo={<ImCompass2 className="iconeSimples"/>}/>
            <ItemMenuResponsivo itemResponsivo={<BiMoviePlay className="iconeSimples"/>}/>
            <ItemMenuResponsivo itemResponsivo={<PiMessengerLogo className="iconeSimples"/>}/>
            <ItemMenuResponsivo itemResponsivo={<AiOutlineHeart className="iconeSimples"/>}/>
            <ItemMenuResponsivo itemResponsivo={<CgAddR className="iconeSimples"/>}/>
            <ItemMenuResponsivo itemResponsivo={<img src={Perfil} className="iconeSimples"/>}/>


            <div className="button_more">
                <ItemMenuResponsivo itemResponsivo={<FiAtSign className="iconeSimples"/>}/>
                <ItemMenuResponsivo itemResponsivo={<HiOutlineBars3 className="iconeSimples"/>}/>
            </div>
            
        </ul>
    )
}