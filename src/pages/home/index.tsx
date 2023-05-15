import { useState, useEffect } from "react";
import emitter from "../../utils/emitter";
import { Todo, fetchTodoList, deleteTodo } from "../../services/todo";
import useUserInfo from "../../hooks/useUserInfo";
import Header from "../header";
import DisplayTodo from "../display-todo";
import SideBar from "../side-bar";
import "./style.scss";

function Home() {
  const user = useUserInfo();
  const [todoList, setTodoList] = useState<Todo[]>([]);
  useEffect(() => {
    const uid = user?.sub!;
    fetchTodoList(uid).then((res) => {
      setTodoList(res);
    });
  }, [user]);

  async function handleDeleteTodo(id: String) {
    const uid = user?.sub!;
    deleteTodo(id).then(() => {
      fetchTodoList(uid).then((res) => {
        setTodoList(res);
      });
    });
    console.log("## successful delete");
  }
  const [isShow, setIsShow] = useState(false);
  const handler = () => {
    setIsShow((preState) => !preState);
  };

  useEffect(() => {
    emitter.on("setIsShow", handler);
    return () => emitter.off("setIsShow", handler);
  }, []);
  return (
    <div className="home">
      <Header />
      <div className="home-content">
        <SideBar isShow={isShow} />
        <DisplayTodo todoList={todoList} />
      </div>
    </div>
  );
}
export default Home;
