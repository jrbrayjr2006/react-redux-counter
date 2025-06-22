import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = { counter: 0, showCounter: true };

// Create a slice of the store using createSlice from Redux Toolkit
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.counter++;
        },
        decrement: (state) => {
            state.counter--;
        },
        increase: (state, action) => {
            state.counter += action.payload;
        },
        toggle: (state) => {
            state.showCounter = !state.showCounter;
        },
        reset: (state) => {
            state.counter = 0;
            state.showCounter = true;
        },
    }
});

export const counterActions = counterSlice.actions;

export default counterSlice;