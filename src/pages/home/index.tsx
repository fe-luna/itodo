import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTodo as createTodoMutation } from "../../graphql/mutations";
import { API } from "aws-amplify";
import { listTodos } from "../../graphql/queries";
import { useSelector } from "react-redux";
import Header from "../header";
import "./style.scss";
function Home() {
  const navigate = useNavigate();
  const userName = useSelector((state: any) => state.user?.username);
  const [todos, setTodos] = useState([]);
  async function fetchTodos() {
    const apiData = await API.graphql({ query: listTodos });
    //@ts-ignore
    const todosFromAPI = apiData.data.listTodos.items;
    setTodos(todosFromAPI);
  }
  async function createTodo(event: any) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      name: form.get("name"),
      description: form.get("description"),
    };
    await API.graphql({
      query: createTodoMutation,
      variables: { input: data },
    });
    fetchTodos();
    event.target.reset();
    console.log("##create note");
  }

  return (
    <div className="home">
      <Header />
      <form onSubmit={createTodo}>
        <label>Todo Name</label>
        <input type="text" name="name" placeholder="Todo Name" />
        <label>Note Description</label>
        <input type="text" name="description" placeholder="Note Description" />
        <button type="submit">Create Todo</button>
      </form>
    </div>
  );
}

export default Home;
