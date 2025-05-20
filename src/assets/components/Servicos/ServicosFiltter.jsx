import React, { useState, useContext } from "react";
import styles from "../../../pages/Servicos/servicos.module.css";
import axios from "axios";

import { ServicosContext } from '../../../Services/ServicosFunctions/ServicosContextFunction';
import { ServicoLoaderContext } from '../../../Services/ServicosFunctions/ServicosContextFunction';

function ServicosFiltter() {
  const [categoria, setCategoria] = useState("");
  const [data, setData] = useState("TODOS");
  const [precoMax, setPrecoMax] = useState(0);
  const [area, setArea] = useState("");

  const {servicos, setServicos} = useContext(ServicosContext);
  const {loading, setLoading} = useContext(ServicoLoaderContext);

   const enviarFiltros = async (e) => {
    e.preventDefault();
    setLoading(true);
    const FiltroServicos={
        categoria, dataFiltro: data, precoMax, area
    }
    console.log("🔎 Enviando filtros:", FiltroServicos) ;
    try{
        const response = await axios.post('http://localhost:8080/servico/filtrar', FiltroServicos);
        setServicos(response.data);
        sessionStorage.setItem('servicos', JSON.stringify(response.data)); // Armazena os serviços no sessionStorage
        console.log("Serviços filtrados:", response.data);    
    }
    catch (error) {
        console.error("Erro ao filtrar serviços:", error);
    }
    finally{
        setLoading(false);
    }
  }
    const limparFiltros = () => {
        setCategoria("");
        setData("TODOS");
        setPrecoMax(0);
        setArea("");
    }

    React.useEffect(() => {
        if (categoria === "" && data === "TODOS" && precoMax === 0 && area === "") {
            enviarFiltros({ preventDefault: () => {} });
        }
    }, [categoria, data, precoMax, area]);

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
                      <option value="conserto">Conserto</option>
                      <option value="limpeza">Limpeza</option>
                      <option value="segurança">Segurança</option>
                      <option value="encanador">Encanador</option>
                      <option value="transporte">Transportes</option>
                      <option value="eletronicos">Eletrônicos</option>
                  </select>
              </div>
              <hr/>

              <div className="dataFiltro mb-4">
                  <span>Data</span>
                  <select className="form-select w-75" value={data} onChange={(e) => setData(e.target.value)}>
                      <option value="TODOS">Todas</option>
                      <option value="RECENTES">Mais recentes</option>
                      <option value="ANTIGOS">Mais antigos</option>
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
                  <button className="btn btn-primary d-block col-12 mb-2" onClick={enviarFiltros}>
                      Aplicar
                  </button>
                  <button
                      className="btn btn-outline-secondary col-12"
                      onClick={(e) => limparFiltros(e)}
                  >

                      Limpar
                  </button>

              </div>
          </div>
      </form>
  );
}

export default ServicosFiltter;
