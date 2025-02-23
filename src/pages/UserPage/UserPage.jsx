import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import '../../assets/css/UserPage.css';
import { useNavigate } from 'react-router-dom';
import UserProfile from './UserProfile';
import UserSettings from './UserSettings';
import UserOrders from './UserOrders';
import EditProfile from './EditProfile';
import ConfirmMessage from '../../assets/components/User/ConfirmMessage'
import * as functions from '../../Services/UserService/UserFunctions';
import { fetchUserData } from '../../Services/UserService/UserApiRequest';
function UserPage() {
  const [section, setSection] = useState('profile');
  const [empresa, setEmpresa] = useState(null);
  const [menuState, setMenuState] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmpresaByCnpj();
  }, []);

  const fetchEmpresaByCnpj = useCallback(async () => {
    try {
      const userData = await functions.getUserData();
      const response = await fetchUserData(userData);
      setEmpresa(response);
    } catch (error) {
      console.error('Erro ao buscar empresa:', error);
    } finally {
      setTimeout(() => {
        sessionStorage.removeItem('dadosSalvos');
      }, 4000);
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
    setMenuState(!menuState);
  };

  return (
    <div className='user-page mb-5'>
      {sessionStorage.getItem('dadosSalvos') && <ConfirmMessage />}
      <div className="menuResponsivo mb-2">
        <button className='btn btn-primary mb-2 openMenu' onClick={toggleMenu}>{menuState ? <i className="fa-solid fa-caret-up"></i> : <i className="fa-solid fa-caret-down"></i>}</button>
        {menuState && ( 
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