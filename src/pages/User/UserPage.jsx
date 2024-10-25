import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../assets/css/userPage.css';
import { useNavigate } from 'react-router-dom';
import UserProfile from './UserProfile';
import UserSettings from './UserSettings';
import UserOrders from './UserOrders';
import EditProfile from './EditProfile';

// Funções - Inicio

function UserPage() {
  const [section, setSection] = useState('profile');
  const [empresa, setEmpresa] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar a visibilidade do menu
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmpresaByCnpj();
  }, []);

  const fetchEmpresaByCnpj = async () => {
    const empresaString = sessionStorage.getItem('empresa');
    if (empresaString) {
      const dadosEmpresa = JSON.parse(empresaString);
      console.log('Dados da empresa recuperados do sessionStorage:', dadosEmpresa);
      const cnpj = dadosEmpresa.cnpj.replace(/[./-]/g, '');
      console.log("CNPJ COLETADO:", cnpj);
      if (cnpj) {
        try {
          const response = await axios.get(`http://localhost:8080/empresa/${cnpj}`);
          console.log('Dados da empresa recebidos do backend:', response.data);
          setEmpresa(response.data);
        } catch (error) {
          console.error('Erro ao buscar empresa:', error);
        }
      } else if (dadosEmpresa) {
        try {
          const response = await axios.get(`http://localhost:8080/empresa/${dadosEmpresa}`);
          console.log('Dados da empresa recebidos do backend:', response.data);
          setEmpresa(response.data);
        } catch (error) {
          console.error('Erro ao buscar empresa:', error);
        }
      }
    } else {
      console.error('Dados da empresa não encontrados no sessionStorage');
    }
  };

  const renderSection = () => {
    switch (section) {
      case 'profile':
        return <UserProfile empresa={empresa} apagarConta={apagarConta} setSection={setSection} />;
      case 'settings':
        return <UserSettings />;
      case 'orders':
        return <UserOrders />;
      case 'edit':
        return <EditProfile setSection={setSection} empresa={empresa} />;
      default:
        return <UserProfile empresa={empresa} apagarConta={apagarConta} setSection={setSection} />;
    }
  };

  const apagarConta = async () => {
    try {
      let cnpj = empresa.cnpj;
      let cpf = empresa.usuario.cpf;
      const responseEmpresa = await axios.delete(`http://localhost:8080/empresa/${cnpj}`);
      const responseUser = await axios.delete(`http://localhost:8080/usuario/${cpf}`);
      console.log('Conta apagada com sucesso:', responseEmpresa.data);
      sessionStorage.clear();
      navigate("/");
    } catch (error) {
      console.error('Erro ao apagar conta:', error);
    }
  };

  const sairConta = () => {
    sessionStorage.clear();
    navigate('/');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Alterna a visibilidade do menu
  };

  return (
    <div className='user-page mb-5'>
      <div className="menuResponsivo mb-2">
        <button className='btn btn-primary mb-2 openMenu' onClick={toggleMenu}>{menuOpen ? <i class="fa-solid fa-caret-up"></i> : <i class="fa-solid fa-caret-down"></i>}</button>
        {menuOpen && ( // Renderiza o menu apenas se menuOpen for true
          <div className="nav-links">
            <button className='nav-item mr-1 btn' id='profile' onClick={() => setSection('profile')}><i className="fa-solid fa-user pr-2"></i>Perfil</button>
            <button className='nav-item mr-1 btn' onClick={() => setSection('settings')}><i className="fa-solid fa-shield pr-2"></i>Segurança e Privacidade</button>
            <button className='nav-item mr-1 btn' onClick={() => setSection('orders')}><i className="fa-solid fa-cart-shopping pr-2"></i>Compras</button>
            <button className='sairConta btn' onClick={sairConta}>sair</button>
          </div>
        )}
      </div>
      <section className='user-nav'>
        <nav className='user-nav-links'>
          <button className='nav-item' id='profile' onClick={() => setSection('profile')}><i className="fa-solid fa-user pr-2"></i>Perfil</button>
          <button className='nav-item ' onClick={() => setSection('settings')}><i className="fa-solid fa-shield pr-2"></i>Segurança e Privacidade</button>
          <button className='nav-item ' onClick={() => setSection('orders')}><i className="fa-solid fa-cart-shopping pr-2"></i>Compras</button>
          <button className='sairConta btn' onClick={sairConta}>sair</button>
        </nav>
        <div className='section-date ml-5'>
          {renderSection()}
        </div>
      </section>
    </div>
  );
}

export default UserPage;