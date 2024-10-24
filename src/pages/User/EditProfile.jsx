import React from "react";
import { useState } from "react";
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
    <div className='edit userProfile'>
      <h4>Editar conta</h4>
       <div className="userItens1 mt-3">
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Nome de exibição:</label>
          <input
            type="text"
            className="form-control d-inline nomeExibicao"
            id="exampleFormControlInput1"
            placeholder='Novo nome empresarial'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Email cadastrado:</label>
          <input
            type="email"
            className="form-control d-inline nomeExibicao"
            id="exampleFormControlInput1"
            placeholder='Novo email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        
        </div>
      </div>
      <div className="userItens2 form-group">
      <label htmlFor="exampleFormControlInput1">Descrição:</label>
      <input
        type="text"
        id='exampleFormControlInput1'
        className="form-control d-inline"
        placeholder='Nova descrição'
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
        
      </div>
      <div className="userItens1 mt-4">
        <div className="form-group">
          <label htmlFor="telefone">Telefone:</label>
          <input type="text"
           className="form-control d-inline"
           id="telefone"placeholder='Telefone'
           value={telefone}
           maxLength={13}
           onChange={(e) => setTelefone(e.target.value)} />
          
          
        </div>
      </div>
      <div className="endereco mt-4">
        <p>Endereço</p>
        <div className="cepInputs mt-4">
          <div className="itens1 mb-4">
            <div>
              <input
                type="text"
                id="cep"
                className="form-control"
                placeholder='CEP'
                value={cep}
                onChange={(e) => setCep(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="rua"
                className="form-control"
                placeholder='Rua'
                value={rua}
                onChange={(e) => setRua(e.target.value)}
              />
            </div>
          </div>
          <div className="itens2 mb-4">
            <div>
              <input
                type="text"
                id="bairro"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
                className="form-control"
                placeholder="Bairro"
              />
            </div>
            <div>
              <input
                type="text"
                id="numero"
                maxLength={5}
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                className="form-control"
                placeholder="Número"
              />
            </div>
          </div>
          <div className="mb-4 cidade">
            <input
              type="text"
              id="cidade"
              className="form-control"  
              placeholder="Cidade"
              onChange={(e) => setCidade(e.target.value)}
              value={cidade}
            />
          </div>
        </div>
        </div>
        <div className="dadosPessoais mt-4">
        <div className="inputsPessoais"></div>
        <p>Dados pessoais</p>
        <div className="nome-ultimo">
          <div className="userItens1 mt-4">
            <div className="form-group">
              <label htmlFor="primeiroNome">Nome:</label>
              <input type="text" className="form-control d-inline nomeExibicao"  id="primeiroNome" onChange={(e) => setNomePessoal(e.target.value)} value={nomePessoal}/>
             
            </div>
            <div className="form-group">
              <label htmlFor="ultimoNome">Ultimo nome:</label>
              <input type="text" className="form-control d-inline nomeExibicao"  id="ultimoNome" onChange={(e) => setUltimoNome(e.target.value)} value={ultimoNome}/>
            
            </div>
            </div>
          </div>
        </div>
        <button className='btn btn-primary' role='submit' onClick={editarDados}> Salvar alterações</button>
        <button className="btn btn-outline-secondary mt-2" onClick={() => setSection("profile")}>Voltar</button>
    </div>
    )
  }
  export default EditProfile;