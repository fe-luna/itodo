import React from "react";
import { Project } from "../../services/project";
import { Todo } from "../../services/todo";
import "./style.scss";

interface Props {
  project?: Project;
  todoList: Todo[];
}

const DisplayTodoGroup: React.FC<Props> = ({ project, todoList }) => {
  return (
    <div className="display-todo-group">
      <div className="display-todo-group__header">{project?.proName}</div>
      {todoList.map((todo: Todo) => (
        <div>{todo.name}</div>
      ))}
    </div>
  );
};
export default DisplayTodoGroup;
