import React from 'react'
import Navbar from './components/navbar/Navbar' 
import Home from './components/home/Homepage' 
import Footer from './components/footer/Footer'
import About from './components/about/About'
import {BrowserRouter,Routes,Route,useNavigate} from 'react-router-dom'
import SignUp from './components/signup/SignUp'
import SignIn from './components/signup/Signin'
import Todo from './components/todo/Todo'

//import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/todo" element={<Todo/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
