import React from 'react'
// import Home from './pages/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './ui/Navbar';
import HeroSection from './ui/HeroSection';
// import Navbar from './ui/Navbar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className=''><Navbar/>
    
    
    <HeroSection/>
    <div className=' h-[400px]'>h</div>
    </div>,
  },
  {
    path: "about",
    element: <div className='text-red-300'>ahmed world!</div>,
  },
]);
export default function App() {
  // comm.qrequests.shift().start(id);
  return (
    <div>
      
<RouterProvider router={router} />
    </div>
  )
}
