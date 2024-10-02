import React, {useState} from 'react'
import '../../css/novoServico.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
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
  const [nome, setNome] = useState('');
  const [categorias, setCategorias] = useState([]);
  const [descricao, setDescricao] = useState("");
  const [criterios, setCriterios] = useState("");
  const navigate = useNavigate();
  const addCategoria = (event) => {
    event.preventDefault();
    setCategorias([...categorias, <CategoriaAdd key={categorias.length} />]);
  };

  const onSubmit =()=>{
    console.log("Descrição:", descricao);
    axios.post("http://localhost:8080/servico",
      {nome_servico: nome,
        descricao_servico: descricao
      }
    )
    .then((response)=>{
      if(response.status==200 || response.status==201){ alert('cadastro com sucesso');  window.location.reload();}
        else alert('CADASTRO NÃO REALIZADO')
      })
    .catch(e=>console.log(e.message))
    }
  

  return (
    <div className="m-4 CadastroServicoContent">
      <h4>Novo Serviço</h4>
        <section className="produtoLayout">
        <div className="titleReturn">
          <h5>Nome e descrição:</h5>
          <button className='btn btn-primary' onClick={onClick} ><i className="mr-2 fa-solid fa-arrow-left"></i>Voltar</button >
        </div>
        {/* Sem Subimissao */}
          <form >
            <div className="nomeDescricao">
              <div className="form-group">
                <label htmlFor="tituloServico">Título do serviço</label>
                <input type="text" onChange={(e) => setNome(e.target.value)} className="form-control" id="tituloServico" placeholder="EX: Instalação de ar-condicionado..." maxLength={100}/>
              </div>
              <div className='form-group'>
                <label htmlFor="descricao">Descrição do Serviço</label>
                <textarea className="form-control" onChange={(e) => setDescricao(e.target.value)} id="descricao" rows="3"></textarea>
              </div>
            </div>
            <div className="Categoria">
              <CategoriaAdd />
              {categorias}
              <button className=' btn fw-bold blue2' onClick={addCategoria}>+</button>
            </div>
            <div className="criterios form-group">
              <h5>Critérios de Avaliação:</h5>
              <p>Escreva, de forma detalhada, quais serão os critérios para o orçamento do serviço</p>
              <label htmlFor="criterios">Critérios Avaliativos</label>
              <textarea className="form-control" id="criterios" rows="3"></textarea>
              <div className="form-check mb-4">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                Ao continuar, afirmo que li e concordo com a <Link to="/Politicas-de-Privacidade">Política de privacidade</Link> e os <Link to="/Termos">Termos de uso</Link> da Safe Solutions.
                </label>
              </div>
            </div>
            <input type="button" value="Cadastrar" onClick={()=>onSubmit()} />
          </form>
        </section>


    </div>
  )
}

export default CadastroServico