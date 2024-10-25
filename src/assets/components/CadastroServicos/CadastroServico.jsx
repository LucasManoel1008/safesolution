import React, { useState } from 'react';
import axios from 'axios';
import { NumericFormat } from 'react-number-format';
import AddImagem from './AddImagem';
import '../../css/novoServico.css';
import { Link } from 'react-router-dom';

function CadastroServico({ onClick }) {
  const [nome_servico, setNome] = useState('');
  const [descricao_servico, setDescricao] = useState('');
  const [categorias, setCategorias] = useState('');
  const [criterios, setCriterios] = useState('');
  const [images, setImages] = useState([]);
  const [contador, setContador] = useState(1);
  const [disponibilidade, setDisponibilidade] = useState('');
  const [inicio, setInicio] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [valorMinimo, setValorMinimo] = useState('');

  const addImagem = () => {
    if (contador < 3) {
      setImages([...images, <AddImagem key={images.length} />]);
      setContador(contador + 1);
    }
  };

  const removeImage = () => {
    if (images.length > 0) {
      setImages(prevImagem => prevImagem.slice(0, -1));
      setContador(contador - 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const local_servico = `${cidade}, ${estado}`;

    // Validação de preenchimento
    if (!nome_servico || !descricao_servico || !categorias || !criterios || !disponibilidade || !local_servico || !valorMinimo) {
      window.alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    if (disponibilidade === 'true' && (!inicio)) {
      window.alert('Por favor, preencha a data de início do serviço.');
      return;
    }

    const empresaString = sessionStorage.getItem('empresa');
    if (empresaString) {
      const dadosEmpresa = JSON.parse(empresaString);
      const cnpj = dadosEmpresa.cnpj.replace(/[./-]/g, '');
      const novoServico = {
        nome_servico,
        descricao_servico,
        cnpj_empresa: cnpj,
        categoria_servico: categorias,
        criterios_servico: criterios,
        status_servico: disponibilidade,
        disponibilidade_servico: inicio,
        local_servico,
        valor_estimado_servico: valorMinimo,
      };

      axios.post(`http://localhost:8080/servico?cnpjEmpresa=${cnpj}`, novoServico)
        .then(response => {
          console.log('Serviço salvo com sucesso:', response.data);
          location.reload('');
        })
        .catch(error => {
          console.error('Erro ao salvar o serviço:', error);
        });
    }
  };

  return (
    <div className="m-4 CadastroServicoContent">
      <h4>Novo Serviço</h4>
      <section className="produtoLayout pb-4">
        <div className="titleReturn">
          <h5>Nome e descrição:</h5>
          <button className='btn btn-primary' onClick={onClick}>
            <i className="mr-2 fa-solid fa-arrow-left"></i>Voltar
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="nomeDescricao pb-4">
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
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="descricao">Descrição do Serviço</label>
              <textarea
                className="form-control"
                id="descricao"
                rows="3"
                value={descricao_servico}
                onChange={(e) => setDescricao(e.target.value)}
                required
              ></textarea>
            </div>
          </div>

          <div className="imagemServico mt-4 mb-4 pb-4">
            <div className="d-flex justify-content-between">
              <h5>Adicione uma imagem de seu serviço</h5>
              <h5>&#8317; {contador} &#8318;</h5>
            </div>
            <div className="d-flex">
              <AddImagem />
              {images.map((imagem) => imagem)}
              <button
                className="adicionar"
                onClick={addImagem}
                disabled={contador >= 3}
              >
                +
              </button>
              {images.length > 0 && <button className="remover" onClick={removeImage}>-</button>}
            </div>
          </div>

          <div className="Categoria pb-4">
            <h5>Escolha uma categoria para seu serviço</h5>
            <span>Selecione a categoria que melhor descreve o serviço que você está oferecendo</span>
            <div className="mb-2">
              <select
                className="form-select"
                value={categorias}
                onChange={(e) => setCategorias(e.target.value)}
                required
              >
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

          <div className="localAtuacao pb-4">
            <h5>Local de Atuação:</h5>
            <span>Informe a cidade e o estado onde o serviço será prestado</span>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="estado">Estado</label>
                <input
                  type='text'
                  className="form-control"
                  id="estado"
                  placeholder="Estado"
                  value={estado}
                  onChange={(e) => setEstado(e.target.value)}
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="cidade">Cidade</label>
                <input
                  type='text'
                  className="form-control"
                  id="cidade"
                  placeholder="Cidade"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          <div className="valorEstimado pb-4">
            <h5>Valor Estimado:</h5>
            <span>Informe o valor estimado para o serviço que você está oferecendo</span>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="valorMinimo">Valor Mínimo:</label>
                <NumericFormat
                  thousandSeparator={true}
                  prefix={'R$ '}
                  className="form-control"
                  id="valorMinimo"
                  placeholder="R$ 0.00"
                  value={valorMinimo}
                  onValueChange={(values) => {
                    const { formattedValue, value } = values;
                    setValorMinimo(value);
                  }}
                  maxLength={9}
                  required
                />
              </div>
            </div>
          </div>

          <div className="criterios form-group pb-4">
            <h5>Critérios de Avaliação:</h5>
            <span>Escreva, de forma detalhada, quais serão os critérios para o orçamento do serviço</span>
            <label htmlFor="criterios">Critérios Avaliativos</label>
            <textarea
              className="form-control"
              id="criterios"
              rows="3"
              value={criterios}
              onChange={(e) => setCriterios(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="disponibilidade pb-4">
            <h5>Disponibilidade:</h5>
            <span>Informe se o serviço já estará disponível ou ficará inativo</span>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="disponibilidade"
                id="disponivel"
                value="true"
                onChange={(e) => setDisponibilidade(e.target.value)}
                required
              />
              <label className="form-check-label" htmlFor="disponivel">
                Disponível
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="disponibilidade"
                id="indisponivel"
                value="false"
                onChange={(e) => setDisponibilidade(e.target.value)}
                required
              />
              <label className="form-check-label" htmlFor="indisponivel">
                Indisponível
              </label>
            </div>
          </div>

          {disponibilidade === 'true' && (
            <div className="disponibilidade pb-4">
              <h5>Defina quando o serviço estará disponível:</h5>
              <span>Informe a data de início do serviço</span>
              <div className="form-row mt-2">
                <div className="form-group col-md-6">
                  <label htmlFor="inicio">Data de início</label>
                  <input
                    type="date"
                    className="form-control"
                    id="inicio"
                    value={inicio}
                    onChange={(e) => setInicio(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          )}

          <div className="form-check mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              required
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Ao continuar, afirmo que li e concordo com a{" "}
              <Link to="/Politicas-de-Privacidade">Política de privacidade</Link> e os{" "}
              <Link to="/Termos">Termos de uso</Link> da Safe Solutions.
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            Salvar
          </button>
        </form>
      </section>
    </div>
  );
}

export default CadastroServico;