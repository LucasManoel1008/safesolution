import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/cadastro.css';
import * as handleInput from '../../Services/CadastroFunctions/CadastroHandleInputs'
import * as check from '../../Services/CadastroFunctions/CadastroValidation'
function UserCad({setSection, setUserData}) {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [errorCode, setErrorCode] = useState(0)
  const completeName = `${name} ${lastName}`

  const inputValues = {
    name,
    completeName,
    lastName,
    email,
    cpf,
    password,
    confirmPassword,
    birthDate,
  }
  const updateSetParams = {
    setUserData,
    setError,
    setErrorCode,
    setSection
  }
  const validarFormulario = (e) => {
    e.preventDefault()
    check.checkInputValues(inputValues,updateSetParams)
    
  }

  return (
    <div className='cadastroContent'>
      <h4 className='mt-3'>Cadastro</h4>
      <form onSubmit={validarFormulario}>
        <div className='nameInput mt-4'>
          <div className='text-left'>
          <input
            type='text'
            className='form-control'
            placeholder='Primeiro nome'
            value={name}
            onChange={(e) => handleInput.handleInputChangeName(e, setName)}
            
          />
          <p className='error'>{errorCode == 1 ? error : null}</p>
          </div>
          <div>
          <input
            type='text'
            className='form-control'
            placeholder='Último nome'
            value={lastName}
            onChange={(e) => handleInput.handleInputChangeLastName(e, setLastName)}
            autoComplete='off'
          />
          </div>
        </div>
        <div className='email text-left'>
          <input
            type='email'
            className='form-control mt-4'
            placeholder='Email'
            value={email}
            onChange={(e) => handleInput.handleInputChangeEmail(e, setEmail)}
            autoComplete='off'
          />
          <p className='error'>{errorCode === 2 ? error : null}</p>
        </div>
        <div className='date mt-4 text-left'>
          <label className='float-left' htmlFor='date'>
            Data de nascimento
          </label>
          <input
            type='date'
            className='form-control'
            id='date'
            value={birthDate}
            onChange={(e) => handleInput.handleInputBirthDate(e, setBirthDate)}
          />
          <p className='error'>{errorCode === 3 || errorCode === 4 ? error : null}</p>
        </div>
        <div className='passwordInputCadastro mt-4 d-flex'>
          <div className='text-left'>
            <input
              onChange={(e) => handleInput.handleInputPassword(e, setPassword)}
              type='password'
              className='form-control'
              placeholder='Digite uma senha'
              autoComplete='off'
            />
            <p className='error'>{errorCode === 5 ? error : null}</p>
          </div>
          <div>
            <input
              type='password'
              className='form-control'
              placeholder='Confirme sua senha'
              onChange={(e) => handleInput.handleInputConfirmPassword(e, setConfirmPassword)}
              autoComplete='off'
            />
            <p className='error float-left'>{errorCode === 6 ? error : null}</p>
          </div>
        </div>
        <div className='cpfInput mt-4 text-left'>
          <input
            type='text'
            className='form-control'
            placeholder='CPF'
            id='cpf'
            maxLength={14}
            value={cpf}
            onChange={(e) => handleInput.handleInputChangeCpf(e, setCpf)}
            autoComplete='off'
          />
          <p className='error'>{errorCode === 7 ? error : null}</p>
        </div>
        <button role='button' onClick={validarFormulario} className='continuarCadastro1 btn btn-primary mt-4'>
          Continuar
        </button>
        <span>
          Já possui uma conta? <Link to={'/Login'}>Entre já </Link>
        </span>
        <p className='termos-e-politicas mt-4'>
          Ao continuar, afirmo que concordo com a{' '}
          <Link to='/Politicas-de-Privacidade'>Política de privacidade</Link> e os{' '}
          <Link to='/Termos'>Termos de uso</Link> da Safe Solutions.
        </p>
      </form>
    </div>
  );
}

export default UserCad;

