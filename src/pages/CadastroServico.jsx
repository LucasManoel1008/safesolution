import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../assets/css/cadServico.css'
import ImagensUser from '../shared/ImagensUser'
import EmAndamento from './CadastroServicos/EmAndamento';
import Servicos from './CadastroServicos/Servicos';
import Pedidos from './CadastroServicos/Pedidos';

function CadastroServico() {
    const [section, setSection] = useState('profile');
    const [empresa, setEmpresa] = useState('')
    useEffect(() => {
      fetchEmpresaByCnpj(); // Chama a função para buscar a empresa quando o componente monta
    }, []);
  
    const fetchEmpresaByCnpj = async () => {
      const empresaString = sessionStorage.getItem('empresa');
      if (empresaString) {
        const dadosEmpresa = JSON.parse(empresaString); 
       
        const cnpj = dadosEmpresa.cnpj.replace(/[./-]/g, '');;
      
        if (cnpj){
          try {
            const response = await axios.get(`http://localhost:8080/empresa/${cnpj}`);
           
            setEmpresa(response.data); 
          } catch (error) {
            window.alert("Erro ao buscar empresa")
          }
        }
        else if(dadosEmpresa){
          try {
            const response = await axios.get(`http://localhost:8080/empresa/${dadosEmpresa}`);
           
            setEmpresa(response.data); 
          } catch (error) {
            window.alert("Erro ao buscar empresa")
          }
        }
        
      } 
    };
   
  // Irá mostrar de acordo com o valor definido
  const renderSection = () => {
    switch (section) {
      case 'servicos':
        return <Servicos />
      case 'statistics':
        return <EmAndamento />;
      case 'pedidos':
        return <Pedidos />;
      default:
        return <Servicos />;
    }
    
  };
  return (
    
    <div className='cadServico'>
        <nav className="menuLateral p-4 ">
            <Link to="/UserPage" className="profile">
                <img className='mr-2' src={ImagensUser.paladins} width={60} alt="Logo empresa" />
                <span>{empresa.nome_empresa}</span>
            </Link>
            <ul className='tab-links'>
               <button className='btn' onClick={() => setSection('servicos')}><i className="fa-solid fa-scroll mr-2"></i>Serviços</button>
                <button className='btn' onClick={() => setSection('statistics')}><i className="fa-solid fa-chart-simple mr-2"></i>Em andamento</button>
                <button className='btn' onClick={() => setSection('pedidos')}>¹<i className="fa-solid fa-bell mr-2"></i>Pedidos</button>
            </ul>
           
        </nav>
        <div className='conteudoPrincipal border-left'>
            {renderSection()}
         </div>
    </div>
  )
}

export default CadastroServico