import React from 'react'
import Imagespadroes from '../shared/Imagespadroes.jsx'
function Login() {
  


  const handleFocusText = (event) => {
    event.target.placeholder = '';
    document.getElementById('iconCpf').style.opacity = 0
};

const handleBlurText = (event) => {
    if (event.target.value === '') {
        event.target.placeholder = 'CPF ou CNPJ';
        document.getElementById('iconCpf').style.opacity = 0.5
    }
};
  const handleFocusPassword = (event) => {
    event.target.placeholder = '';
    document.getElementById('passwordIcon').style.opacity = 0
  }
  const handleBlurPassword = (event) => {
    if (event.target.value === '') {
      event.target.placeholder = 'Senha';
      document.getElementById('passwordIcon').style.opacity = 0.5
  }
  }
  
  return (
    <div>
     <section className='loginBox'>
        <img src={Imagespadroes.logo} alt="Logo" width={200} className='logoLogin' />
        <div className="content container">
            <h4>Login</h4>
            <p>Faça login com sua conta</p>
            <form className="entradaDados">
              
              <div className="text">
                <input type="text" id='cpf'  placeholder='CPF ou CNPJ'
                onFocus={handleFocusText}
                onBlur={handleBlurText} 
                className='cpf'/>
                <span><i className="fa-solid fa-user iconText" id='iconCpf'></i></span>
              </div>

              <div className="passwordInput">
                <input type="password"  placeholder='Senha' 
                className='password' 
                onFocus={handleFocusPassword}
                onBlur={handleBlurPassword}
                />
                <span><i id='passwordIcon' className="fa-solid fa-lock iconPassword"></i></span>
              </div>
                <input type="submit" className='btn btn-primary' value={`login`} />
            </form>
            <a href="#">Esqueci minha senha</a>

            <a href="#" className='d-block p-2 cadConta'>Cadastrar Nova Conta</a>
        </div>
     </section>
    </div>
  )
}

export default Login