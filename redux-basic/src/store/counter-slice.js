// 카운터 특정 상태와 슬라이스를 생성 및 관리
import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true};

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

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;