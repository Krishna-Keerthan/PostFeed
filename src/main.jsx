import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store  from './store/store.js'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter  , RouterProvider} from 'react-router-dom'
import Protected from './components/AuthLayout.jsx'

import HomePage from '../src/pages/HomePage.jsx'
import AddPostPage  from '../src/pages/AddPostPage.jsx'
import AllPostPage from '../src/pages/AllPostPage.jsx'
import EditPostPage from '../src/pages/EditPostPage.jsx'
import LoginPage from '../src/pages/LoginPage.jsx'
import PostPage from '../src/pages/PostPage.jsx'
import SignUpPage from '../src/pages/SignUpPage.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
        path: '/',
        element: <HomePage/> ,
      },
      {
        path: '/login',
        element: (<Protected authentication={false}>
          <LoginPage/>
        </Protected>)
         ,
      },
      {
        path: '/sign-up',
        element: (<Protected authentication={false}>
          <SignUpPage/>
        </Protected>) ,
      },
      {
        path: '/all-posts',
        element: (<Protected authentication>
                    {" "}
                    <AllPostPage/>
                  </Protected>),
      },
      {
        path: '/add-posts',
        element: (<Protected authentication>
                    {" "}
                    <AddPostPage/>
                  </Protected>),
      },
      {
        path: '/edit-post/:slug',
        element: (<Protected authentication>
                    <EditPostPage/>
                  </Protected>), 
      },
      {
        path: '/post/:slug',
        element: <PostPage/>
         ,
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
</React.StrictMode>
)
