import React from "react";
import { Todo } from "../../services/todo";
import { ReactComponent as CheckMark } from "./assets/test.svg";
import { ReactComponent as MailBox } from "./assets/mailBox.svg";
import "./style.scss";

interface Props {
  todo: Todo;
  onDeleteTodo: (id: String) => void;
}

const TodoItem: React.FC<Props> = ({ todo, onDeleteTodo }) => {
  const handleDelete = () => {
    onDeleteTodo(todo.id);
  };
  return (
    <div className="todo-item">
      <div className="todo-item__content">
        <div className="todo-item__content-check-mark" onClick={handleDelete}>
          <CheckMark className="todo-item__content-check-mark-icon" />
          <input
            type="checkbox"
            className="todo-item__content-check-mark-input"
          />
        </div>
        <div className="todo-item__content-todo">
          <div className="todo-item__content-todo-name">{todo.name}</div>
          <div className="todo-item__content-todo-desc">
            desc: {todo.description}
          </div>
        </div>
      </div>
      <div className="todo-item__footer">
        <div className="todo-item__footer-text">收件箱</div>
        <MailBox className="todo-item__footer-icon" />
      </div>
    </div>
  );
};

export default TodoItem;
