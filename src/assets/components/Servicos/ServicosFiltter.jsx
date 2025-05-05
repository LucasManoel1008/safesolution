import React, { useState } from "react";
import styles from "../../../pages/Servicos/servicos.module.css";
import axios from "axios";

function ServicosFiltter({ onFilterChange }) {
  const [categoria, setCategoria] = useState("");
  const [data, setData] = useState("");
  const [precoMax, setPrecoMax] = useState(0);
  const [area, setArea] = useState("");

  const aplicarFiltros = () => {
    const filtros = { categoria, data, precoMax, area };
    console.log("🔎 Aplicando filtros:", filtros);
    onFilterChange(filtros);
  };

  const enviarFiltros = (e) => {
    e.preventDefault();
    const FiltroServicos={
        categoria, data, precoMax, area
    }


    axios.post('http://localhost:8080/servico/filtrar');
  }

  return (


      <form onSubmit={(e) => enviarFiltros(e)} >

          <div className={`${styles.servicosFiltter}`}>
              <div className={`${styles.filtroHeader}`}>
                  <h5>Filtros</h5>
              </div>
              <hr/>


              <div className="categoriaFiltro mb-4">
                  <span>Categoria</span>
                  <select className="form-select w-75" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                      <option value="">Todas</option>
                      <option value="Conserto">Conserto</option>
                      <option value="Jardinagem">Limpeza</option>
                      <option value="Segurança">Segurança</option>
                      <option value="Encanador">Encanador</option>
                      <option value="Eletrônicos">Eletrônicos</option>
                  </select>
              </div>
              <hr/>

              <div className="dataFiltro mb-4">
                  <span>Data</span>
                  <select className="form-select w-75" value={data} onChange={(e) => setData(e.target.value)}>
                      <option value="">Todas</option>
                      <option value="recentes">Mais recentes</option>
                      <option value="antigos">Mais antigos</option>
                  </select>
              </div>
              <hr/>

              <div className="precoFiltro mb-4">
                  <span className="d-block">Preço máximo: R$ {precoMax > 0 ? precoMax : "-"}</span>
                  <input className="w-75" type="range" min="0" max="5000" step="10" value={precoMax}
                         onChange={(e) => setPrecoMax(Number(e.target.value))}/>
              </div>
              <hr/>

              <div className="localizacaoFiltro mb-4">
                  <span className="d-block">Área de atuação do serviço</span>
                  <select className="form-select w-75" value={area} onChange={(e) => setArea(e.target.value)}>
                      <option value="">Todas</option>
                      <option value="Barueri">Barueri</option>
                      <option value="Osasco">Osasco</option>
                      <option value="Carapicuiba">Carapicuiba</option>
                      <option value="Itapevi">Itapevi</option>
                      <option value="Barra funda">Barra funda</option>
                  </select>
              </div>

              <div className="botoesAcao">
                  <button className="btn btn-primary d-block col-12 mb-2" onClick={aplicarFiltros}>
                      Aplicar
                  </button>
                  <button
                      className="btn btn-outline-secondary col-12"
                      onClick={() => {
                          setCategoria("");
                          setData("");
                          setPrecoMax(0);
                          setArea("");
                          onFilterChange({categoria: "", data: "", precoMax: 5000, area: ""});
                      }}
                  >

                      Limpar
                  </button>

              </div>
          </div>
      </form>
  );
}

export default ServicosFiltter;
