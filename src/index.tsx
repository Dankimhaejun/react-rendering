import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Example1 from './components/Example1'
import Example2 from './components/Example2'
import Example3 from './components/Example3'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/example1', element: <Example1 /> },
  { path: '/example2', element: <Example2 /> },
  { path: '/example3', element: <Example3 /> },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
