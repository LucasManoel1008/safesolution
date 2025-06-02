import React, { useState } from 'react'
import Styles from '../../assets/css/LoginAdm.module.css'
import * as Handle from '../../Services/AdmFunctions/AdmHandleInputs'
import axios from 'axios';
import { useParams } from 'react-router-dom';
function LoginAdm() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const realzarLogin = (e) => {
    e.preventDefault();
    try{
      const response = axios.post('http://localhost:8080/adm/login', {
        nome_adm: username,
        senha_adm: password
      });
      response.then((res) => {
        console.log(res.data);
      });
    }
    catch (error) {
      console.error('Erro ao realizar login:', error);
    }
  }

  return (
    <div className={`${Styles.loginPage}`}>
        <h4 className='blue2 bold mt-4'>Login</h4>
        <p className='opacity-75 blue2'>Acesso administrativo</p>

        <form className={`${Styles.formLogin}`}>
        <div className="form-group w-75">
            <label htmlFor="nomeUsuario">Nome de Usuário</label>
            <input type="text" className="form-control" value={username} onChange={(e) => Handle.handleInputChangeUserName(e, setUsername)}  id="nomeUsuario" />
          </div>
          <div className="form-group w-75">
            <label htmlFor="senhaUsuario">Senha</label>
            <input type="password" className="form-control" id="senhaUsuario" value={password} onChange={(e) => Handle.handleInputChangePassword(e, setPassword)} />
          </div>
            <button className={`${Styles.buttonLogin} w-75 btn btn-primary col-12`} type='button' onClick={(e) => realzarLogin(e)}>Entrar</button>
        </form>
    </div>  
  )
}

export default LoginAdm