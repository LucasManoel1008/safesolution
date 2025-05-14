import React, { useEffect, useState } from 'react';
import style from '../../css/admpage.module.css';
 
function Mensagens() {
  const [mensagens, setMensagens] = useState([]);
 
  useEffect(() => {
    // Mock de dados
    setMensagens([
      {
        id: 1,
        nome: 'Ana Souza',
        email: 'ana@email.com',
        assunto: 'Problema no agendamento',
        mensagem: 'Não consegui agendar um serviço no app.'
      },
      {
        id: 2,
        nome: 'Pedro Lima',
        email: 'pedro@email.com',
        assunto: 'Dúvida sobre pagamento',
        mensagem: 'Gostaria de saber se posso pagar em duas vezes.'
      }
    ]);
  }, []);
 
  return (
    <div className={style.Admcontainer}>
      <h2>Mensagens</h2>
      <table className={style.tabelaUsuarios}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Assunto</th>
            <th>Mensagem</th>
          </tr>
        </thead>
        <tbody>
          {mensagens.map(msg => (
            <tr key={msg.id}>
              <td>{msg.id}</td>
              <td>{msg.nome}</td>
              <td>{msg.email}</td>
              <td>{msg.assunto}</td>
              <td>{msg.mensagem}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
 
export default Mensagens;