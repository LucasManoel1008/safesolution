import React from 'react'
import '../assets/css/servicos.css'
import { Link } from 'react-router-dom'
import ImagensUser from '../shared/ImagensUser'
function Servicos() {
  return (
    <div className='conteiner servicosContent'>
        <div className="leftContentFilter">
            <h5 className='text-center mt-3'>Mensagens</h5>
        </div>
        <div className="mainContentServicos">
        <div class="input-group mb-4">
            <input type="search" class="form-control rounded" placeholder="Pesquisar..." aria-label="Search" aria-describedby="search-addon" />
            <button type="button" class="btn btn-outline-primary" data-mdb-ripple-init>Pesquisar</button>
        </div>
            <section className='servicoSection'>
                <Link to="#" className="servico">               
                        <img src={ImagensUser.paladins} width={50} height={50} alt="Logo empresa" className='mr-4'/>
                    <div className="rightText">
                        <span className="title">Manutenção de Hardwares</span>
                        <p>Oferecemos serviços especializados em manutenção de hardware para garantir que seus dispositivos funcionem com eficiência e segurança.
                            Nossos técnicos qualificados realizam reparos, diagnósticos e trocas de componentes defeituosos, além de oferecer limpezas preventivas
                            para evitar...</p>
                    </div>
                </Link>
            </section>
            
            
        </div>
    </div>
  )
}

export default Servicos