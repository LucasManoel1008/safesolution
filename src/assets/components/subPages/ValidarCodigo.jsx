import React, {useState} from 'react'
import '../../css/validarCodigo.css'
import { Link, useNavigate } from 'react-router-dom'

function ValidarCodigo({onSectionChange, email}) {
  
  const [codigo, setCodigo] = useState('')
  const navigate = useNavigate();


  const tentarOutroEmail = () => {
    onSectionChange(1);
  }
  const validacaoCodigo = (event) =>{
    event.preventDefault();

    if (codigo.length === 0 || codigo.length < 9){
      window.alert("Digite o código corretamente para prosseguir!");
    }
    else{
      navigate('/Redefinicao-Senha');
    }
  }
  const handleInputChange = (e) => {
    setCodigo(e.target.value);
  }

  return (
   <div className='contentCodigo pt-2'>
    <h4 className='titulo pt-5'>Validar código</h4>
    <p className='pb-2'>Insira o código de autenticação enviado através do<br/> endereço de email fornecido.</p>
    <form onSubmit={validacaoCodigo}>
      <input type='text'
        className='form-control codigo'
        maxLength={9}
        placeholder='000000000 (9 dígitos)'
        onChange={handleInputChange}  />
      <button role="submit" className="botãokljay btn btn-primary mt-4 mb-4">Confirmar</button>
      <button className="d-block p-2 tentOutrat btn" onClick={tentarOutroEmail} >Tentar outro email</button>
      
    </form>
   </div>
   
  )
}

export default ValidarCodigo