import React from 'react'
// import Home from './pages/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './ui/Navbar';
import HeroSection from './ui/HeroSection';
import Layout from './ui/Layout';
// import Navbar from './ui/Navbar';






const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout with Outlet
    children: [
      {
        path: "/", 
        index:true,
        element: (
          <div>
            <HeroSection />
          </div>
        ),
      },
      {
        path: "about",
        element: <div className='text-red-700 bg-cyan-200 h-5'> ahmed world!</div>,
      },
    ],
  },
])
export default function App() {
  // comm.qrequests.shift().start(id);
  return (
    <div>
      
<RouterProvider router={router} />
    </div>
  )
}
