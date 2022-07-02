import style from './Botao.module.scss'

interface ButtonProps {
  texto:string,
  type?:"button" | "submit" | "reset" | undefined
}

export default function Button(props:ButtonProps){
  return (
    <button type={props.type} className={style.botao}>{props.texto}</button>
  )
}
