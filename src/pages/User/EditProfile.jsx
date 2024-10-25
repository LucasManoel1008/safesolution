import React from "react";
import { useState } from "react";
import styles from '../../assets/css/UserProfile.module.css';
function EditProfile  ({ empresa, setSection }) {
    // Inicializando os valores com os dados existentes da empresa
    const [nome, setNome] = useState(empresa ? empresa.nome_empresa : "");
    const [descricao, setDescricao] = useState(empresa ? empresa.descricao_empresa : "");
    const [telefone, setTelefone] = useState(empresa ? empresa.telefone_empresa : "");
    const [email, setEmail] = useState(empresa && empresa.usuario ? empresa.usuario.email_usuario : "");
    const [cep, setCep] = useState(empresa ? empresa.cep : "");
    const [rua, setRua] = useState(empresa ? empresa.rua : "");
    const [bairro, setBairro] = useState(empresa ? empresa.bairro : "");
    const [numero, setNumero] = useState(empresa ? empresa.numero : "");
    const [cidade, setCidade] = useState(empresa ? empresa.cidade : "");
    const [nomePessoal, setNomePessoal] = useState(empresa && empresa.usuario ? empresa.usuario.nome_usuario.split(" ")[0] : "");
    const [ultimoNome, setUltimoNome] = useState(empresa && empresa.usuario ? empresa.usuario.nome_usuario.split(" ").slice(1).join(" ") : "");
    const [senha] = useState(empresa ? empresa.usuario.senha_usuario : "");
  
    const nomeCompleto = nomePessoal + " " + ultimoNome;
  
    const dadosEmpresa = {
      nome_empresa: nome,
      descricao_empresa: descricao,
      telefone_empresa: telefone,
      cep,
      rua,
      bairro,
      cidade,
      numero,
    };
  
    const dadosUsuario = {
      email_usuario: email,
      nome_usuario: nomeCompleto,
      senha_usuario: senha
    };
    const handleNomeChange = (e) => setNome(e.target.value);
  const handleDescricaoChange = (e) => setDescricao(e.target.value);
  const handleTelefoneChange = (e) => setTelefone(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleCepChange = (e) => setCep(e.target.value);
  const handleRuaChange = (e) => setRua(e.target.value);
  const handleBairroChange = (e) => setBairro(e.target.value);
  const handleNumeroChange = (e) => setNumero(e.target.value);
  const handleCidadeChange = (e) => setCidade(e.target.value);
  const handleNomePessoalChange = (e) => setNomePessoal(e.target.value);
  const handleUltimoNomeChange = (e) => setUltimoNome(e.target.value);

  
    const editarDados = async (e) => {
      e.preventDefault();
      try {
        // Atualiza a empresa
        await axios.put(`http://localhost:8080/empresa/${empresa.cnpj}`, dadosEmpresa);
        
  
        // Atualiza o usuário vinculado
        await axios.put(`http://localhost:8080/usuario/${empresa.usuario.cpf}`, dadosUsuario);
  
        alert("Dados atualizados com sucesso!");
        console.log('Dados da empresa:', dadosEmpresa);
        console.log('Dados do usuário:', dadosUsuario);
        location.reload();
  
      } catch (error) {
        console.error('Erro ao atualizar dados:', error);
        alert("Erro ao atualizar os dados. Tente novamente.");
        console.log('Dados da empresa:', dadosEmpresa);
        console.log('Dados do usuário:', dadosUsuario);
      }
    };
    return(
    <div className={`edit ${styles.userProfile}`}>
      <h4>Editar conta</h4>
       <div className={`${styles.gridItens} form-group`}>
        <div className="item1">
          <label htmlFor="exampleFormControlInput1">Nome de exibição:</label>
          <input
            type="text"
            className="form-control d-inline nomeExibicao"
            id="exampleFormControlInput1"
            placeholder='Novo nome empresarial'
            value={nome}
            onChange={handleNomeChange}
            
          />
        </div>
        <div className="item2">
          <label htmlFor="exampleFormControlInput1">Email cadastrado:</label>
          <input
            type="email"
            className="form-control d-inline nomeExibicao"
            id="exampleFormControlInput1"
            placeholder='Novo email'
            value={email}
            onChange={handleEmailChange}
          />
        
        </div>
      </div>
      <div className="entireColumn form-group w-100">
      <label htmlFor="exampleFormControlInput1">Descrição:</label>
      <input
        type="text"
        id='exampleFormControlInput1'
        className="form-control d-inline"
        placeholder='Nova descrição'
        value={descricao}
        onChange={handleDescricaoChange}
      />
        
      </div>
      <div className= {`entireColumn form-group w-100`}>
          <label htmlFor="telefone">Telefone:</label>
          <input type="text"
           className="form-control"
           id="telefone"placeholder='Telefone'
           value={telefone}
           maxLength={13}
           onChange={handleTelefoneChange} />
      </div>
      <div className={`enderecoEmpresa w-100 mt-4`}>
        <p>Endereço</p>
        <div className={`${styles.cepGridItens} form-group`}>
            <div className="iten1">
              <label htmlFor="cepEmpresa">CEP</label>
              <input type="text" className="form-control" id="cepEmpresa" value={cep} onChange={handleCepChange}  />
            </div>
            <div className="iten2">
              <label htmlFor="cidadeEmpresa">Cidade</label>
              <input type="text" className="form-control" id="cidadeEmpresa" value={cidade} onChange={handleCidadeChange}   />
            </div>

            <div className="iten2">
              <label htmlFor="bairroEmpresa">Bairro</label>
              <input type="text" className="form-control" id="bairroEmpresa" value={bairro} onChange={handleBairroChange}   />
            </div>
            <div className="iten1">
              <label htmlFor="ruaEmpresa">Rua</label>
              <input type="text" className="form-control" id="ruaEmpresa" value={rua} onChange={handleRuaChange} />
            </div>
            <div className="iten2">
              <label htmlFor="numeroEmpresa">Número</label>
              <input type="text" className="form-control" id="numeroEmpresa" value={numero} onChange={handleNumeroChange}  />
            </div>
          </div>
        <div className="dadosPessoais mt-4">
          <p>Dados pessoais</p>
        <div className={styles.gridItens}>
          <div>
              <label htmlFor="primeiroNome">Nome:</label>
              <input type="text" className="form-control d-inline nomeExibicao"  id="primeiroNome" onChange={handleNomePessoalChange} value={nomePessoal}/>
          </div>
            <div className="form-group">
              <label htmlFor="ultimoNome">Ultimo nome:</label>
              <input type="text" className="form-control d-inline nomeExibicao"  id="ultimoNome" onChange={handleUltimoNomeChange} value={ultimoNome}/>
            </div>
        </div>
        </div>
      </div>
      <div className="botoesEscolha d-flex flex-column w-100 align-itens-center mt-4">
        <button className='btn btn-primary' role='submit' onClick={editarDados}> Salvar alterações</button>
          <button className="btn btn-outline-secondary mt-2" onClick={() => setSection("profile")}>Voltar</button>
        </div>
    </div>
    )
  }
  export default EditProfile;