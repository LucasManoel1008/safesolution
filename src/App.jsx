import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Header from './assets/components/Header'
import Footer from './assets/components/Footer'


function App() {
  return (
    <div>
    <Header />
    <BrowserRouter>
    <Routes>
      <Route index path='/Home' element={<Home/>} />
      <Route path='/Login' element={<Login/>} />
    </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  )
}


export default App