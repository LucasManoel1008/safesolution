import React, { useEffect, useState } from 'react'
import axios from 'axios';
import FlatList from 'flatlist-react/lib';


function VisualizarServico({onClick}) {

    const [dados, setDados] = useState([])
    const Busca = () =>{
      axios.get("http://localhost:8080/servico")
      .then((response)=>{
        setDados(response.data)
      })
      .catch(e=> console.log(e.message))
    }
    useEffect(() => {
      Busca()
    }, [])
    
  const Coluna = (item,idx) =>{
    return(
      <div className="serviceBox p-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#ID</th>
              <th scope="col">Nome</th>
              <th scope="col">Descricao</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{item.id}</th>
              <td>{item.nome}</td>
              <td>{item.descricao}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
  
  return (

    <div className='servicos'>
      <ul>
        <FlatList list={dados} renderItem={Coluna}/>
      </ul>
     <button className='btn btn-primary align-center adicionar' onClick={onClick}>Adicionar Serviço</button>
  </div>
  )
}

export default VisualizarServico