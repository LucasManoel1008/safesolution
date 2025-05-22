import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../../css/servicoTamplate.module.css';
import axios from 'axios';

function ServicoTamplate() {
  const { id } = useParams();
  const [servico, setServico] = React.useState({});

  const buscarServicoSelecionado = async () => {
    try{
      axios.get(`http://localhost:8080/servico/${id}`)
      .then((response) => {
        setServico(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar serviço:", error);
      });
    }
    catch (error) {
      console.error("Erro ao buscar serviço:", error);
    }
  }
  useEffect(() => {
    buscarServicoSelecionado();
  }, [id]);

  return (
    <div className={`${styles.tamplate}`}>
      <div className={`${styles.tamplateContainer}`}>
        <h1>{servico.nome_servico}</h1>
      </div>
    </div>
  );
}

export default ServicoTamplate;