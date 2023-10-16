import './ConteudoCentral.css'
import ItensStories from './ItensStories'
import fotoStorie from '../../assets/imagens/Perfil2.jpeg'
import fotoStorie1 from '../../assets/imagens/Perfil_Konai.jpg'
import fotoStorie2 from '../../assets/imagens/Perfil_Akon.jpg'
import fotoStorie3 from '../../assets/imagens/Perfil_Rihanna.jpg'
import fotoStorie4 from '../../assets/imagens/Perfil_Selena.jpg'
import fotoStorie5 from '../../assets/imagens/Perfil_NF.jpg'
import fotoStorie6 from '../../assets/imagens/Perfil_SeanLove.jpeg'
import fotoStorie7 from '../../assets/imagens/Perfil_Agnes.jpg'
import fotoStorie8 from '../../assets/imagens/Perfil_Xama.png'

import Post from './Post'
import HeaderPost from './HeaderPost'
import ImagemPost from './ImagemPost'
import Usuario1 from '../../assets/imagens/Perfil_Jaya.jpg'
import Usuario2 from '../../assets/imagens/Perfil_Nilo.jpg'
import Usuario3 from '../../assets/imagens/Perfil_Cesar.jpg'
import ImagemPost1 from '../../assets/imagens/Imagem_JayaPost.jpg'
import ImagemPost2 from '../../assets/imagens/img_postNilo.jpg'
import ImagemPost3 from '../../assets/imagens/img_CesarPost.jpg'
import ButtonsPost from './ButtonsPost'
import {AiOutlineHeart} from "react-icons/ai";
import {TbMessageCircle2} from "react-icons/tb";
import {PiPaperPlaneTiltBold} from "react-icons/pi";
import {RiBookmarkLine} from "react-icons/ri";
import CurtidasPost from './CurtidasPost'
import DescricaoPost from './DescricaoPost'
import FooterPost from './FooterPost'
import ComentariosPost from './ComentarioPost'

export default function ConteudoCentral(){
    return(

        <div className="ConteudoCentral">
            <div className='conteinerStories'>
            <div className="Stories">
                <ItensStories fotoStorie={<img src={fotoStorie1}/>} nomeStorie='konai'/>
                <ItensStories fotoStorie={<img src={fotoStorie2}/>} nomeStorie='akon'/>
                <ItensStories fotoStorie={<img src={fotoStorie3}/>} nomeStorie='rihanna'/>
                <ItensStories fotoStorie={<img src={fotoStorie4}/>} nomeStorie='selenagomez'/>
                <ItensStories fotoStorie={<img src={fotoStorie5}/>} nomeStorie='nfrealmusic'/>
                <ItensStories fotoStorie={<img src={fotoStorie6}/>} nomeStorie='seanxlove'/>
                <ItensStories fotoStorie={<img src={fotoStorie7}/>} nomeStorie='agnesnunes'/>
                <ItensStories fotoStorie={<img src={fotoStorie8}/>} nomeStorie='euxama'/>
                
            </div>
            </div>

            <div className="TimeLine">

                <Post>
                    <HeaderPost userImg={<img src={Usuario1}/>} userName='jayaluuckzin' postDate='7 min'/>

                    <ImagemPost conteudoImg={<img src={ImagemPost1}/>}/>

                    <div className="ConteinerButtons">
                        <div className="ConteinerButtons2">
                            <ButtonsPost iconsButtons={<AiOutlineHeart className='icons-post'/>}/>
                            <ButtonsPost iconsButtons={<TbMessageCircle2 className='icons-post'/>}/>
                            <ButtonsPost iconsButtons={<PiPaperPlaneTiltBold className='icons-post'/>}/>
                        </div>
                        <ButtonsPost iconsButtons={<RiBookmarkLine className='icons-post'/>}/>
                    </div>

                    <CurtidasPost quantidadeCurtidas='192.800' texto='curtidas'/>

                    <DescricaoPost userName='jayaluuckzin' texto='Não se preocupe com a quantidade de vezes que você cometerá erros; o verdadeiro foco deve estar em quantas vezes você se esforçará até acertar. Deixe os outros falarem e criticarem, mas questione a si mesmo: você é verdadeiramente DETERMINADO???'/>

                    <FooterPost todos_comentarios='2.361'>
                        <ComentariosPost userName3='pineapplepnpl' comentario='🔥🔥🔥🔥🔥🥷🥷🥷🥷'/>
                    </FooterPost>
                   
                </Post>

                <Post>
                    <HeaderPost userImg={<img src={Usuario2}/>} userName='nilo_froelich' postDate='20 min'/>

                    <ImagemPost conteudoImg={<img src={ImagemPost2}/>}/>

                    <div className="ConteinerButtons">
                        <div className="ConteinerButtons2">
                            <ButtonsPost iconsButtons={<AiOutlineHeart className='icons-post'/>}/>
                            <ButtonsPost iconsButtons={<TbMessageCircle2 className='icons-post'/>}/>
                            <ButtonsPost iconsButtons={<PiPaperPlaneTiltBold className='icons-post'/>}/>
                        </div>
                        <ButtonsPost iconsButtons={<RiBookmarkLine className='icons-post'/>}/>
                    </div>

                    <CurtidasPost quantidadeCurtidas='200.000' texto='curtida'/>

                    <DescricaoPost userName='nilo_froelich' texto='"Ni lo tá por onde?"💔'/>

                    <FooterPost todos_comentarios='1.200'>
                        <ComentariosPost userName3='Lucas' comentario='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'/>
                    </FooterPost>
                    
                </Post>


                <Post>
                    <HeaderPost userImg={<img src={Usuario3}/>} userName='cesarmc027' postDate='35 min'/>

                    <ImagemPost conteudoImg={<img src={ImagemPost3}/>}/>

                    <div className="ConteinerButtons">
                        <div className="ConteinerButtons2">
                            <ButtonsPost iconsButtons={<AiOutlineHeart className='icons-post'/>}/>
                            <ButtonsPost iconsButtons={<TbMessageCircle2 className='icons-post'/>}/>
                            <ButtonsPost iconsButtons={<PiPaperPlaneTiltBold className='icons-post'/>}/>
                        </div>
                        <ButtonsPost iconsButtons={<RiBookmarkLine className='icons-post'/>}/>
                    </div>

                    <CurtidasPost quantidadeCurtidas='96.038' texto='curtida'/>

                    <DescricaoPost userName='cesarmc027' texto='“Hoje os cria quer falar de amor, e o que que tem…”🍍'/>

                    <FooterPost todos_comentarios='2.300'>
                        <ComentariosPost userName3='Luan' comentario='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'/>
                    </FooterPost>
                    
                </Post>
            </div>
        </div> 
    )
}