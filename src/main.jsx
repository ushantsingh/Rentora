import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router'
import Signup from './components/signup/Signup.jsx'
import Login from './components/login/Login.jsx'
import Home from './home/Home.jsx'
import Houses from './components/houses/Houses.jsx'
import { Trending, Rooms, FarmHouses, PoolHouses, TentHouses, Cabins, Shops, ForestHouses } from './components/categories/Categories.jsx'
import Listing from './components/listing/Listing.jsx'
import UserContext from './context/UserContext.jsx'
import Contact from './components/contactus/Contact.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />} >
    <Route path='' element={<Home />} />
    <Route path='Login' element={<Login />} />
    <Route path='Signup' element={<Signup />} />
    <Route path='Houses' element={<Houses />} />
    <Route path='Trending' element={<Trending />} />
    <Route path='Rooms' element={<Rooms />} />
    <Route path='FarmHouses' element={<FarmHouses />} />
    <Route path='PoolHouses' element={<PoolHouses />} />
    <Route path='TentHouses' element={<TentHouses />} />
    <Route path='Cabins' element={<Cabins />} />
    <Route path='Shops' element={<Shops />} />
    <Route path='ForestHouses' element={<ForestHouses />} />
    <Route path='Listing' element={<Listing />} />
    <Route path='Contact' element={<Contact />} />
  </Route>
))

createRoot(document.getElementById('root')).render(
  <UserContext>
    <RouterProvider router = {router}/>
  </UserContext>
)
