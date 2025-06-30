import React, { useEffect, useState, useRef } from 'react';
import style from '../../css/admpage.module.css';
import axios from 'axios';
import { useAdminContext } from '../../../pages/adm/Admpage';
 
function Container() {
  const [empresa, setEmpresa] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [selectedEmpresa, setSelectedEmpresa] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const tableRef = useRef(null);
  const { admData, setAdmData } = useAdminContext();
  
  const handleConfirmarAcao = async() => {
    if (selectedEmpresa) {
      setIsProcessing(true);
      try {
        if(selectedEmpresa.usuario.status_usuario) {
          await handleBloquearEmpresa(selectedEmpresa.cnpj);
        }
        else{
          await handleDesbloquearEmpresa(selectedEmpresa.cnpj);
        }
        await recuperarUsuario();
        setShowModal(false);
        setSelectedEmpresa(null);
      } catch (error) {
        console.error("Erro ao processar ação:", error);
      } finally {
        setIsProcessing(false);
      }
    }
  };

  const exibitConfirmacaoBloquearEmpresa = (empresaData) => {
    setSelectedEmpresa(empresaData);
    setShowModal(true);
  };
  
  const handleBloquearEmpresa = async(cnpj) => {
    try{
      await axios.put(`http://localhost:8080/empresa/${cnpj}/bloquear_cnpj`)
    }
    catch(error) {
      console.error("Erro ao bloquear empresa:", error);
      throw error;
    }
  }    
  
  const handleDesbloquearEmpresa = async(cnpj) => {
    try{
      await axios.put(`http://localhost:8080/empresa/${cnpj}/desbloquear_cnpj`)
    }
    catch(error) {
      console.error("Erro ao desbloquear empresa:", error);
      throw error;
    }
  }
  
  const recuperarUsuario = async () => {
    try{
      const response = await axios.get('http://localhost:8080/empresa');
      
      const dados = response.data.filter(empresa => {
        
        if (empresa.cnpj == admData.cnpj) return false;
        
        if (empresa.usuario?.nivel_acesso === 2) return false;
        return true;
      }); 
      
      setEmpresa(dados);
      setLoading(false);
      
      // Reinicializar DataTable após atualizar dados
      setTimeout(() => {
        if (tableRef.current && window.$) {
          getDataTable('#empresaTable');
        }
      }, 100);
    }
    catch(error) {
      console.error("Erro ao recuperar empresas:", error);
      setLoading(false);
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
                          <span>{empresa.usuario.nome_usuario}</span>
                        </div>
                      </td>
                      <td className="text-center">
                        <span className={`badge ${empresa.usuario.status_usuario ? 'bg-success' : 'bg-danger'}`}>
                          <i className={`fa-solid ${empresa.usuario.status_usuario ? 'fa-check-circle' : 'fa-times-circle'} me-1`}></i>
                          {empresa.usuario.status_usuario ? 'Ativo' : 'Bloqueado'}
                        </span>
                      </td>
                      <td className="text-center">
                        <div className="btn-group" role="group">
                          <button 
                            className={`btn btn-sm ${empresa.usuario.status_usuario ? 'btn-warning' : 'btn-success'}`}
                            onClick={() => exibitConfirmacaoBloquearEmpresa(empresa)}
                            title={empresa.usuario.status_usuario ? 'Bloquear empresa' : 'Desbloquear empresa'}
                          >
                            <i className={`fa-solid ${empresa.usuario.status_usuario ? 'fa-ban' : 'fa-unlock'} me-1`}></i>
                            {empresa.usuario.status_usuario ? 'Bloquear' : 'Ativar'}
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

      {/* Modal de Confirmação */}
      {showModal && selectedEmpresa && (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {selectedEmpresa.usuario?.status_usuario ? 'Bloquear' : 'Desbloquear'} usuário
                </h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setShowModal(false)}
                  aria-label="Close"
                  disabled={isProcessing}
                ></button>
              </div>
              <div className="modal-body">
                <div className="d-flex align-items-center mb-3">
                  <i className={`fa-solid ${selectedEmpresa.usuario?.status_usuario ? 'fa-ban text-warning' : 'fa-unlock text-success'} me-2`} style={{fontSize: '24px'}}></i>
                  <div>
                    <strong>{selectedEmpresa.nome_empresa}</strong>
                    <div className="text-muted small">CNPJ: {selectedEmpresa.cnpj}</div>
                  </div>
                </div>
                <p className="mb-0">
                  {selectedEmpresa.usuario?.status_usuario 
                    ? 'A conta ficará bloqueada e não poderá acessar o sistema. Deseja continuar?' 
                    : 'A conta será reativada e poderá acessar o sistema novamente. Deseja continuar?'
                  }
                </p>
                
                {isProcessing && (
                  <div className="mt-3 text-center">
                    <div className="spinner-border spinner-border-sm text-primary me-2" role="status">
                      <span className="visually-hidden">Processando...</span>
                    </div>
                    <small className="text-muted">Processando solicitação...</small>
                  </div>
                )}
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={() => setShowModal(false)}
                  disabled={isProcessing}
                >
                  Cancelar
                </button>
                <button 
                  type="button" 
                  className={`btn ${selectedEmpresa.usuario?.status_usuario ? 'btn-warning' : 'btn-success'}`}
                  onClick={handleConfirmarAcao}
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <div className="spinner-border spinner-border-sm me-2" role="status">
                        <span className="visually-hidden">Carregando...</span>
                      </div>
                      Processando...
                    </>
                  ) : (
                    <>
                      <i className={`fa-solid ${selectedEmpresa.usuario?.status_usuario ? 'fa-ban' : 'fa-unlock'} me-1`}></i>
                      {selectedEmpresa.usuario?.status_usuario ? 'Bloquear' : 'Reativar'}
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
 
export default Container;