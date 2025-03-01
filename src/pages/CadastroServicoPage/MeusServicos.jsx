import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import './cadServico.css'
import ImagensUser from '../../shared/ImagensUser'
import EmAndamento from '../../assets/components/CadastroServicos/EmAndamento';
import ServicosExibition from '../../assets/components/CadastroServicos/ServicoExibition';
import Pedidos from '../../assets/components/CadastroServicos/Pedidos';
import { fetchEmpresaByCnpj } from '../../Services/CadastroServicoFunctions/CadastroServicoFunctions';

function MeusServicos() {
    const [section, setSection] = useState('profile');
    const [empresa, setEmpresa] = useState('')

    useEffect(() => {
      const fetchData = async () => {
        fetchEmpresaByCnpj(setEmpresa)
      }

      fetchData();
    }, []);
  
  const renderSection = () => {
    switch (section) {
      case 'servicos':
        return <ServicosExibition />
      case 'statistics':
        return <EmAndamento />;
      case 'pedidos':
        return <Pedidos />;
      default:
        return <ServicosExibition />;
    }
    
  };
  const MenuLateral = React.memo(({ nomeEmpresa }) => {
    return (
      <nav className="menuLateral p-4 ">
        <Link to="/UserPage" className="profile">
          <img className="mr-2" src={ImagensUser.paladins} width={60} alt="Logo empresa" />
          <span>{nomeEmpresa}</span>
        </Link>
        <ul className="tab-links">
          <button className="btn" onClick={() => setSection('servicos')}>
            <i className="fa-solid fa-scroll mr-2"></i>Serviços
          </button>
          <button className="btn" onClick={() => setSection('statistics')}>
            <i className="fa-solid fa-chart-simple mr-2"></i>Em andamento
          </button>
          <button className="btn" onClick={() => setSection('pedidos')}>
            <i className="fa-solid fa-bell mr-2"></i>Pedidos
          </button>
        </ul>
      </nav>
    );
  });
  
  return (
    <div className='cadServico'>
      <MenuLateral nomeEmpresa={empresa.nome_empresa} />
        <div className='conteudoPrincipal border-left'>
            {renderSection()}
         </div>
    </div>
  )
}

export default MeusServicos