import LateralEsquerda from './Componentes/MenuLateralEsquerda/LateralEsquerda'
import './Fonte/style.css'
import './App.css'
import './Responsivo.css'
import ConteudoCentral from './Componentes/MenuConteudoCentral/ConteudoCentral'
import LateralDireita from './Componentes/MenuLateralDireita/LateralDireita'

export default function App() {
  
  return (
    <main>
      <LateralEsquerda/>
      
      <ConteudoCentral/>
      
      <LateralDireita/>
    </main>
  )
}

 
