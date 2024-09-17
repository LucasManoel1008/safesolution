import React from 'react'
import { Link } from 'react-router-dom';
import '../assets/css/login.css'
import Imagenspadroes from '../shared/Imagespadroes.jsx';
import * as loginJs from '../assets/js/login.js'
function Login() {
  


  const handleFocusText = (event) => {
    event.target.placeholder = '';
    document.getElementById('iconCpf').style.opacity = 0
};

const handleBlurText = (event) => {
    if (event.target.value === '') {
        event.target.placeholder = 'CPF';
        document.getElementById('iconCpf').style.opacity = 0.7
    }
};
  const handleFocusPassword = (event) => {
    event.target.placeholder = '';
    document.getElementById('passwordIcon').style.opacity = 0
  }
  const handleBlurPassword = (event) => {
    if (event.target.value === '') {
      event.target.placeholder = 'Senha';
      document.getElementById('passwordIcon').style.opacity = 0.7
  }
  }

  
  return (
    <div>
     <section className='loginBox'>
        <div className="content container pt-4">
            <h4>Login</h4>
            <p>Faça login com sua conta</p>
            <form className="entradaDados" id='login'  onSubmit={loginJs.validarCpf}>
              
              <div className="text">
                <input type="text" id='cpf'  placeholder='CPF'
                onFocus={handleFocusText}
                onBlur={handleBlurText} 
                className='cpf form-control'
                
                />
                <span className='iconText'><i className="fa-solid fa-user " id='iconCpf'></i></span>
              </div>

              <div className="passwordInput">
                <input type="password"  placeholder='Senha' 
                className='password form-control' 
                onFocus={handleFocusPassword}
                onBlur={handleBlurPassword}
                id='password'
                
                />
                <span className='iconPassword '><i id='passwordIcon' className="fa-solid fa-lock "></i></span>
              </div>
                <Link to={'/Userpage'}><input type="submit" className='btn btn-primary' value={`login`} /></Link>
            </form>
            <Link to="/Esqueci-Senha">Esqueci minha senha</Link>

            <Link to="/Cadastro" className='d-block p-2 cadConta'>Cadastrar Nova Conta</Link>
        </div>
        
     </section>
    </div>
  )
}

export default Login