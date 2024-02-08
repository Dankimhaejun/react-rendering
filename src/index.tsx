import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Example1 from './components/Example1'
import Example2 from './components/Example2'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/example1', element: <Example1 /> },
  { path: '/example2', element: <Example2 /> },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
