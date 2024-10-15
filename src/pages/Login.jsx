import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/login.css';

function Login() {
  const [cnpj, setCnpj] = useState('');
  const [senha, setSenha] = useState('');
  
  const navigate = useNavigate();
  
  // Função de validação do formulário
  const validarFormulario = async (event) => {
    
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário
    sessionStorage.clear();
    const cleanCnpj = cnpj.replace(/[./-]/g, ''); // Remove pontos e traços do CNPJ
    
    // Verifica se o CNPJ tem o formato válido
    if (cleanCnpj.length !== 14) { // CNPJ precisa ter exatamente 14 dígitos
      window.alert("Digite um CNPJ válido");
      return;
    }
    
    try {
      // Faz a requisição para o backend buscando a empresa pelo CNPJ
      const response = await axios.get(`http://localhost:8080/empresa/${cleanCnpj}`);
      
      // Verificar o que está sendo retornado do backend
      console.log(response.data);  // Verifique os dados no console do navegador
      console.log("Senha recebida do backend:", response.data.usuario.senha_usuario);
      console.log("Senha digitada pelo usuário:", senha);
      if (response.data && response.data.usuario) {
        // Verifica a senha diretamente no `response.data`
        if (response.data.usuario.senha_usuario === senha) {
          sessionStorage.setItem('empresa', JSON.stringify({ cnpj: cleanCnpj }));
          navigate('/UserPage');
        } else {
          window.alert("Senha inválida. Por favor, tente novamente.");
        }
      } else {
        window.alert("Empresa ou usuário não encontrado.");
      }
    } catch (error) {
      console.error("Erro durante a requisição:", error);
      window.alert('Conta não encontrada!');
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
  const handleInputSenha = (e) => {
    setSenha(e.target.value);
  }

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
                className='form-control' 
                id='password'
                placeholder='Senha'
                onChange={handleInputSenha}
                value={senha}
                required
              />
            </div>
            <input type="submit" className='btn btn-primary' value={`Login`} />
          </form>
          <Link to="/Esqueci-Senha">Esqueci minha senha</Link>
          <Link to="/Cadastro" className='d-block p-2 cadConta '>Cadastrar Nova Conta</Link>
        </div>
      </section>
    </div>
  );
}

export default Login;