import { useContext, useState } from "react";

import "./TodoForm.css";
import { TodoContext } from "../../context/TodoContext";

function TodoForm() {
  const { setOpenModal, addTodo } = useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="todoText">Escribe tu nuevo TODO</label>
      <textarea
        required
        name="todoText"
        id="todoText"
        placeholder="Ingrese una nueva tarea"
        value={newTodoValue}
        onChange={onChange}
      ></textarea>
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Agregar
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
