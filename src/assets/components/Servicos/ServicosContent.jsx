import React, { useContext, useState } from 'react';
import styles from '../../../pages/Servicos/servicos.module.css';
import ImagensUser from '../../../shared/ImagensUser';
import axios from "axios";
import ServicesLoading from './ServicesLoading';
import { ServicosContext } from '../../../Services/ServicosFunctions/ServicosContextFunction';
import { ServicoLoaderContext } from '../../../Services/ServicosFunctions/ServicosContextFunction';
function ServicosContent() {

  const [pesquisa, setSearchTerm] = useState('');
  const {servicos, setServicos} = useContext(ServicosContext);
  const [servicosPesquisados, setServicosPesquisados] = useState([]);
  const {loading, setLoading} = useContext(ServicoLoaderContext);

  

  const formatarData = (data) => {
    const dataFormatada = new Date(data);
    const opcoes = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const dataFormatadaString = dataFormatada.toLocaleDateString('pt-BR', opcoes);
    return dataFormatadaString;
  }

  const realizarPesquisa = async (e) => {
    e.preventDefault();
    if (pesquisa === '') {
      setServicosPesquisados([]);
      return;
    }
    setLoading(true);
    console.log("🔎 Enviando filtros:" + pesquisa) ;
    try{
        const response = await axios.post('http://localhost:8080/servico/pesquisar', servicos, {
            params: {
                pesquisa: pesquisa
            }
        }
        );
        setServicosPesquisados(response.data);
        console.log("Serviços filtrados:", response.data);    
    }
    catch (error) {
        console.error("Erro ao filtrar serviços:", error);
    }
    finally{
        setLoading(false);
    }
  }



  return (
    <div className={styles.servicosContent} style={{ maxWidth: '70%', marginRight: '10%' }}>
      <div className="d-flex align-items-center">
        <div className="form-outline flex-grow-1">
          <input
            type="search"
            id="form1"
            className="form-control"
            placeholder="Pesquisar..."
            onChange={(e) => {
              setSearchTerm(e.target.value);
              realizarPesquisa(e);
            }}
          />
        </div>
        <button className="btn btn-primary ms-2" onClick={realizarPesquisa}>
          <i className="fa fa-search"></i>
        </button>
      </div>
      <div>
        {loading == true ? (
          <ServicesLoading />
        ) : (
          servicosPesquisados.length > 0 ? (
            servicosPesquisados.map((servico, idx) => (
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
                    <p className={styles.precoServico}>Preço inicial: R$ {servico.valor_estimado_servico}</p>
                    <span className="tempoServico">Postado em: {formatarData(servico.disponibilidade_servico)}</span>
                  </div>
                </div>
                <hr />
              </div>
            ))
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
                    <p className={styles.precoServico}>Preço inicial: R$ {servico.valor_estimado_servico}</p>
                    <span className="tempoServico">Postado em: {formatarData(servico.disponibilidade_servico)}</span>
                  </div>
                </div>
                <hr />
              </div>
            ))
          ) : (
            <div className="text-center">
              <h5>Nenhum serviço encontrado</h5>
            </div>
          ))
        )}
        
        
      </div>
    </div>

    
  );
}

export default ServicosContent;
