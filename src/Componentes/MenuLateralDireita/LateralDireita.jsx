import Perfil from '../../assets/imagens/Perfil2.jpeg'
import Usuario1 from '../../assets/imagens/Perfil_Julia.jpg'
import Usuario2 from '../../assets/imagens/Perfil_L7nnon.png'
import Usuario3 from '../../assets/imagens/Perfil_Veigh.jpg'
import Usuario4 from '../../assets/imagens/Perfil_Derek.jpg'
import Usuario5 from '../../assets/imagens/Perfil_Carol.jpg'
import HeaderDireito from './HeaderDireito'
import Sugestoes from './Sugestoes'
import './LateralDireita.css'

export default function LateralDireita(){
    return(
        <div className="LateralDireita">
           
            <HeaderDireito userImg4={<img src={Perfil}/>} userName4='larissa_Carvalho___' name='Larissa Carvalho'/>

            <div className='ConteinerSugestoes'>
                <div className="titleSugestoes">
                    <p className='colorCinza strong'>Sugestões para ti</p>
                    <p className='textAlternative strong2'>Ver todas</p>
                </div>

                <Sugestoes imgUsuarios={<img src={Usuario1}/>} nameUsuarios='julia_silva' texto='segue você'/>
                <Sugestoes imgUsuarios={<img src={Usuario2}/>} nameUsuarios='l7nnon' texto='seguido(a) por lais_oliveira'/>
                <Sugestoes imgUsuarios={<img src={Usuario3}/>} nameUsuarios='thiagoveigh7' texto='seguido(a) por lucas_menezes'/>
                <Sugestoes imgUsuarios={<img src={Usuario4}/>} nameUsuarios='derekluccas' texto='seguido(a) por matheus03'/>
                <Sugestoes imgUsuarios={<img src={Usuario5}/>} nameUsuarios='carolbiazin' texto='seguido(a) por joao_miranda'/>
            </div>

            <div className='FooterDireito textAlternative'>
                <p>
                    <a href="#">Sobre</a> • <a href="#">Ajuda</a> • <a href="">Imprensa</a> • <a href="#">API</a> • <a href="#">Carreiras</a> • <a href="#">Privacidade</a> • <a href="#">Termos</a> • <a href="#">Localizações</a> • <a href="#">Idioma</a> • <a href="#">Meta Verified</a>  
                </p>
                <p>&copy; 2023 INSTAGRAM FROM META </p>
            </div>
        </div>
    )
}