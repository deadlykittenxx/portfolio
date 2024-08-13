import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import F12Main from './F12Main';

import Group2 from './pages/Group2';
import Iphone8Plus1 from './pages/Iphone8Plus1';
import MacBookAir1 from './pages/MacBookAir1';
import MacBookAir2 from './pages/MacBookAir2';
import MacBookAir3 from './pages/MacBookAir3';
import MenuBarMenuApple from './pages/MenuBarMenuApple';
import MenuBarMenuApple1 from './pages/MenuBarMenuApple1';
import White from './pages/White';


const router = createBrowserRouter([
  { path: '/', element: <F12Main /> },
{ path: '/Group2', element: <Group2 /> },
{ path: '/Iphone8Plus1', element: <Iphone8Plus1 /> },
{ path: '/MacBookAir1', element: <MacBookAir1 /> },
{ path: '/MacBookAir2', element: <MacBookAir2 /> },
{ path: '/MacBookAir3', element: <MacBookAir3 /> },
{ path: '/MenuBarMenuApple', element: <MenuBarMenuApple /> },
{ path: '/MenuBarMenuApple1', element: <MenuBarMenuApple1 /> },
{ path: '/White', element: <White /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}