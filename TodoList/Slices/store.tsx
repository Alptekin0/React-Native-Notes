import { configureStore } from "@reduxjs/toolkit";
import { inputReducer } from "./InputSlice";
import TodoReducer  from "./TodoSlice";


export const store = configureStore({
     reducer: {
          inputReducer : inputReducer,
          TodoReducer : TodoReducer
     }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch