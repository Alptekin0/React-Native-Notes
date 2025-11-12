import { configureStore } from "@reduxjs/toolkit";
import WordsSliceReducer from "../slice/WordsSlice";


export const store = configureStore({
     reducer: {
          word: WordsSliceReducer,
     }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;