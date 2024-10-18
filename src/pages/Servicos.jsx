import React, {useState} from 'react'
import '../assets/css/servicos.css'
import { Link } from 'react-router-dom'
import imagensServicos from '../shared/Imagesservicos'
import * as servico from '../assets/js/servicos';
import { Fade, Roll, Zoom } from 'react-reveal';




const None =() => (
  <div>
    
  </div>  
);

const Manutencao = () => (
    <Zoom duration={200}>
    <div id='servico1' className='serviceTemplate'>
        <div className="nomeEmpresa p-3 ">
            <img src={imagensServicos.logo1} width={70} alt="Bretecno" />
            <span>Bretecno</span>
            <button className='float-right mt-3 btn closeService' onClick={servico.servico1}>X</button>
            
        </div>
        <div className="descricao">
        <ul>
            <h6>Descrição</h6>
            <p>Nosso serviço de manutenção de hardware é projetado para
            garantir o desempenho ideal, a longevidade e a confiabilidade
            dos seus equipamentos de informática. Oferecemos uma solução
            abrangente e técnica para a manutenção preventiva e corretiva
            de computadores e outros dispositivos eletrônicos. Abaixo,
            detalhamos os aspectos técnicos e serviços incluídos: <br />
            <li>Limpeza Interna</li>
            <li>Atualização de Firmware e Drivers;</li>
            <li>Substituição de Componentes Defeituosos;</li>
            <li>Configuração de Bios;</li> 
            </p>
        </ul>
        </div>
        <div className="criterios">
            
            <ul>
            <h6>Critérios de Orçamento</h6>
                <li>Urgência do Serviço</li>
                <li>Quantidade de Equipamentos</li>
                <li>Custo de Peças e Mão de Obra</li>
                <li>Localização</li>
            </ul>
        </div>
        <Link to={"/Orcamento"}><button className='btn btn-primary orcamento'>Solicitar Orçamento</button></Link>
    </div>  
    </Zoom>
)

const Limpeza = () => (
    <Zoom duration={200}>
    <div id='servico2' className='serviceTemplate'>
       <div className="nomeEmpresa p-3 ">
            <img src={imagensServicos.logo2} width={70} alt="Super Clean" />
            <span>Super Clean</span>
            <button className='float-right mt-3 btn closeService' onClick={servico.servico2} >X</button>
            
        </div>
        <div className="descricao">
        <ul>
            <h6>Descrição</h6>
            <p>Nosso serviço de limpeza profissional oferece soluções completas e personalizadas para manter seu
            ambiente impecável e saudável. Seja para residências, escritórios, ou áreas comerciais, nossa
            equipe altamente treinada e equipada utiliza produtos e técnicas de limpeza de última geração
            para garantir resultados excepcionais e a satisfação total dos nossos clientes. <br />
            <li>Limpeza Geral;</li>
            <li>Limpeza de Janelas e Vidros;</li>    
            </p>
        </ul>
        </div>
        <div className="criterios">
            
            <ul>
            <h6>Critérios de Orçamento</h6>
                <li>Área a Ser Limpa</li>
                <li>Número de Ambientes</li>
                <li>Urgência</li>
                <li>Custo de Peças e Mão de Obra</li>
                <li>Localização</li>
            </ul>
        </div>
        <Link to={"/Orcamento"}><button className='btn btn-primary orcamento'>Solicitar Orçamento</button></Link>
    </div>  
    </Zoom>
)


