import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/login.css';

function Login() {
  const [cnpj, setCnpj] = useState('');
  const [senha, setSenha] = useState('');
  
  const navigate = useNavigate();
  
  // Função de validação do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Criação do objeto novoServico
    const novoServico = {
      nome_servico,
      descricao_servico,
    };
    
    const empresaString = sessionStorage.getItem('empresa');
    
    if (empresaString) {
      const dadosEmpresa = JSON.parse(empresaString); 
      console.log('Dados da empresa recuperados do sessionStorage:', dadosEmpresa);
      
      // Limpeza do CNPJ
      const cnpj = dadosEmpresa.cnpj.replace(/[./-]/g, '');
      console.log("CNPJ COLETADO:", cnpj);
  
      // Envio da requisição POST
      axios.post(`http://localhost:8080/servico?cnpjEmpresa=${cnpj}`, novoServico)
        .then(response => {
          console.log('Serviço salvo com sucesso:', response.data);
          // Adicione um feedback visual para o usuário aqui
        })
        .catch(error => {
          console.error('Erro ao salvar o serviço:', error);
          // Adicione um feedback de erro para o usuário aqui
        });
    } else {
      console.error('Dados da empresa não encontrados no sessionStorage.');
      // Adicione um feedback de erro se a empresa não for encontrada
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
                autoComplete='off'
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