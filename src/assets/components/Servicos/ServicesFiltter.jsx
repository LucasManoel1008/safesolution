import React from 'react'
import styles from '../../css/servico.module.css'
function ServicesFiltter({preco, handleinputPreco}) {
  return (
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
            <button type='reset' className='btn btn-secondary mt-4 ml-3'>Redefinir</button>
        </form>
        
    </div>
  )
}

export default ServicesFiltter