// 기본 Node.js import구문으로 redux import
const redux = require('redux');


// reducer function : inputs(Old state, Dispatched Action)
const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
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
const store = redux.createStore(counterReducer);

console.log('초기 상태:::', store.getState()); // { counter: 1 }

// subscription function : triggered whenever the state changes
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log('최신 상태:::', latestState);
};

// subscribe() : data와 store가 변경될 때마다 subscripton function을 실행해주는 redux method
store.subscribe(counterSubscriber);

// dispatch() : action을 발송하는 메소드
store.dispatch({ type: 'increment'});
store.dispatch({ type: 'decrement'});