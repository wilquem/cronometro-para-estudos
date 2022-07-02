import { TarefaProps } from "../../types/tarefa";
import Item from "./Item";
import style from "./Lista.module.scss";

interface Props {
  tarefas: TarefaProps[];
  selecionaTarefa: (tarefaSelecionada: TarefaProps) => void;
}

export default function Lista({ tarefas, selecionaTarefa }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item
            selecionaTarefa={selecionaTarefa}
            key={item.id}
            tarefa={item.tarefa}
            tempo={item.tempo}
            id={item.id}
            selecionado={item.selecionado}
            completado={item.completado}
          />
        ))}
      </ul>
    </aside>
  );
}
