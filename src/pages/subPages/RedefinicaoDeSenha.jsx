import React from 'react'
import '../../assets/css/redefine.css'
import Imagenspadroes from '../../shared/Imagespadroes'
import { Link } from 'react-router-dom'
function RedefinicaoDeSenha() {
  
  return (
   <div className='contentDefinirSas pt-2'>
  
    <h4 className='tituloderedeff pt-5'>Redefinir Senha</h4>
    <h6 classname='subtitleredeff'>Autenticação concluída com sucesso.</h6>
    <p className='mensagemexplainredefff pb-2'>Crie uma nova senha.</p>
    
    

<input type='text' className='form-control criarsenha pt-1 pb-1 p-4' maxLength={16}  placeholder='Criar nova senha'  />
<input type='text' className='form-control confirmarsenha pt-1 pb-1 p-4' maxLength={16}  placeholder='Confirmar nova senha'  />
<a href="/Login" role="button" class="botãottottlogin btn btn-primary mt-4">Fazer login</a>
   </div>
   
  )
}

export default RedefinicaoDeSenha