import React from 'react'
import '../assets/css/orcamento.css'
import { Link } from 'react-router-dom'
function Orcamento() {
  return (
    <div className='orcamentoContent'>

    <div className="p-4 especificacoes">
      <h2 className="spec-title"><strong>Especificações Técnicas</strong></h2>
      <p className='paragraph'>Seja claro e detalhado ao descrever o pedido</p>
      
      <form className='dadosForm'>
        <div className="form-group">
          <label htmlFor="scope"><strong>Descreva o escopo de trabalho:</strong></label>
          <textarea id="scope" className="form-control" rows="5" placeholder='Ex: "Limpeza de janelas de um prédio de 5 andares" ou "Montagem de móveis de escritório"'></textarea>
          <small className="help-text paragraph ">Quanto mais detalhado, melhor o orçamento que nossos profissionais poderão oferecer.</small>
        </div>

        <div className="form-group">
          <label htmlFor="deadline"><strong>Prazo desejado:</strong></label>
          <input type="date" id="deadline" className="form-control"/>
        </div>

        <div className="form-group">
          <label htmlFor="materials"><strong>Materiais e ferramentas necessários (opcional):</strong></label>
          <textarea id="materials" className="form-control" rows="3" placeholder="Descreva quaisquer materiais específicos que precisam ser utilizados"></textarea>
        </div>
        <div className="endereco mt-4 mb-4">
        <p><strong>Endereço Final (opcional - apenas no caso de entregas)</strong></p>
        <div className="cepInputs mt-4 ">
                    <input
                        type="text"
                        id="cep"
                      
                        className="form-control"
                        placeholder="CEP"
                    />
                    <input
                    type="text"
                    id="numero"
                   
                    className="form-control"
                    placeholder="Número"
                    
                />
          </div>

            </div>
        <Link to={"/Orcamento2"}><button className="btn btn-primary prosseguir">Prosseguir</button></Link>
      </form>
    </div>
    </div>
  )
}

export default Orcamento