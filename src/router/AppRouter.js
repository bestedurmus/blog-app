import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Details from "../pages/Details"
import NewBlog from "../pages/NewBlog"
import Profile from "../pages/Profile"
import Navbar from "../components/Navbar"

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/details" element={<Details/>}/>
            <Route path="/newblog" element={<NewBlog/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter