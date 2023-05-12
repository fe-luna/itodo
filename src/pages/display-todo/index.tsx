import React, { useState, useEffect } from "react";
import { Todo, fetchTodoList, deleteTodo } from "../../services/todo";
interface Props {
  todoList: Todo[];
}
const DisplayTodo: React.FC<Props> = ({ todoList }) => {
  return (
    <ul>
      {todoList.map((todo: Todo) => (
        <li>{todo.name}</li>
      ))}
    </ul>
  );
};

export default DisplayTodo;
