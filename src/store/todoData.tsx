import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: ["hi"] };

const todoDataSlice = createSlice({
  name: "todoData",
  initialState,
  reducers: {
    addTodo: (state, actions) => {
      state.data.push(actions.payload);
    },
    deleteTodo: (state, actions) => {
      state.data.splice(actions.payload, 1);
    },
  },
});

export default todoDataSlice.reducer;
export const todoDataActions = todoDataSlice.actions;
