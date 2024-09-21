import React from 'react'

function VisualizarServico({onClick}) {
  return (

      <div className='servicos'>
      <div className="serviceBox p-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#ID</th>
              <th scope="col">Nome</th>
              <th scope="col">Data de Adição</th>
              <th scope="col">Pedidos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1982</th>
              <td>Montagem de máquinas</td>
              <td>25/06/2024</td>
              <td>27</td>
            </tr>
            <tr>
              <th scope="row">2135</th>
              <td>Instalação de Redes</td>
              <td>08/09/2024</td>
              <td>12</td>
            </tr>
          </tbody>
        </table>
      </div>
     <button className='btn btn-primary align-center adicionar' onClick={onClick}>Adicionar Serviço</button>
  </div>
  )
}

export default VisualizarServico