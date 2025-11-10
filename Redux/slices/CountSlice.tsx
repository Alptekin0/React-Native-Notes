import { createSlice } from "@reduxjs/toolkit"

const initialState = {
     value: 0
}

const CountSlice = createSlice({
     name: 'count',
     initialState,
     reducers: {
          decrement: (state) => {
               state.value = state.value - 1;
          },
          increment: (state) => {
               state.value = state.value + 1;
          },
          multiple: (state) => {
               state.value = state.value * 3;
          },
          refresh: (state) => {
               state.value = 0;
          } 
     },
})

export default CountSlice.reducer;
export const { decrement, increment, refresh, multiple } = CountSlice.actions;