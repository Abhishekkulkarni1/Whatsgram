// import React from 'react'
// import {BrowserRouter, Routes, Route} from "react-router-dom"
// import Home from './pages/home/Home'
// import SignUp from './pages/signup/SignUp'
// import Login from './pages/login/Login'
// import {Toaster} from "react-hot-toast"
// import { useAuthContext, AuthContextProvider} from './context/AuthContext'


// const routes = (
//   <BrowserRouter>
//     <AuthContextProvider>
//       <Routes>
//         <Route path = "/" exact element = {<Home/>} />
//         <Route path = "/signup" exact element = { <SignUp />} />
//         <Route path = "/login" exact element = {<Login/>} />
//       </Routes>
//     </AuthContextProvider>
//     <Toaster />
//   </BrowserRouter>
// )

// const App = () => {
//   return (
//     // <div className='p-4 h-screen flex items-center justify-center'>
//     //   <Login /> 
//     // </div>
//     <div className='p-4 h-screen flex items-center justify-center'>
//       {routes}
//     </div>
//   )
// }

// export default App


import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
	const { authUser } = useAuthContext();
	return (
		<div className='p-4 h-screen flex items-center justify-center'>
			<Routes>
				<Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
			</Routes>
			<Toaster />
		</div>
	);
}

export default App;