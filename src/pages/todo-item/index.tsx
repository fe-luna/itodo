import React, { useState, useRef } from "react";
import { Todo } from "../../services/todo";
import { ReactComponent as CheckMark } from "./assets/test.svg";
import TodoHover from "../../components/todo-hover";
import TodoType from "../todo-type";
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
    if (!isEdit) {
      setIsHover(true);
    }
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const [isEdit, setIsEdit] = useState(false);
  const handleEdit = () => {
    setIsEdit(true);
    setIsHover(false);
  };

  const formRef = useRef<HTMLFormElement>(null);
  const [nameValue, setNameValue] = useState(todo.name);
  const handleNameChange = (e: any) => {
    setNameValue(e.target.value);
  };
  const [descValue, setDescValue] = useState(todo.description);
  const handleDescChange = (e: any) => {
    setDescValue(e.target.value);
  };

  return (
    <div
      className="todo-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHover ? (
        <div className="todo-item__todo-hover">
          <TodoHover onEdit={handleEdit} />
        </div>
      ) : (
        ""
      )}
      {isEdit ? (
        <div className="todo-item__edit-content">
          <div className="todo-item__edit-content-form">
            <form ref={formRef}>
              <div className="todo-item__edit-content-form-name">
                <input
                  type="text"
                  name="name"
                  placeholder="任务名称"
                  value={nameValue}
                  onChange={handleNameChange}
                  autoFocus={isEdit}
                />
              </div>
              <div className="todo-item__edit-content-form-desc">
                <input
                  type="text"
                  name="description"
                  placeholder="描述"
                  value={descValue}
                  onChange={handleDescChange}
                />
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="todo-item__content">
          <div className="todo-item__content-area">
            <div
              className="todo-item__content-check-mark"
              onClick={handleDelete}
            >
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
            <TodoType type="family" />
            <TodoType type="family-daily" />
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
