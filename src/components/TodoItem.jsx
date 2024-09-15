// components/TodoItem.js
import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, toggleTodoCompletion } from "../store/TodoSlice";

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleEdit = () => {
    if (newTitle.trim() !== "") {
      dispatch(editTodo({ id: todo.id, title: newTitle }));
      setIsEditing(false);
    }
  };

  const handleToggleCompletion = () => {
    dispatch(toggleTodoCompletion(todo.id));
  };

  return (
    <div className="todoItem items-center border-b-gray-200 py-2 rounded-xl justify-between my-4 flex">
      <div className="todoLeft items-center p-2 flex">
        <input
          type="checkbox"
          onChange={handleToggleCompletion}
          checked={todo.isCompleted}
          name=""
          id=""
        />
        {isEditing ? (
          <input
            type="text"
            className="rounded-md  text-md mx-4"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onBlur={handleEdit}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                handleEdit();
              }
            }}
            autoFocus
          />
        ) : (
          <p className={todo.isCompleted ? "line-through mx-5" : "mx-5"}>
            {todo.title}
          </p>
        )}
      </div>
      <div className="buttons items-center justify-center">
        <button
          className="text-xl mx-2 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-full px-2.5 py-2.5  dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          onClick={() => setIsEditing(!isEditing)}
        >
          <FiEdit />
        </button>
        <button
          className="text-xl mx-2 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-full px-2.5 py-2.5 me-2  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          onClick={handleDelete}
        >
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
