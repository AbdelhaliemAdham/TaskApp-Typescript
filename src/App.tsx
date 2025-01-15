import React, { SetStateAction, useEffect, useState } from "react";
import Todo from "./models/TodoModel.ts";
import { Todos } from "./components/Todos.tsx";
import { NewTodo } from "./components/NewTodo.tsx";
import Header from "./components/Header.tsx";

const todos = localStorage.getItem("todos");

const todoList = todos ? JSON.parse(todos) : [];
function App() {
  const [todos, setTodos] = useState<Todo[]>(todoList);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodoHandler(text: string) {
    const newTodo = new Todo(text);
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  }

  function handleDeleteTask(id: string) {
    const updatedTask = todos.filter((todo) => todo.id !== id);
    setTodos([...updatedTask]);
  }
  function handleToggle(id: string, isCompleted: boolean) {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted } : todo
    );
    setTodos([...updatedTodos]);
  }
  return (
    <main>
      <Header />
      <NewTodo onAddItem={addTodoHandler} />
      <Todos
        items={todos}
        handleToggle={handleToggle}
        deleteTask={handleDeleteTask}
      />
    </main>
  );
}

export default App;
