import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../store/TodoSlice";

function TodoForm() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length <= 0) {
      return alert("fill the field");
    }
    dispatch(addTodo({ id: uuidv4(), title: text, isCompleted: false }));
    setText("");
  };

  return (
    <div className="w-full flex justify-center">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task"
        className="rounded-md px-2 text-lg w-1/2"
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className="focus:outline-none mx-5 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Add
      </button>
    </div>
  );
}

export default TodoForm;
