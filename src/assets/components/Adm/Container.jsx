import React, { useEffect, useState } from 'react';
import style from '../../css/admpage.module.css';
import axios from 'axios';
 
function Container() {
  const [empresa, setEmpresa] = useState([]);
  const [isLoading, setLoading] = useState(true)
  
  
  const recuperarUsuario = async () => {
    try{
      await axios.get('http://localhost:8080/empresa')
      .then((response) =>{
        console.log(response.data)
        setEmpresa(response.data)
        setLoading(false)
      }).catch((error) => {
        console.log(error)
      })
    }
    catch{
      console.log("Erro no banco")
    }
    
  }
  useEffect(() =>{
    recuperarUsuario()
  }, [])
  
 
  const handlePromover = (id) => {
    setEmpresa(prev =>
      prev.map(user =>
        user.id === id ? { ...user, tipo: 'admin' } : user
      )
    );
  };
 
  const handleToggleStatus = (id) => {
    setEmpresa(prev =>
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
    setEmpresa(prev => prev.filter(user => user.id !== id));
  };
 
  return (
    <div className={style.Admcontainer}>
      <h2>Usuários</h2>
      
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ textAlign: 'left', borderBottom: '2px solid #ccc' }}>
            <th style={{ padding: '12px 16px' }}>CPF</th>
            <th style={{ padding: '12px 16px' }}>Nome empresa</th>
            <th style={{ padding: '12px 16px' }}>Email</th>
            <th style={{ padding: '12px 16px' }}>Dono</th>
            <th style={{ padding: '12px 16px' }}>Ações</th>
          </tr>
        </thead>
        {isLoading ? 
        <tr>
        <td colSpan="6" className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Carregando...</span>
            </div>
        </td>
      </tr>
        :
        <tbody>
        {empresa.map((empresa) => (
          <tr key={empresa.cnpj} style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '10px 16px' }}>{empresa.cnpj}</td>
            <td style={{ padding: '10px 16px' }}>{empresa.nome_empresa}</td>
            <td style={{ padding: '10px 16px' }}>{empresa.usuario.email}</td>
            <td style={{ padding: '10px 16px' }}>{empresa.usuario.nome_usuario}</td>
            
            <td style={{ padding: '10px 16px' }}> 
              <button className='btn btn-secondary' onClick={() => handleToggleStatus(empresa.cnpj)} style={{ marginRight: 5 }}>
                {empresa.status === 'online' ? 'Bloquear' : 'Desbloquear'}
              </button>
              <button className='btn btn-danger' onClick={() => handleExcluir(empresa.cnpj)}>
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    }
        
 
      </table>
    </div>
  );
 
 
}
 
export default Container;