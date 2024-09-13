import React from 'react'
import '../assets/css/servicos.css'
import Imagenspadroes from '../shared/Imagespadroes'
function Servicos() {
  return (
    <div className='conteiner servicosContent'>
        <div className="leftContentFilter">
            <h5 className='text-center mt-3'>Filtros de busca</h5>
        </div>
        <div className="mainContentServicos">
            <article className="servico">
                <div className="logo">
                    <img src={Imagenspadroes.logo} width={150} alt="Logo empresa" />
                </div>
            </article>
            
        </div>
    </div>
  )
}

export default Servicos