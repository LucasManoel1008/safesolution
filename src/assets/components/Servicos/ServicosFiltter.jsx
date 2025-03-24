import React from 'react'
import styles from '../../../pages/Servicos/servicos.module.css'
function ServicosFiltter() {
  const [value, setValue] = React.useState(0)
  return (
    <div className={`${styles.servicosFiltter}`}>
        <div className="filtroHeader">
          <p>Filtros</p>
        </div>
        <hr />
        <div className='filterBody'>
          <div className='categoriaFiltro mb-4'>
              <span>Categoria</span>
              <select class="form-select w-75" aria-label="Default select example">
                <option selected disabled>Categoria</option>
                <option value="arquitetura">Arquitetura</option>
                <option value="limpeza">Limpeza</option>
                <option value="transportes">Transportes</option>
                <option value="segurança">Segurança</option>
                <option value="encanador">Encanador</option>
                <option value="tecnologia">Tecnologia</option>
              </select>
          </div>
          <hr />
          <div className='dataFiltro mb-4'>
              <span>Data</span>
              <select class="form-select w-75" aria-label="Default select example">
                <option selected disabled>Data</option>
                <option value="recentes">Mais recentes</option>
                <option value="antigos">Mais antigos</option>
              </select>
          </div>
          <hr />
          <div className='precoFiltro mb-4'>
              <span>Preço</span>
              <input type="range" value={(e) => setValue(e.target.value)} />
              <span>{value}</span>
          </div>
        </div>

    </div>
  )
}

export default ServicosFiltter