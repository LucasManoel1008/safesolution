import React from 'react'
import Imagenspadroes from '../../shared/Imagespadroes'
import * as js from '../js/script'

function Header() {
  return (
    <div>
         <button id="botaoScroll" onClick={js.voltartopo} >&uarr;</button>
    <header className="header" id="header">      
      {/* Menu versão mobile */}
      <div className="menuOculto" id="menuOculto">
        <button className="btn-close-x" onClick={js.fecharNav}>&times;</button>
        <a href="#" id="active">AJUDA</a>
        <a href="#">SERVIÇOS</a>
        <a href="#">SOBRE NÓS</a>
        <a href="#">ENTRAR</a>
      </div>

      {/* Menu da Versão Desktop */}
      <div className="elements-header">
        <img src={Imagenspadroes.menu} alt="Menu" id="elements-header" onClick={js.abrirNav} style={{fontSize: "30px", cursor: "pointer"}}  />
        <div className="elementsHeader-desktop">
          <a href="#">SERVIÇOS</a>
          <a href="#">SOBRE NÓS</a>
          <a href="#" id="active">AJUDA</a>
        </div>
        <div className="logo">
          <a href="#" id="logo-header"><img src={Imagenspadroes.logo} alt="Logo" /></a>
        </div>
        <div className="left-header-desktop">
          <a href="#" className="login">ENTRAR</a>
          <a href="#" className="registro">REGISTRO</a>
        </div>
      </div>
    </header>
</div>
  )
}

export default Header