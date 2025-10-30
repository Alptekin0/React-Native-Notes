import { createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";

interface input {
     input: string,
}

const initialState: input = {
     input: "",
}



export const InputSlice = createSlice({
     name: "input",
     initialState,
     reducers: {
          SetInput: (state, action) => {
               state.input = action.payload;
          }
     },
     extraReducers: (builder) => { }
})


export const inputReducer = InputSlice.reducer;
export const { SetInput } = InputSlice.actions;