const Montador = () =>(
    <Zoom duration={200}>
    <div id='servico3' className='serviceTemplate'>
        <div className="nomeEmpresa p-3 ">
            <img src={imagensServicos.logo3} width={70} alt="O Montador" />
            <span>O Montador</span>
            <button className='float-right mt-3 btn closeService' onClick={servico.servico3}>X</button>
            
        </div>
        <div className="descricao">
        <ul>
            <h6>Descrição</h6>
            <p>Nossa empresa oferece serviços
            especializados de montagem
            de móveis para residências,
            escritórios e ambientes 
            comerciais. Contamos com 
            montadores experientes que
            garantem uma instalação rápida,
            segura e eficiente de móveis de
            todos os tipos e marcas. Desde
            móveis planejados até móveis 
            prontos para montagem. <br />
            <li>Ajustes e Reparos;</li>
            <li>Instalação de Mobiliário Corporativo;</li>
            <li>Desmontagem e Remontagem;</li>
            </p>
        </ul>
        </div>
        <div className="criterios">
            <ul>
            <h6>Critérios de Orçamento</h6>
                <li>Tipo de Móvel</li>
                <li>Quantidade de Móveis</li>
                <li>Necessidade de Transporte</li>
                <li>Localização</li>
            </ul>
        </div>
        <Link to={"/Orcamento"}><button className='btn btn-primary orcamento'>Solicitar Orçamento</button></Link>
    </div>
    </Zoom>
);


function Servicos() {
    const [currentComponent, setCurrentComponent] = useState('none');

// Função para mudar o componente exibido
const handleComponentChange = (component) => {
    document.getElementById('filter').style.display = 'block';
    setCurrentComponent(component);
};
// Conteúdo da página inicial   
  return (
    
    <div className='conteiner servicosContent mb-4'>
            <div id='filter' className="filter"></div>
        <div className="leftContentFilter">
            <h5 className='text-center mt-3'>Mensagens</h5> 
            
            <div className="message item1">
                <img src={imagensServicos.transportadora} width={50} alt="transportadora" />
                <div className="messageText">
                    <p className='lh-sm '><strong>Transul</strong> <br /> <span>Peço desculpas pelo incove.. <i className="fa-solid fa-check-double"></i></span></p>
                    
                </div>
            </div>
        </div>
        <div className="mainContentServicos">
        <div className="input-group mb-4">
            <input type="search" className="form-control rounded" placeholder="Pesquisar..." aria-label="Search" aria-describedby="search-addon" />
            <button type="button" className="btn btn-outline-primary" data-mdb-ripple-init><i className="filtro fa-solid fa-filter"></i></button>
        </div>
            <section className='servicoSection mb-4' onClick={servico.ativar1}>
                <button className="servico w-100 btn" onClick={() => handleComponentChange('manutencao')}>               
                        <img src={imagensServicos.logo1} width={50} height={50} alt="Logo empresa" className='mr-4'/>
                    <div className="rightText">
                        <span className="title">Manutenção de Hardwares</span>
                        <h6>Bretecno</h6>
                        <small className='d-block'>Campinas, São Paulo</small>
                        <small>Há 16 Horas</small>
                    </div>
                </button>
            </section>
            <section className='servicoSection mt-4' onClick={servico.ativar2}>
                     <button className="servico w-100 btn" onClick={() => handleComponentChange('limpeza')}>            
                        <img src={imagensServicos.logo2} width={50} height={50} alt="Logo empresa" className='mr-4'/>
                    <div className="rightText">
                        <span className="title">Limpeza de Escritórios</span>
                        <h6>Super Clean</h6>
                        <small className='d-block'>Osasco, São Paulo</small>
                        <small>Há 2 Semanas</small>
                    </div>
                </button>
            </section>
            <section className='servicoSection mt-4'  onClick={servico.ativar3}>
            <button className="servico w-100 btn" onClick={() => handleComponentChange('montador')}>                     
                        <img src={imagensServicos.logo3} width={50} height={50} alt="Logo empresa" className='mr-4'/>
                    <div className="rightText">
                        <span className="title">Montagem de Móveis</span>
                        <h6>O Montador</h6>
                        <small className='d-block'>Carapicuíba, São Paulo</small>
                        <small>Há 1 mês</small>
                    </div>
                </button>
            </section>
            
            <div> {/* Troca dos componentes */}
                {currentComponent === 'none' && <None />}
                {currentComponent === 'manutencao' && <Manutencao />}
                {currentComponent === 'limpeza' && <Limpeza />}
                {currentComponent === 'montador' && <Montador />}
            </div>
        </div>
    </div>
  )
}

export default Servicos