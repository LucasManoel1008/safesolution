import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom'; // Importa o hook useLocation
import Imagenspadroes from '../../shared/Imagespadroes';
import ImagensUser from '../../shared/ImagensUser';
import * as js from '../js';
import '../padronizacao/padrao.css';
import axios from 'axios';

function Header() {
  const [logado, setLogado] = useState(false);
  const [dados, setDados] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // UseEffect para verificar o sessionStorage toda vez que a página mudar
  useEffect(() => {
    const validarLogin = async () => {
      const isLogged = sessionStorage.getItem('empresa');
      if (isLogged) {
        const date = JSON.parse(isLogged);
        const cnpj = date.cnpj.replace(/[./-]/g, '');
        setLogado(true); // Atualiza logado com true
        try {
          const response = await axios.get(`http://localhost:8080/empresa/${cnpj}`);
          setDados(response.data);
        } catch (error) {
          console.log(error);
        }
      } else {
        setLogado(false); // Atualiza logado com false
      }
    };
    validarLogin();
  }, [location]); // O useEffect será disparado toda vez que a localização mudar

  const sairConta = useCallback(() => {
    sessionStorage.clear();
    navigate('/');
  }, [navigate]);

  const acessarPerfil = useCallback(() => {
    navigate('/UserPage');
  }, [navigate]);

  const LeftHeader = React.memo(() => {
    return (
      <div className="left-header-desktop">
        <Link to="/Login" className="login">Login</Link>
        <Link to="/Cadastro" className="registro">Junte-se a nós</Link>
      </div>
    );
  });

  const LoggedHeader = React.memo(() => {
    return (
      <div className='logged left-header-desktop'>
        <div className="btn-group">
          <button type="button" className="conteudoUsuario" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src={ImagensUser.paladins} width={40} className='mr-1' alt="Foto de perfil" />
            <span className='blue2 font-bold'>{dados && dados.nome_empresa ? dados.nome_empresa : ""}</span>
          </button>
          <div className="dropdown-menu">
            <button className="dropdown-item" onClick={acessarPerfil} type="button">Perfil</button>
            <button className="dropdown-item" onClick={sairConta} type="button">Sair</button>
          </div>
        </div>
      </div>
    );
  });
  const LinksMobile = React.memo(() => {
    return (
      <div className="menuOculto" id="menuOculto">
        <button className="btn-close-x" onClick={js.fecharNav}>&times;</button>
        <Link to="/Servicos">Serviços</Link>
        <Link to="/">Sobre Nós</Link>
        <Link to="/Login">Entrar</Link>
        <Link to="/Cadastro">Junte-se a nós</Link>
      </div>
    );
  });
  const LoggedHeaderMobile = React.memo(() => {
    return (
      <div className="menuOculto" id="menuOculto">
        <button className="btn-close-x" onClick={js.fecharNav}>&times;</button>
        <a href="/UserPage">Perfil</a>
        <a href="/Servicos">Serviços</a>
        <a href="/">Sobre Nós</a>
        <button role='button' className='btn' style={{ fontWeight: "600" }} onClick={sairConta}>SAIR</button>
      </div>
    );
  });
  return (
    <div>
      <button id="botaoScroll" onClick={js.voltartopo}>&uarr;</button>
      <header className="header" id="header">
        {/* Menu versão mobile */}
        {logado ? <LoggedHeaderMobile /> : <LinksMobile />}
        


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
            <Link to="/Servicos">SERVIÇOS</Link>
            <Link to="/">SOBRE NÓS</Link>
          </div>
          <div className="logo">
            <Link to="/" id="logo-header"><img src={Imagenspadroes.logo} alt="Logo" /></Link>
          </div>
          {/* Troca de cabeçalho baseado no estado "logado" */}
          {logado ? <LoggedHeader /> : <LeftHeader />}
        </div>
      </header>
    </div>
  );
}

export default Header;
