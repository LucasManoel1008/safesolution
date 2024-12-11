import React, { useEffect, useState } from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Cadastro from '../src/pages/Cadastro'
import Cadastro2 from '../src/assets/components/Cadastro/Cadastro2'
import UserPage from './pages/UserPage'
import Termos from '../src/assets/components/subPages/Termos'
import Politicas from '../src/assets/components/subPages/Politicas'
import Servicos from './pages/Servicos'
import Orcamento from './pages/Orcamento'
import Orcamento2 from './pages/Orcamento2'
import Confirmação from '../src/assets/components/subPages/Confirmação'
import EsqueciSenha from '../src/assets/components/subPages/EsqueciSenha'
import Servico1 from '../src/assets/components/subPages/Servico1'
import Header from './assets/components/Header'
import Footer from './assets/components/Footer'
import NotFound from '../src/assets/components/subPages/NotFound'
import ValidarCodigo from '../src/assets/components/subPages/ValidarCodigo'
import RedefinicaoDeSenha from '../src/assets/components/subPages/RedefinicaoDeSenha'
import CadastroServico from './pages/CadastroServico'
import Solicitação from '../src/assets/components/subPages/Solicitação'
import Pagamento from './pages/Pagamento'







function App() {
  return (
    <div>
   
    <BrowserRouter>
    <Header />
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
      <Route path='/Cadastro-Servico' element={<CadastroServico/>}/>
      <Route path='/Confirmacao' element={<Confirmação/>}/>
      <Route path='/Validar-Codigo' element ={<ValidarCodigo/>}/>
      <Route path='/Redefinicao-Senha' element ={<RedefinicaoDeSenha/>}/>
      <Route path='/Solicitação' element ={<Solicitação/>}/>
      <Route path='/Pagamento' element ={<Pagamento/>}/>
      <Route path='*' element ={<NotFound/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
   
    </div>
  )
}


export default App