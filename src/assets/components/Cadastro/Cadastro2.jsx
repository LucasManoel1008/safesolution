import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import LoadingData from "./LoadingData";


function Cadastro2({userData}) {
  const [cnpj, setCnpj] = useState("");
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [numero, setNumero] = useState('');
  const [telefone, setTelefone] = useState('')
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');
  const navigate = useNavigate();



  // Funções para lidar com os inputs do formulário
  const handleInputNome = (e) => setNome(e.target.value);
  const handleInputDescricao = (e) => setDescricao(e.target.value);
  const handleCepChange = (e) => {
    let cep = e.target.value;
      if (cep.length > 5) {
        cep = cep.replace(/^(\d{5})(\d)/, "$1-$2");
      }
      setCep(cep)
    
  }
  const handleNumeroChange = (e) => setNumero(e.target.value);
  const hanfleInputTelefone =(e) =>{
    let telefone = e.target.value.replace(/\D/g, ""); // Remove qualquer caractere que não seja número
      
    if (telefone.length > 2) { // Verifica se há mais de dois caracteres
        telefone = telefone.replace(/^(\d{2})(\d)/, "($1) $2"); // Formata o DDD
    }

    if (telefone.length > 6) { // Verifica se há mais de 6 caracteres
        telefone = telefone.replace(/ (\d{5})(\d)/, `$1-$2`); // Formata para incluir o hífen
    }

    setTelefone(telefone); // Atualiza o estado com o telefone formatado
  }

  // Função para formatar o CNPJ
  const handleInputChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 2) value = value.replace(/^(\d{2})(\d)/, "$1.$2");
    if (value.length > 5) value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    if (value.length > 8) value = value.replace(/^(\d{2})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3/$4");
    if (value.length > 12) value = value.replace(/^(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})(\d)/, "$1.$2.$3/$4-$5");
    setCnpj(value);
  };

  // Função para buscar dados do CEP via API
  const getCEP = () => {
    if (cep === "" || cep.length < 8) {
      alert("Você precisa digitar o CEP corretamente!");
      return false;
    }
    const url = `https://viacep.com.br/ws/${cep}/json`;
    axios.get(url)
      .then(response => {
        const data = response.data;
        setRua(data.logradouro || '');
        setBairro(data.bairro || '');
        setCidade(data.localidade || '');
      })
      .catch(error => window.alert("CEP não encontrado"));
  };

  // Função para validar o formulário
  const validarFormulario = (event) => {
    event.preventDefault();
    const cleanedCnpj = cnpj.replace(/[./-]/g, '');
    const cleanedTelefone = telefone.replace(/[() -]/g, '');

    if (nome === '') {
     setErro("Você deve informar o nome de sua empresa");
      return;
    }
    else if (cnpj.length < 18){
      setErro("CNPJ inválido")
      return;
    }
     else if (descricao === '') {
      setErro("Informe a descrição de sua empresa");
      return;
     }
    else if (telefone === '') {
      setErro("Informe o telefone de contato");
      return;
    } else if (cep === "" || cep.length < 8) {
      setErro("Informe o CEP corretamente");
      return;
    }
    else if (rua === '') {
      setErro("Informe a rua do estabelecimento");
      return;
    }
    else if (bairro === '') {
      setErro("Informe o bairro do estabelecimento");
      return;
    }
    else if (cidade === '') {
      setErro("Informe a cidade do estabelecimento");
      return;
    }
    else if (numero === '') {
      setErro("Informe o número do estabelecimento");
      return;
    }
    else {
      setErro('');
    }
    
    const dadosEmpresa = {
      cnpj: cleanedCnpj,
      nome_empresa: nome,
      descricao_empresa: descricao,
      cep,
      telefone_empresa: cleanedTelefone,
      rua,
      bairro,
      cidade,
      numero:numero,
    };
    
    if (userData) {

      setLoading(true);
      // Primeira requisição para salvar o usuário
      axios.post('http://localhost:8080/usuario', userData)
        .then(() => {
          // Segunda requisição para salvar a empresa com o CPF do usuário
          return axios.post(`http://localhost:8080/empresa?cpfUsuario=${userData.cpf}`, dadosEmpresa);
        })
        .then(response => {
          sessionStorage.setItem('empresa',JSON.stringify(dadosEmpresa))
          console.log('Empresa salva com sucesso:', response.data);
          navigate('/UserPage');
        })
        .catch(error => {
          console.error('Erro ao salvar a Empresa ou Usuário:', error);
          setLoading(false);
        });
    } else {
      console.log('Nenhum dado de usuário encontrado no localStorage.');
    }
  };

  return (
    <div className='cadastroContent'>
      {loading ? LoadingData() : null}
      <h4 className="mt-4">Quase lá</h4>
      <form onSubmit={validarFormulario} className="pb-5">
        <p>
          Preencha os campos abaixo com as informações essenciais sobre o seu negócio. Essas informações nos ajudarão a conectar você com clientes e outros serviços.
        </p>
        <div className="nameInput nome-cnpj mt-4">
          <div className="text-left">
            <input
              type="text"
              className="form-control"
              placeholder='Nome empresarial'
              onChange={handleInputNome}
              autoComplete='off'
            />
            <p className="error">{erro === "Você deve informar o nome de sua empresa" ? erro : null}</p>
          </div>
          <div className="text-left">
            <input
              type="text"
              id="cnpj"
              placeholder="CNPJ"
              maxLength="18"
              className='form-control'
              onChange={handleInputChange}
              value={cnpj}
              autoComplete='off'
            />
            <p className="error">{erro === "CNPJ inválido" ? erro : null}</p>
          </div>
        </div>

        <div className="form-floating descricao mt-4 text-left">
          <textarea
            className="form-control"
            placeholder="Descrição"
            onChange={handleInputDescricao}
            value={descricao}></textarea>
          <label>Descrição</label>
          <p className="error">{erro === "Informe a descrição de sua empresa" ? erro : null}</p>
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
              onChange={hanfleInputTelefone}
              autoComplete='off'
            />
            <p className="error">{erro === "Informe o telefone de contato" ? erro : null}</p>
          </div>
          </div>

        <div className="cepInputs mt-4">
          <div className="itens1 mb-4">
            <div className="text-left">
              <input
                type="text"
                id="cep"
                value={cep}
                onChange={handleCepChange}
                className="form-control"
                placeholder="CEP"
                autoComplete='off'
                maxLength={9}
              />
              <p className="error">{erro === "Informe o CEP corretamente" ? erro : null}</p>
            </div>
            <div>
              <input
                type="text"
                id="rua"
                value={rua}
                onChange={(e) => setRua(e.target.value)}
                className="form-control"
                placeholder="Rua"
                autoComplete='off'
              />
              <p className="error">{erro === "Informe a rua do estabelecimento" ? erro : null}</p>
            </div>
          </div>

          <div className="itens1 mb-4">
            <div>
                <input
                type="text"
                id="bairro"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
                className="form-control"
                placeholder="Bairro"
                autoComplete='off'
                />
              <p className="error">{erro === "Informe o bairro do estabelecimento" ? erro : null}</p>
              </div>
            <div>
              <input
                type="text"
                id="numero"
                value={numero}
                onChange={handleNumeroChange}
                className="form-control"
                placeholder="Número"
                autoComplete='off'
              />
              <p className="error">{erro === "Informe o número do estabelecimento" ? erro : null}</p>
            </div>
          </div>

          <input
            type="text"
            id="cidade"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            className="form-control"
            placeholder="Cidade"
            autoComplete='off'
          />
          <p className="error">{erro === "Informe a cidade do estabelecimento" ? erro : null}</p>
          <button type="button" className="btn btn-primary aplicar mt-2" onClick={getCEP}>Auto completar</button>
        </div>

        <button type="submit" className="continuarCadastro1 btn btn-primary mt-4">Finalizar</button>
      </form>

    </div>
  );
}

export default Cadastro2;
