import React, { useState } from 'react';
import '../assets/css/userPage.css'
import ImagensUser from '../shared/ImagensUser';

// Componentes para diferentes seções, começando no UserProfile
const UserProfile = () => (
  <div className='userP rofile p-4 mb-4'>
    <h2>Configurações da Conta</h2>
    <p>Gerencie detalhes de sua conta.</p>
    <div className="logoEmpresaContent">
      <img src={ImagensUser.paladins} alt="Logo empresa" className='logoEmpresa' />
      <img src={ImagensUser.edit} alt="Edit" className='editIcon' />
    </div>
    <div className="userItens1 mt-3">
            
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Nome de exibição:</label>
                <input type="text" className="form-control d-inline nomeExibicao" id="exampleFormControlInput1" value={"IntechLauncher"} readOnly/>
                <span><i className="fa-solid fa-pen-to-square"></i></span>
             </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Email cadastrado:</label>
                <input type="email" className="form-control d-inline nomeExibicao" id="exampleFormControlInput1" value={"I****r@gmail.com"} readOnly/>
                <span><i className="fa-solid fa-pen-to-square"></i></span>
             </div>
    </div>
    <div className="userItens2 form-floating ">
        <textarea className="form-control mt-3 " placeholder="Sua descrição aqui..."  id="floatingTextarea2" >Sua descrição aqui...</textarea>
        <label htmlFor="floatingTextarea2">Descrição</label>
    </div>
    <div className="userItens1 mt-4">
            
            <div className="form-group">
                <label htmlFor="telefone">Telefone:</label>
                <input type="text" className="form-control d-inline" id="primeiroNome" value={"(00) 00000-0000"} readOnly/>
                <span><i className="fa-solid fa-pen-to-square"></i></span>
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
                        placeholder="CEP"
                        
                    />
                </div>
                <div>
                    <input
                        type="text"
                        id="rua"
                        
                        readOnly
                        maxLength={5}
                        className="form-control"
                        placeholder="Rua"
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
                    placeholder="Bairro"
                />
            </div>
            <div>
                <input
                    type="text"
                    id="numero"
                   
                    className="form-control"
                    placeholder="Número"
                    
                />
            </div>
            </div>
            
            <div className="mb-4">
                <input
                    type="text"
                    id="cidade"
                    readOnly
                    className="form-control"
                    placeholder="Cidade"
                />
            </div>
            <div>
                <button type="button" className="btn btn-primary editar">Editar</button>
            </div>
            </div>

    </div>
    <div className="dadosPessoais mt-4">
      <div className="inputsPessoais"></div>
        <p>Dados pessoais</p>
        <div className="nome-ultimo">
        <div className="userItens1 mt-4">
            
            <div className="form-group">
                <label htmlFor="primeiroNome">Primeiro Nome:</label>
                <input type="text" className="form-control d-inline nomeExibicao" id="primeiroNome" value={"Fulano"} readOnly/>
                <span><i className="fa-solid fa-pen-to-square"></i></span>
             </div>
            <div className="form-group">
                <label htmlFor="ultimoNome">Último Nome:</label>
                <input type="email" className="form-control d-inline nomeExibicao" id="ultimoNome" value={"de Tal"} readOnly/>
                <span><i className="fa-solid fa-pen-to-square"></i></span>
             </div>
        </div>
        
        </div>
      
    </div>
  </div>
);

const UserSettings = () => (
  <div className='userSettings mt-4'>
    <h4 className='text-center'><strong>Em Breve</strong></h4>
    <h5 className='text-center'>Esta seção ainda não está pronto</h5>
    <h5 className='text-center'>Volte novamente mais tarde</h5>
    <strong className='iconClosed'><i class="fa-solid fa-square-xmark"></i></strong>
  </div>
);

const UserOrders = () => (
  <div className='userSettings mt-4'>
    <h4 className='text-center'><strong>Em Breve</strong></h4>
    <h5 className='text-center'>Esta seção ainda não está pronto</h5>
    <h5 className='text-center'>Volte novamente mais tarde</h5>
    <strong className='iconClosed'><i class="fa-solid fa-square-xmark"></i></strong>
  </div>
);

function UserPage() {
  const [section, setSection] = useState('profile');

  // Irá mostrar de acordo com o valor definido
  const renderSection = () => {
    switch (section) {
      case 'profile':
        return <UserProfile />;
      case 'settings':
        return <UserSettings />;
      case 'orders':
        return <UserOrders />;
      default:
        return <UserProfile />;
    }
    
  };

  return (
    <div className='user-page mb-5'>  
      {/* Menu de navegação */}
        <section className='user-nav'>
            <nav className='user-nav-links'>
              
                    <button className='nav-item' id='profile' onClick={() => setSection('profile')}><i className="fa-solid fa-user pr-2"></i>Perfil</button>
                
                    <button className='nav-item ' onClick={() => setSection('settings')}><i className="fa-solid fa-gear pr-2"></i>Configurações</button>
                
                    <button className='nav-item ' onClick={() => setSection('orders')}><i className="fa-solid fa-cart-shopping pr-2"></i>Pedidos</button>
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
