import React from 'react'
import '../../assets/css/validarCodigo.css'
import Imagenspadroes from '../../shared/Imagespadroes'
import { Link } from 'react-router-dom'
function ValidarCodigo() {
  
  return (
   <div className='contentCodigo pt-2'>
  
    <h4 className='titulo pt-5'>Validar código</h4>
    <p className='mensagem explicativa pb-2'>Insira o código de autenticação enviado através do<br/> endereço de email fornecido.</p>
    
    

<input type='text' className='form-control codigo pt-1 pb-1 p-4' maxLength={9}  placeholder='000000000 (9 dígitos)'  />
<a href="/Redefinição-Senha" role="button" class="botãokljay btn btn-primary mt-4">Confirmar e continuar</a>
<a class="d-block p-2 tentOutrat" href="/Esqueci-Senha">Tentar outro email</a>
   </div>
   
  )
}

export default ValidarCodigo