import React, { useState } from "react";
import styles from "./servicos.module.css";
import ServicosFiltter from "../../assets/components/Servicos/ServicosFiltter";
import ServicosContent from "../../assets/components/Servicos/ServicosContent";
import Filtros from "../../assets/js/Filtros";


function Servicos() {
  const [filtros, setFiltros] = useState(new Filtros({}));

  return (
    <div className={styles.servicos}>
      <section className={styles.conteudo}>
        <ServicosFiltter  />
        <ServicosContent  />
      </section>
    </div>
  );
}

export default Servicos;
