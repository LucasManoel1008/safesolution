import React from 'react'
import '../../assets/css/cadastro.css'
import Imagenspadroes from '../../shared/Imagespadroes'
function Cadastro() {
    
  return (
    <div className='cadastroContent'>
       <img src={Imagenspadroes.logo} alt="Logo" width={200} className='logoCadastro' />
       <h4>Cadastro</h4>
       <div class="nameInput mt-4">
            <input type="text"  className="form-control" placeholder='Primeiro nome'/>
            <input type="text"  className="form-control" placeholder='Último nome'/>
        </div>
        <div className="email">
            <input type="email" className='form-control mt-4' placeholder='Email'/>
        </div>
        <div className="date mt-4">
            <label htmlFor="date">Data de nascimento</label>
            <input type="date" className='form-control' id="start" name="trip-start" />
        </div>
        <div className="passwordInputCadastro mt-4 d-flex">
            <input type="password" className='form-control' placeholder='Digite uma senha' />
            <input type="password" className='form-control' placeholder='Confirme sua senha' />
        </div>
        <a href="/Cadastro2" role='button' className="continuarCadastro1 btn btn-primary mt-4">Continuar</a>
        <span>Ja possui uma conta? <a href="/Login">Entre já</a></span>
        <p className='termos-e-politicas mt-4'>Ao continuar, afirmo que concordo com a <a href="/Politica">Política de privacidade</a> e os <a href="/Termos">Termos de uso</a> da Safe Solutions.</p>
    </div>
  )
}

export default Cadastro