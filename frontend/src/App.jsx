import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/home/Home'
import SignUp from './pages/signup/SignUp'
import Login from './pages/login/Login'


const routes = (
  <BrowserRouter>
    <Routes>
      <Route path = "/home" exact element = {<Home/>} />
      <Route path = "/signup" exact element = {<SignUp/>} />
      <Route path = "/" exact element = {<Login/>} />
    </Routes>
  </BrowserRouter>
)

const App = () => {
  return (
    <div>
      {routes}
    </div>
  )
}

export default App