import "./App.css";
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { TodosLoading } from "./components/TodosLoading/TodosLoading";
import { TodosError } from "./components/TodosError/TodosError";
import { EmptyTodos } from "./components/EmptyTodos/EmptyTodos";
import { Modal } from "./components/Modal/Modal";
import { TodoForm } from "./components/TodoForm/TodoForm";
<<<<<<< Updated upstream
=======
import { ChangeAlert } from "./components/ChangeAlert/ChangeAlert";
import { useTodos } from "./hooks/useTodos";
import { TodoHeader } from "./components/TodoHeader/TodoHeader";
>>>>>>> Stashed changes

function App() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
<<<<<<< Updated upstream
    totalTodos
  } = useContext(TodoContext);
=======
    sincronizeTodos,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
  } = useTodos();
>>>>>>> Stashed changes

  return (
    <div className="App">
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList>
        {loading ? (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        ) : null}
        {error ? <TodosError /> : null}
        {!loading && totalTodos.length === 0 ? <EmptyTodos /> : null}
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

      <ChangeAlert sincronize={sincronizeTodos} />
    </div>
  );
}

export default App;
