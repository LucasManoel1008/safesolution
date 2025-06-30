import React from 'react'
import style from '../../css/admpage.module.css'
import { useNavigate } from 'react-router-dom';
import { useAdminContext } from '../../../pages/adm/Admpage';

function Head({ setRender }) {

  const navigate = useNavigate();

  const { admData, setAdmData } = useAdminContext();

  const voltarHome = () => {
    navigate('/');
  }

  return (
    <div className={`${style.admHeader}`}>
  
      <div>
        <h5>
          Olá, {
            admData?.usuario?.nome_usuario || 
            "Administrador"
          }
        </h5> 

      </div>
      
      <ul> 
          <li> <button className='btn' onClick={() => setRender("usuario")}> <i className="fa-solid fa-user mr-2"></i>Empresas </button> </li>
          <li> <button className='btn' onClick={() => setRender("servicos")}> <i className="fa-solid fa-file mr-2"></i>Serviços </button> </li>
          <li> <button className='btn' onClick={() => setRender("mensagens")}>  <i className="fa-solid fa-comment mr-2"></i>Mensagens </button> </li>
          <li><button type="button" className={`btn ${style.botaoVoltar}`} onClick={voltarHome}>
                <i className="fa-solid fa-right-from-bracket mr-2"></i>
                Voltar
              </button>
        </li>
  
        </ul>
        
    </div>
  )
}

export default Head