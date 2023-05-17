import React, { useState } from "react";
import { Todo } from "../../services/todo";
import { ReactComponent as CheckMark } from "./assets/test.svg";
import { ReactComponent as MailBox } from "./assets/mailBox.svg";
import TodoHover from "../../components/todo-hover";
import "./style.scss";

interface Props {
  todo: Todo;
  onDeleteTodo: (id: String) => void;
}

const TodoItem: React.FC<Props> = ({ todo, onDeleteTodo }) => {
  const handleDelete = () => {
    onDeleteTodo(todo.id);
  };
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <div
      className="todo-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHover ? (
        <div className="todo-item__todo-hover">
          <TodoHover />
        </div>
      ) : (
        ""
      )}

      <div className="todo-item__content">
        <div className="todo-item__content-area">
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
        <div className="todo-item__content-footer">
          <div className="todo-item__content-footer-text">收件箱</div>
          <MailBox className="todo-item__content-footer-icon" />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
