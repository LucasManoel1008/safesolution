import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../css/cadastro.css';

function Cadastro1({setSection, setUserData}) {
  const [cpf, setCpf] = useState('');
  const [senha1, setSenha1] = useState('');
  const [nome, setNome] = useState('');
  const [sobreNome, setSobrenome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [senha2, setSenha2] = useState('');
  const [email, setEmail] = useState('');
  const nomeCompleto = nome + ' ' + sobreNome;
  const [erro, setErro] = useState('');

  const validarFormulario = (event) => {
    event.preventDefault();
    let data = $('#date').val().split('-')
    let anoNascimento = 2024 - data[0];
    const cleanedCPf =  cpf.replace(/[.-]/g, '');
    // Validações
    if (nome === '' || sobreNome === '') {
      setErro('Nome incompleto!');
      return false;
    } else if (email.length === 0 || email.indexOf('@') === -1) {
      setErro('Digite um endereço de email para prosseguir!');
      return false;
    }
    else if (data == null || data == 0){
      setErro("O campo deve ser preenchido")
      return false;
    }
    else if (anoNascimento < 18){
     setErro("Você deve ser maior de idade para se cadastrar no sistema" )
      return false;
    }
     else if (senha1.length < 8) {
      setErro('Senha deve ter pelo menos 8 caracteres');
      return false;
    } else if (senha1 !== senha2) {
     setErro('Senhas não correspondem');
      return false;
    } else if (cpf.length < 14) {
      setErro('Digite um CPF válido');
      return false;
    }

      const userData = {
        nome_usuario: nomeCompleto,
        senha_usuario: senha1,
        data_nascimento: dataNascimento,
        cpf: cleanedCPf,
        email,
    };
  
    setUserData(userData);
    setSection(2);
    // sessionStorage.setItem('usuario', JSON.stringify(userData));

    }
  
    
    

  const handleInputChangeCpf = (e) => {
    let cpf = e.target.value.replace(/\D/g, '');
    if (cpf.length > 2) {
      cpf = cpf.replace(/^(\d{3})(\d)/, '$1.$2');
    }
    if (cpf.length > 5) {
      cpf = cpf.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
    }
    if (cpf.length > 8) {
      cpf = cpf.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
    }
    
    setCpf(cpf);
  };

  const handleInputChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleInputChangeNome = (e) => {
    let nome = e.target.value.replace(/\d/g, '')
    setNome(nome);
  };

  const handleInputChangeSobreNome = (e) => {
    let sobrenome =e.target.value.replace(/\d/g, '')
    setSobrenome(sobrenome);
  };

  const handleInputPass1 = (e) => {
    setSenha1(e.target.value);
  };

  const handleInputPass2 = (e) => {
    setSenha2(e.target.value);
  };

  const handleInputDataNascimento = (e) => {
    setDataNascimento(e.target.value);
  };

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
            value={nome}
            onChange={handleInputChangeNome}
            
          />
          <p className='error'>{erro === "Nome incompleto!" ? erro : null}</p>
          </div>
          <div>
          <input
            type='text'
            className='form-control'
            placeholder='Último nome'
            value={sobreNome}
            onChange={handleInputChangeSobreNome}
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
            onChange={handleInputChangeEmail}
            autoComplete='off'
          />
          <p className='error'>{erro === "Digite um endereço de email para prosseguir!" ? erro : null}</p>
        </div>
        <div className='date mt-4 text-left'>
          <label className='float-left' htmlFor='date'>
            Data de nascimento
          </label>
          <input
            type='date'
            className='form-control'
            id='date'
            value={dataNascimento}
            onChange={handleInputDataNascimento}
          />
          <p className='error'>{erro === "O campo deve ser preenchido" || erro === "Você deve ser maior de idade para se cadastrar no sistema" ? erro : null}</p>
        </div>
        <div className='passwordInputCadastro mt-4 d-flex'>
          <div className='text-left'>
            <input
              onChange={handleInputPass1}
              type='password'
              className='form-control'
              placeholder='Digite uma senha'
              autoComplete='off'
            />
            <p className='error'>{erro === "Senha deve ter pelo menos 8 caracteres" || erro === "Senhas não correspondem" ? erro : null}</p>
          </div>
          <div>
            <input
              type='password'
              className='form-control'
              placeholder='Confirme sua senha'
              onChange={handleInputPass2}
              autoComplete='off'
            />
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
            onChange={handleInputChangeCpf}
            autoComplete='off'
          />
          <p className='error'>{erro === "Digite um CPF válido" ? erro : null}</p>
        </div>
        <button role='submit' className='continuarCadastro1 btn btn-primary mt-4'>
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

export default Cadastro1;

