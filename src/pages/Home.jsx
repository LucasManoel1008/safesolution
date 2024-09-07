import React from 'react'
import Imagemindex from '../shared/Imagesindex'
import * as js from '../assets/js/index.js'
import '../assets/css/index.css'

function Home() {
  return (
    <div >
       
      {/* Botão disponível apenas no mobile. Junte-se a nós */}
      <button className= "btn-primary d-lg-none btn-block joinUs"><a href="/Cadastro">Seja Provedor <img src={Imagemindex.fast} alt="fastForward"/></a></button>

      {/*Área com todos os textos do corpo do site, Cada div text é um texto com seu icone,
      falta alterá-lo de acordo com o novo figma, está totalmente responsivo ja.*/}
      <main className="main-content">
        {/* Imagem divulgando serviços - Inicio */}
        <div className="firstImage d-flex">
          <div className="leftContent">
            <h4>Mais de 1000 empresas em <br/> um só lugar</h4>
            <p>Descubra, contrate e conecte-se <br/> com uma variedade de empresas</p>
            <button className="text-button btn">Descubra já</button>
          </div>
          <div className="rightContent">
            <img src={Imagemindex.plumber} alt="Engineer"/>
          </div>
        </div>

        <h4 id="quemSomos" className="title-main-text fade-in">Quem é a Safe Solution?</h4>
        <section className="text-body">
          <div className="Text">
            <img src={Imagemindex.Safety} alt="Icon" className="icon-main-text"/>
            <p> Focada em serviços e instalações  empresariais, a Safe Solutions
                oferece uma rede que interliga de forma prática e funcional 
                prestadoras de serviço com potenciais empresas-cliente que 
                necessitam de um serviço.</p>
          </div>
          <div className="Text">
            <img src={Imagemindex.tecnico} alt="tecnico_itb" className="icon-main-text"/>
            <p>Nosso Sistema divulga diversos serviços de empresas, para empresas, ao redor do Brasil.
                Publique serviços de sua empresa, ou procure dentre a vasta variedade de opções para
                a sua própria.
            </p>
          </div>
          <div className="Text">
            <img src={Imagemindex.gastos} alt="Icon" className="icon-main-text"/>
            <p>Cerca de 5% do faturamento bruto de sua empresa pode estar
                sendo gasto de forma inadequada com serviços superfaturados.
                <span>
                <a href="https://www.solucoesdynamicair.com.br/blog/atencao-aos-custos-de-manutencao-em-sua-industria" target="_blank" style={{color: "#234063", textDecoration: "underline"}}>
                    Saiba mais</a>
                </span>
            </p>
          </div>
          <div className="Text">
            <img src={Imagemindex.Quest} alt="Quest" className="icon-main-text"/>
            <ul className="list">
              <li>Otimizar</li>
              <li>Capacitar clientes para encontrar serviços que precisam, quando precisam.</li>
              <li>Facilitar comunicação entre empresas.</li>
            </ul>
          </div>
        </section>

        {/*Divulgação do app Mobile - INICIO */}
        <div className="applicationMobile d-flex d-lg-none">
          <h4>BAIXE NOSSO APLICATIVO</h4>
          <p>Gerenciamento de serviços na palma da mão</p>
          <div className="aplicationLinks mt-5 mb-5">
            <a href="#" className="pr-4"><img src={Imagemindex.googlePlay} width="150" alt="GOOGLE PLAY"/></a>
            <a href="#"><img src={Imagemindex.appSotre} width="150" alt="APP STORE"/></a>
          </div>

          <img src={Imagemindex.cellphone} width="400" alt="CELLPHONE" className="cellphone"/>
        </div>
      </main>

      {/* Feedbacks de outros Clientes */}
      <section id="relatos" className="comments-area">
        <h4 className="title-main-text">Feedback de nossos clientes</h4>
        <div className="comments">
          <div className="container">
            <img src={Imagemindex.woman1} alt=""/>
            <h4 className="peopleName">Luiza Meneses</h4>
            <p>O sistema de serviços compartilhados
                é uma verdadeira revolução! Agora posso
                acessar uma variedade de serviços de
                diferentes empresas em um só lugar. É 
                incrível como isso facilita minha vida como 
                empreendedora.</p>
          </div>
          <div className="container">
            <img src={Imagemindex.man1} alt=""/>
            <h4 className="peopleName">José Santos</h4>
            <p>Como proprietário de uma pequena empresa,
                sempre estou buscando maneiras de expandir 
                minha rede de serviços sem gastar muito. O
                sistema de serviços compartilhados é uma 
                solução brilhante. Posso acessar uma ampla
                gama de serviços de alta qualidade sem comprometer
                meu orçamento.</p>
          </div>
          <div className=" container">
            <img src={Imagemindex.woman2} alt=""/>
            <h4 className="peopleName">Fernanda Almeida</h4>
            <p>Como proprietária de uma loja no setor 
                de varejo, é importante manter uma 
                aparência impecável e oferecer um 
                ambiente agradável aos clientes. O 
                sistema de serviços compartilhados 
                torna mais fácil encontrar profissionais 
                confiáveis para lidar com as necessidades 
                de limpeza, manutenção e reparos, permitindo
                que eu me concentre em oferecer a 
                melhor experiência de compra para 
                meus clientes.
            </p>
          </div>
          <div className="container">
            <img src={Imagemindex.man2} alt=""/>
            <h4 className="peopleName">André Ferreira</h4>
            <p>Como empresário, sempre estou em busca
                de soluções eficientes para otimizar
                minhas operações. O sistema de serviços
                compartilhados me permite acessar uma
                variedade de serviços essenciais para 
                minha empresa de forma rápida e fácil
                . É uma ferramenta indispensável para
                quem busca crescimento e eficiência 
                nos negócios.</p>
          </div>
        </div>
      </section>

      {/* Barra de pesquisa + Categorias - Inicio */}
     
      <section className="FAQ">
            <h4 className="title-main-text blue2 align-text">Perguntas Frequentes</h4>
            <ul className="FAQ-container">
                <li>
                    <input type="radio" name="faq" id="firstFAQ" />
                    <label htmlFor="firstFAQ">Como usar a plataforma?</label>
                    <div className="faq-content">
                        <p>
                        Como Provedor - você pode divulgar os serviços que sua empresa disponibiliza. <br/>  
                        Como Cliente - Você poderá ter acesso a diversoso serviços disponiveis.
                        </p>
                    </div>
                </li>
                <li>
                    <input type="radio" name="faq" id="secondFAQ"/>
                    {/* placeholder */}
                    <label htmlFor="secondFAQ">Que tipo de segurança a plataforma possui contra golpes?</label>
                    <div className="faq-content">
                        <p>
                            Instalações e serviços empresariais, no geral, demandam muitas etapas, 
                            um contato individual com as servidoras, e uma burocracia que precisa
                            perder espaço com a rapidez do mercado moderno. A grandiosa vantagem 
                            da Safe Soluction© é reunir todas as etapas do processo num único lugar,
                            otimizando tempo e unificando também a contatação para todas as empresas,
                            sejam elas prestadoras ou solicitantes de serviços.</p>
                    </div>
                </li>
                <li>
                    <input type="radio" name="faq" id="thirdFAQ"/>
                    <label htmlFor="thirdFAQ">Por que usar a plataforma de vocês?</label>
                    <div className="faq-content">
                        <p>
                            Instalações e serviços empresariais, no geral, demandam muitas etapas, 
                            um contato individual com as servidoras, e uma burocracia que precisa
                            perder espaço com a rapidez do mercado moderno. A grandiosa vantagem 
                            da Safe Soluction© é reunir todas as etapas do processo num único lugar,
                            otimizando tempo e unificando também a contatação para todas as empresas,
                            sejam elas prestadoras ou solicitantes de serviços.
                        </p>
                    </div>
                </li>
                <li>
                    <input type="radio" name="faq" id="fourthFAQ"/>
                    <label htmlFor="fourthFAQ">A plataforma possui aplicativo móvel para facilitar o acesso em dispositivos móveis?</label>
                    <div className="faq-content">
                        <p>
                            Sim, a plataforma possui uma versão mobile, que está disponível para Android e IOS. O aplicativo é essencial para quem busca praticidade e um acompanhamento
                        dos serviços e contatações mesmo longe dos dispositivos desktop.
                        </p>
                    </div>
                </li>
            </ul>

        </section>
        
        <form id="ajuda" className="forms">
            <div className="forms-title">
                <h4>Ainda dúvidas? Entre em Contato Conosco!</h4>
                <p>*Entrada Obrigatória</p>
            </div>
                <div className="forms-data">
                    <input type="text" placeholder="*NOME" id="name"/>
                    <input type="text" placeholder="*SOBRENOME"/>
                    <input type="email" placeholder="*EMAIL"/>
                    <input type="tel" placeholder="TELEFONE"/>
                    <input type="text" placeholder="CIDADE"/>
                    <div className="razao">
                    <p>*Assunto</p>
                    <select name="Assunto" id="Assunto">
                        <option value="Assunto" defaultValue={'Assunto'}>*ASSUNTO</option>
                        <option value="Reclamacao" >RECLAMAÇÃO</option>
                        <option value="Elogio" >ELOGIO</option>
                        <option value="Informacao" >INFORMAÇÃO</option>
                    </select>
                    <div className="textarea">
                        <textarea  rows="1" placeholder="*Mensagem" id="mensagem" onFocus={js.ajustarTexto}></textarea>
                    </div>
                </div>
                </div>
                <input id="submit" type="submit" onSubmit={js.submit} value="enviar"/>
        </form>

      
    </div>
  )
}

export default Home