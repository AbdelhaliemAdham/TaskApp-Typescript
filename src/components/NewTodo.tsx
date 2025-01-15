import React, { useRef, useState } from "react";
import classes from "./NewTodo.module.css";

export const NewTodo: React.FC<{ onAddItem: (text: string) => void }> = (
  props
) => {
  const [task, setTask] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFormSubmission(event: React.FormEvent) {
    event.preventDefault();

    const enteredText = inputRef.current?.value;

    if (enteredText && enteredText.trim() !== "") {
      props.onAddItem(enteredText);
      setTask("");
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  }

  return (
    <form className={classes.form} onSubmit={handleFormSubmission}>
      <label htmlFor="text">Type Your Task</label>
      <input
        type="text"
        id="text"
        ref={inputRef}
        onChange={(e) => setTask(e.target.value)} // Update task state on input change
        value={task}
        required
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};
