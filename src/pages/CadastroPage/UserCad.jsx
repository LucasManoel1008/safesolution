import React, { useState, useEffect } from 'react';
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
  const [error, setError] = useState({});
  const completeName = `${name} ${lastName}`

  useEffect(() => {
    backupUserData()
  }, [])

  const backupUserData = () => {
    const useBackup = JSON.parse(sessionStorage.getItem('userBackup'))
    if(useBackup){
      setName(useBackup.name)
      setLastName(useBackup.lastName)
      setEmail(useBackup.email)
      setBirthDate(useBackup.birthDate)
      setCpf(useBackup.cpf)
    }
  }

  const backupData = {
    name,
    lastName,
    email,
    birthDate,
    cpf,
  }

  const inputValues = {
    name,
    completeName,
    lastName,
    email,
    cpf,
    password,
    confirmPassword,
    birthDate: check.formatBirthDate(birthDate),
  }

  const validarFormulario = async (e) => {
    e.preventDefault()
    if (await check.checkInputValues(inputValues, setError) == false)  {
      return;
    }
    const data_nascimento = new Date(birthDate)
    const userData = {
      nome_usuario: `${name} ${lastName}`,
      senha_usuario: password,
      data_nascimento,
      cpf: check.sanitizeCpf(cpf),
      email,
    };
    setError({})
    setUserData(userData)
    sessionStorage.setItem('userBackup', JSON.stringify(backupData))
    setSection(2)
  }

  return (
    <div className='cadastroContent'>

      <h4 className='mt-3'>Cadastro</h4>

      <form onSubmit={validarFormulario} autoComplete='off'>
        <div className='nameInput mt-4'>
          <div className='text-left'>
          <input
            type='text'
            className='form-control'
            placeholder='Primeiro nome'
            value={name ?? ''}
            onChange={(e) => handleInput.handleInputChangeName(e, setName)}
            
          />
          {error.nome && <span className='error'>{error.nome}</span>}
          </div>
          <div>
          <input
            type='text'
            className='form-control'
            placeholder='Último nome'
            value={lastName ?? ''}
            onChange={(e) => handleInput.handleInputChangeLastName(e, setLastName)}
            autoComplete='off'
          />
          {error.lastName && <span className='error float-left'>{error.lastName}</span>}
          </div>
        </div>
        <div className='email text-left'>
          <input
            type='email'
            className='form-control mt-4'
            placeholder='Email'
            value={email ?? ''}
            onChange={(e) => handleInput.handleInputChangeEmail(e, setEmail)}
            autoComplete='off'
          />
          {error.email && <span className='error'>{error.email}</span>}
        </div>
        <div className='date mt-4 text-left'>
          <label className='float-left' htmlFor='date'>
            Data de nascimento
          </label>
          <input
            type='text'
            className='form-control'
            id='date'
            value={birthDate ?? ''}
            placeholder='dd/mm/aaaa'
            maxLength={10}
            onChange={(e) => handleInput.handleInputBirthDate(e, setBirthDate)}
          />
          {error.birthDate && <span className='error'>{error.birthDate}</span>}
        </div>
        <div className='passwordInputCadastro mt-4 d-flex'>
          <div className='text-left'>
            <input
              onChange={(e) => handleInput.handleInputPassword(e, setPassword)}
              type='password'
              className='form-control'
              placeholder='Digite uma senha'
              autoComplete='new-password'
              
              value={password ?? ''}
            />
            {error.password && <span className='error'>{error.password}</span>}
          </div>
          <div>
            <input
              type='password'
              className='form-control'
              placeholder='Confirme sua senha'
              onChange={(e) => handleInput.handleInputConfirmPassword(e, setConfirmPassword)}
              autoComplete='new-password'
              value={confirmPassword ?? ''}
            />
            {error.password && <span className='error float-left'>{error.password}</span>}
          </div>
        </div>
        <div className='cpfInput mt-4 text-left'>
          <input
            type='text'
            className='form-control'
            placeholder='CPF'
            id='cpf'
            maxLength={14}
            value={cpf ?? ''}
            onChange={(e) => handleInput.handleInputChangeCpf(e, setCpf)}
            autoComplete='off'
          />
          {error.cpf && <span className='error'>{error.cpf}</span>}
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

