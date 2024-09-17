import React from 'react'

function CadastroServicoNovo() {
  return (
    <div className='servicoCadastro'>
        <div className="imageService">
          <i class="fa-solid fa-plus"></i>
        </div>
        <div className="inputServico">
            <div class="mb-3">
                <label htmlFor="exampleFormControlInput1" class="form-label">Título</label>
                <input type="text" class="form-control" id="exampleFormControlInput1"/>
          </div>
          <div class="mb-3 ">
                <label htmlFor="exampleFormControlTextarea1" class="form-label">Descrição</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </div>
    </div>
  )
}

export default CadastroServicoNovo