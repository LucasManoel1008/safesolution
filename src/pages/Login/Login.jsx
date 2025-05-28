import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/css/login.css';
import LoadingData from '../../assets/components/Loading/LoadingData'
import * as handleInput from '../../Services/LoginFunctions/LoginHandleInputs'
import * as validation from '../../Services/LoginFunctions/LoginValidation'
import * as ApiRequest from '../../Services/LoginFunctions/LoginApiRequest'
import { usuarioLogado } from '../../App';


function Login() {
  const [cnpj, setCnpj] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {isLogged, setIsLogged} = usuarioLogado()
  const authenticateUser = async (e) =>{
    e.preventDefault()
    if(!validation.validarFormulario(e, cnpj, senha, setErro)){
      return;
    }
    setErro({});
    setIsLoading(true);
    if(await ApiRequest.LoginApiRequest(cnpj, senha, setErro) == false){
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
    setIsLogged(true);
    navigate('/UserPage')
   
  }
  
  return (
    <div>
      {isLoading ? <LoadingData /> : ''}
      <section className='loginBox d-flex'>
        <div className="content container pt-4">
          <h4 className='text-center'>Login</h4>
          <p className='text-center'>Faça login com sua conta</p>
          <form className="entradaDados" onSubmit={authenticateUser}>
            <div className="text mb-4 text-left">
              <input 
                type="text" 
                id='cnpj'
                placeholder='CNPJ'
                onChange={(e) => handleInput.handleInputCnpj(e, setCnpj)}
                value={cnpj}
                className='form-control'
                autoComplete='off'
                maxLength={18}
              />
             {erro.cnpj ? <small className='text-danger'>{erro.cnpj}</small> : ''}
            </div>

            <div className="passwordInput mb-4">
              <input 
                type="password"  
                className='form-control' 
                id='password'
                placeholder='Senha'
                onChange={(e) => handleInput.handleInputPassword(e, setSenha)}
                value={senha}
              />
              {erro.senha ? <small className='text-danger d-block'>{erro.senha}</small> : ''}
              <Link to="/Redefinicao-de-senha">Esqueci minha senha</Link>
              
            </div>
            <input type="submit" className='btn btn-primary' value={`Login`} />
            <Link to="/Cadastro" className='d-block p-2 cadConta mt-2 text-center '>Cadastrar Nova Conta</Link>  
          </form>
         
        </div>
        <Link className="align-self-end position-absolute p-3 text-dark opacity-25" to={"/"}><i class="fa-solid fa-lock"></i></Link>
      </section>
      
    </div>
  );
}

export default Login;