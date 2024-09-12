import React from 'react'
import '../../assets/css/esqueciSenha.css'
import Imagenspadroes from '../../shared/Imagespadroes'
import { Link } from 'react-router-dom'
function EsqueciSenha() {
  return (
   <div className='contentSenha pt-2'>
  
    <h4 className='agacuatro pt-5'>Resgatar Senha</h4>
    <p className='texttoilet pb-2'>Insira o endereço de email registrado na sua conta <br/> que 
    te enviaremos um código de verificação.</p>
    
    

<input type='text' className='form-control skibidi pt-1 pb-1 p-4' placeholder='E-mail' />
<button className='botãoIceBLue btn-primary btn'> Confirmar Email</button>
   </div>
   
  )
}

export default EsqueciSenha