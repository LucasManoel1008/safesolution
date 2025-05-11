import React, { useEffect, useState } from 'react';
import { getUserData } from '../../../Services/CadastroServicoFunctions/CadastroServicoFunctions';
import { fetchUserData, removeService } from '../../../Services/CadastroServicoFunctions/CadastroServicoApiRequest';

function VisualizarServico({ onOptionChange }) {
  const [time, setTime] = useState(10); // Tempo inicial (em segundos)
  const [message, setMessage] = useState(""); // Mensagem a ser exibida
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carregamento


   useEffect(() => {
    if (time <= 0 && dados.length === 0) {
      setMessage("Não foram encontrados serviços cadastrados");
      return;
    }
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 80);
    return () => clearInterval(timer);
  }, [time]);


  useEffect(() => {
    fetchServiceData();
  }, []);

  const fetchServiceData = async () => {
    if (!getUserData()) return;
    const empresaString = getUserData();
    setLoading(true);
    try{
      fetchUserData(empresaString.cnpj, setDados);
    } catch(error) {
      setMessage("Erro ao buscar serviços");
    }
     finally {
      setLoading(false);
     }
  } 

  const deleteService = async (id) => {
    setLoading(true);
    try {
      await removeService(id);
      setDados(dados.filter((servico) => servico.id !== id));
    } catch (error) {
      setMessage("Erro ao deletar serviço.");
    }
    finally {
      setLoading(false);
    }
  }

  const handleEditService = (id) => {
    onOptionChange("Editar", id);
  }

  return (
    <div className='servicos mt-4'>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Categoria</th>
            <th scope="col">Atuação</th>
            <th scope="col">Status</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {dados.length > 0 ? (
            dados.map((item, idx) => (
              <tr key={idx}>
                <th scope="row">{item.id}</th>
                <td>{item.nome_servico}</td>
                <td>{item.categoria_servico}</td>
                <td>{item.local_servico}</td>
                <td>{item.status_servico ? 'Ativo' : 'Inativo'}</td>
                <td>
                  <button className="btn btn-primary mr-2">Visualizar</button>
                  <button className="btn btn-secondary mr-2" onClick={() => handleEditService(item.id)}>Editar</button>
                  <button className="btn btn-danger" onClick={() => deleteService(item.id)}>Excluir</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                {loading ? (
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Carregando...</span>
                  </div>
                ) : (
                  <p>{message}</p>
                )}
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="w-100 text-center d-flex justify-content-center mb-4">
        {time > 0 && dados.length === 0 && !loading ? (
          <div className="spinner-border text-primary text-center d-block" role="status">
            <span className="visually-hidden">Carregando...</span>
          </div>
        ) : null}
      </div>

      <button className='btn btn-primary align-center adicionarServico mb-4' onClick={() => onOptionChange("Cadastrar")}>Adicionar Serviço</button>

    </div>
  );
}

export default VisualizarServico;
