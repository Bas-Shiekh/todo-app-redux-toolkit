import { configureStore } from "@reduxjs/toolkit";
import userAuth from "./userAuth";
import userData from "./userData";

const store = configureStore({
  reducer: {
    userAuth,
    userData,
  },
});

export default store;
