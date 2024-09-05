import React, {useState} from 'react'
import '../assets/css/cadastro.css'

import Imagenspadroes from '../shared/Imagespadroes'
function Cadastro() {

const [text, setText] = useState('');
const specialCharRegex = /[!@#$%^&*(),.?":{}|<>_+=/¨{}]/g;
const uppercaseRegex = /[A-Z]/;
const handleFocusText = (event) => {
    event.target.placeholder = '';
    document.getElementById('iconNome').style.opacity = 0
};

const handleBlurText = (event) => {
    if (event.target.value === '') {
        event.target.placeholder = 'Nome completo';
        document.getElementById('iconNome').style.opacity = 0.7
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
  const handleFocusConfirmPassword = (event) => {
    event.target.placeholder = '';
    document.getElementById('confirmIcon').style.opacity = 0
  }
  const handleBlurConfirmPassword = (event) => {
    if (event.target.value === '') {
      event.target.placeholder = 'Confirme sua senha';
      document.getElementById('confirmIcon').style.opacity = 0.7
  }
  }
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const hasSpecialChars = specialCharRegex.test(text);
  const hasUppercase = uppercaseRegex.test(text);

  return (
    <div>
        <section className='loginBox '>
        <img src={Imagenspadroes.logo} alt="Logo" width={200} className='logoLogin' />
        <div className="content container">
            <h4>Cadastro</h4>
            <p>Nos diga primeiro quem é você</p>
            <form className="entradaDados" id='login'  >
              
              <div className="text">
                <input type="text" id='nome'  placeholder='Nome completo'
                className='cpf'
                onFocus={handleFocusText}
                onBlur={handleBlurText}
                />
                <span className='iconText'><i className="fa-solid fa-user " id='iconNome'></i></span>
              </div>

              <div className="passwordInput">
                <input type="password"  placeholder='Senha' 
                className='password' 
                onFocus={handleFocusPassword}
                onBlur={handleBlurPassword}
                onChange={handleChange}
                id='password'
                
                />
                <span className='iconPassword'><i id='passwordIcon' className="fa-solid fa-lock "></i></span>
                <div className="passValidation">
                <p>Sua senha deve conter:</p>
                <ul>
                    <p style={{ color: text.length >= 8 ? 'green' : 'black' }}>Mínimo 8 caracteres</p>
                    <p style={{ color: hasUppercase ? 'green' : 'black' }}>Ao menos 1 letra Maiúscula</p>
                    <p style={{ color: hasSpecialChars ? 'green' : 'black' }}>Um caractere Especial (@,#,$,&) e/ou Numérico</p>
                    
                </ul>
                </div>
                
              </div>
              
              <div  className="passwordInput confirmPass">
                <input type="text" 
                placeholder='Confirme sua senha'
                 className='password'
                 onBlur={handleBlurConfirmPassword}
                 onFocus={handleFocusConfirmPassword}
                 id='confirmPass' />
                 
                <span className='iconConfirmPass'><i className="fa-solid fa-unlock-keyhole" id='confirmIcon'></i></span>
              </div>


                <input type="submit" className='btn btn-primary prosseguir' value={`Prosseguir`} />
            </form>

            <a href="/Login" className='d-block p-2 cadConta loginConta'>Ja possui uma conta?</a>
        </div>
        
     </section>
    </div>
  )
}

export default Cadastro