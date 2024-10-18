import React from 'react'
import { Link } from 'react-router-dom'
function Orcamento2() {
  return (
    <div className='orcamentoContent orcamentoConten2'>
        <div className="p-4 especificacoes">
      <h2 className="spec-title"><strong>Confirme os dados</strong></h2>
      
      <form className='dadosForm'>
        <div className="form-group">

          <textarea id="scope" className="form-control" rows="5" readOnly placeholder='Gostaria de solicitar um orçamento para a montagem de três móveis planejados de escritório, incluindo uma mesa de trabalho (dimensões: 180cm x 90cm), um armário (200cm x 150cm) e uma estante de livros (altura: 250cm, largura: 120cm). Os móveis serão entregues no local, e o serviço deve ser prestado no endereço fornecido.'></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="deadline"><strong>Prazo desejado:</strong></label>
          <input type="date" value="2024-10-22" id="deadline" readOnly className="form-control"/>
        </div>

        <div className="form-group">
          <label htmlFor="materials"><strong>Materiais e ferramentas necessários (opcional):</strong></label>
          <textarea id="materials" readOnly className="form-control" rows="3" placeholder="Preciso saber se a empresa fornecerá buchas, parafusos e qualquer outro material necessário para a montagem. A montagem precisará ser realizada no terceiro andar do prédio, e o local não possui elevador, apenas escadas estreitas. A equipe possui ferramentas adequadas para essa situação?"></textarea>
        </div>
        <div className="endereco mt-4 mb-4">
          <p><strong>Endereço Final (opcional - apenas no caso de entregas)</strong></p>
          <div className="cepInputs mt-4">
                      <input
                          type="text"
                          id="cep"
                          className="form-control"
                          placeholder="06447-100"
                          readOnly
                      />
                      <input
                      type="text"
                      id="numero"
                      className="form-control ml-2 numero"
                      placeholder="256"
                      readOnly
                      
                  />
            </div>
          </div>
        <div className="form-check mb-4">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Ao continuar, afirmo que li e concordo com a <Link to="/Politicas-de-Privacidade">Política de privacidade</Link> e os <Link to="/Termos">Termos de uso</Link> da Safe Solutions.
          </label>
        </div>
        
        <div className="voltar-prosseguir">
          <Link to={"/Orcamento"}><button className="btn btn-primary prosseguir">Voltar</button></Link>
          <Link to={"/Pagamento"}><button className="btn btn-primary prosseguir">Concluir</button></Link>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Orcamento2