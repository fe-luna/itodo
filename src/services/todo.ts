import {
  createTodo as createTodoMutation,
  deleteTodo as deleteTodoMutation,
  updateTodo as updateTodoMutation,
} from "../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import { listTodos } from "../graphql/queries";

export interface Todo {
  id: any;
  uid: string;
  type: string;
  name: string;
  description: string;
}

export async function fetchTodoList(uid: string): Promise<Todo[]> {
  const filter = {
    uid: {
      eq: uid,
    },
  };
  const query = graphqlOperation(listTodos, { filter });
  const apiData = await API.graphql(query);
  //@ts-ignore
  const todoFromAPI = apiData.data.listTodos.items;
  return todoFromAPI;
}

export async function createTodo(data: any) {
  await API.graphql({
    query: createTodoMutation,
    variables: { input: data },
  });
}

export async function deleteTodo(id: String) {
  const deletedTodo = await API.graphql({
    query: deleteTodoMutation,
    variables: {
      input: {
        id,
      },
    },
  });
  console.log("## successful delete id is", id);
}

export async function updateTodo(data: any) {
  const result = await API.graphql(
    graphqlOperation(updateTodoMutation, { input: data })
  );
}
