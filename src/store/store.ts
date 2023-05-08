import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todos/todoSlices";
import userReducer from "../features/user/userSlices";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    user: userReducer,
  },
});
