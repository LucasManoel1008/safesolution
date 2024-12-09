import React, { useEffect, useState } from 'react'
import axios from 'axios';

function VisualizarServico({onClick}) {
    const [time, setTime] = useState(10); // Tempo inicial (em segundos)

    useEffect(() => {
    if (time <= 0) return "Não foram encontrados serviços cadastrados"; // Para o timer ao atingir zero
    else {<div className="spinner-border text-primary text-center d-block" role="status">
            <span className="visually-hidden">Carregando...</span>
          </div>}

    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1); // Reduz 1 a cada segundo
    }, 1000);

    return () => clearInterval(timer); // Limpa o intervalo ao desmontar o componente
  }, [time]);
    


    const [dados, setDados] = useState([])
  
    const Busca = () => {
      axios.get("http://localhost:8080/servico")
      .then((response) => {
        setDados(response.data)

      })
      .catch(() => {
        
      })
    }

    useEffect(() => {
      Busca()
    }, [])

  return (
    <div className='servicos mt-4'>
      
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Categoria</th>
            <th scope='col'>Atuação</th>
            <th scope="col">Status</th>
            <th scope='col'>Ações</th>
          </tr>
        </thead>
        
        <tbody>
          
          {dados.map((item, idx) => (
            <tr key={idx}>
              <th scope="row">{item.id}</th>
              <td>{item.nome_servico}</td>
              <td>{item.categoria_servico}</td>
              <td>{item.local_servico}</td>
              <td>{item.status_servico ? 'Ativo' : 'Inativo'}</td>
              <td><button className="btn btn-primary">Visualizar</button> <button className='btn btn-secondary'>Editar</button> <button className='btn btn-danger'>Excluir</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='w-100 text-center d-flex justify-content-center mb-4'>
      {time > 0 && dados.length === 0 ?  (
        <div className="spinner-border text-primary text-center d-block" role="status">
          <span className="visually-hidden">Carregando...</span>
        </div>
      ) : (
        <p className="text-center">{dados.length === 0 ? "Não foram encontrados serviços cadastrados" : null}</p>
      )}    
      </div>
      <button className='btn btn-primary align-center adicionarServico' onClick={onClick}>Adicionar Serviço</button>
    </div>
  )
}

export default VisualizarServico;
