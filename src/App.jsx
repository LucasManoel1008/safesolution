import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro/Cadastro'
import Cadastro2 from './pages/Cadastro/Cadastro2'
import UserPage from './pages/UserPage'
import Termos from './pages/subPages/Termos'
import Politicas from './pages/subPages/Politicas'
import Servicos from './pages/Servicos'
import Orcamento from './pages/Orcamento'
import Orcamento2 from './pages/Orcamento2'
import Confirmação from './pages/subPages/Confirmação'
import EsqueciSenha from './pages/subPages/EsqueciSenha'
import Servico1 from './pages/subPages/Servico1'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Header from './assets/components/Header'
import Footer from './assets/components/Footer'
import NotFound from './pages/subPages/NotFound'
import ValidarCodigo from './pages/subPages/ValidarCodigo'
import RedefinicaoDeSenha from './pages/subPages/RedefinicaoDeSenha'






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
      <Route path='/Servicos' element={<Servicos/>}/>
      <Route path='/Manutencao' element={<Servico1/>}/>
      <Route path='/Orcamento' element={<Orcamento/>}/>
      <Route path='/Politicas-de-Privacidade' element = {<Politicas/>} />
      <Route path='/Orcamento2' element={<Orcamento2/>}/>
      <Route path='/Confirmacao' element={<Confirmação/>}/>
      <Route path='/Validar-Codigo' element ={<ValidarCodigo/>}/>
      <Route path='/Redefinição-Senha' element ={<RedefinicaoDeSenha/>}/>

      <Route path='*' element ={<NotFound/>} />
      
 
    </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  )
}


export default App