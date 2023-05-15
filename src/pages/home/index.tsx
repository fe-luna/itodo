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
  console.log("###user", user);
  const [todoList, setTodoList] = useState<Todo[]>([]);
  useEffect(() => {
    if (user) {
      const uid = user?.sub!;
      fetchTodoList(uid).then((res) => {
        setTodoList(res);
        console.log("### todoList", res);
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
  return (
    <div className="home">
      <Header />
      <div className="home__content">
        <SideBar isShow={isShow} />
        <DisplayTodo todoList={todoList} onDeleteTodo={handleDeleteTodo} />
      </div>
    </div>
  );
}
export default Home;
