// const redux = require('redux');
// import * as redux from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter-slice';
import authencationSlice from './auth-slice';


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



const store = configureStore({
    reducer: { counter: counterSlice.reducer, authentication: authencationSlice.reducer }
});

export default store;