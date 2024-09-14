import React from 'react'
import '../assets/css/servicos.css'
import { Link } from 'react-router-dom'
import imagensServicos from '../shared/Imagesservicos'
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
            <section className='servicoSection mb-4'>
                <Link to="#" className="servico">               
                        <img src={imagensServicos.logo1} width={50} height={50} alt="Logo empresa" className='mr-4'/>
                    <div className="rightText">
                        <span className="title">Manutenção de Hardwares</span>
                        <h6>Bretecno</h6>
                        <small className='d-block'>Campinas, São Paulo</small>
                        <small>Há 16 Horas</small>
                    </div>
                </Link>
            </section>
            <section className='servicoSection mt-4'>
                <Link to="#" className="servico">               
                        <img src={imagensServicos.logo2} width={50} height={50} alt="Logo empresa" className='mr-4'/>
                    <div className="rightText">
                        <span className="title">Limpeza de Escritórios</span>
                        <h6>Super Clean</h6>
                        <small className='d-block'>Osasco, São Paulo</small>
                        <small>Há 2 Semanas</small>
                    </div>
                </Link>
            </section>
            <section className='servicoSection mt-4'>
                <Link to="#" className="servico">               
                        <img src={imagensServicos.logo3} width={50} height={50} alt="Logo empresa" className='mr-4'/>
                    <div className="rightText">
                        <span className="title">Montador de Móveis</span>
                        <h6>O Montador</h6>
                        <small className='d-block'>Carapicuíba, São Paulo</small>
                        <small>Há 1 mês</small>
                    </div>
                </Link>
            </section>
            
            
        </div>
    </div>
  )
}

export default Servicos