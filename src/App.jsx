import React from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from './pages/HomePage/Home'
import Login from './pages/Login/Login'
import RenderCadastroPage from './pages/CadastroPage/RenderCadastroPage'
import UserPage from './pages/UserPage/UserPage'
import Termos from '../src/assets/components/subPages/Termos'
import Politicas from '../src/assets/components/subPages/Politicas'
import Servicos from './pages/Servicos'
import Orcamento from './pages/Orcamento'
import Orcamento2 from './pages/Orcamento2'
import Confirmação from '../src/assets/components/subPages/Confirmação'
import Servico1 from '../src/assets/components/subPages/Servico1'
import Header from './assets/components/Header'
import Footer from './assets/components/Footer'
import NotFound from './assets/components/NotFound'
import CadastroServico from './pages/CadastroServicoPage/CadastroServico'
import Solicitação from '../src/assets/components/subPages/Solicitação'
import Pagamento from './pages/Pagamento'
import EditarServico from './assets/components/CadastroServicos/EditarServico'
import RedefinirSenha from './assets/components/redefinirSenha/RedefinirSenha'
import RedefinicaoDeSenha from './assets/components/subPages/RedefinicaoDeSenha'

function App() {
  return (
    <div>
   
    <BrowserRouter>
    <Header />
    <Routes>
      <Route index element={<Home/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/cadastro' element={<RenderCadastroPage/>} />
      <Route path='/Termos' element={<Termos/>} />
      <Route path='/UserPage' element={<UserPage/>} />
      <Route path='/Servicos' element={<Servicos/>}/>
      <Route path='/Manutencao' element={<Servico1/>}/>
      <Route path='/Orcamento' element={<Orcamento/>}/>
      <Route path='/Politicas-de-Privacidade' element = {<Politicas/>} />
      <Route path='/Orcamento2' element={<Orcamento2/>}/>
      <Route path='/Cadastro-Servico' element={<CadastroServico/>}/>
      <Route path='EditarServico/:id' element={<EditarServico />}/>
      <Route path='/Confirmacao' element={<Confirmação/>}/>
      <Route path='/Solicitação' element ={<Solicitação/>}/>
      <Route path='/Pagamento' element ={<Pagamento/>}/>
      <Route path='/Redefinicao-de-senha' element={<RedefinirSenha/>}/>
      <Route path='/Redefinir-Senha/:token' element={<RedefinicaoDeSenha/>}/>
      <Route path='*' element ={<NotFound/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
   
    </div>
  )
}


export default App