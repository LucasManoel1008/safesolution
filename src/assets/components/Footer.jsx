import React from 'react'
import Imagenspadroes from '../../shared/Imagespadroes'
import '../padronizacao/padrao.css'
function Footer() {
  return (
    <div>
        <footer className="footer">
            <div className="servicos mt-4">
                <ul className="mt-4 container1">
                    <a href="/"> <img src={Imagenspadroes.logoReserva} width="200" alt="LOGO"/></a>
                    <li><a href="/Politicas-de-Privacidade">Política de Privacidade</a></li>
                    <li><a href="/Termos">Termos de uso</a></li>
                    <li><a href="/Cadastro">Seja provedor</a></li>
                </ul>
               <ul className="container2 d-flex flex-column mt-3" >               
                    <strong className="pb-2"><a href="/Servicos">Serviços</a></strong>
                    <li><a href="#">Arquitetura</a></li>
                    <li><a href="#">limpeza</a></li>
                    <li><a href="#">Transportes</a></li>
                    <li><a href="#">Segurança</a></li>
                    <li><a href="#">Encanador</a></li>
               </ul>
               
               <ul className="container3 d-flex flex-column mt-3">
                    <strong className="pb-2">Informações</strong>
                    <li><a href="/">Sobre nós</a></li>
                    <li><a href="/#relatos">Relatos</a></li>
                    <li className='blue2 bold mt-3'>Contato:</li>
                    <li className='blue2'>safesolutionsempresa@gmail.com</li>

               </ul>
            
               <ul className="container4 d-flex flex-row mt-3">

                    <a href="#">
                        <img src={Imagenspadroes.facebook} width="30" alt="Facebook"/>
                    </a>

                    <a href="#">
                        <img src={Imagenspadroes.instagram} width="30" alt="Instagram"/>
                    </a>

                    <a href="#">
                        <img src={Imagenspadroes.Linkedin}  width="30" alt="LinkedIn"/>
                    </a>

                    <a href="#">
                        <img src={Imagenspadroes.x}  width="30"  alt="x"/>
                    </a>

                    <a href="#">
                        <img src={Imagenspadroes.zap} width="30" alt="Whatsapp"/>
                    </a>
               </ul>

              
            </div>
          
               <span className="align-text">© 2024 Safe Solutions. Todos os direitos reservados.</span>
        </footer>
    </div>
  )
}

export default Footer