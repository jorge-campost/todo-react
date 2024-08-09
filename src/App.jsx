import { useState } from "react";

import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { TodoItem } from "./components/TodoItem/TodoItem";
import "./App.css";

const defaultTodos = [
  { text: "ads", completed: true },
  { text: "123", completed: false },
  { text: "adadads", completed: false },
];

function App() {
  const [searchValue, setSearchValue] = useState("");

  const [todos, setTodos] = useState(defaultTodos);
  const completedTodos = defaultTodos.filter((todo) => todo.completed).length;

  const searchedTodos = todos.filter((todo) =>
    todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  );
  const totalTodos = searchedTodos.length;

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text == text);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}

export default App;
