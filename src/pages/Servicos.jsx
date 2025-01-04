import React, { useEffect } from 'react'
import styles from '../assets/css/servico.module.css'
import axios from 'axios'
import ImagensUser from '../shared/ImagensUser'
import { useState } from 'react';

function Servicos() {
    const [dados, setDados] = useState([]);
    const [preco, setPreco] = useState(0);

    const handleinputPreco = (event) => {
        setPreco(event.target.value);
    }

    const getServicos = async () => {
        try {
            axios.get("http://localhost:8080/servico")
            .then((response) => {
                setDados(response.data);
            }
            )

        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getServicos();
    }
    , []);

    return(
    <div className={styles.servico}>
        <div className={styles.filtro}>
            <form>
                <h5 className='blue2'>Filtros</h5>
                <hr />
                <div className="typeFilter">
                    <span>Categoria</span>
                    <div className="d-flex flex-column">
                        <div>
                            <input type="radio" name="check" id="todos" defaultChecked/>
                            <label htmlFor="todos">Todos</label>
                        </div>

                        <div>
                            <input type="radio" name="check" id="arquitetura" />
                            <label htmlFor="arquitetura">Arquitetura</label>
                        </div>

                        <div>
                            <input type="radio" name="check" id="limpeza" />
                            <label htmlFor="limpeza">Limpeza</label>
                        </div>

                        <div>
                            <input type="radio" name="check" id="transporte" />
                            <label htmlFor="transporte">Transporte</label>
                        </div>

                        <div>
                            <input type="radio" name="check" id="seguranca" />
                            <label htmlFor="seguranca">Segurança</label>
                        </div>

                        <div>
                            <input type="radio" name="check" id="encanador" />
                            <label htmlFor="encanador">Encanador</label>
                        </div>

                        <div>
                            <input type="radio" name="check" id="tecnologia" />
                            <label htmlFor="tecnologia">Tecnologia</label>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="priceFilter d-flex flex-column">
                    <span>Preço</span>
                    <input type="range"
                    name="range"
                    id="preco"
                    min={0}
                    max={999}
                    value={preco}
                    onChange={handleinputPreco}
                    step = {preco > 900 ? 1 : 10} />
                    <span>{preco != 0 ? `R$ ${preco}${preco >= 999 ? "+" : ""}` : "Qualquer"}</span>
                </div>
                <hr />
                <div className="dateFilter">
                    <span>Data de publicação</span>
                    <select name="data" id="data" className="form-select" aria-label="Default select example">
                        <option value="recente">Mais recente</option>
                        <option value="antigo">Mais antigo</option>
                    </select>
                </div>
                <button type="submit" className='btn btn-primary mt-4'>Filtrar</button>
                <button type='reset' className='btn btn-secondary mt-4 ml-2'>Redefinir Filtros</button>
            </form>
            
        </div>
        <div className={styles.conteudo}>
            {/* barra de pesquisa */}
            <div class="input-group">
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <button type="button" class="btn btn-outline-primary" data-mdb-ripple-init><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <div className={`${styles.servicos}`}>
                <h5 className='mt-4 bold blue2'>Serviços mais recentes</h5>
                <div className={`${styles.servicosBox}`}>    
                    <div className={`${styles.item1}`}>
                        <img src={ImagensUser.paladins} width={50} height={50} alt="Empresa Logo" />
                        <div className={`${styles.servicoInfo}`}>
                            <h6>Título servico</h6>
                            <p>Empresa servico</p>
                            <p>Localização</p>
                        </div>
                     </div>
                    <div className={`${styles.item2}`}>
                        <p>preço servico</p>
                        <span>tempo serviço</span>
                    </div>
                </div>
                <hr />
            </div>

        </div>
    </div>
    )
}

export default Servicos