import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoState {
     todos: string[]
}

const initialState: TodoState = {
     todos: []
}

const TodoSlice = createSlice({
     name: "todo",
     initialState,
     reducers: {
          SetTodo: (state, action) => {
               state.todos.push(action.payload);
          },
          RemoveTodo: (state, action: PayloadAction<number>) => {
               state.todos.splice(action.payload, 1);
          },
          EditTodo: (state, action: PayloadAction<{ index: number; newText: string }>) => {
               const { index, newText } = action.payload;
               if (state.todos[index]) {
                    state.todos[index] = newText;
               }
          }
     }
})

export const { SetTodo, RemoveTodo, EditTodo } = TodoSlice.actions;
export default TodoSlice.reducer;