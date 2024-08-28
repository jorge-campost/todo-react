import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const {
    item: todos,
    saveItem: saveTodos,
    error,
    loading,
  } = useLocalStorage("TODOS_V1", []);

  const searchedTodos = todos.filter((todo) =>
    todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  );

  const completedTodos = searchedTodos.filter((todo) => todo.completed).length;
  const totalTodos = searchedTodos.length;

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({ text, completed: false });
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
