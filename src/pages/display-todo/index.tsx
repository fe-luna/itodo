import React from "react";
import { Todo } from "../../services/todo";
import TodoItem from "../todo-item";
import "./style.scss";
interface Props {
  todoList: Todo[];
  onDeleteTodo: (id: String) => void;
}
const DisplayTodo: React.FC<Props> = ({ todoList, onDeleteTodo }) => {
  const currentDate: Date = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();
  return (
    <div className="display--todo">
      <div className="display--todo-date">
        <h1>今天</h1>
        <small>{`- ${currentMonth}月${currentDay}日`}</small>
      </div>
      {todoList.map((todo: Todo) => (
        <TodoItem todo={todo} key={todo.id} onDeleteTodo={onDeleteTodo} />
      ))}
    </div>
  );
};

export default DisplayTodo;
