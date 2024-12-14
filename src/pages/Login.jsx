import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/login.css';
import LoadingData from '../assets/components/Cadastro/LoadingData'
function Login() {
  const [cnpj, setCnpj] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  
  // Função de validação do formulário
  const validarFormulario = async (event) => {
    
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário
    sessionStorage.clear();
    const cleanCnpj = cnpj.replace(/[./-]/g, ''); // Remove pontos e traços do CNPJ
    
    // Verifica se o CNPJ tem o formato válido
    if (cleanCnpj.length !== 14) { // CNPJ precisa ter exatamente 14 dígitos
      setErro(1);
      console.log(erro)
      return;
    }
    else if (senha ==""){
      setErro(2);

      return
    }
    else if(senha.length < 8){
      setErro(2);

      return
    }
    
    
    try {
      setIsLoading(true);
      const response = await axios.get(`http://localhost:8080/empresa/${cleanCnpj}`);
      if (response.data && response.data.usuario) {
        if (response.data.usuario.senha_usuario === senha) {
          sessionStorage.setItem('empresa', JSON.stringify({ cnpj: cleanCnpj }));
          navigate('/UserPage');
        } else {
          setIsLoading(false);
          setErro(3);
        }
      } else {
        setIsLoading(false);
        setErro(3);
      }
    } catch (error) {
      setIsLoading(false);
      setErro(3);
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
      {isLoading ? <LoadingData /> : ''}
      <section className='loginBox'>
        <div className="content container pt-4">
          <h4>Login</h4>
          <p>Faça login com sua conta</p>
          <form className="entradaDados" onSubmit={validarFormulario}>
            <div className="text mb-4 text-left">
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
              {erro === 1 ? <small className='text-danger'>CNPJ inválido. Tente novamente.</small> : ''}
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
              {erro === 2 ? <small className='text-danger'>Senha inválida. Tente novamente.</small> : ''}
              {erro === 3 ? <small className='text-danger'>Senha ou usuario incorretos. Tente novamente.</small> : ''}
            </div>
            <input type="submit" className='btn btn-primary' value={`Login`} />
          </form>
          <Link to="/Redefinicao-de-senha">Esqueci minha senha</Link>
          <Link to="/Cadastro" className='d-block p-2 cadConta '>Cadastrar Nova Conta</Link>
        </div>
      </section>
    </div>
  );
}

export default Login;