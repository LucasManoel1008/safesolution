import React from 'react'
import '../../assets/css/esqueciSenha.css'
import Imagenspadroes from '../../shared/Imagespadroes'
import { Link } from 'react-router-dom'
import * as emailJs from '../../assets/js/esqueci'
function EsqueciSenha() {
  return (
   <div className='contentSenha pt-2'>
  
    <h4 className='agacuatro pt-5'>Redefinir Senha</h4>
    <p className='texttoilet pb-2'>Enviaremos um código de autenticação <br/> por meio do endereço de email registrado na conta.</p>
    
    

<input type='text' className='form-control skibidi pt-1 pb-1 p-4' id='skibidi' placeholder='E-mail' />
<a href="/Validar-Codigo" role="button" class="irParaValidarCodigo btn btn-primary mt-4" onClick={emailJs.validarEmail}>Confirmar e continuar</a>
<Link to="/Login">Retornar à tela de login</Link>
   </div>
   
  )
}

export default EsqueciSenha