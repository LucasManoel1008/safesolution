import React, {useState} from 'react'
import '../assets/css/cadServico.css'
import ImagensUser from '../shared/ImagensUser'
import { Link } from 'react-router-dom';

const Servicos = () => (
    <div className='servicos'>
        <div className="serviceBox p-4">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Data de Adição</th>
                <th scope="col">Pedidos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1982</th>
                <td>Montagem de máquinas</td>
                <td>25/06/2024</td>
                <td>27</td>
              </tr>
              <tr>
                <th scope="row">2135</th>
                <td>Instalação de Redes</td>
                <td>08/09/2024</td>
                <td>12</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Link className='text-center' to="/Cadastro-Servico-Novo"><button className='btn btn-primary align-center adicionar'>Adicionar Serviço</button></Link>
    </div>
);
const Statistics = () => (
    <div>
        <div className='userSettings mt-4'>
    <h4 className='text-center'><strong>Em Breve</strong></h4>
    <h5 className='text-center'>Esta seção ainda não está pronto</h5>
    <h5 className='text-center'>Volte novamente mais tarde</h5>
    <strong className='iconClosed'><i className="fa-solid fa-square-xmark"></i></strong>
  </div>
    </div>
);
const Pedidos = () => (
    <div>
        <div className='servicos'>
        <div className="serviceBox p-4">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Serviço</th>
                <th scope="col">Data</th>
                <th scope="col">Prazo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">GourmetVibe</th>
                <td>Instalação de Redes</td>
                <td>05/09/2024</td>
                <td>25/09/2024</td>
              </tr>

            </tbody>
          </table>
        </div>
        </div>
    </div>
);



function CadastroServico() {
    const [section, setSection] = useState('profile');

  // Irá mostrar de acordo com o valor definido
  const renderSection = () => {
    switch (section) {
      case 'servicos':
        return <Servicos />;
      case 'statistics':
        return <Statistics />;
      case 'pedidos':
        return <Pedidos />;
      default:
        return <Servicos />;
    }
    
  };
  return (
    
    <div className='cadServico'>
        <nav className="menuLateral p-4">
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
              <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Sou Provedor</label>
            </div>
        </nav>
        <div className='conteudoPrincipal'>
            {renderSection()}
         </div>
    </div>
  )
}

export default CadastroServico