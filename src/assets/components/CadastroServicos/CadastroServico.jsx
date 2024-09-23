import React, {useState} from 'react'
import '../../css/novoServico.css'
function CategoriaAdd() {
  return (
    <div className='mb-2'>
      <select className="form-select" aria-label="Default select example">
        <option defaultChecked>- Escolha uma categoria -</option>
        <option value="arquitetura">Arquitetura</option>
        <option value="limpeza">Limpeza</option>
        <option value="transporte">Transporte</option>
        <option value="Segurança">Segurança</option>
        <option value="Encanador">Encanador</option>
        <option value="Tecnologia">Tecnologia</option>
      </select>
    </div>
  )
}
function CadastroServico( {onClick}) {
  
  const [categorias, setCategorias] = useState([]);
  const addCategoria = (event) => {
    event.preventDefault();
    setCategorias([...categorias, <CategoriaAdd key={categorias.length} />]);
  };

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
              <div className="form-group">
                <label htmlFor="tituloServico">Título do serviço</label>
                <input type="text" className="form-control" id="tituloServico" placeholder="EX: Instalação de ar-condicionado..." maxLength={100}/>
              </div>
              <div className='form-group'>
                <label htmlFor="descricao">Descrição do Serviço</label>
                <textarea className="form-control" id="descricao" rows="3"></textarea>
              </div>
            </div>
            <div className="Categoria">
              <CategoriaAdd />
              {categorias}
              <button className=' btn fw-bold blue2' onClick={addCategoria}>+</button>
            </div>
          </form>
        </section>


    </div>
  )
}

export default CadastroServico