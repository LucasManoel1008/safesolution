import React from 'react';
import ImagensUser from '../../shared/ImagensUser';
import styles from '../../assets/css/UserProfile.module.css';


function UserProfile ({ empresa, apagarConta, setSection }){
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
  <div className={`${styles.userProfile} p-4 mb-4`}>
    <div className={styles.userPageHeader}>
      <h4 className="text-center">Perfil da Empresa</h4>
      <p>Gerencie as configurações do perfil de sua empresa</p>
    </div>
    <div className='d-flex flex-column align-items-center'>
      <img className={styles.logoEmpresa} src={ImagensUser.paladins} alt="Imagem empresa" />
    </div>
    <section className={styles.userData}>
      <h5>Dados de sua empresa</h5>
      <div className={styles.userInputs}>
        <div className={`${styles.gridItens} form-group`}>
          <div className="iten1">
            <label htmlFor="nomeEmpresa">Nome da empresa:</label>
            <input className='form-control' type="text" id="nomeEmpresa" value={empresa && empresa.nome_empresa ? empresa.nome_empresa : " "} disabled />
          </div>
          <div className="iten2">
            <label htmlFor='emailEmpresa'>Email da empresa</label>
            <input className='form-control' type="email" id='emailEmpresa' value={empresa && empresa.usuario ? empresa.usuario.email_usuario : " "} disabled />
          </div>
        </div>
        <div className="entireColumn form-group">
          <label htmlFor='descricaoEmpresa'>Descrição da empresa</label>
          <textarea className='form-control' id='descricaoEmpresa' value = {empresa && empresa.descricao_empresa ? empresa.descricao_empresa : " "} disabled />
        </div>
        <div className={`${styles.gridItens} form-group`}>
          <div className="iten1">
            <label htmlFor="telefoneEmpresa">Telefone da empresa</label>
            <input type="text" className="form-control" id='telefoneEmpresa' value={empresa && empresa.telefone_empresa ? empresa.telefone_empresa : " "} disabled />
          </div>
          <div className="iten2">
            <label htmlFor="cnpjEmpresa">CNPJ</label>
            <input type="text" className="form-control" id='cnpjEmpresa' value={empresa && empresa.cnpj ? empresa.cnpj : " "} disabled />
          </div>
        </div>
        <div className="enderecoEmpresa">
          <h5>Endereço</h5>
          <div className={`${styles.cepGridItens} form-group`}>
            <div className="iten1">
              <label htmlFor="cepEmpresa">CEP</label>
              <input type="text" className="form-control" id="cepEmpresa" value={empresa && empresa.cep ? empresa.cep : " "} disabled />
            </div>
            <div className="iten2">
              <label htmlFor="cidadeEmpresa">Cidade</label>
              <input type="text" className="form-control" id="cidadeEmpresa" value={empresa && empresa.cidade ? empresa.cidade : " "} disabled />
            </div>
            <div className="iten2">
              <label htmlFor="bairroEmpresa">Bairro</label>
              <input type="text" className="form-control" id="bairroEmpresa" value={empresa && empresa.bairro ? empresa.bairro : " "} disabled />
            </div>
            <div className="iten1">
              <label htmlFor="ruaEmpresa">Rua</label>
              <input type="text" className="form-control" id="ruaEmpresa" value={empresa && empresa.rua ? empresa.rua : " "} disabled />
            </div>
            <div className="iten2">
              <label htmlFor="numeroEmpresa">Número</label>
              <input type="text" className="form-control" id="numeroEmpresa" value={empresa && empresa.numero ? empresa.numero : " "} disabled />
            </div>
          </div>
        </div>
        <div className={styles.userData}>
          <h5>Dados Pessoais</h5>
          <div className={`${styles.gridItens} form-group`}>
            <div className="iten1">
              <label htmlFor="nomeUsuario">Nome do usuário</label>
              <input type="text" className="form-control" id="nomeUsuario" value={empresa && empresa.usuario.nome_usuario ? empresa.usuario.nome_usuario : " "} disabled />
            </div>
            <div className="iten2">
              <label htmlFor="cpfUsuario">CPF</label>
              <input type="text" className="form-control" id="cpfUsuario" value={empresa && empresa.usuario.cpf ? empresa.usuario.cpf : " "} disabled />
            </div>
          </div>
          <div className="entireColumn form-group">
            <label htmlFor="dataNacimento">Data de nascimento</label>
            <input type="text" name="dataNascimento" id="dataNascicmento" className='form-control' value={empresa && empresa.usuario ? formatDate(empresa.usuario.data_nascimento) : ""} disabled/>
          </div>
        </div>
      </div>
    </section>
    <div className="botoesEscolha d-flex flex-column w-100 align-itens-center mt-4">
        <button className="btn btn-outline-secondary mb-2" onClick={() => setSection("edit")}>Editar Dados</button>
        <button className="btn btn-danger" onClick={apagarConta}>Excluir conta</button>
    </div>
  </div>
);
}

export default UserProfile;