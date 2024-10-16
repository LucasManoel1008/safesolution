import React from 'react'
import '../../assets/css/solicitacao.css'
import Cell from '../../assets/img/imagensServicos/Cell.png'

function Solicitação() {
  return (

    <div className='SolicitacaoContent'>
        <div>
        <h4>Solicitação enviada com sucesso </h4>

        <p>Foi criado um protocolo em seu aplicativo móvel. 
         Acesse-o para mais detalhes de seu orçamento. </p>

         <button id='Button' className= 'btn btn-primary'>Voltar aos serviços</button>

         <div className='DesignCell'>
         <img src={Cell} width={500} height={640} alt="Design  " />
         </div>
        </div>
    </div>
  )
}

export default Solicitação