import React from "react";
import Todo from "../models/TodoModel.ts";
import { TodoItem } from "./TodoItem.tsx";

import classes from "./Todos.module.css";
// define our type for this component

type TodoList = {
  items: Todo[];
  handleToggle: (id: string, isCompleted: boolean) => void;
  deleteTask: (id: string) => void;
};
export const Todos: React.FC<TodoList> = (props) => {
  return (
    <div className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          deleteTask={props.deleteTask}
          onToggle={props.handleToggle}
          isCompleted={item.isCompleted}
          text={item.text}
          id={item.id}
        />
      ))}
    </div>
  );
};
