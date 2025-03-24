import React from 'react'
import styles from '../../../pages/Servicos/servicos.module.css'
function ServicosFiltter() {

  const [value, setValue] = React.useState(0)
  return (
    <div className={`${styles.servicosFiltter}`}>
        <div className={`${styles.filtroHeader}`}>
          <h5>Filtros</h5>
        </div>
        <hr />
        <div className={`${styles.filtroBody}`}>
          <div className='categoriaFiltro mb-4'>
              <span>Categoria</span>
              <select class="form-select w-75" aria-label="Default select example">
                <option selected disabled>Categoria</option>
                <option value="todos">Todos</option>
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
              <span className='d-block'>Preço mínimo</span>
              <input className='w-75' type="range" onChange={(e) => setValue(e.target.value)} value={value} step={10} max={9999} />
              <span className='d-block'>R$ {value}</span>
          </div>
          <hr />
          <div className='localizacaoFiltro mb-4'>
            <span className='d-block'>Área de atuação do serviço</span>
            <select
                  className="form-select w-75"
                  id="estado"
                >
                <option value="" disabled defaultChecked>- Escolha um estado -</option>
                  <option value="todas">Todas</option>
                  <option value="acre">Acre</option>
                  <option value="alagoas">Alagoas</option>
                  <option value="amapá">Amapá</option>
                  <option value="amazonas">Amazonas</option>
                  <option value="bahia">Bahia</option>
                  <option value="ceará">Ceará</option>
                  <option value="distrito federal">Distrito Federal</option>
                  <option value="espírito santo">Espírito Santo</option>
                  <option value="goiás">Goiás</option>
                  <option value="maranhão">Maranhão</option>
                  <option value="mato grosso">Mato Grosso</option>
                  <option value="mato grosso do sul">Mato Grosso do Sul</option>
                  <option value="minas gerais">Minas Gerais</option>
                  <option value="pará">Pará</option>
                  <option value="paraíba">Paraíba</option>
                  <option value="paraná">Paraná</option>
                  <option value="pernambuco">Pernambuco</option>
                  <option value="piauí">Piauí</option>
                  <option value="rio de janeiro">Rio de Janeiro</option>
                  <option value="rio grande do norte">Rio Grande do Norte</option>
                  <option value="rio grande do sul">Rio Grande do Sul</option>
                  <option value="rondônia">Rondônia</option>
                  <option value="roraima">Roraima</option>
                  <option value="santa catarina">Santa Catarina</option>
                  <option value="são paulo">São Paulo</option>
                  <option value="sergipe">Sergipe</option>
                  <option value="tocantins">Tocantins</option>
                </select>
          </div>
          <div className="botoesAcao">
            <button className="btn btn-primary d-block col-12 mb-2">Aplicar</button>
            <button className="btn btn-outline-secondary col-12">Limpar</button>
          </div>
        </div>

    </div>
  )
}

export default ServicosFiltter