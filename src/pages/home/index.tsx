import { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { User } from "../../services/user";
import {
  Todo,
  fetchTodoList,
  createTodo,
  deleteTodo,
} from "../../services/todo";
import Header from "../header";
import "./style.scss";

function Home() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        const userInfo: User = {
          username: user.username,
          sub: user.attributes.sub,
          email: user.attributes.email,
        };
        setCurrentUser(userInfo);
        fetchTodoList(userInfo.sub).then((res) => {
          setTodoList(res);
        });
      })
      .catch((error) => console.log(error));
  }, []);

  async function handleDeleteTodo(id: String) {
    const uid = currentUser?.sub!;
    deleteTodo(id).then(() => {
      fetchTodoList(uid).then((res) => {
        setTodoList(res);
      });
    });
    console.log("## successful delete");
  }

  async function handleCreateTodo(event: any) {
    event.preventDefault();
    const uid = currentUser?.sub!;
    const form = new FormData(event.target);
    const data = {
      uid,
      name: form.get("name"),
      description: form.get("description"),
    };
    createTodo(data).then(() => {
      event.target.reset();
      fetchTodoList(uid).then((res) => {
        setTodoList(res);
      });
    });
    console.log("##create note");
  }

  return (
    <div className="home">
      <Header />
      <form onSubmit={handleCreateTodo}>
        <label>Todo Name</label>
        <input type="text" name="name" placeholder="Todo Name" />
        <label>Note Description</label>
        <input type="text" name="description" placeholder="Note Description" />
        <button type="submit">Create Todo</button>
      </form>
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
