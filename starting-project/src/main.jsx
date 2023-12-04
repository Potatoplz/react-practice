import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App'
import './index.css'
import NewPost from './components/NewPost'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/sample', element: <h2>Hello!</h2> },
  { path: '/create-post', element: <NewPost /> },
]);

// index.html에 있는 root div에 접근해서 render()안에 있는 리액트 코드를 렌더
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
