import React, { useState } from 'react';
import axios from 'axios';
import {NumericFormat} from 'react-number-format';
import { validateUserInput } from '../../../Services/CadastroServicoFunctions/CadastroServicoValidation';
import '../../css/novoServico.css';
import { Link } from 'react-router-dom';
import LoadingData from '../Loading/LoadingData';
import { getDateForService } from '../../../Services/CadastroServicoFunctions/CadastroServicoFunctions';
import { sanitizeCnpj } from '../../../Services/CadastroFunctions/CadastroValidation';
import { postService } from '../../../Services/CadastroServicoFunctions/CadastroServicoApiRequest';
import { ToastContainer } from 'react-toastify';
import * as errorToast from '../../../Services/CadastroServicoFunctions/CadastroServicoToast';

function CadastroServico({ onOptionChange }) {
  const [nome_servico, setNome] = useState('');
  const [descricao_servico, setDescricao] = useState('');
  const [categorias, setCategorias] = useState('');
  const [criterios, setCriterios] = useState('');
  const [disponibilidade, setDisponibilidade] = useState('');
  const [inicio, setInicio] = useState('');
  const [cidade, setCidade] = useState('');
  const [valorMinimo, setValorMinimo] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);
  const [termos, setTermos] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError({});
    if(termos == false) {
      setError({termos: 'Você deve concordar com os termos de uso e política de privacidade para continuar'});
      return
    }
    if(!validateUserInput(inputsValues, setError)){
      return
    }
    let disponibilidade_servico = getDateForService(disponibilidade, inicio);
    const empresaString = sessionStorage.getItem('empresa');
    if (empresaString) {
      const dadosEmpresa = JSON.parse(empresaString);
      const cnpj = sanitizeCnpj(dadosEmpresa.cnpj);
      const novoServico = {
        nome_servico,
        descricao_servico,
        cnpj_empresa: cnpj,
        categoria_servico: categorias,
        criterios_servico: criterios,
        status_servico: disponibilidade,
        disponibilidade_servico: disponibilidade_servico,
        local_servico: `${cidade}`,
        valor_estimado_servico: parseFloat(valorMinimo.replace(/[^\d.-]/g, '')),
      };
      window.scrollTo(0, 0);
      setLoading(true);
      try{
        
        await postService(novoServico, cnpj);
        
      }
      catch(error){
        console.log("Deu erro")
        errorToast.ApiRequestError(error); 
        console.error('Erro ao cadastrar serviço:', error);
      }
      finally{
        console.log(novoServico)
        setLoading(false);
      }
    }
        
  };

  const inputsValues = {
    nome_servico,
    descricao_servico,
    categorias,
    criterios,
    disponibilidade,
    cidade,
    inicio,
    valorMinimo
  }

  return (
    <div className="m-4 CadastroServicoContent">
      {loading ? <LoadingData/> : null}
      <h4>Novo Serviço</h4>
      <section className="produtoLayout pb-4">
        <div className="titleReturn">
          <h5>Nome e descrição:</h5>
          <button className='btn btn-primary' onClick={() => onOptionChange("visualizar")}>
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
                
              />
              {error.nome_servico && <span className='error' id='nome_servico' >{error.nome_servico}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="descricao">Descrição do Serviço</label>
              <textarea
                className="form-control"
                id="descricao"
                rows="3"
                value={descricao_servico}
                onChange={(e) => setDescricao(e.target.value)}
                
              ></textarea>
              {error.descricao_servico && <span className='error' id='descricao_servico'>{error.descricao_servico}</span>}
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
              >
                <option value="">- Escolha uma categoria -</option>
                <option value="arquitetura">Arquitetura</option>
                <option value="limpeza">Limpeza</option>
                <option value="transporte">Transporte</option>
                <option value="segurança">Segurança</option>
                <option value="encanador">Encanador</option>
                <option value="tecnologia">Tecnologia</option>
              </select>
              {error.categorias && <span className='error' id="categorias">{error.categorias}</span>}
            </div>
          </div>

          <div className="localAtuacao pb-4">
            <h5>Local de Atuação:</h5>
            <span>Informe a cidade e o estado onde o serviço será prestado</span>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="cidade">Cidade</label>
                <select
                  className="form-select selectEstado"
                  id="cidade"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                >
                <option value="" disabled>- Escolha uma Área de atuação -</option>
                <option value="Barueri">Barueri</option>
                <option value="Osasco">Osasco</option>
                <option value="Carapicuiba">Carapicuiba</option>
                <option value="Itapevi">Itapevi</option>
                <option value="Barra Funda">Barra Funda</option>
                </select>
                {error.cidade && <span className='error' id='cidade'>{error.cidade}</span>}
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
                    setValorMinimo(formattedValue);
                  }}
                  maxLength={9}
                  
                />
                {error.valorMinimo && <span className='error' id='valorMinimo'>{error.valorMinimo}</span>}
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
            {error.criterios && <span className='error' id='criterios'>{error.criterios}</span> }
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
                value= "false"
                onChange={(e) => setDisponibilidade(e.target.value)}
              />
              <label className="form-check-label" htmlFor="indisponivel">
                Indisponível
              </label>          
            </div>
            {error.disponibilidade && <span className='error' id='disponibilidade'>{error.disponibilidade}</span>}
          </div>

          {disponibilidade == 'false' && (
            <div className="disponibilidade pb-4">
              <span className='error'><span className='bold'>Aviso:</span> serviços inativos ficarão ocultos até que ative-os</span>
            </div>
          )}
          

          <div className="form-check mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault termos"
              value={termos}
              onChange={(e) => setTermos(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Ao continuar, afirmo que li e concordo com a{" "}
              <Link to="/Politicas-de-Privacidade">Política de privacidade</Link> e os{" "}
              <Link to="/Termos">Termos de uso</Link> da Safe Solutions.
            </label>
            <br />
            {error.termos && <span className='error' id='termos'>{error.termos}</span>}
          </div>
          

          <button type="submit" className="btn btn-primary">
            Salvar
          </button>
        </form>
      </section>
      <ToastContainer />
    </div>
  );
}

export default CadastroServico;