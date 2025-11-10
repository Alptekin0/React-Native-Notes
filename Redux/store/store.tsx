import { configureStore } from "@reduxjs/toolkit";
import CountSliceReducer from "../slices/CountSlice"



export const store = configureStore({
     reducer: {
          CountSliceReducer: CountSliceReducer
     }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;