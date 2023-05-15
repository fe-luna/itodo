import React from "react";
import { Todo } from "../../services/todo";
import { ReactComponent as CheckMark } from "./assets/test.svg";
import "./style.scss";

interface Props {
  todo: Todo;
}

const TodoItem: React.FC<Props> = ({ todo }) => {
  return (
    <div className="todoItem">
      <div className="todoItem--name-box">
        <div className="todoItem--name-value">
          <CheckMark className="todoItem-checkmark" />
          <input type="checkbox" className="todoItem-checkbox" />
        </div>
        <div className="todoItem--name-value">{todo.name}</div>
      </div>
      <div className="todoItem--desc">desc: {todo.description}</div>
    </div>
  );
};

export default TodoItem;
