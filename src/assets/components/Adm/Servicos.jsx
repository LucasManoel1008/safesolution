import React, { useEffect, useState } from 'react';
import style from '../../css/admpage.module.css';
 
function Servicos() {
  const [servicos, setServicos] = useState([]);
 
  useEffect(() => {
    // Mock de dados
    setServicos([
      { id: 1, nome: 'Manutenção elétrica', tipo: 'Residencial', status: 'ativo' },
      { id: 2, nome: 'Limpeza de piscina', tipo: 'Comercial', status: 'inativo' },
      { id: 3, nome: 'Pintura', tipo: 'Residencial', status: 'ativo' }
    ]);
  }, []);
 
  const handleAtivarToggle = (id) => {
    setServicos(prev =>
      prev.map(servico =>
        servico.id === id
          ? { ...servico, status: servico.status === 'ativo' ? 'inativo' : 'ativo' }
          : servico
      )
    );
  };
 
  const handleExcluir = (id) => {
    setServicos(prev => prev.filter(servico => servico.id !== id));
  };
 
  return (
    <div className={style.Admcontainer}>
      <h2>Serviços</h2>
      <table className={style.tabelaUsuarios}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {servicos.map(servico => (
            <tr key={servico.id}>
              <td>{servico.id}</td>
              <td>{servico.nome}</td>
              <td>{servico.tipo}</td>
              <td>
                {servico.status === 'ativo' ? (
                  <span className={style.statusOnline}>🟢 ativo</span>
                ) : (
                  <span className={style.statusOffline}>⚪ inativo</span>
                )}
              </td>
              <td>
                <button onClick={() => handleAtivarToggle(servico.id)}>
                  {servico.status === 'ativo' ? 'Desativar' : 'Ativar'}
                </button>
                <button onClick={() => handleExcluir(servico.id)} className={style.btnExcluir}>
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
 
export default Servicos;