import { createSlice } from '@reduxjs/toolkit';

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

export const authActions = authencationSlice.actions;

export default authencationSlice;