// redux 로직 관리하는 파일
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter-slice';
import authSlice from './auth-slice';

const store = configureStore({
    //reducer: counterSlice.reducer // counterSlice의 모든 리듀서 사용 가능
    reducer: { 
        counter: counterReducer, 
        auth: authSlice.reducer,
    },
});

// 파일 내부에서 구독하고 dispatch하는게 아니라, export해서 react app과 redux store를 연결
export default store;