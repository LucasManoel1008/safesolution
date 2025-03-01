import axios from 'axios';
import React, { useState, useEffect } from 'react';
import LoadingData from '../Loading/LoadingData';
import styles from '../../css/editarServico.module.css';
import { NumericFormat } from 'react-number-format';
import { getService } from '../../../Services/CadastroServicoFunctions/CadastroServicoApiRequest';
import { validateUserInput } from '../../../Services/CadastroServicoFunctions/CadastroServicoValidation';

function EditarServico({ onOptionChange, id }) {
  const [isLoading, setIsLoading] = useState(true);
  const [nomeServico, setNome] = useState('');
  const [descricaoServico, setDescricao] = useState('');
  const [categorias, setCategorias] = useState('');
  const [criterios, setCriterios] = useState('');
  const [disponibilidade, setDisponibilidade] = useState('');
  const [disponibilidadeServico, setDisponibilidadeServico] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [valorEstimadoServico, setValorEstimadoServico] = useState('');
  const [inicio, setInicio] = useState('');
  const [error, setError] = useState([]);

  const inputValues = {
    nomeServico,
    descricaoServico,
    categorias,
    criterios,
    disponibilidade,
    cidade,
    estado,
    inicio,
    valorEstimadoServico,
  };

  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const response = await getService(id);
        setNome(response.nome_servico);
        setDescricao(response.descricao_servico);
        setCategorias(response.categoria_servico);
        setCriterios(response.criterios_servico);
        setDisponibilidadeServico(response.disponibilidade_servico);
        const [cidade, estado] = response.local_servico.split(',');
        setCidade(cidade.trim());
        setEstado(estado.trim());
        setValorEstimadoServico(response.valor_estimado_servico);
      } catch (error) {
        console.error('Erro ao buscar serviço:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchServiceDetails();
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError({});
    if (!validateUserInput(inputValues, setError)) return;

    const editarServico = {
      nome_servico: nomeServico,
      descricao_servico: descricaoServico,
      categoria_servico: categorias,
      criterios_servico: criterios,
      status_servico: disponibilidade,
      local_servico: `${cidade}, ${estado}`,
      valor_estimado_servico: valorEstimadoServico,
    };

    window.scrollTo(0, 0);
    setIsLoading(true);
    axios
      .put(`http://localhost:8080/servico/${id}`, editarServico)
      .then(() => {
        location.reload('');
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className={`m-4 CadastroServicoContent ${styles.editar}`}>
      {isLoading ? <LoadingData /> : null}
      <h4>Editar serviço</h4>
      <section className="produtoLayout">
        <div className="titleReturn">
          <h5>Nome e descrição:</h5>
          <button className="btn btn-primary" onClick={() => onOptionChange('visualizar')}>
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
                id="nome_servico"
                placeholder="EX: Instalação de ar-condicionado..."
                maxLength={100}
                value={nomeServico}
                onChange={(e) => setNome(e.target.value)}
              />
              {error.nome_servico && <span className="text-danger">{error.nome_servico}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="descricao">Descrição do Serviço</label>
              <textarea
                className="form-control"
                id="descricao_servico"
                rows="3"
                value={descricaoServico}
                onChange={(e) => setDescricao(e.target.value)}
              ></textarea>
              {error.descricao_servico && <span className="text-danger">{error.descricao_servico}</span>}
            </div>
          </div>
          <div className="Categoria pb-4">
            <h5>Escolha uma categoria para seu serviço</h5>
            <span>Selecione a categoria que melhor descreve o serviço que você está oferecendo</span>
            <div className="mb-2">
              <select
                className="form-select"
                value={categorias}
                id="categorias"
                onChange={(e) => setCategorias(e.target.value)}
              >
                <option value="">- Escolha uma categoria -</option>
                <option value="arquitetura">Arquitetura</option>
                <option value="limpeza">Limpeza</option>
                <option value="transporte">Transporte</option>
                <option value="segurança">Segurança</option>
                <option value="encanador">Encanador</option>
                <option value="tecnologia">Tecnologia</option>
              </select>
              {error.categorias && <span className="text-danger">{error.categorias}</span>}
            </div>
          </div>
          <div className="localAtuacao pb-4">
            <h5>Local de Atuação:</h5>
            <span>Informe a cidade e o estado onde o serviço será prestado</span>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="estado">Estado</label>
                <select
                  className="form-select selectEstado"
                  id="estado"
                  value={estado}
                  onChange={(e) => setEstado(e.target.value)}
                >
                <option value="" disabled>- Escolha um estado -</option>
                <option value="Acre">Acre</option>
                <option value="Alagoas">Alagoas</option>
                <option value="Amapá">Amapá</option>
                <option value="Amazonas">Amazonas</option>
                <option value="Bahia">Bahia</option>
                <option value="Ceará">Ceará</option>
                <option value="Distrito Federal">Distrito Federal</option>
                <option value="Espírito Santo">Espírito Santo</option>
                <option value="Goiás">Goiás</option>
                <option value="Maranhão">Maranhão</option>
                <option value="Mato Grosso">Mato Grosso</option>
                <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
                <option value="Minas Gerais">Minas Gerais</option>
                <option value="Pará">Pará</option>
                <option value="Paraíba">Paraíba</option>
                <option value="Paraná">Paraná</option>
                <option value="Pernambuco">Pernambuco</option>
                <option value="Piauí">Piauí</option>
                <option value="Rio de Janeiro">Rio de Janeiro</option>
                <option value="Rio Grande do Norte">Rio Grande do Norte</option>
                <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                <option value="Rondônia">Rondônia</option>
                <option value="Roraima">Roraima</option>
                <option value="Santa Catarina">Santa Catarina</option>
                <option value="São Paulo">São Paulo</option>
                <option value="Sergipe">Sergipe</option>
                <option value="Tocantins">Tocantins</option>
                </select>
                {error.estado && <span className="text-danger">{error.estado}</span>}
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="cidade">Cidade</label>
                <input
                  type="text"
                  className="form-control"
                  id="cidade"
                  placeholder="Cidade"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                />
                {error.cidade && <span className="text-danger">{error.cidade}</span>}
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
                  value={valorEstimadoServico}
                  onValueChange={(values) => {
                    const { value } = values;
                    setValorEstimadoServico(value);
                  }}
                  maxLength={9}
                />
                {error.valor_estimado_servico && <span className="text-danger">{error.valor_estimado_servico}</span>}
              </div>
            </div>
          </div>
          <div className="criterios pb-4">
            <h5>Critérios de Avaliação:</h5>
            <span>Escreva, de forma detalhada, quais serão os critérios para o orçamento do serviço</span>
            <div className="form-group">
              <label htmlFor="criterios">Critérios Avaliativos</label>
              <textarea
                className="form-control"
                id="criterios"
                rows="3"
                value={criterios}
                onChange={(e) => setCriterios(e.target.value)}
              ></textarea>
              {error.criterios && <span className="text-danger">{error.criterios}</span>}
            </div>
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
              />
              <label className="form-check-label" htmlFor="indisponivel">
                Indisponível
              </label>
            </div>
            {error.disponibilidade && <span className="text-danger">{error.disponibilidade}</span>}
          </div>
          {disponibilidade === 'false' && (
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
                  />
                </div>
              </div>
              {error.inicio && <span className="text-danger">{error.inicio}</span>}
            </div>
          )}
          <button type="submit" className="btn btn-primary">
            Salvar
          </button>
        </form>
      </section>
    </div>
  );
}

export default EditarServico;
