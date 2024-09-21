import React from 'react'
import '../../css/novoServico.css'
function CadastroServico( {onClick}) {
  return (
    <div className="m-4 CadastroServicoContent">
      <h4>Novo Serviço</h4>
        <section className="produtoLayout">
        <div className="titleReturn">
          <h5>Nome e descrição:</h5>
          <button className='btn btn-primary' onClick={onClick} ><i className="mr-2 fa-solid fa-arrow-left"></i>Voltar</button >
        </div>
        {/* Sem Subimissao */}
          <form>
            <div className="nomeDescricao">
              <div class="form-group">
                <label for="tituloServico">Título do serviço</label>
                <input type="text" class="form-control" id="tituloServico" placeholder="EX: Instalação de ar-condicionado..." maxLength={100}/>
              </div>
              <div className='form-group'>
                <label for="descricao">Descrição do Serviço</label>
                <textarea class="form-control" id="descricao" rows="3"></textarea>
              </div>
            </div>
            <div className="imageService">
              
            </div>
          </form>
        </section>


    </div>
  )
}

export default CadastroServico