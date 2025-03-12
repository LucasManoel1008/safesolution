import React, { useContext } from 'react'
import {BrowserRouter , Routes, Route, useLocation} from 'react-router-dom'
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
import MeusServicos from './pages/CadastroServicoPage/MeusServicos'
import Solicitação from '../src/assets/components/subPages/Solicitação'
import Pagamento from './pages/Pagamento'
import EditarServico from './assets/components/CadastroServicos/EditarServico'
import RedefinirSenha from './assets/components/redefinirSenha/RedefinirSenha'
import RedefinicaoDeSenha from './assets/components/subPages/RedefinicaoDeSenha'
import BloquarUsuarioDeslogado from '../Filters/BloquarUsuarioDeslogado'
import BloquarUsuarioLogado from '../Filters/BloquearUsuarioLogado'
const Autenticacao = React.createContext();

function App() {
 
  const [isLogged, setIsLogged] = React.useState(false);
  const initialized = React.useRef(false); // Para garantir que a lógica só rode uma vez
  React.useEffect(() => {
    if (!initialized.current) {
    
    }
  }, []);
  
  return (
    <div>
      {console.log(isLogged)}
   <Autenticacao.Provider value={{isLogged, setIsLogged}}>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route index element={<Home/>} />
      <Route element = {<BloquarUsuarioLogado logged={isLogged} />}>
        <Route path='/Login' element={<Login/>} />
        <Route path='/cadastro' element={<RenderCadastroPage/>} />
      </Route>
      <Route path='/Confirmacao' element={<Confirmação/>}/>
      <Route path='/Solicitação' element ={<Solicitação/>}/>
      <Route path='/Termos' element={<Termos/>} />
      <Route path='/Servicos' element={<Servicos/>}/>
      <Route path='/Manutencao' element={<Servico1/>}/>
      <Route path='/Politicas-de-Privacidade' element = {<Politicas/>} />
      <Route path='/Orcamento2' element={<Orcamento2/>}/>
      <Route path='*' element ={<NotFound/>} />
      
      <Route path='/Pagamento' element ={<Pagamento/>}/>
      <Route element={<BloquarUsuarioDeslogado logged={isLogged} />}>
        <Route path='/UserPage' element={<UserPage/>} />
        <Route path='/Meus-Servicos' element={<MeusServicos/>}/>
        <Route path='EditarServico/:id' element={<EditarServico />}/>
        <Route path='/Redefinicao-de-senha' element={<RedefinirSenha/>}/>
        <Route path='/Redefinir-Senha/:token' element={<RedefinicaoDeSenha/>}/>
        <Route path='/Orcamento' element={<Orcamento/>}/>
      </Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </Autenticacao.Provider>
   
    </div>
  )
}

export const usuarioLogado = () => {
  const context = useContext(Autenticacao);
  return context;
}


export default App