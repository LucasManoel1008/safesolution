import React, { useState } from 'react';
import styles from '../../css/servico.module.css';
import axios from 'axios';
import 'mathjs';

function ServicesFiltter({ preco, handleinputPreco, setServico, setLoading, setMessage, setFiltro, setPreco, quantidade, quantidadeFiltro }) {
  const [categoria, setCategoria] = useState("todas");
  const [data, setData] = useState("todos");
  
  const reload = () => {
        quantidadeFiltro();
  }
  const resetFiltro = () => {
    setCategoria("todas");
    setPreco(0);
    setData("recente");
  };

  const validarFiltro = (event) => {
    event.preventDefault();
    setLoading(true);
    if (preco === 0 && categoria === "todas" && data === "todos") {
      return;
    }
    try {
      axios.get(`http://localhost:8080/servico/filtrar`, {
        params: {
          categoria: categoria,
          valor: preco,
          data: data
        }
      })
        .then((response) => {
          if (response.data.length === 0) {
            setServico([]);
            setMessage("Nenhum serviço encontrado com os filtros selecionados.");
            setLoading(false);
            setFiltro(true);
            return;
          }
          setServico(response.data);
          setFiltro(true);
          setMessage("");
          setLoading(false);
        })
        .catch((error) => {
          setMessage("Erro ao filtrar serviços.");
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className={styles.filtro}>
      <form>
        <div className={`d-flex justify-content-between`}>
                <h5 className='blue2'>Filtros</h5>
                <span onClick={reload} className={`${styles.reload}`}><i className="fa-solid fa-rotate-right"></i></span>
        </div>
        
        <hr />
        <div className={`${styles.categoriaFilter}`}>
          <span>Categoria</span>
          <div className={`d-flex flex-column ${styles.categoria}`}>
            <div>
              <input
                type="radio"
                name="check"
                id="todos"
                className={`${styles.inputBody}`}
                value="todas"
                onChange={(e) => setCategoria(e.target.value)}
                defaultChecked
              />
              <label htmlFor="todos">Todas</label>
              <span className='float-right'>{quantidade[0]}</span>
            </div>

            <div>
              <input
                type="radio"
                name="check"
                id="arquitetura"
                value="arquitetura"
                onChange={(e) => setCategoria(e.target.value)}
              />
              <label htmlFor="arquitetura">Arquitetura</label>
              <span className='float-right'>{quantidade[1]}</span>
            </div>

            <div>
              <input
                type="radio"
                name="check"
                id="limpeza"
                value="limpeza"
                onChange={(e) => setCategoria(e.target.value)}
              />
              <label htmlFor="limpeza">Limpeza</label>
              <span className='float-right'>{quantidade[2]}</span>
            </div>

            <div>
              <input
                type="radio"
                name="check"
                id="transporte"
                value="transporte"
                onChange={(e) => setCategoria(e.target.value)}
              />
              <label htmlFor="transporte">Transporte</label>
              <span className='float-right'>{quantidade[3]}</span>
            </div>

            <div>
              <input
                type="radio"
                name="check"
                id="seguranca"
                value="seguranca"
                onChange={(e) => setCategoria(e.target.value)}
              />
              <label htmlFor="seguranca">Segurança</label>
              <span className='float-right'>{quantidade[4]}</span>
            </div>

            <div>
              <input
                type="radio"
                name="check"
                id="encanador"
                value="encanador"
                onChange={(e) => setCategoria(e.target.value)}
              />
              <label htmlFor="encanador">Encanador</label>
              <span className='float-right'>{quantidade[5]}</span>
            </div>

            <div>
              <input
                type="radio"
                name="check"
                id="tecnologia"
                value="tecnologia"
                onChange={(e) => setCategoria(e.target.value)}
              />
              <label htmlFor="tecnologia">Tecnologia</label>
              <span className='float-right'>{quantidade[6]}</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="priceFilter d-flex flex-column">
          <span>Preço máximo</span>
          <input
            type="range"
            name="range"
            id="preco"
            min={0}
            max={999}
            value={preco}
            onChange={handleinputPreco}
            step={preco > 900 ? 1 : 10}
          />
          <span>{preco > 0 ? `R$ ${preco}${preco >= 999 ? "+" : ""}` : "Qualquer"}</span>
        </div>
        <hr />
        <div className="dateFilter">
          <span>Data de publicação</span>
          <select
            name="data"
            id="data"
            className="form-select"
            value={data}
            onChange={(e) => setData(e.target.value)}
            aria-label="Default select example"
          >
            <option defaultChecked value="todos">Todos</option>
            <option value="recente">Mais recente</option>
            <option value="antigo">Mais antigo</option>
          </select>
        </div>
        <button type="button" onClick={validarFiltro} className='btn btn-primary mt-4'>Filtrar</button>
        <button type='button' onClick={resetFiltro} className='btn btn-secondary mt-4 ml-3'>Redefinir</button>
      </form>
    </div>
  );
}

export default ServicesFiltter;