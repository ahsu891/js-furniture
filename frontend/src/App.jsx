import React from 'react'
import Home from './pages/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './ui/Navbar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);
export default function App() {
  
  return (
    <div>
      <Navbar/>
<RouterProvider router={router} />
    </div>
  )
}
