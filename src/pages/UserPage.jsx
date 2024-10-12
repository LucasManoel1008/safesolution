import React, { useState, useEffect } from 'react'; // Importando useEffect
import axios from 'axios'; // Importando axios
import '../assets/css/userPage.css';
import ImagensUser from '../shared/ImagensUser';

// Componentes para diferentes seções
const UserProfile = ({ empresa }) => (
  <div className='userProfile p-4 mb-4'>
    <h2>Configurações da Conta</h2>
    <p>Gerencie detalhes de sua conta.</p>
    <div className="logoEmpresaContent">
      <img src={ImagensUser.paladins} alt="Logo empresa" className='logoEmpresa' />
      <img src={ImagensUser.edit} alt="Edit" width={20} className='editIcon' />
    </div>
    <div className="userItens1 mt-3">
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Nome de exibição:</label>
        <input
          type="text"
          className="form-control d-inline nomeExibicao"
          id="exampleFormControlInput1"
          value={empresa ? empresa.nome_empresa : ''}
          readOnly
        />
        <span><i className="fa-solid fa-pen-to-square"></i></span>
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Email cadastrado:</label>
        <input
          type="email"
          className="form-control d-inline nomeExibicao"
          id="exampleFormControlInput1"
          value={empresa && empresa.usuario ? empresa.usuario.email_usuario : ''} // Email fixo, pode ser alterado para ser dinâmico
          readOnly
        />
        <span><i className="fa-solid fa-pen-to-square"></i></span>
      </div>
    </div>
    <div className="userItens2 form-group">
    <label htmlFor="exampleFormControlInput1">Descrição:</label>
    <input
      type="text"
      id='exampleFormControlInput1'
      className="form-control d-inline"
      style={{ overflowY: 'auto' }}
      value={empresa && empresa.descricao_empresa ? empresa.descricao_empresa : ''}
      readOnly
    />
      
    </div>
    <div className="userItens1 mt-4">
      <div className="form-group">
        <label htmlFor="telefone">Telefone:</label>
        <input type="text" className="form-control d-inline" id="telefone" value={"(00) 00000-0000"} readOnly />
        <span><i className="fa-solid fa-pen-to-square"></i></span>
      </div>
    </div>
    <div className="endereco mt-4">
      <div className="cepInputs mt-4">
        <div className="itens1 mb-4">
          <div>
            <input
              type="text"
              id="cep"
              readOnly
              className="form-control"
              placeholder={empresa && empresa.cep ? empresa.cep : ''}
            />
          </div>
          <div>
            <input
              type="text"
              id="rua"
              readOnly
              maxLength={5}
              className="form-control"
              placeholder={empresa && empresa.rua ? empresa.rua : ''}
            />
          </div>
        </div>
        <div className="itens2 mb-4">
          <div>
            <input
              type="text"
              id="bairro"
              readOnly
              className="form-control"
              placeholder={empresa && empresa.bairro ? empresa.bairro : ''}
            />
          </div>
          <div>
            <input
              type="text"
              id="numero"
              readOnly
              className="form-control"
              placeholder={empresa && empresa.numero ? empresa.numero : ''}
            />
          </div>
        </div>
        <div className="mb-4 cidade">
          <input
            type="text"
            id="cidade"
            readOnly
            className="form-control"
            placeholder={empresa && empresa.cidade ? empresa.cidade : ''}
          />
        </div>
        <div>
          <button type="button" className="btn btn-primary editar">Editar</button>
        </div>
      </div>
    </div>
    <div className="dadosPessoais mt-4">
      <div className="inputsPessoais"></div>
      <p>Dados pessoais</p>
      <div className="nome-ultimo">
        <div className="userItens1 mt-4">
          <div className="form-group">
            <label htmlFor="primeiroNome">Nome:</label>
            <input type="text" className="form-control d-inline nomeExibicao" id="primeiroNome" value={empresa && empresa.usuario ? empresa.usuario.nome_usuario : ''} readOnly />
            <span><i className="fa-solid fa-pen-to-square"></i></span>
          </div>

          </div>
        </div>
      </div>
    </div>

);

const UserSettings = () => (
  <div className='userSettings mt-4'>
    <h4 className='text-center'><strong>Em Breve</strong></h4>
    <h5 className='text-center'>Esta seção ainda não está pronta</h5>
    <h5 className='text-center'>Volte novamente mais tarde</h5>
    <strong className='iconClosed'><i className="fa-solid fa-square-xmark"></i></strong>
  </div>
);

const UserOrders = () => (
  <div className='userSettings mt-4'>
    <h4 className='text-center'><strong>Em Breve</strong></h4>
    <h5 className='text-center'>Esta seção ainda não está pronta</h5>
    <h5 className='text-center'>Volte novamente mais tarde</h5>
    <strong className='iconClosed'><i className="fa-solid fa-square-xmark"></i></strong>
  </div>
);


// Funções - Inicio

function UserPage() {
  const [section, setSection] = useState('profile');
  const [empresa, setEmpresa] = useState(null); // Estado para armazenar os dados da empresa

  useEffect(() => {
    fetchEmpresaByCnpj(); // Chama a função para buscar a empresa quando o componente monta
  }, []);

  const fetchEmpresaByCnpj = async () => {
    const empresaString = sessionStorage.getItem('empresa');
    if (empresaString) {
      const dadosEmpresa = JSON.parse(empresaString);
      const cnpj = dadosEmpresa.cnpj;

      try {
        const response = await axios.get(`http://localhost:8080/empresa/${cnpj}`);
        setEmpresa(response.data); // Armazenar os dados da empresa no estado
      } catch (error) {
        console.error('Erro ao buscar empresa:', error);
      }
    } else {
      console.error('Dados da empresa não encontrados no sessionStorage');
    }
  };

  // Irá mostrar de acordo com o valor definido
  const renderSection = () => {
    switch (section) {
      case 'profile':
        return <UserProfile empresa={empresa} />; // Passa a empresa como props
      case 'settings':
        return <UserSettings />;
      case 'orders':
        return <UserOrders />;
      default:
        return <UserProfile empresa={empresa} />;
    }
  };

  return (
    <div className='user-page mb-5'>
      <div className="menuResponsivo mb-2">
        <button className='btn btn-primary mb-2 openMenu'>Open menu</button>
        <div className="nav-links">
          <button className='nav-item mr-1 btn' id='profile' onClick={() => setSection('profile')}><i className="fa-solid fa-user pr-2"></i>Perfil</button>
          <button className='nav-item mr-1 btn' onClick={() => setSection('settings')}><i className="fa-solid fa-gear pr-2"></i>Configurações</button>
          <button className='nav-item mr-1 btn' onClick={() => setSection('orders')}><i className="fa-solid fa-cart-shopping pr-2"></i>Compras</button>
        </div>
      </div>
      {/* Menu de navegação */}
      <section className='user-nav'>
        <nav className='user-nav-links'>
          <button className='nav-item' id='profile' onClick={() => setSection('profile')}><i className="fa-solid fa-user pr-2"></i>Perfil</button>
          <button className='nav-item ' onClick={() => setSection('settings')}><i className="fa-solid fa-gear pr-2"></i>Configurações</button>
          <button className='nav-item ' onClick={() => setSection('orders')}><i className="fa-solid fa-cart-shopping pr-2"></i>Compras</button>
        </nav>
        {/* Conteúdo que muda com base na seção selecionada */}
        <div className='section-date ml-5'>
          {renderSection()}
        </div>
      </section>
    </div>
  );
}

export default UserPage;
