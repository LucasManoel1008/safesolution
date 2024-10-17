import React from 'react'
import '../../assets/css/confirmacao.css'


function Confirmação() {
  return (
    <div className='container text-center confirmacao'>
        <div id='loading' class="spinner-border text-primary" role="status">
             <span class="visually-hidden">Loading...</span>
        </div>
        <h2 id='h2'>Enviando dados..</h2>
        <meta http-equiv="refresh" content="2; /Solicitação " />
      </div>
  )
}

export default Confirmação