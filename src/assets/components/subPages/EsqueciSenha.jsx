import React, { useState } from 'react'
import '../../css/esqueciSenha.css'
import { Link } from 'react-router-dom'
import LoadingData from '../Cadastro/LoadingData'
import axios from 'axios'
 
const EsqueciSenha = ({onSectionChange}) => {

  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value); 
  };


  const validarEmail = async (event) => {
    event.preventDefault();
  
    if (email.length === 0 || email.indexOf('@') === -1 || email.indexOf('.') === -1) {
      setMensagem('E-mail inválido.');
      return;
    }
    try {
      setLoading(true);
      const response = await axios.post(`http://localhost:8080/usuario/recuperar-senha`, { email_usuario: email });
      if (response.status === 200) {
        setMensagem('');
        onSectionChange(2, email);
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setMensagem('E-mail não encontrado.');
        setLoading(false);
      }
      else if (error.response && error.response.status === 500) {
        setMensagem('Erro ao enviar e-mail.');
        setLoading(false);
      }
    }
  };
  
    




  return (
   <div className='contentSenha pt-2'>
    {loading && <LoadingData />}
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
      {mensagem && <p className='text-danger'>{mensagem}</p>}
      <Link to="/Login" className='retornarLogin'>Retornar à tela de login</Link>
   </div>
   
  )
}

export default EsqueciSenha