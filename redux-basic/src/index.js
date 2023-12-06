// 루트 컴포넌트를 렌더링하는 컴포넌트 트리 최상단

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // 앱 전체가 redux에 접근가능

import './index.css';
import App from './App';
import store from './store/index'; // 우리가 설정한 리덕스 저장소

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
    <App />
</Provider>
);
