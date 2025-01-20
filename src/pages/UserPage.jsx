import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import '../assets/css/userPage.css';  
import { useNavigate } from 'react-router-dom';
import UserProfile from '../assets/components/User/UserProfile';
import UserSettings from '../assets/components/User/UserSettings';
import UserOrders from '../assets/components/User/UserOrders';
import EditProfile from '../assets/components/User/EditProfile';
import ConfirmMessage from '../assets/components/User/ConfirmMessage';


// Funções - Inicio

function UserPage() {
  const [section, setSection] = useState('profile');
  const [empresa, setEmpresa] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar a visibilidade do menu
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmpresaByCnpj();
  }, []);

  const fetchEmpresaByCnpj = useCallback(async () => {
    const empresaString = sessionStorage.getItem('empresa');
    if (empresaString) {
      const dadosEmpresa = JSON.parse(empresaString);
    
      const cnpj = dadosEmpresa.cnpj.replace(/[./-]/g, '');
     
      if (cnpj) {
        try {
          const response = await axios.get(`http://localhost:8080/empresa/${cnpj}`);
          setEmpresa(response.data);
        } catch (error) {
          
        }
        finally {
          setTimeout(() => {
          sessionStorage.removeItem('dadosSalvos');
          },4000);
        }
      } else if (dadosEmpresa) {
        try {
          const response = await axios.get(`http://localhost:8080/empresa/${dadosEmpresa}`);
          
          setEmpresa(response.data);
        } catch (error) {
          
        }
        
      }
    } else {
      
    }
  }, []);


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
      await axios.delete(`http://localhost:8080/servico?cnpjEmpresa=${empresa.cnpj}`);
      await axios.delete(`http://localhost:8080/empresa/${empresa.cnpj}`);
      await axios.delete(`http://localhost:8080/usuario/${empresa.usuario.cpf}`);
      console.log('Conta apagada com sucesso');
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
      {sessionStorage.getItem('dadosSalvos') && <ConfirmMessage />}
      <div className="menuResponsivo mb-2">
        <button className='btn btn-primary mb-2 openMenu' onClick={toggleMenu}>{menuOpen ? <i className="fa-solid fa-caret-up"></i> : <i className="fa-solid fa-caret-down"></i>}</button>
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