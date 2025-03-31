import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import Imagenspadroes from '../../shared/Imagespadroes';
import ImagensUser from '../../shared/ImagensUser';
import * as userSessionManager from '../../Services/HeaderFunctions/HeaderFunctions';
import * as js from '../../Services/HeaderFunctions/HeaderGenericFunctions';
import { toast } from 'react-toastify';
import { usuarioLogado } from '../../App';
function Header() {

  const {isLogged, setIsLogged} = usuarioLogado()
  const [userData, setUserData] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    validateAndFetchUserData();
    if (sessionStorage.getItem('empresa') == null) {
      setIsLogged(false);
    }
  }, [location]); 

  const validateAndFetchUserData = async () => {
    const fetchedUserData = userSessionManager.getUserData();
    
    if (fetchedUserData){
      setUserData(fetchedUserData);
      setIsLogged(true);
      }
    
  }

  const exitAccount = () => {
      sessionStorage.clear();
      setUserData(null);
      setIsLogged(false);
      navigate('/');
  }
  
  const profilePage =() => {
      navigate('/UserPage');
  }
  const servicesPage =() => {
      navigate('/Meus-Servicos');
  }

  const errorToast = (error) => {
    toast.error('Erro ao buscar dados do usuário. Código de erro: ' + error, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    })
    
  }



const RightHeader = React.memo(() => {
  return (
    <div className="left-header-desktop">
      <Link to="/Login" className="login">Login</Link>
      <Link to="/cadastro" className="registro">Junte-se a nós</Link>
      </div>
  );
});

  const LoggedHeader = React.memo(() => {
    return (
      <div className='logged left-header-desktop'>
        <div className="btn-group">
          <button type="button" className="conteudoUsuario" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src={ImagensUser.paladins} width={40} className='mr-1' alt="Foto de perfil" />
            <span className='blue2 font-bold'>{userData && userData.nome_empresa ? userData.nome_empresa : ""}</span>
          </button>
          <div className="dropdown-menu">
            <button className="dropdown-item" onClick={profilePage} type="button">Perfil</button>
            {isLogged ? <button onClick={servicesPage} className='dropdown-item'>Meus Serviços</button> : <Link to="/Login">Meus Serviços</Link>}
            <button className="dropdown-item" onClick={exitAccount} type="button">Sair</button>
          </div>
        </div>
      </div>
    );
  });
  const LinksMobile = React.memo(() => {
    return (
      <div className="menuOculto" id="menuOculto">
        <button className="btn-close-x" onClick={js.fecharNav}>&times;</button>
        <Link to="/Servicos">SERVIÇOS</Link>
        <Link to="/">SOBRE NÓS</Link>
        <Link to="/Login">ENTRAR</Link>
        <Link to="/cadastro">JUNTE-SE A NÓS</Link>
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
        <button role='button' className='btn' style={{ fontWeight: "600" }} onClick={exitAccount}>SAIR</button>
      </div>
    );
  });
  return (
    <div>
      <button id="botaoScroll" onClick={js.voltartopo}>&uarr;</button>
      <header className="header" id="header">
        {/* Menu versão mobile */}
        {isLogged ? <LoggedHeaderMobile /> : <LinksMobile />}
        


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
            <Link to="/Servicos" href="#">Serviços</Link>
            <Link to="/">Sobre nós</Link>
          </div>
          <div className="logo">
            <Link to="/" id="logo-header"><img src={Imagenspadroes.logo} alt="Logo" /></Link>
          </div>
          {isLogged ? <LoggedHeader /> : <RightHeader />}
        </div>
      </header>
    </div>
  );
}

export default Header;
