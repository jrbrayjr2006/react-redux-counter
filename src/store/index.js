// const redux = require('redux');
// import * as redux from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

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
})

// Reducer function
// const counterReducer = ( state = initialState, action ) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return { ...state, counter: state.counter + 1, showCounter: state.showCounter };
//         case 'INCREASE':
//             return { ...state, counter: state.counter + action.amount, showCounter: state.showCounter };
//         case 'DECREMENT':
//             return { ...state, counter: state.counter - 1, showCounter: state.showCounter };
//         case 'TOGGLE':
//             return { ...state, showCounter: !state.showCounter };
//         case 'RESET':
//             return { ...state, counter: 0, showCounter: true };
//         default:
//             return state;
//     }
// };

const initialAuthState = { isAuthenticated: false };

const authencationSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login: (state) => {
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.isAuthenticated = false;
        }
    }
});

const store = configureStore({
    reducer: { counter: counterSlice.reducer, authentication: authencationSlice.reducer }
});

export default store;
export const counterActions = counterSlice.actions;
export const authActions = authencationSlice.actions;