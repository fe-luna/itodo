import React from "react";
import Icon from "../../icons";
import "./style.scss";

interface Props {
  onEdit?: () => void;
}
const TodoHover: React.FC<Props> = ({ onEdit }) => {
  return (
    <div className="todo-hover">
      <Icon name="edit" className="todo-hover--margin" onClick={onEdit} />
      <Icon name="expiration" className="todo-hover--margin" />
      <Icon name="comment" className="todo-hover--margin" />
      <Icon name="more" className="todo-hover__more" />
    </div>
  );
};

export default TodoHover;
