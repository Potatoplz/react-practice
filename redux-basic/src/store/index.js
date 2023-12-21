// redux 로직 관리하는 파일

//import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit'

export const INCREMENT = 'increment';
const initialCounterState = { counter: 0, showCounter: true};

/** Redux toolkit */
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    }
});

const initialAuthState = {
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        },
    }
});

const store = configureStore({
    //reducer: counterSlice.reducer // counterSlice의 모든 리듀서 사용 가능
    reducer: { 
        counter: counterSlice.reducer, 
        auth: authSlice.reducer,
    },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

// 파일 내부에서 구독하고 dispatch하는게 아니라, export해서 react app과 redux store를 연결
export default store;