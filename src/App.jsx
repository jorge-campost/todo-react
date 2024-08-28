import { useContext } from "react";

import "./App.css";
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { TodosLoading } from "./components/TodosLoading/TodosLoading";
import { TodosError } from "./components/TodosError/TodosError";
import { EmptyTodos } from "./components/EmptyTodos/EmptyTodos";
import { TodoContext } from "./context/TodoContext";
import { Modal } from "./components/Modal/Modal";
import { TodoForm } from "./components/TodoForm/TodoForm";

// const defaultTodos = [
//   { text: "ads", completed: true },
//   { text: "123", completed: false },
//   { text: "adadads", completed: false },
// ];

function App() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading ? (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        ) : null}
        {error ? <TodosError /> : null}
        {!loading && searchedTodos.length === 0 ? <EmptyTodos /> : null}
        {!loading && searchedTodos.length >= 1
          ? searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))
          : null}
      </TodoList>
      <CreateTodoButton setOpenModal={setOpenModal} />

      {openModal ? (
        <Modal>
          <TodoForm />
        </Modal>
      ) : null}
    </div>
  );
}

export default App;
