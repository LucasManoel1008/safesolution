import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro/Cadastro'
import Cadastro2 from './pages/Cadastro/Cadastro2'
import UserPage from './pages/UserPage'
import Termos from './pages/subPages/Termos'
import Politicas from './pages/subPages/Politicas'
import EsqueciSenha from './pages/subPages/EsqueciSenha'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Header from './assets/components/Header'
import Footer from './assets/components/Footer'
import NotFound from './pages/subPages/NotFound'





function App() {
  return (
    <div>
    <Header />
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/Esqueci-Senha' element={<EsqueciSenha/>}/>
      <Route path='/Cadastro' element={<Cadastro/>} />
      <Route path='/Cadastro2' element={<Cadastro2/>} />
      <Route path='/Termos' element={<Termos/>} />
      <Route path='/UserPage' element={<UserPage/>} />
      <Route path='/Politicas-de-Privacidade' element = {<Politicas/>} />

      <Route path='*' element ={<NotFound/>} />
      
 
    </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  )
}


export default App