import React from 'react'
import style from '../../css/admpage.module.css'



function Head({setRender}) {

  

  return (
    <div className={`${style.admHeader}`}>
  
      <div>
        <h5 >Olá, administrador</h5> 
         </div>
      
      <ul> 
          <li> <button className='btn' onClick={() => setRender("usuario")}> <i className="fa-solid fa-user mr-2"></i>Usuários </button> </li>
          <li> <button className='btn' onClick={() => setRender("servicos")}> <i className="fa-solid fa-file mr-2"></i>Serviços </button> </li>
          <li> <button className='btn' onClick={() => setRender("mensagens")}>  <i className="fa-solid fa-comment mr-2"></i>Mensagens </button> </li>
  
        </ul>
    </div>
  )
}

export default Head