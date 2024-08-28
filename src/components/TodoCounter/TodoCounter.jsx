import { useContext } from "react";

import "./TodoCounter.css";
import { TodoContext } from "../../context/TodoContext";

function TodoCounter() {
  const { totalTodos, completedTodos } = useContext(TodoContext);
  return (
    <h1 className="TodoCounter">
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span>{" "}
      TODOs
    </h1>
  );
}

export { TodoCounter };
