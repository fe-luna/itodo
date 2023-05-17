import Icon from "../../icons";
import "./style.scss";
const TodoHover = () => {
  return (
    <div className="todo-hover">
      <Icon name="edit" className="todo-hover--margin" />
      <Icon name="expiration" className="todo-hover--margin" />
      <Icon name="comment" className="todo-hover--margin" />
      <Icon name="more" className="todo-hover__more" />
    </div>
  );
};

export default TodoHover;
