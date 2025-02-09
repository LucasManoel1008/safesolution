import React from 'react'
import Imagenspadroes from '../../shared/Imagespadroes'
import '../padronizacao/padrao.css'
import { Link } from 'react-router-dom'
function Footer() {
    const currentFooterYear = new Date().getFullYear();
  return (
    <div>
        <footer className="footer">
            <div className="servicos mt-4">
                <ul className="mt-4 container1">
                    <Link to="/"> <img src={Imagenspadroes.logoReserva} width="200" alt="LOGO"/></Link>
                    <li><Link to="/Politicas-de-Privacidade">Política de Privacidade</Link></li>
                    <li><Link to="/Termos">Termos de uso</Link></li>
                    <li><Link to="/Cadastro">Seja provedor</Link></li>
                </ul>
               <ul className="container2 d-flex flex-column mt-3" >               
                    <strong className="pb-2"><Link to="/Servicos">Serviços</Link></strong>
                    <li><Link to="#">Arquitetura</Link></li>
                    <li><Link to="#">Limpeza</Link></li>
                    <li><Link to="#">Transportes</Link></li>
                    <li><Link to="#">Segurança</Link></li>
                    <li><Link to="#">Encanador</Link></li>
                    <li><Link to="#">Tecnologia</Link></li>
               </ul>
               
               <ul className="container3 d-flex flex-column mt-3">
                    <strong className="pb-2">Informações</strong>
                    <li><Link to="/">Sobre nós</Link></li>
                    <li><Link to="/#relatos">Relatos</Link></li>
                    <li className='blue2 bold mt-3'>Contato:</li>
                    <li className='blue2'>safesolutionsempresa@gmail.com</li>

               </ul>
            
               <ul className="container4 d-flex flex-row mt-3">

                    <Link to="#">
                        <img src={Imagenspadroes.facebook} width="30" alt="Facebook"/>
                    </Link>

                    <Link to="#">
                        <img src={Imagenspadroes.instagram} width="30" alt="Instagram"/>
                    </Link>

                    <Link to="#">
                        <img src={Imagenspadroes.Linkedin}  width="30" alt="LinkedIn"/>
                    </Link>

                    <Link to="#">
                        <img src={Imagenspadroes.x}  width="30"  alt="x"/>
                    </Link>

                    <Link to="#">
                        <img src={Imagenspadroes.zap} width="30" alt="Whatsapp"/>
                    </Link>
               </ul>

              
            </div>
          
               <span className="text-center">{`© ${currentFooterYear} Safe Solutions. Todos os direitos reservados.`}</span>
        </footer>
    </div>
  )
}

export default Footer