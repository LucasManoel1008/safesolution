import React, { useState } from 'react'
import '../../assets/css/esqueciSenha.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
function EsqueciSenha() {

  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const validarEmail = async (event) => {
    event.preventDefault();


    if (email.length === 0) {
      window.alert("Digite um endereço de email para prosseguir!");
    } 

    else if (email.indexOf("@") === -1) {
      window.alert("Email incorreto!");
    }
    else {
        navigate('/Validar-Codigo'); 
      }
    }
    


  const handleInputChange = (e) => {
    setEmail(e.target.value); 
  };

  return (
   <div className='contentSenha pt-2'>
    <h4 className='agacuatro pt-5'>Redefinir Senha</h4>
    <p className='texttoilet pb-2'>Enviaremos um código de autenticação <br/> por meio do endereço de email registrado na conta.</p>
    <form onSubmit={validarEmail}>
        <input
        type='text'
        value={email}
        className='form-control skibidi pt-1 pb-1 p-4'
        id='skibidi'
        onChange={handleInputChange}
        placeholder='E-mail' />
        <button role='submit' className="irParaValidarCodigo btn btn-primary mt-4 mb-2">Continuar</button>
      </form>
      <Link to="/Login">Retornar à tela de login</Link>
   </div>
   
  )
}

export default EsqueciSenha