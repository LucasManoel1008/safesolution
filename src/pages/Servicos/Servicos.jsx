import React, { useState } from "react";
import styles from "./servicos.module.css";
import ServicosFiltter from "../../assets/components/Servicos/ServicosFiltter";
import ServicosContent from "../../assets/components/Servicos/ServicosContent";
import Filtros from "../../assets/js/Filtros";

const servicosData = [
  { nome: "Limpeza Residencial", categoria: "Limpeza", preco: 100, data: "2025-04-01", area: "São Paulo" },
  { nome: "Limpeza Residencial", categoria: "Limpeza", preco: 80, data: "2025-04-01", area: "Barra funda" },
  { nome: "Montagem de Computador", categoria: "Eletrônicos", preco: 150, data: "2025-04-02", area: "Barra funda" },
  { nome: "Manutenção de Jardim", categoria: "Jardinagem", preco: 200, data: "2025-04-03", area: "Osasco" },
  { nome: "Conserto de Carro", categoria: "Conserto", preco: 2000, data: "2025-04-04", area: "Itapevi" },
  { nome: "Reparo de Encanamento", categoria: "Encanador", preco: 180, data: "2025-04-05", area: "Barueri" },
];

function Servicos() {
  const [filtros, setFiltros] = useState(new Filtros({}));
  const handleFilterChange = (novosFiltros) => {
    console.log("✅ Recebendo filtros:", novosFiltros);
    setFiltros(new Filtros(novosFiltros));
  };

  const servicosFiltrados = filtros.aplicar(servicosData);

  console.log("🎯 Serviços filtrados:", servicosFiltrados);

  return (
    <div className={styles.servicos}>
      <section className={styles.conteudo}>
        <ServicosFiltter onFilterChange={handleFilterChange} />
        <ServicosContent servicos={servicosFiltrados} />
      </section>
    </div>
  );
}

export default Servicos;
