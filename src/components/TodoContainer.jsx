import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoContainer() {
  return (
    <div className="bg-slate-100 border-2 border-blue-600 w-7/12  mx-auto mt-10 rounded-lg p-3">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default TodoContainer;
