import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../../css/redefine.css';

function RedefinicaoDeSenha({email}) {
  
  const [senha1, setSenha1] = useState('');
  const [senha2, setSenha2] = useState('');
  const { token } = useParams(); // Pega o token da URL
  const navigate = useNavigate();

  const validarSenha = async (event) => {
    event.preventDefault();

    if (senha1.length < 8) {
      window.alert("Senha deve ter pelo menos 8 caracteres");
      return;
    }
    
    if (senha1 !== senha2) {
      window.alert("Senhas não correspondem");
      return;
    }
    const email_usuario = email;
    try {
      // Aqui você pode fazer uma requisição para o backend
      const response = await axios.put(`http://localhost:8080/usuario/${email_usuario}/senha`, {
        novaSenha: senha1,
      });

      if (response.status === 200) {
        window.alert("Senha alterada com sucesso!");
        navigate('/Login'); // Redireciona após sucesso
      }
    } catch (error) {
      console.error('Erro ao redefinir a senha:', error);
      window.alert('Erro ao redefinir a senha. Tente novamente.');
    }
  };

  return (
    <div className='contentDefinirSas pt-2'>
      <h4 className='tituloderedeff pt-5'>Redefinir Senha</h4>
      <h6 className='subtitleredeff'>Autenticação concluída com sucesso.</h6>
      <p className='mensagemexplainredefff pb-2'>Crie uma nova senha.</p>
      <form onSubmit={validarSenha}>
        <input
          type='password'
          className='form-control criarsenha pt-1 pb-1 p-4'
          value={senha1}
          maxLength={16}
          onChange={(e) => setSenha1(e.target.value)}
          placeholder='Criar nova senha'
          required
        />
        <input
          type='password'
          className='form-control criarsenha pt-1 pb-1 p-4'
          value={senha2}
          maxLength={16}
          onChange={(e) => setSenha2(e.target.value)}
          placeholder='Confirmar nova senha'
          required
        />
        <button type="submit" className="botãottottlogin btn btn-primary mt-4">
          Fazer login
        </button>
      </form>
    </div>
  );
}

export default RedefinicaoDeSenha;
