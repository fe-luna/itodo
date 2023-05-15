import React, { useState, useEffect } from "react";
import { Todo, fetchTodoList, deleteTodo } from "../../services/todo";
import TodoItem from "../todo-item";
import "./style.scss";
interface Props {
  todoList: Todo[];
}
const DisplayTodo: React.FC<Props> = ({ todoList }) => {
  return (
    <div className="display-todo">
      {todoList.map((todo: Todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default DisplayTodo;
