import React, { useRef, useState } from "react";
import Todo from "../models/TodoModel";
import classes from "./TodoItem.module.css";

export const TodoItem: React.FC<Todo> = (props) => {
  const checkRef = useRef<HTMLInputElement>(null);

  const [deleteButton, setDeleteButton] = useState<boolean>(false);

  const handleCheckboxChange = () => {
    if (checkRef.current) {
      const isChecked = checkRef.current.checked;
      props.onToggle(props.id, isChecked);
    }
  };

  function handleShowDeleteButton() {
    setDeleteButton((prev) => !prev);
  }

  const cssClass: string = props.isCompleted ? classes.completed : "";

  
  function handleDeleteTask() {
    props.deleteTask(props.id);
  }
  return (
    <div className={classes.Task}>
      {deleteButton && <button onClick={handleDeleteTask}>Delete</button>}
      <li
        onDoubleClick={handleShowDeleteButton}
        className={`${classes.item} ${cssClass}`}
        key={props.id}
      >
        {props.text}
      </li>
      <label htmlFor="check">Completed</label>
      <input
        type="checkbox"
        name="check"
        id="check"
        onChange={handleCheckboxChange}
        checked={props.isCompleted}
        ref={checkRef}
      />
    </div>
  );
};
