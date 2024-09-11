import React from 'react'
import '../../assets/css/esqueciSenha.css'
import Imagenspadroes from '../../shared/Imagespadroes'
import { Link } from 'react-router-dom'
function EsqueciSenha() {
  return (
   <div className='contentSenha'>
  
    <h4 className='aga4 pt-3'>Resgatar Senha</h4>
    <p className='texttoilet pb-2'>Insira endereço de email valido para recuperação de senha</p>

<input type='text' className='form-control skibidi pt-1' placeholder='E-mail' />
<input type='text' className='form-control bolsonaro pt-1' placeholder='ta ok' />
   </div>
   
  )
}

export default EsqueciSenha