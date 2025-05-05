import React, {useEffect, useState} from 'react';
import styles from '../../../pages/Servicos/servicos.module.css';
import axios from "axios";

function ServicosContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [servicos, setServicos] = useState();

  const buscarServicos = () => {
      axios.get('http://localhost:8080/servico')
          .then((response)=>{
              console.log(response.data)
          })


  };

    useEffect(() => {
        buscarServicos()
    }, []);

  return (
    <div className={styles.servicosContent} style={{ maxWidth: '70%', marginRight: '10%' }}>
      <div className="d-flex align-items-center">
        <div className="form-outline flex-grow-1">
          <input
            type="search"
            id="form1"
            className="form-control"
            placeholder="Pesquisar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}


          />
        </div>
        <button className="btn btn-primary ms-2">
          <i className="fa fa-search"></i> {}
        </button>
      </div>

      {/* Tabela de Serviços */}
      <div style={{ marginTop: '20px' }}>
        {1 > 0 ? (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Categoria</th>
                <th>Preço</th>
                <th>Data</th>
                <th>Área</th>
              </tr>
            </thead>
            <tbody>

            </tbody>
          </table>
        ) : (
          <p>Nenhum serviço encontrado.</p>
        )}
      </div>
    </div>
  );
}

export default ServicosContent;
