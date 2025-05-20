import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";
import styles from "./servicos.module.css";
import ServicosFiltter from "../../assets/components/Servicos/ServicosFiltter";
import ServicosContent from "../../assets/components/Servicos/ServicosContent";
import { ServicosContext } from "../../Services/ServicosFunctions/ServicosContextFunction";
import { ServicoLoaderContext } from "../../Services/ServicosFunctions/ServicosContextFunction";

function Servicos() {

  const [servicos, setServicos] = useState([]);
  const [loading, setLoading] = useState(true);

  const buscarServicos = () => {
  axios.get('http://localhost:8080/servico/listar')
    .then((response) => {
      setServicos(response.data); 
      sessionStorage.setItem('servicos', JSON.stringify(response.data)); // Armazena os serviços no sessionStorage
      console.log("Serviços recebidos:", response.data);
    })
    .catch((error) => { 
      console.error("Error fetching services:", error);
    }).finally(() => {
      console.log("Serviços carregados");
      setLoading(false);
    })
    
};

    useEffect(() => {
    buscarServicos();
  }, []);

  return (
    <div className={styles.servicos}>
      <section className={styles.conteudo}>
        <ServicosContext.Provider value={{ servicos, setServicos }}>
          <ServicoLoaderContext.Provider value={{ loading, setLoading }}>
            <ServicosFiltter  />
            <ServicosContent  />
          </ServicoLoaderContext.Provider>
        </ServicosContext.Provider>
      </section>
    </div>
  );
}

export default Servicos;
