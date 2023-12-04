import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App, { loader as postsLoader } from './routes/App'
import NewPost, { action as newPostAction } from './routes/NewPost'
import PostDetails, { loader as postDetailLoader }  from './routes/PostDetails'
import RootLayout from './routes/RootLayout'
import './index.css'

const router = createBrowserRouter([
  { path: '/', 
    element: <RootLayout />, 
    children: [
        { path: '/', 
          element: <App />,
          //loader: () => {},
          loader: postsLoader,
          children: [
            { 
              path: '/create-post', 
              element: <NewPost />,
              action: newPostAction,
            },
            {
              path: '/:postId', // dynamic path parameter
              element: <PostDetails />,
              loader: postDetailLoader,
            },
          ], 
        },
        { path: '/sample', element: <h2>Hello!</h2> },
      ], 
  },
]);

// index.html에 있는 root div에 접근해서 render()안에 있는 리액트 코드를 렌더
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
