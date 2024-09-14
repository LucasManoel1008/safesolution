import React from 'react'
import { Link } from 'react-router-dom'
import { Fade } from 'react-reveal'
import Imagemindex from '../shared/Imagesindex'
import * as js from '../assets/js/index.js'
import '../assets/css/index.css'

function Home() {
  return (
    <div >
      {/* Botão disponível apenas no mobile. Junte-se a nós */}
     <Link to={"/Cadastro"}> <button className= "btn-primary d-lg-none btn-block joinUs"><a href="/Cadastro">Seja Provedor <img src={Imagemindex.fast} alt="fastForward"/></a></button></Link>

      {/*Área com todos os textos do corpo do site, Cada div text é um texto com seu icone,
      falta alterá-lo de acordo com o novo figma, está totalmente responsivo ja.*/}
      
      <main className="main-content">
        {/* Imagem divulgando serviços - Inicio */}
        <Fade  duration={1500} deley={400 } >
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
        </Fade>
        
        <Fade bottom duration={1500} deley={400 } >
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
                <span><Link to="https://www.solucoesdynamicair.com.br/blog/atencao-aos-custos-de-manutencao-em-sua-industria" target="_blank" style={{color: "#234063", textDecoration: "underline"}}>Saiba mais</Link></span>
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
        </Fade>

        {/*Divulgação do app Mobile - INICIO */}
        <div className="applicationMobile d-flex d-lg-none">
          <h4>BAIXE NOSSO APLICATIVO</h4>
          <p>Gerenciamento de serviços na palma da mão</p>
          <div className="aplicationLinks mt-5 mb-5">
            <Link to="#" className="pr-4"><img src={Imagemindex.googlePlay} width="150" alt="GOOGLE PLAY"/></Link>
            <Link to="#"><img src={Imagemindex.appSotre} width="150" alt="APP STORE"/></Link>
          </div>

          <img src={Imagemindex.cellphone} width="400" alt="CELLPHONE" className="cellphone"/>
        </div>
      </main>
      

      {/* Feedbacks de outros Clientes */}
      <Fade bottom duration={500}>
      <section id="relatos" className="comments-area">
        <h4 className="title-main-text">Feedback de nossos clientes</h4>
        <div className="comments">
        
          <div className="container">
          <Fade bottom duration={600}>
            <img src={Imagemindex.woman1} alt="Luiza Meneses"/>
            </Fade>
            <Fade bottom duration={700}>
            <h4 className="peopleName">Luiza Meneses</h4>
            <p>O sistema de serviços compartilhados
                é uma verdadeira revolução! Agora posso
                acessar uma variedade de serviços de
                diferentes empresas em um só lugar. É 
                incrível como isso facilita minha vida como 
                empreendedora.</p>
            </Fade>
          </div>
          
          
          <div className="container">
          <Fade bottom duration={600}>
            <img src={Imagemindex.man1} alt="José Santos"/>
          </Fade>
          <Fade bottom duration={700}>
            <h4 className="peopleName">José Santos</h4>
            <p>Como proprietário de uma pequena empresa,
                sempre estou buscando maneiras de expandir 
                minha rede de serviços sem gastar muito. O
                sistema de serviços compartilhados é uma 
                solução brilhante. Posso acessar uma ampla
                gama de serviços de alta qualidade sem comprometer
                meu orçamento.</p>
          </Fade>

          </div>
          
          <div className=" container">
          <Fade bottom duration={600}>
            <img src={Imagemindex.woman2} alt="Fernanda Almeida"/>
            </Fade>
            <Fade bottom duration={700}>
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
            </Fade>
          </div>
          <div className="container">
            <Fade bottom duration={600}>
              <img src={Imagemindex.man2} alt="André Ferreira"/>
            </Fade>
            <Fade bottom duration={700}>
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
                </Fade>
          </div>
        </div>
      </section>
      </Fade>
      

      {/* Barra de pesquisa + Categorias - Inicio */}
      <Fade bottom duration={500}>
      <section className="FAQ">
            <h4 className="title-main-text blue2 align-text">Perguntas Frequentes</h4>
      
            <ul className="FAQ-container">
            <Fade bottom duration={600}>
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
                </Fade>
                <Fade bottom duration={600}>
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
                </Fade>
                <Fade bottom duration={600}>
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
                </Fade>
                <Fade bottom duration={600}>
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
                </Fade>
            </ul>
         
        </section>
        </Fade>
        
        
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