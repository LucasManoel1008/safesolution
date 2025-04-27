import React, { useState } from 'react';
import styles from '../../../pages/Servicos/servicos.module.css';

function ServicosContent({ servicos = [] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredServicos, setFilteredServicos] = useState(servicos);



  const handleSearch = () => {
    const filtered = servicos.filter((servico) =>
      servico.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredServicos(filtered);
  };

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
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
        </div>
        <button className="btn btn-primary ms-2" onClick={handleSearch}>
          <i className="fa fa-search"></i> {}
        </button>
      </div>

      {/* Tabela de Serviços */}
      <div style={{ marginTop: '20px' }}>
        {filteredServicos.length > 0 ? (
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
              {filteredServicos.map((servico, index) => (
                <tr key={index}>
                  <td>{servico.nome}</td>
                  <td>{servico.categoria}</td>
                  <td>R$ {servico.preco}</td>
                  <td>{servico.data}</td>
                  <td>{servico.area}</td>
                </tr>
              ))}
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
