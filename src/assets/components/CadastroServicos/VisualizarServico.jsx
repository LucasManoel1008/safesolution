import React, { useEffect, useState } from 'react'
import axios from 'axios';

function VisualizarServico({onClick}) {

    const [dados, setDados] = useState([])

    const Busca = () => {
      axios.get("http://localhost:8080/servico")
      .then((response) => {
        setDados(response.data)
      })
      .catch(e => console.log(e.message))
    }

    useEffect(() => {
      Busca()
    }, [])

  return (
    <div className='servicos'>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Descrição</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, idx) => (
            <tr key={idx}>
              <th scope="row">{item.id}</th> {/* Supondo que "id" exista nos dados */}
              <td>{item.nome_servico}</td>
              <td>{item.descricao_servico}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className='btn btn-primary align-center adicionar' onClick={onClick}>Adicionar Serviço</button>
    </div>
  )
}

export default VisualizarServico;
