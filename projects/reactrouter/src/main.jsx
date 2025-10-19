import {StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router";
import './index.css'
import App from './App.jsx'
import Route from './route.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Route />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router }/>
  </StrictMode>,
)
