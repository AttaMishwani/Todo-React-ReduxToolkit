import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  return (
    <div className="todoList min-h-10 w-full my-8">
      {todos.length <= 0 ? (
        <h2 className="text-center font-bold text-3xl">No tasks</h2>
      ) : (
        todos.map((todo) => <TodoItem todo={todo} key={todo.id} />)
      )}
    </div>
  );
}

export default TodoList;
