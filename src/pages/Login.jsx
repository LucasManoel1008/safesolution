import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../assets/css/login.css'
function Login() {
  

  const [cpf, setCpf] = useState('');  // Nota: Não precisei colcocar como constante
  const navigate = useNavigate();

  // Função de validação do formulário
  const validarFormulario = (event) => {
    event.preventDefault(); // Não deixa o formulário avançar
    
    // Verifica se o CPF tem menos de 11 caracteres
    if (cpf.length < 14) { // Ajustado para incluir formatação
      window.alert("Digite um CPF válido");
    } else {
      navigate('/UserPage'); // Redireciona para a página do usuário
    }
  };


  const handleInputChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos

    // Formata o CPF conforme o padrão
    if (value.length > 2) {
      value = value.replace(/^(\d{3})(\d)/, "$1.$2");
    }
    if (value.length > 5) {
      value = value.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
    }
    if (value.length > 8) {
      value = value.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4");
    }


    setCpf(value); // Atualiza o valor do cpf
  };


  
  return (
    <div>
     <section className='loginBox'>
        <div className="content container pt-4">
            <h4>Login</h4>
            <p>Faça login com sua conta</p>
            <form className="entradaDados" onSubmit={validarFormulario}>
              <div className="text mb-4">
                <input type="text" id='cpf'
                placeholder='CPF'
                onChange={handleInputChange}
                value={cpf}
                className='form-control'
                maxLength={14}
                />
                
              </div>

              <div className="passwordInput mb-4">
                <input type="password"  placeholder='Senha' 
                className='form-control' 
                id='password'
                required
                />
               
              </div>
                <input type="submit" className='btn btn-primary' value={`login`} />
            </form>
            <Link to="/Esqueci-Senha">Esqueci minha senha</Link>

            <Link to="/Cadastro" className='d-block p-2 cadConta '>Cadastrar Nova Conta</Link>
        </div>
        
     </section>
    </div>
  )
}

export default Login