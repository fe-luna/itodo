import Icon from "../../icons";
import "./style.scss";
const TodoHover = () => {
  return (
    <div className="todo-hover">
      <Icon name="edit" />
      <Icon name="expiration" />
      <Icon name="comment" />
      <Icon name="more" className="todo-hover__more" />
    </div>
  );
};

export default TodoHover;
