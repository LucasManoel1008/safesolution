import React, { useState } from 'react';
import axios from 'axios';
import AddImagem from './AddImagem'
import '../../css/novoServico.css';
import { Link } from 'react-router-dom';

function CadastroServico({ onClick }) {
  const [nome_servico, setNome] = useState('');
  const [descricao_servico, setDescricao] = useState('');
  const [categorias, setCategorias] = useState([]);
  const [criterios, setCriterios] = useState('');
  const [images, setImages] = useState([]);
  const [remover, setRemover] = useState(false)
  const [contador, setContador] = useState(0)
  const addImagem = () => {
    setImages([...images, <AddImagem key={images.length}/>]);
    if (images.length > -1){
    setRemover(true)
    setContador((contador) => contador = contador+1)
  }
    
  }
  const removeImage = () => {
    setImages(prevImagem => prevImagem.slice(0, -1));
    if (images.length < 2 ){
      setRemover(false);
      setContador((contador) => contador = contador-1)
    }
  };

  const mostrar = () =>{
    window.alert(criterios)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const empresaString = sessionStorage.getItem('empresa');
    if (empresaString) {
      const dadosEmpresa = JSON.parse(empresaString); 
      const cnpj = dadosEmpresa.cnpj.replace(/[./-]/g, '');;
      const novoServico = {
        nome_servico,
        descricao_servico,
        cnpj_empresa: cnpj
      };

      axios.post(`http://localhost:8080/servico?cnpjEmpresa=${cnpj}`, novoServico)
      .then(response => {
        console.log('Serviço salvo com sucesso:', response.data);
        location.reload('')
        // Você pode adicionar um feedback visual para o usuário aqui
      })
      .catch(error => {
        console.error('Erro ao salvar o serviço:', error);
        // Você pode adicionar um feedback de erro para o usuário aqui
      });
    }
    
 
    // Enviar os dados para a API
    
  };
  const Remover = () =>{
    return (
      <button className="remover" onClick={removeImage}>-</button>
    )
  };

 
  return (
    <div className="m-4 CadastroServicoContent">
      <h4>Novo Serviço</h4>
      <section className="produtoLayout">
      
        <div className="titleReturn">
          <h5>Nome e descrição:</h5>
          <button className='btn btn-primary' onClick={onClick}>
            <i className="mr-2 fa-solid fa-arrow-left"></i>Voltar
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="nomeDescricao">
            <div className="form-group">
              <label htmlFor="tituloServico">Título do serviço</label>
              <input
                type="text"
                className="form-control"
                id="tituloServico"
                placeholder="EX: Instalação de ar-condicionado..."
                maxLength={100}
                value={nome_servico}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor="descricao">Descrição do Serviço</label>
              <textarea
                className="form-control"
                id="descricao"
                rows="3"
                value={descricao_servico}
                onChange={(e) => setDescricao(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="imagemServicomt-4 mb-4">
            <div className=" d-flex justify-content-between">
              <h5>Adicione uma imagem de seu serviço</h5>
              <h5>&#8317; {contador} &#8318;</h5>
            </div>
            <div className="d-flex">
              <AddImagem />
              {images.map((imagem) => imagem)}
              <button className='adicionar' onClick={addImagem}>+</button>
              {remover && <Remover />}
              
            </div>
           
              
          </div>
          <div className="Categoria">
          <div className='mb-2'>
            <select className="form-select" value={categorias} onChange={(e) => setCategorias(e.target.value)}>
              <option value="">- Escolha uma categoria -</option>
              <option value="arquitetura">Arquitetura</option>
              <option value="limpeza">Limpeza</option>
              <option value="transporte">Transporte</option>
              <option value="segurança">Segurança</option>
              <option value="encanador">Encanador</option>
              <option value="tecnologia">Tecnologia</option>
            </select>
          </div>  
          </div>
          <div className="criterios form-group">
            <h5>Critérios de Avaliação:</h5>
            <p>Escreva, de forma detalhada, quais serão os critérios para o orçamento do serviço</p>
            <label htmlFor="criterios">Critérios Avaliativos</label>
            <textarea
              className="form-control"
              id="criterios"
              rows="3"
              value={criterios} 
              onChange={(e) => setCriterios(e.target.value)}
            ></textarea>
            <div className="form-check mb-4">
              <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Ao continuar, afirmo que li e concordo com a <Link to="/Politicas-de-Privacidade">Política de privacidade</Link> e os <Link to="/Termos">Termos de uso</Link> da Safe Solutions.
              </label>
            </div>
          </div>
          <button type='submit' className='btn btn-primary'>Salvar</button>
        </form>
      </section>
    </div>
  );
}
 
export default CadastroServico;