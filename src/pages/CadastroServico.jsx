import React, {useState} from 'react'
import '../assets/css/cadServico.css'
import ImagensUser from '../shared/ImagensUser'
import EmAndamento from '../assets/components/CadastroServicos/EmAndamento';
import Servicos from '../assets/components/CadastroServicos/Servicos';
import Pedidos from '../assets/components/CadastroServicos/Pedidos';

function CadastroServico() {
    const [section, setSection] = useState('profile');
   
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
        <nav className="menuLateral p-4 border-right">
            <div className="profile">
                <img className='mr-2' src={ImagensUser.paladins} width={60} alt="Logo empresa" />
                <span>IntechLauncher</span>
            </div>
            <ul className='tab-links'>
               <button className='btn' onClick={() => setSection('servicos')}><i className="fa-solid fa-scroll mr-2"></i>Serviços</button>
                <button className='btn' onClick={() => setSection('statistics')}><i className="fa-solid fa-chart-simple mr-2"></i>Em andamento</button>
                <button className='btn' onClick={() => setSection('pedidos')}>¹<i className="fa-solid fa-bell mr-2"></i>Pedidos</button>
            </ul>
            <div className="form-check form-switch provedor">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"   />
              <label className="form-check-label" htmlFor="flexSwitchCheckChecked" >Sou Provedor</label>
            </div>
        </nav>
        <div className='conteudoPrincipal'>
            {renderSection()}
         </div>
    </div>
  )
}

export default CadastroServico