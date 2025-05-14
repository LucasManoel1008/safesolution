import React, { useEffect, useState } from 'react';
import style from '../../css/admpage.module.css';
 
function Container() {
  const [usuarios, setUsuarios] = useState([]);
 
  useEffect(() => {
    // Mock de usuários
    setUsuarios([
      {
        id: 1,
        nome: 'João Silva',
        email: 'joao@email.com',
        tipo: 'cliente',
        status: 'online'
      },
      {
        id: 2,
        nome: 'Maria Santos',
        email: 'maria@email.com',
        tipo: 'prestador',
        status: 'offline'
      },
      {
        id: 3,
        nome: 'Carlos Andrade',
        email: 'carlos@email.com',
        tipo: 'admin',
        status: 'online'
      }
    ]);
  }, []);
 
  const handlePromover = (id) => {
    setUsuarios(prev =>
      prev.map(user =>
        user.id === id ? { ...user, tipo: 'admin' } : user
      )
    );
  };
 
  const handleToggleStatus = (id) => {
    setUsuarios(prev =>
      prev.map(user =>
        user.id === id
          ? {
            ...user,
            status: user.status === 'online' ? 'offline' : 'online'
          }
          : user
      )
    );
  };
 
  const handleExcluir = (id) => {
    setUsuarios(prev => prev.filter(user => user.id !== id));
  };
 
  return (
    <div className={style.Admcontainer}>
      <h2>Usuários</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ textAlign: 'left', borderBottom: '2px solid #ccc' }}>
            <th style={{ padding: '12px 16px' }}>ID</th>
            <th style={{ padding: '12px 16px' }}>Nome</th>
            <th style={{ padding: '12px 16px' }}>Email</th>
            <th style={{ padding: '12px 16px' }}>Tipo</th>
            <th style={{ padding: '12px 16px' }}>Status</th>
            <th style={{ padding: '12px 16px' }}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '10px 16px' }}>{usuario.id}</td>
              <td style={{ padding: '10px 16px' }}>{usuario.nome}</td>
              <td style={{ padding: '10px 16px' }}>{usuario.email}</td>
              <td style={{ padding: '10px 16px' }}>{usuario.tipo}</td>
              <td style={{ padding: '10px 16px' }}>
                {usuario.status === 'online' ? (
                  <span style={{ color: 'green' }}>🟢 online</span>
                ) : (
                  <span style={{ color: 'gray' }}>⚪ offline</span>
                )}
              </td>
              <td style={{ padding: '10px 16px' }}> 
                <button className='btn btn-secondary' onClick={() => handleToggleStatus(usuario.id)} style={{ marginRight: 5 }}>
                  {usuario.status === 'online' ? 'Bloquear' : 'Desbloquear'}
                </button>
                <button className='btn btn-danger' onClick={() => handleExcluir(usuario.id)}>
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
 
export default Container;