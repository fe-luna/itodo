import { useState, useEffect } from "react";
import { Todo, fetchTodoList, deleteTodo } from "../../services/todo";
import useUserInfo from "../../hooks/useUserInfo";
import CreateTodo from "../create-todo";
import Header from "../header";
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
  return (
    <div className="home">
      <Header />
      <CreateTodo />
      <ul>
        {todoList.map((todo: any) => (
          <div key={todo.id}>
            <li>{todo.createdAt}</li>
            <button onClick={handleDeleteTodo.bind(null, todo.id)}>
              delete
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Home;
