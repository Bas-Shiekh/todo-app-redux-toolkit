import { configureStore } from "@reduxjs/toolkit";
import userAuth from "./userAuth";
import userData from "./userData";
import todoData from "./todoData";

const store = configureStore({
  reducer: {
    userAuth,
    userData,
    todoData,
  },
});

export default store;
