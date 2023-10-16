import NomeLogo from '../../assets/imagens/logo-instagram-nome.png'
import Perfil from '../../assets/imagens/Perfil2.jpeg'
import ItemMenuLateralEsquerda from './ItemMenuLateralEsquerda'
import MenuResponsivo from './MenuResponsivo'
import './LateralEsquerda.css'

import {AiFillHome} from "react-icons/ai";
import {BsSearch} from "react-icons/bs";
import {ImCompass2} from "react-icons/im";
import {BiMoviePlay} from "react-icons/bi";
import {PiMessengerLogo} from "react-icons/pi";
import {AiOutlineHeart} from "react-icons/ai";
import {CgAddR} from "react-icons/cg";
import {HiOutlineBars3} from "react-icons/hi2";
import {FiAtSign} from "react-icons/fi";
import {BsInstagram} from "react-icons/bs";


export default function LateralEsquerda(){
    return(
       
        /* Podemos editar um icone dentro da própria {} no ícone - style={{color: '', height: '', width: ''}} */
        <div className="LateralEsquerda"> 
            <div className="logoLateralEsquerda">
                <img src= {NomeLogo} alt="Logo do Instagram"/>
            </div>
            <div className='logoPc2'>
                <span><BsInstagram className="iconeSimples"/></span>
            </div>
            

            <div> 
                <div className="menuLateralEsquerda">
                    <ul className='menuPc'>
                        <ItemMenuLateralEsquerda icone= {<AiFillHome className="iconeSimples"/> } texto="Home"/>
                        <ItemMenuLateralEsquerda icone= {<BsSearch className="iconeSimples"/>} texto="Search"/>
                        <ItemMenuLateralEsquerda icone= {<ImCompass2 className="iconeSimples"/>} texto="Explore"/>
                        <ItemMenuLateralEsquerda icone= {<BiMoviePlay className="iconeSimples"/>} texto="Reels"/>
                        <ItemMenuLateralEsquerda icone={<PiMessengerLogo className="iconeSimples"/>} texto="Messages"/>
                        <ItemMenuLateralEsquerda icone={<AiOutlineHeart className="iconeSimples"/>} texto="Notifications"/>
                        <ItemMenuLateralEsquerda icone={<CgAddR className="iconeSimples"/>} texto="Create"/>
                        <ItemMenuLateralEsquerda icone={<img src={Perfil} alt="" className="iconeSimples"/>} texto="Perfil"/>
                        <div className='button_more'>
                            <ItemMenuLateralEsquerda icone={<FiAtSign className="iconeSimples"/>} texto="Threads"/>
                            <ItemMenuLateralEsquerda icone={<HiOutlineBars3 className="iconeSimples"/>} texto="More"/>
                        </div>
                    </ul>
                    
                </div>
                  
                <div className='menuLateralEsquerda2'>
                    <MenuResponsivo/>
                </div>
            </div>
                
        </div>
       
    )
}

