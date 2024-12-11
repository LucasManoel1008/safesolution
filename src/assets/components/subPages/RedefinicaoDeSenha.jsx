import React, {useState } from 'react'
import '../../css/redefine.css'
import { useNavigate } from 'react-router-dom';

function RedefinicaoDeSenha() {
  
  const [senha1, setSenha1] = useState('');
  const [senha2, setSenha2] = useState('');
  const navigate = useNavigate();

  const validarSenha = (event) => {
    event.preventDefault();

    if (senha1.length < 8) {
      window.alert("Senha deve ter pelo menos 8 caracteres");
    } 
    else if (senha1 !== senha2) {
      window.alert("Senhas não correspondem");
    } 
    else {
      window.alert("Senha alterada com sucesso!");
      navigate('/Login');
    }
  };

  const handleInputPass1 = (e) => {
    setSenha1(e.target.value);
  };

  const handleInputPass2 = (e) => {
    setSenha2(e.target.value);
  };



  return (
   <div className='contentDefinirSas pt-2'>
    <h4 className='tituloderedeff pt-5'>Redefinir Senha</h4>
    <h6 className='subtitleredeff'>Autenticação concluída com sucesso.</h6>
    <p className='mensagemexplainredefff pb-2'>Crie uma nova senha.</p>
    <form onSubmit={validarSenha}>
      <input type='text' className='form-control criarsenha pt-1 pb-1 p-4' value={senha1} maxLength={16} onChange={handleInputPass1}  placeholder='Criar nova senha'  />
      <input type='text' className='form-control .criarsenha pt-1 pb-1 p-4' value={senha2} maxLength={16} onChange={handleInputPass2}  placeholder='Confirmar nova senha'  />
      <button role="submit" className="botãottottlogin btn btn-primary mt-4">Fazer login</button>
    </form>
   </div>
   
  )
}

export default RedefinicaoDeSenha