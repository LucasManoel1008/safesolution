import React, { useState } from 'react'
import '../../css/esqueciSenha.css'
import { Link } from 'react-router-dom'

import axios from 'axios'
 
const EsqueciSenha = ({onSectionChange}) => {

  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');


  const handleInputChange = (e) => {
    setEmail(e.target.value); 
  };


  const validarEmail = async (event) => {
    event.preventDefault();
  
    if (email.length === 0 || email.indexOf('@') === -1 || email.indexOf('.') === -1) {
      alert("Digite um endereço de email para prosseguir!");
      return;
    }
    console.log(email);
    try {
      const response = await axios.post(`http://localhost:8080/usuario/recuperar-senha`, { email_usuario: email });
      if (response.status === 200) {
        setMensagem('E-mail enviado com sucesso!');
        onSectionChange(2, email);
      }
    } catch (error) {
      console.error('Erro ao solicitar recuperação de senha:', error);
      setMensagem('Ocorreu um erro ao tentar enviar o e-mail.');
    }
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
      {mensagem && <p>{mensagem}</p>}
      <Link to="/Login" className='retornarLogin'>Retornar à tela de login</Link>
   </div>
   
  )
}

export default EsqueciSenha