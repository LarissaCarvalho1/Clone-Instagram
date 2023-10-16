export default function ItemMenuLateralEsquerda(props) {
    return(
      <li>
        <div className="ItemEsquerda">
          <span>{props.icone}</span>
          <span className="cortarTexto">{props.texto}</span>
        </div>
      </li>
    )
}