import React from 'react'
import '../../assets/css/solicitacao.css'
import { Link } from 'react-router-dom'
import Cell from '../../assets/img/imagensServicos/Cell.png'

function Solicitação() {
  return (

    <div className='SolicitacaoContent'>
        <div>
        <h4>Solicitação enviada com sucesso </h4>

         <p>Foi criado um protocolo em seu aplicativo móvel. 
         Acesse-o para mais detalhes de seu orçamento. </p>
        <div className='button'>
            <Link to={"/Servicos"}> <button className= "btn-primary btn ">Voltar aos serviços </button></Link>
        </div>
        <div className='DesignCell'>
         <img src={Cell}  alt="Design" />
        </div>
        </div>
    </div>
  )
}

export default Solicitação