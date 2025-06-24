import React, { useEffect, useState, useRef } from 'react';
import style from '../../css/admpage.module.css';
import axios from 'axios';
import { useAdminContext } from '../../../pages/adm/Admpage';
 
function Container() {
  const [empresa, setEmpresa] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const tableRef = useRef(null);
  const { admData, setAdmData } = useAdminContext();
  
  
  const recuperarUsuario = async () => {
    try{
      await axios.get('http://localhost:8080/empresa')
      .then((response) =>{        
        setEmpresa(response.data)
        setLoading(false)
        // Inicializar DataTable após carregar os dados
        setTimeout(() => {
          if (tableRef.current && window.$) {
            getDataTable('#empresaTable');
          }
        }, 100);
      }).catch((error) => {
        console.log(error)
        setLoading(false)
      })
    }
    catch{
      console.log("Erro no banco")
      setLoading(false)
    }
  }
  function getDataTable(id) {
    // Verificar se DataTables já foi inicializado
    if (window.$ && window.$.fn.DataTable) {
      // Destruir instância existente se houver
      if (window.$.fn.DataTable.isDataTable(id)) {
        window.$(id).DataTable().destroy();
      }
      
      // Inicializar DataTable
      window.$(id).DataTable({
        "ordering": true,
        "paging": true,
        "pageLength": 10,
        "searching": true,
        "info": true,
        "responsive": true,
        "language": {
          "sEmptyTable": "Nenhum registro encontrado na tabela",
          "sInfo": "Mostrar _START_ até _END_ de _TOTAL_ registros",
          "sInfoEmpty": "Mostrar 0 até 0 de 0 Registros",
          "sInfoFiltered": "(Filtrar de _MAX_ total registros)",
          "sLengthMenu": "Mostrar _MENU_ registros por página",
          "sLoadingRecords": "Carregando...",
          "sProcessing": "Processando...",
          "sZeroRecords": "Nenhum registro encontrado",
          "sSearch": "Pesquisar:",
          "oPaginate": {
            "sNext": "Próximo",
            "sPrevious": "Anterior",
            "sFirst": "Primeiro",
            "sLast": "Último"
          }
        }
      });
    }
  }
  useEffect(() => {
    recuperarUsuario()
    
    // Cleanup function para destruir DataTable ao desmontar componente
    return () => {
      if (window.$ && window.$.fn.DataTable && window.$.fn.DataTable.isDataTable('#empresaTable')) {
        window.$('#empresaTable').DataTable().destroy();
      }
    };
  }, [])
  
  const handleToggleStatus = (cnpj) => {
    setEmpresa(prev =>
      prev.map(empresa =>
        empresa.cnpj === cnpj
          ? {
            ...empresa,
            status: empresa.status === 'online' ? 'offline' : 'online'
          }
          : empresa
      )
    );
  };
 
  const handleExcluir = (cnpj) => {
    if (window.confirm('Tem certeza que deseja excluir esta empresa?')) {
      setEmpresa(prev => prev.filter(empresa => empresa.cnpj !== cnpj));
    }
  };
 
  return (
    <div className={style.Admcontainer}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">
          <i className="fa-solid fa-users me-2"></i>
          Gerenciar Empresas
        </h2>
        <div className="badge bg-primary fs-6">
          Total: {empresa.length} empresas
        </div>
      </div>
      
      <div className="card shadow-sm">
        <div className="card-body">
          {isLoading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Carregando...</span>
              </div>
              <p className="mt-2 text-muted">Carregando dados das empresas...</p>
            </div>
          ) : (
            <div className="table-responsive">
              <table 
                ref={tableRef}
                id="empresaTable" 
                className="table table-hover table-striped"
                style={{ width: '100%' }}
              >
                <thead className="table-dark">
                  <tr>
                    <th className="text-center">
                      <i className="fa-solid fa-id-card me-1"></i>
                      CNPJ
                    </th>
                    <th>
                      <i className="fa-solid fa-building me-1"></i>
                      Nome da Empresa
                    </th>
                    <th>
                      <i className="fa-solid fa-envelope me-1"></i>
                      Email
                    </th>
                    <th>
                      <i className="fa-solid fa-user-tie me-1"></i>
                      Responsável
                    </th>
                    <th className="text-center">
                      <i className="fa-solid fa-circle-info me-1"></i>
                      Status
                    </th>
                    <th className="text-center">
                      <i className="fa-solid fa-cogs me-1"></i>
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {empresa.map((empresa, index) => (
                    <tr key={empresa.cnpj || index}>
                      <td className="text-center font-monospace">
                        <small>{empresa.cnpj}</small>
                      </td>
                      <td>
                        <div className="fw-bold text-primary">
                          {empresa.nome_empresa}
                        </div>
                      </td>
                      <td>
                        <a href={`mailto:${empresa.usuario?.email}`} className="text-decoration-none">
                          {empresa.usuario?.email}
                        </a>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="bg-secondary rounded-circle d-flex align-items-center justify-content-center me-2" 
                               style={{width: '32px', height: '32px'}}>
                            <i className="fa-solid fa-user text-white" style={{fontSize: '12px'}}></i>
                          </div>
                          <span>{empresa.usuario?.nome_usuario}</span>
                        </div>
                      </td>
                      <td className="text-center">
                        <span className={`badge ${empresa.status === 'online' ? 'bg-success' : 'bg-danger'}`}>
                          <i className={`fa-solid ${empresa.status === 'online' ? 'fa-check-circle' : 'fa-times-circle'} me-1`}></i>
                          {empresa.status === 'online' ? 'Ativo' : 'Bloqueado'}
                        </span>
                      </td>
                      <td className="text-center">
                        <div className="btn-group" role="group">
                          <button 
                            className={`btn btn-sm ${empresa.status === 'online' ? 'btn-warning' : 'btn-success'}`}
                            onClick={() => handleToggleStatus(empresa.cnpj)}
                            title={empresa.status === 'online' ? 'Bloquear empresa' : 'Desbloquear empresa'}
                          >
                            <i className={`fa-solid ${empresa.status === 'online' ? 'fa-ban' : 'fa-unlock'} me-1`}></i>
                            {empresa.status === 'online' ? 'Bloquear' : 'Ativar'}
                          </button>
                          <button 
                            className="btn btn-sm btn-danger"
                            onClick={() => handleExcluir(empresa.cnpj)}
                            title="Excluir empresa"
                          >
                            <i className="fa-solid fa-trash me-1"></i>
                            Excluir
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
 
 
}
 
export default Container;