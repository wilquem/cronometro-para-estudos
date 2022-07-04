import { TarefaProps } from "../../../types/tarefa";
import style from "./Item.module.scss";

interface Props extends TarefaProps {
  selecionaTarefa: (tarefaSelecionada: TarefaProps) => void;
}

export default function Item({
  id,
  tarefa,
  tempo,
  selecionado,
  completado,
  selecionaTarefa,
}: Props) {

  return (
    <li
      className={`${style.item} ${selecionado ? style.itemSelecionado: ''} ${completado ? style.itemCompletado : ''}`} 
      onClick={() =>
        !completado && selecionaTarefa({
          id,
          tarefa,
          tempo,
          selecionado,
          completado,
        })
      }
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {completado && <span className={style.concluido} aria-label="tarefa completada"></span>}
    </li>
  );
}
