import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingData from "../../assets/components/Loading/LoadingData";
import * as handleInput from '../../Services/CadastroFunctions/CadastroHandleInputs'
import * as handleForm from '../../Services/CadastroFunctions/CadastroValidation'
import * as ApiRequest from '../../Services/CadastroFunctions/CadastroApiRequest'
import { ToastContainer } from "react-toastify";
import * as error from '../../Services/CadastroFunctions/CadastroToast'


function CompanyCad({userData}) {
  const [cnpj, setCnpj] = useState("");
  const [name, setName] = useState('');
  const [descricao, setDescricao] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [numero, setNumero] = useState('');
  const [telefone, setTelefone] = useState('')
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState({});
  const navigate = useNavigate();

  // Função para validar o formulário
  const inputValues ={
    cnpj,
    name,
    descricao,
    cep,
    rua,
    bairro,
    cidade,
    numero,
    telefone
  }

  const dadosEmpresa = {
    cnpj: handleForm.sanitizeCnpj(cnpj),
    nome_empresa: name,
    descricao_empresa: descricao,
    cep,
    telefone_empresa: handleForm.sanitizeTelefone(telefone),
    rua,
    bairro,
    cidade,
    numero:numero,
    
  };

  const cepRequest = (e) => {
    e.preventDefault();
    if(!ApiRequest.getAndSetCep(cep, setRua, setBairro, setCidade) == false){
      error.cepRequestError()
      return
    } 
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if(await handleForm.checkCompanyInputValues(e, inputValues, setErro) == false){
      return;
    }
    setErro({});
    if(userData){
      setLoading(true);
      await ApiRequest.createUserCad(userData, dadosEmpresa, setLoading, navigate);
    }

  }

  return (
    <div className='cadastroContent'>
      {loading ? LoadingData() : null}
      <h4 className="mt-4">Quase lá</h4>
      <form className="pb-5">
        <p>
          Preencha os campos abaixo com as informações essenciais sobre o seu negócio. Essas informações nos ajudarão a conectar você com clientes e outros serviços.
        </p>
        <div className="nameInput nome-cnpj mt-4">
          <div className="text-left">
            <input
              type="text"
              className="form-control"
              placeholder='Nome empresarial'
              onChange={(e) => handleInput.handleInputChangeCompanyName(e, setName)}
              value={name}
              autoComplete='off'
            />
             {erro.name && <span className='error'>{erro.name}</span>}
          </div>
          <div className="text-left">
            <input
              type="text"
              id="cnpj"
              placeholder="CNPJ"
              maxLength="18"
              className='form-control'
              onChange={(e) => handleInput.handleInputChangeCnpj(e, setCnpj)}
              value={cnpj}
              autoComplete='off'
            />
            {erro.cnpj && <span className='error'>{erro.cnpj}</span>}
          </div>
        </div>

        <div className="form-floating descricao mt-4 text-left">
          <textarea
            className="form-control"
            placeholder="Descrição"
            onChange={(e) => handleInput.handleInputChangeDescricao(e, setDescricao)}
            value={descricao}></textarea>
          <label>Descrição</label>
          {erro.descricao && <span className='error'>{erro.descricao}</span>}
        </div>
        <div className="nameInput mt-4 text-left">
          <div className="w-100">
            <input
              type="text"
              id="telefone"
              className="form-control"
              placeholder='Telefone de contato'
              maxLength={14}
              value={telefone}
              onChange={(e) => handleInput.handleInputChangeTelefone(e, setTelefone)}
              autoComplete='off'
            />
            {erro.telefone && <span className='error'>{erro.telefone}</span>}
          </div>
          </div>

        <div className="cepInputs mt-4">
          <div className="itens1 mb-4">
            <div className="text-left">
              <input
                type="text"
                id="cep"
                value={cep}
                onChange={(e) => handleInput.handleInputChangeCep(e, setCep)}
                className="form-control"
                placeholder="CEP"
                autoComplete='off'
                maxLength={9}
              />
              {erro.cep && <span className='error'>{erro.cep}</span>}
            </div>
            <div>
              <input
                type="text"
                id="rua"
                value={rua}
                onChange={(e) => handleInput.handleInputChangeRua(e, setRua)}
                className="form-control"
                placeholder="Rua"
                autoComplete='off'
              />
              {erro.rua && <span className='error float-left'>{erro.rua}</span>}
            </div>
          </div>

          <div className="itens1 mb-4">
            <div>
                <input
                type="text"
                id="bairro"
                value={bairro}
                onChange={(e) => handleInput.handleInputChangeBairro(e, setBairro)}
                className="form-control"
                placeholder="Bairro"
                autoComplete='off'
                />
                {erro.bairro && <span className='error float-left'>{erro.bairro}</span>}
              </div>
            <div>
              <input
                type="text"
                id="numero"
                value={numero}
                onChange={(e) => handleInput.handleInputChangeNumero(e, setNumero)}
                className="form-control"
                placeholder="Número"
                autoComplete='off'
              />
              {erro.numero && <span className='error float-left'>{erro.numero}</span>}
            </div>
          </div>

          <input
            type="text"
            id="cidade"
            value={cidade}
            onChange={(e) => handleInput.handleInputChangeCidade(e, setCidade)}
            className="form-control"
            placeholder="Cidade"
            autoComplete='off'
          />
          {erro.cidade && <span className='error float-left'>{erro.cidade}</span>}
          
        </div> 

        <div className="buttonGroup">
          <button type="button" className="btn btn-primary aplicar mt-2" onClick={(e) => cepRequest(e)}>Auto completar</button>
          <button type="button" onClick={handleFormSubmit} className="continuarCadastro2 btn btn-primary mt-4">Finalizar</button>
        </div>
        <ToastContainer />
      </form>

     
    </div>
  );
}

export default CompanyCad;
