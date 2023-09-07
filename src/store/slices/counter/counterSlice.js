import {createSlice} from "@reduxjs/toolkit";


export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 10,
  },
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    incrementByStep: (state, step) => {
      state.counter += step.payload;
    },
  }
});

export const {increment, decrement, incrementByStep} = counterSlice.actions;