import style from './Botao.module.scss'

interface ButtonProps {
  texto:string,
  type?:"button" | "submit" | "reset" | undefined,
  onClick?:() => void,
}

export default function Button(props:ButtonProps){
  return (
    <button onClick={props.onClick} type={props.type} className={style.botao}>{props.texto}</button>
  )
}
