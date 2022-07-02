import Button from "../Button";
import style from "./Form.module.scss";
import { useEffect, useState } from "react";
import { TarefaProps } from "../../types/tarefa";

export default function Formulario({
  setTarefas,
}: {
  setTarefas: React.Dispatch<
    React.SetStateAction<TarefaProps[] | []>
  >;
}) {
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00:00");
  const [id, setId] = useState(0);
  const [dados, setDados] = useState({ id, tarefa, tempo });


  useEffect(() => {
    setDados({ id, tarefa, tempo });
  }, [id, tarefa, tempo]);

  return (
    <form
      className={style.novaTarefa}
      onSubmit={(event) => {
        event.preventDefault();
        setDados({ id, tarefa, tempo });
        setTarefas((tarefasAntigas) => [
          ...tarefasAntigas,
          { ...dados, selecionado: false, completado: false },
        ]);
        setId(id + 1);
        setTarefa("");
        setTempo("00:00:00");
      }}
    >
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo </label>
        <input
          onChange={(event) => {
            setTarefa(event.target.value);
          }}
          type="text"
          value={tarefa}
          name="tarefa"
          id="tarefa"
          placeholder="O que você quer estudar"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          onChange={(event) => {
            setTempo(event.target.value);
          }}
          type="time"
          step="1"
          name="tempo"
          value={tempo}
          id="tempo"
          required
        />
      </div>
      <Button type="submit" texto="Adicionar" />
    </form>
  );
}
