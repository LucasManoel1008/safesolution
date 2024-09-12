import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/cadastro.css'
import Imagenspadroes from '../../shared/Imagespadroes'
function Cadastro() {
  const [cpf, setCpf] = useState("");


  const handleInputChange = (e) => {
    let valorCpf = e.target.value.replace(/\D/g, "");

    if (valorCpf.Length > 2){
      valorCpf = valorCpf.replace(/^(\d{2})(\d)/,"$1.$2");
    }

    setCpf(valorCpf)
  }
    
  return (
    <div className='cadastroContent'>
      
       <h4 className='mt-3'>Cadastro</h4>
       <div className="nameInput mt-4">
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
        <div className="cpfInput mt-4">
            <input type="text" className='form-control' placeholder='CPF' id='cpf' value={cpf} onChange={handleInputChange} maxLength={12}/>
          </div>
        <a href="/Cadastro2" role='button' className="continuarCadastro1 btn btn-primary mt-4">Continuar</a>
        <span>Ja possui uma conta? <Link to={"/Login"}>Entre já </Link></span>
        <p className='termos-e-politicas mt-4'>Ao continuar, afirmo que concordo com a <Link to="/Politica">Política de privacidade</Link> e os <Link to="/Termos">Termos de uso</Link> da Safe Solutions.</p>
        
      </div>
    
  )
}

export default Cadastro