import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/login.css';

function Login() {
  const [cnpj, setCnpj] = useState('');  // Alterado de CPF para CNPJ
  const navigate = useNavigate();

  // Função de validação do formulário
  const validarFormulario = (event) => {
    event.preventDefault(); // Não deixa o formulário avançar
    
    // Verifica se o CNPJ tem menos de 14 caracteres
    if (cnpj.length < 18) { // Ajustado para o formato do CNPJ
      window.alert("Digite um CNPJ válido");
    } else {
      navigate('/UserPage'); // Redireciona para a página do usuário
    }
  };

  // Função para formatar o CNPJ conforme o padrão
  const handleInputChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos

    // Formata o CNPJ
    if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d)/, "$1.$2");
    }
    if (value.length > 5) {
      value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    }
    if (value.length > 8) {
      value = value.replace(/^(\d{2})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3/$4");
    }
    if (value.length > 12) {
      value = value.replace(/^(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})(\d)/, "$1.$2.$3/$4-$5");
    }

    setCnpj(value); // Atualiza o valor do CNPJ
  };

  return (
    <div>
      <section className='loginBox'>
        <div className="content container pt-4">
          <h4>Login</h4>
          <p>Faça login com sua conta</p>
          <form className="entradaDados" onSubmit={validarFormulario}>
            <div className="text mb-4">
              <input 
                type="text" 
                id='cnpj'
                placeholder='CNPJ'
                onChange={handleInputChange}
                value={cnpj}
                className='form-control'
                maxLength={18}
              />
            </div>

            <div className="passwordInput mb-4">
              <input 
                type="password"  
                placeholder='Senha' 
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
  );
}

export default Login;
