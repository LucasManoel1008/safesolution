import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Importa o hook useLocation
import { useNavigate } from 'react-router-dom';
import Imagenspadroes from '../../shared/Imagespadroes';
import ImagensUser from '../../shared/ImagensUser';
import * as js from '../js';
import '../padronizacao/padrao.css';

function Header() {
  const [logado, setLogado] = useState(false);
  const location = useLocation(); // Hook para detectar mudanças de rota
  const navigate = useNavigate();

  // UseEffect para verificar o sessionStorage toda vez que a página mudar
  // Sempre que uma página atualiza, ele monta o componente
  useEffect(() => { 
    const validarLogin = () => {
      const isLogged = sessionStorage.getItem('empresa');
      setLogado(isLogged !== null); // Atualiza logado com true ou false
    };
    validarLogin();
  }, [location]); // O useEffect será disparado toda vez que a localização mudar
  
  const sairConta = () => {
    sessionStorage.clear();
    navigate('/')
  }
  const acessarPerfil =() =>{
    navigate("/UserPage")
  }


  
  const LeftHeader = () => {
    return (
      <div className="left-header-desktop">
        <a href="/Login" className="login">Login</a>
        <a href="/Cadastro" className="registro">Junte-se a nós</a>
      </div>
    );
  };

  const LoggedHeader = () => {
    return (
      <div className='logged left-header-desktop'>
        <div class="btn-group">
          <button type="button" className="conteudoUsuario" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src={ImagensUser.paladins} width={40} className='mr-1' alt="Foto de perfil" />
            <span>Nome Empresa</span>
          </button>
          <div className="dropdown-menu">
            <button className="dropdown-item" onClick={acessarPerfil} type="button">Perfil</button>
            <button className="dropdown-item" onClick={sairConta} type="button">Sair</button>
          </div>
        </div>
       
      </div>
        
    );
  };

  return (
    <div>
      <button id="botaoScroll" onClick={js.voltartopo}>&uarr;</button>
      <header className="header" id="header">
        {/* Menu versão mobile */}
        <div className="menuOculto" id="menuOculto">
          <button className="btn-close-x" onClick={js.fecharNav}>&times;</button>
          <a href="/Servicos">Serviços</a>
          <a href="/">Sobre Nós</a>
          <a href="/Login">Entrar</a>
          <a href="/Cadastro">Junte-se a nós</a>
        </div>

        {/* Menu da Versão Desktop */}
        <div className="elements-header">
          <img
            src={Imagenspadroes.menu}
            alt="Menu"
            id="elements-header"
            onClick={js.abrirNav}
            style={{ fontSize: "30px", cursor: "pointer" }}
          />
          <div className="elementsHeader-desktop">
            <a href="/Servicos">SERVIÇOS</a>
            <a href="/">SOBRE NÓS</a>
          </div>
          <div className="logo">
            <a href="/" id="logo-header"><img src={Imagenspadroes.logo} alt="Logo" /></a>
          </div>
          {/* Troca de cabeçalho baseado no estado "logado" */}
          {logado ? <LoggedHeader /> : <LeftHeader />}
        </div>
      </header>
    </div>
  );
}

export default Header;
