import React from 'react'
import '../assets/css/pagamento.css'
import { Link } from 'react-router-dom'
function Pagamento() {
  return (
    <div className='pagamento mb-3'>
        <h4>Montagem de móveis</h4>
        <span><h5>Método de pagamento</h5></span>

        <div className='accountPayment mt-5 p-4'>
            <div className="leftContent">
                <i class="fa-solid fa-credit-card"></i>    
                <span className='ml-2'>Cartão de crédito</span> 
            </div>
            <div className="rightContent">
                <span className='change'>Trocar <i class="fa-solid fa-greater-than"></i> </span>
            </div>
        </div>
        <div className="buttons">
            <div className="leftButtons">
                <Link to={"/Orcamento2"}><button className="btn btn-outline-secondary">Voltar</button></Link>
                <Link to={"/Confirmacao"}><button className="btn btn-outline-primary ml-3" >Avançar</button></Link>
            </div>
            <Link to={"/servicos"}><button className="btn btn-outline-danger">Cancelar</button></Link>
        </div>
    </div>
  )
}

export default Pagamento