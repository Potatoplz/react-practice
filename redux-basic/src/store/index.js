// redux 로직 관리하는 파일

import { createStore } from 'redux';

const initialState = { counter: 0, showCounter: true};

// reducer function : inputs(Old state, Dispatched Action)
const counterReducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        };
    }

    // action payload 연결하기
    if (action.type === 'increase') {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        };
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        };
    }

    if (action.type === 'toggle') {
        return {
            showCounter: !state.showCounter,
            counter: state.counter
        };
    }

    return state;
};

// create store
const store = createStore(counterReducer);

console.log('index.js:::', store.getState()); // { counter: 1 }

// 파일 내부에서 구독하고 dispatch하는게 아니라, export해서 react app과 redux store를 연결
export default store;