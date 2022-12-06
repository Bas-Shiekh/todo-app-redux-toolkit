import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: ["hi"] };

const todoDataSlice = createSlice({
  name: "todoData",
  initialState,
  reducers: {
    addTodo: (state, actions) => {
      state.data.push(actions.payload);
    },
  },
});

export default todoDataSlice.reducer;
export const todoDataActions = todoDataSlice.actions;
