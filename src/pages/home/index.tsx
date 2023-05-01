import { useState } from "react";
import {
  createTodo as createTodoMutation,
  deleteTodo as deleteTodoMutation,
} from "../../graphql/mutations";
import { API } from "aws-amplify";
import { listTodos } from "../../graphql/queries";
import Header from "../header";
import "./style.scss";
function Home() {
  const [todos, setTodos] = useState([]);
  async function fetchTodos() {
    const apiData = await API.graphql({ query: listTodos });
    console.log("##apiData", apiData);
    //@ts-ignore
    const todosFromAPI = apiData.data.listTodos.items;
    console.log("##todosFromAPI", todosFromAPI);
    setTodos(todosFromAPI);
  }
  async function createTodo(event: any) {
    event.preventDefault();
    console.log("##event.target", event.target);
    const form = new FormData(event.target);
    const data = {
      name: form.get("name"),
      description: form.get("description"),
    };
    console.log("###data", data);
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

      {/* <View as="form" margin="3rem 0" onSubmit={createTodo}>
                <Flex direction="row" justifyContent="center">
                    <TextField
                        name="name"
                        placeholder="Todo Name"
                        label="Todo Name"
                        labelHidden
                        variation="quiet"
                        required
                    />
                    <TextField
                        name="description"
                        placeholder="Note Description"
                        label="Note Description"
                        labelHidden
                        variation="quiet"
                        required
                    />
                    <Button type="submit" variation="primary">
                        Create Todo
                    </Button>
                </Flex>
            </View> */}
    </div>
  );
}

export default Home;
