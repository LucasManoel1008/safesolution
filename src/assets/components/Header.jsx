import React from 'react'
import Imagenspadroes from '../../shared/Imagespadroes'
import * as js from '../js'
import '../padronizacao/padrao.css'

function Header() {
  return (
    <div>
         <button id="botaoScroll" onClick={js.voltartopo} >&uarr;</button>
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
        <img src={Imagenspadroes.menu} alt="Menu" id="elements-header" onClick={js.abrirNav} style={{fontSize: "30px", cursor: "pointer"}}  />
        <div className="elementsHeader-desktop">
          <a href="/Servicos">SERVIÇOS</a>
          <a href="/">SOBRE NÓS</a>

        </div>
        <div className="logo">
          <a href="/" id="logo-header"><img src={Imagenspadroes.logo} alt="Logo" /></a>
        </div>
        <div className="left-header-desktop">
          <a href="/Login" className="login">Login</a>
          <a href="/Cadastro" className="registro">Junte-se a nós</a>
        </div>
      </div>
    </header>
</div>
  )
}

export default Header