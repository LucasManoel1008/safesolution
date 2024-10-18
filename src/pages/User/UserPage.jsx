import React, { useState, useEffect } from 'react'; // Importando useEffect
import axios from 'axios'; // Importando axios
import '../../assets/css/userPage.css';
import ImagensUser from '../../shared/ImagensUser';
import { useNavigate } from 'react-router-dom';


// Componentes para diferentes seções
const UserProfile = ({ empresa, apagarConta,setSection}) => (
  <div className='userProfile p-4 mb-4'>
    <h2>Configurações da Conta</h2>
    <p>Gerencie detalhes de sua conta.</p>
    <div className="logoEmpresaContent">
      <img src={ImagensUser.paladins} alt="Logo empresa" className='logoEmpresa' />
      <img src={ImagensUser.edit} alt="Edit" width={20} className='editIcon' />
    </div>
    <div className="userItens1 mt-3">
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Nome de exibição:</label>
        <input
          type="text"
          className="form-control d-inline nomeExibicao"
          id="exampleFormControlInput1"
          value={empresa ? empresa.nome_empresa : ''}
          readOnly
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email cadastrado:</label>
        <input
          type="email"
          className="form-control d-inline nomeExibicao"
          id="email"
          value={empresa && empresa.usuario ? empresa.usuario.email_usuario : ''} 
          readOnly
        />
      
      </div>
    </div>
    <div className="userItens2 form-group">
    <label htmlFor="exampleFormControlInput1">Descrição:</label>
    <input
      type="text"
      id='exampleFormControlInput1'
      className="form-control d-inline"
      style={{ overflowY: 'auto' }}
      value={empresa && empresa.descricao_empresa ? empresa.descricao_empresa : ''}
      readOnly
    />
      
    </div>
    <div className="userItens1 mt-4">
      <div className="form-group">
        <label htmlFor="telefone">Telefone:</label>
        <input type="text" className="form-control d-inline" id="telefone" value={empresa && empresa.telefone_empresa ? empresa.telefone_empresa : ""} readOnly />
        
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
              readOnly
              className="form-control"
              value={empresa && empresa.cep ? empresa.cep : ''}
            />
          </div>
          <div>
            <input
              type="text"
              id="rua"
              readOnly
              className="form-control"
              value={empresa && empresa.rua ? empresa.rua : ''}
            />
          </div>
        </div>
        <div className="itens2 mb-4">
          <div>
            <input
              type="text"
              id="bairro"
              readOnly
              className="form-control"
              value={empresa && empresa.bairro ? empresa.bairro : ''}
            />
          </div>
          <div>
            <input
              type="text"
              id="numero"
              readOnly
              max={5}
              className="form-control"
              value={empresa && empresa.numero ? empresa.numero : ''}
            />
          </div>
        </div>
        <div className="mb-4 cidade">
          <input
            type="text"
            id="cidade"
            readOnly
            className="form-control"
            placeholder={empresa && empresa.cidade ? empresa.cidade : ''}
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
            <input type="text" className="form-control d-inline nomeExibicao" id="primeiroNome" value={empresa && empresa.usuario ? empresa.usuario.nome_usuario : ''} readOnly />
           
          </div>
          <div className="form-group">
            <label htmlFor="cpf">CPF:</label>
            <input type="text" className="form-control d-inline nomeExibicao" id="cpf" value={empresa && empresa.usuario ? empresa.usuario.cpf : ''} readOnly />
          
          </div>
          </div>
        </div>
      </div>
      <button className="btn btn-outline-secondary mt-4" onClick={() => setSection("edit")}>Editar Dados</button>
      
      <button className="btn btn-danger mt-2" onClick={apagarConta}>Excluir conta</button>
     
    </div>

);
const EditProfile = ({ empresa, setSection }) => {
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
      style={{ overflowY: 'auto' }}
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

const UserSettings = () => (
  <div className='userSettings mt-4'>
    <h4 className='text-center'><strong>Em Breve</strong></h4>
    <h5 className='text-center'>Esta seção ainda não está pronta</h5>
    <h5 className='text-center'>Volte novamente mais tarde</h5>
    <strong className='iconClosed'><i className="fa-solid fa-square-xmark"></i></strong>
  </div>
);

const UserOrders = () => (
  <div className='userSettings mt-4'>
    <h4 className='text-center'><strong>Em Breve</strong></h4>
    <h5 className='text-center'>Esta seção ainda não está pronta</h5>
    <h5 className='text-center'>Volte novamente mais tarde</h5>
    <strong className='iconClosed'><i className="fa-solid fa-square-xmark"></i></strong>
  </div>
);





// Funções - Inicio

function UserPage() {

  const [section, setSection] = useState('profile');
  const [empresa, setEmpresa] = useState(null); // Estado para armazenar os dados da empresa
  const navigate = useNavigate();

    useEffect(() => {
      fetchEmpresaByCnpj(); // Chama a função para buscar a empresa quando o componente monta
    }, []);

    const fetchEmpresaByCnpj = async () => {
      const empresaString = sessionStorage.getItem('empresa');
      if (empresaString) {
        const dadosEmpresa = JSON.parse(empresaString); 
        console.log('Dados da empresa recuperados do sessionStorage:', dadosEmpresa);
        const cnpj = dadosEmpresa.cnpj.replace(/[./-]/g, '');;
        console.log("CNPJ COLETADO:", cnpj)
        if (cnpj){
          try {
            const response = await axios.get(`http://localhost:8080/empresa/${cnpj}`);
            console.log('Dados da empresa recebidos do backend:', response.data);
            setEmpresa(response.data); 
          } catch (error) {
            console.error('Erro ao buscar empresa:', error);
          }
        }
        else if(dadosEmpresa){
          try {
            const response = await axios.get(`http://localhost:8080/empresa/${dadosEmpresa}`);
            console.log('Dados da empresa recebidos do backend:', response.data);
            setEmpresa(response.data); 
          } catch (error) {
            console.error('Erro ao buscar empresa:', error);
          }
        }
        
      } else {
        console.error('Dados da empresa não encontrados no sessionStorage');
      }
    };
  
  const renderSection = () => {
    switch (section) {
      case 'profile':
        return <UserProfile empresa={empresa} apagarConta={apagarConta} setSection={setSection} />;
      case 'settings':
        return <UserSettings />;
      case 'orders':
        return <UserOrders />;
      case 'edit':
        return <EditProfile setSection={setSection} empresa={empresa} />; // Passar empresa aqui
      default:
        return <UserProfile empresa={empresa} apagarConta={apagarConta} setSection={setSection} />;
    }
  };
  
  
  const apagarConta = async () => {
    try {
      let cnpj = empresa.cnpj;
      let cpf = empresa.usuario.cpf;
      const responseEmpresa = await axios.delete(`http://localhost:8080/empresa/${cnpj}`);
      const responseUser = await axios.delete(`http://localhost:8080/usuario/${cpf}`)
      console.log('Conta apagada com sucesso:', responseEmpresa.data);
      sessionStorage.clear();
      navigate("/")
      
    } catch (error) {
      console.error('Erro ao apagar conta:', error);
    }
  };
    const sairConta = () => {
      sessionStorage.clear();
      navigate('/')
    }

  // Irá mostrar de acordo com o valor definido
  

  return (
    <div className='user-page mb-5'>
      <div className="menuResponsivo mb-2">
        <button className='btn btn-primary mb-2 openMenu'>Open menu</button>
        <div className="nav-links">
          <button className='nav-item mr-1 btn' id='profile' onClick={() => setSection('profile')}><i className="fa-solid fa-user pr-2"></i>Perfil</button>
          <button className='nav-item mr-1 btn' onClick={() => setSection('settings')}><i className="fa-solid fa-gear pr-2"></i>Configurações</button>
          <button className='nav-item mr-1 btn' onClick={() => setSection('orders')}><i className="fa-solid fa-cart-shopping pr-2"></i>Compras</button>
        </div>
      </div>
      {/* Menu de navegação */}
      <section className='user-nav'>
        <nav className='user-nav-links'>
          <button className='nav-item' id='profile' onClick={() => setSection('profile')}><i className="fa-solid fa-user pr-2"></i>Perfil</button>
          <button className='nav-item ' onClick={() => setSection('settings')}><i className="fa-solid fa-gear pr-2"></i>Configurações</button>
          <button className='nav-item ' onClick={() => setSection('orders')}><i className="fa-solid fa-cart-shopping pr-2"></i>Compras</button>
          <button className='sairConta btn' onClick={sairConta}>sair</button>
        </nav>
        
        {/* Conteúdo que muda com base na seção selecionada */}
        <div className='section-date ml-5'>
          {renderSection()}
        </div>
        
      </section>
    </div>
  );
}

export default UserPage;
