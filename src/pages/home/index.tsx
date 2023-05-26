import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import emitter from "../../utils/emitter";
import { Todo, fetchTodoList, deleteTodo } from "../../services/todo";
import useUserInfo from "../../hooks/useUserInfo";
import Header from "../header";
import DisplayTodo from "../display-todo";
import DisplayTodoGroup from "../display-todo-group";
import SideBar from "../side-bar";
import { Project, fetchProjectList } from "../../services/project";
import "./style.scss";

function Home() {
  const user = useUserInfo();
  const { id } = useParams();

  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [projectList, setProjectList] = useState<Project[]>();
  useEffect(() => {
    if (user) {
      const uid = user?.sub!;
      fetchTodoList(uid).then((res) => {
        setTodoList(res);
      });
      fetchProjectList(uid).then((res) => {
        setProjectList(res);
      });
    }
  }, [user]);

  const [isShow, setIsShow] = useState(false);
  const handler = () => {
    setIsShow((preState) => !preState);
  };
  useEffect(() => {
    emitter.on("setIsShow", handler);
    return () => emitter.off("setIsShow", handler);
  }, []);

  const handleDeleteTodo = (id: String) => {
    deleteTodo(id).then(() => {
      const uid = user?.sub!;
      fetchTodoList(uid).then((res) => {
        setTodoList(res);
      });
    });
  };

  const currProject = projectList?.filter(
    (project: Project) => project.id === id
  )[0];

  const showList = todoList.filter(
    (todo: Todo) => todo.type === currProject?.proName
  );

  return (
    <div className="home">
      <Header />
      <div className="home__content">
        <SideBar isShow={isShow} />
        {id ? (
          <DisplayTodoGroup project={currProject} todoList={showList} />
        ) : (
          <DisplayTodo todoList={todoList} onDeleteTodo={handleDeleteTodo} />
        )}
      </div>
    </div>
  );
}
export default Home;
