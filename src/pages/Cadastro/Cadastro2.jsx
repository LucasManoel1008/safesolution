import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


function Cadastro2() {
  const [cnpj, setCnpj] = useState("");
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [numero, setNumero] = useState('');
  const [select, setSelect] = useState('');
  const [telefone, setTelefone] = useState('')

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
  const handleSelectChange = (e) => setSelect(e.target.value);
  const hanfleInputTelefone =(e) =>{
    let telefone = e.target.value.replace(/\D/g, ""); // Remove qualquer caractere que não seja número
      
    if (telefone.length > 2) { // Verifica se há mais de dois caracteres
        telefone = telefone.replace(/^(\d{2})(\d)/, "($1) $2"); // Formata o DDD
    }

    if (telefone.length > 6) { // Verifica se há mais de 6 caracteres
        telefone = telefone.replace(/^(\d{2})\s?(\d{5})(\d)/, "($1) $2-$3"); // Formata para incluir o hífen
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
      return;
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

    if (nome === '') {
      alert("Você deve preencher o campo 'Nome empresarial'");
      return;
    }
    else if (cnpj.length < 18){
      window.alert("CNPJ inválido")
      return
    }
     else if (descricao === '') {
      alert("Você precisa informar a descrição da empresa!");
      return;
    } else if (cep === "" || cep.length < 8) {
      alert("Você precisa digitar o CEP corretamente!");
      return;
    }

    const dadosArmazenados = sessionStorage.getItem('usuario');
    const cleanedCnpj = cnpj.replace(/[./-]/g, '');
    const cleanTelefone = telefone.replace(/[()\s-]/g, '');
    const dadosEmpresa = {
      cnpj: cleanedCnpj,
      nome_empresa: nome,
      descricao_empresa: descricao,
      cep,
      telefone_empresa: cleanTelefone,
      rua,
      bairro,
      cidade,
      numero:numero,
    };
    

    if (dadosArmazenados) {
      const dados = JSON.parse(dadosArmazenados);

      // Primeira requisição para salvar o usuário
      axios.post('http://localhost:8080/usuario', dados)
        .then(() => {
          // Segunda requisição para salvar a empresa com o CPF do usuário
          return axios.post(`http://localhost:8080/empresa?cpfUsuario=${dados.cpf}`, dadosEmpresa);
        })
        .then(response => {
          sessionStorage.clear();
          sessionStorage.setItem('empresa',JSON.stringify(dadosEmpresa))
          console.log('Empresa salva com sucesso:', response.data);
         
          if (select === 'provedor') {
            navigate('/Cadastro-Servico');

          } else {
            navigate('/UserPage');
          }
        })
        .catch(error => {
          console.error('Erro ao salvar a Empresa ou Usuário:', error);
        });
    } else {
      console.log('Nenhum dado de usuário encontrado no localStorage.');
    }
  };

  return (
    <div className='cadastroContent'>
      <h4 className="mt-4">Quase lá</h4>
      <form onSubmit={validarFormulario} className="pb-5">
        <p>
          Preencha os campos abaixo com as informações essenciais sobre o seu negócio. Essas informações nos ajudarão a conectar você com clientes e outros serviços.
        </p>
        <div className="nameInput nome-cnpj mt-4">
          <input
            type="text"
            className="form-control"
            placeholder='Nome empresarial'
            onChange={handleInputNome}
            autoComplete='off'
          />
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
        </div>

        <div className="form-floating mt-4 interesse">
          <select onChange={handleSelectChange} value={select} className="form-select">
            <option value="contratante">Sou Contratante</option>
            <option value="provedor">Sou Provedor</option>
          </select>
          <label>Área de Interesse</label>
        </div>

        <div className="form-floating descricao mt-4">
          <textarea
            className="form-control"
            placeholder="Descrição"
            onChange={handleInputDescricao}
            value={descricao}></textarea>
          <label>Descrição</label>
        </div>
        <div className="nameInput mt-4">
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
          </div>

        <div className="cepInputs mt-4">
          <div className="itens1 mb-4">
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
            <input
              type="text"
              id="rua"
              value={rua}
              onChange={(e) => setRua(e.target.value)}
              className="form-control"
              placeholder="Rua"
              autoComplete='off'
            />
          </div>

          <div className="itens2 mb-4">
            <input
              type="text"
              id="bairro"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
              className="form-control"
              placeholder="Bairro"
              autoComplete='off'
            />
            <input
              type="text"
              id="numero"
              value={numero}
              onChange={handleNumeroChange}
              className="form-control"
              placeholder="Número"
              autoComplete='off'
            />
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
          <button type="button" className="btn btn-primary aplicar mt-2" onClick={getCEP}>Auto completar</button>
        </div>

        <button type="submit" className="continuarCadastro1 btn btn-primary mt-4">Finalizar</button>
      </form>
    </div>
  );
}

export default Cadastro2;
