import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './Home/Home'
import Register from './Register/Register'
import Login from './Login/Login'
import List from './List/List'
import Info from './Info/Info'

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/list" element={<List/>}></Route>
            <Route path="/info" element={<Info/>}></Route>
        </Routes>
    );
}


