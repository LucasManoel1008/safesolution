import React, {useState} from 'react'
import '../../css/validarCodigo.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function ValidarCodigo({onSectionChange, email}) {
  
  const [codigo, setCodigo] = useState('')
  const navigate = useNavigate();
  const [erroValidacao, setErroValidacao] = useState('');

  const tentarOutroEmail = () => {
    onSectionChange(1);
  }
  const validacaoCodigo = async (event) =>{
    event.preventDefault();

    if (codigo.length === 0 || codigo.length < 9){
      window.alert("Digite o código corretamente para prosseguir!");
    }
    else{
      try{
      const response = await axios.get(`http://localhost:8080/usuario/email/${email}`);
      if (response.status === 200){
        const data = response.data;
        if (data.token === codigo){
          onSectionChange(3, email);
        }else{
          setErroValidacao('Código inválido. Tente novamente.');
        }
      }
    } 
    catch (error){
      console.error('Erro ao validar o código:', error);
      setErroValidacao('Erro ao validar o código. Tente novamente.');
    }
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