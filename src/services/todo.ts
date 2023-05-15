import {
  createTodo as createTodoMutation,
  deleteTodo as deleteTodoMutation,
  updateTodo as updateTodoMutation,
} from "../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import { listTodos } from "../graphql/queries";

export interface Todo {
  id: any;
  uid: String;
  name: String;
  description: String;
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
  console.log("## successful delete");
}

export async function updateTodo(data: any) {
  const result = await API.graphql(
    graphqlOperation(updateTodoMutation, { input: data })
  );
}
