import { TarefaProps } from "../../../types/tarefa";
import style from "../Lista.module.scss";

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
      className={`${style.item} ${selecionado ? style.itemSelecionado: ''}`} 
      onClick={() =>
        selecionaTarefa({
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
    </li>
  );
}
