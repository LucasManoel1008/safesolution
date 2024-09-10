import React, { useState } from 'react';
import '../assets/css/userPage.css'

// Componentes para diferentes seções, começando no UserProfile
const UserProfile = () => (
  <div className='userProfile p-4'>
    <h2>Configurações da Conta</h2>
    <p>Gerencie detalhes de sua conta.</p>
    <div className="userItens1 mt-4">
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
            <div className="aplicar">
                <button type="button" className="btn btn-primary ">Editar</button>
            </div>
            </div>

    </div>

  </div>
);

const UserSettings = () => (
  <div>
    <h2>Configurações</h2>
    <p>Configurações da conta do usuário.</p>
    
  </div>
);

const UserOrders = () => (
  <div>
    <h2>Pedidos</h2>
    <p>Histórico de pedidos do usuário.</p>
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
                <ul>
                <li>
                    <button className='nav-item' id='profile' onClick={() => setSection('profile')}><i className="fa-solid fa-user pr-2"></i>Perfil</button>
                </li>
                <li>
                    <button className='nav-item ' onClick={() => setSection('settings')}><i className="fa-solid fa-gear pr-2"></i>Configurações</button>
                </li>
                <li>
                    <button className='nav-item ' onClick={() => setSection('orders')}><i className="fa-solid fa-cart-shopping pr-2"></i>Pedidos</button>
                </li>
                </ul>
                
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
