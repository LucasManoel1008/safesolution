import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Servicos from './pages/Servicos'
import Cadastro from './pages/Cadastro'
import Politicas from './pages/subPages/politicas'
import EsqueciSenha from './pages/subPages/EsqueciSenha'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Header from './assets/components/Header'
import Footer from './assets/components/Footer'




function App() {
  return (
    <div>
    <Header />
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/Esqueci-Senha' element={<EsqueciSenha/>}/>
      <Route path='/Servicos' element={<Servicos/>} />
      <Route path='/Cadastro' element={<Cadastro/>}/>
      <Route path='/Politicas-de-Privacidade' element = {<Politicas/>} />
 
    </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  )
}


export default App