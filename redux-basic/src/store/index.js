// redux 로직 관리하는 파일

import { createStore } from 'redux';

// reducer function : inputs(Old state, Dispatched Action)
const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        };
    }

    // action payload 연결하기
    if (action.type === 'increase') {
        return {
            counter: state.counter + action.amount,
        };
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        };
    }

    return state;
};

// create store
const store = createStore(counterReducer);

console.log('index.js:::', store.getState()); // { counter: 1 }

// 파일 내부에서 구독하고 dispatch하는게 아니라, export해서 react app과 redux store를 연결
export default store;