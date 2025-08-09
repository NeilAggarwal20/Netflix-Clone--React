import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {Route, RouterProvider,createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import Player from './pages/Player/Player.jsx'


const router= createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}>
            <Route index element={<Home/>}></Route>
            <Route path='login' element={<Login/>}></Route>
            <Route path='player/:id' element={<Player/>}></Route>
        </Route>
    )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
)
