import React, { useEffect, useState } from 'react';
import styles from '../../../pages/Servicos/servicos.module.css';
import ImagensUser from '../../../shared/ImagensUser';
import axios from "axios";
import ServicesLoading from './ServicesLoading';
function ServicosContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [servicos, setServicos] = useState([]);
  const [loading, setLoading] = useState(true);

  const buscarServicos = () => {
    axios.get('http://localhost:8080/servico')
      .then((response) => {
        setServicos(response.data); 
        console.log("Serviços recebidos:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      }).finally(() => {
        setLoading(false);
      })
      
  };

  useEffect(() => {
    buscarServicos();
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
          <i className="fa fa-search"></i>
        </button>
      </div>
      <div>
        {loading == true ? (
          <ServicesLoading />
        ) : (
          servicos.length > 0 ? (
            servicos.map((servico, idx) => (
              <div key={idx}>
                <div className={`${styles.servicosBox} mt-3`}>
                  <div className={styles.item1}>
                    <img src={ImagensUser.paladins} width={50} height={50} alt="Empresa Logo" />
                    <div className={styles.servicoInfo}>
                      <h6 className="blue2">{servico.nome_servico}</h6>
                      <p className={styles.textServico}>{servico.empresa.nome_empresa}</p>
                      <p className={styles.textServico}>{servico.local_servico}</p>
                    </div>
                  </div>
            
                  <div className={styles.item2}>
                    <p className={styles.precoServico}>R$ {servico.valor_estimado_servico}</p>
                    <span className="tempoServico">{servico.disponibilidade_servico}</span>
                  </div>
                </div>
                <hr />
              </div>
            ))
          ) : (
            <div className="text-center">
              <h5>Nenhum serviço encontrado</h5>
            </div>
          )
        )}
        
        
      </div>
    </div>

    
  );
}

export default ServicosContent;
