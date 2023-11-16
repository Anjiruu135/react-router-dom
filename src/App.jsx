import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Nav from './components/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Error from './pages/Error';

const Dashboard = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
        
      {
        path: "/login",
        element: <Login />,   
      },
    
      {
        path: "/register",
        element: <Register />,   
      },
    
      {
        path: "*",
        element: <Error />,   
      },
    ],
  },
]);

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='App'>
        <RouterProvider router={router} />
      </div>
  );
}

export default App
