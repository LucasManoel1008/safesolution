import React from 'react'
import Imagemindex from '../shared/Imagesindex'

function Home() {
  return (
    <div>
        <button id="botaoScroll" >&uarr;</button>
      <header className="header" id="header">      
        {/* Menu versão mobile */}
        <div className="menuOculto" id="menuOculto">
          <button className="btn-close-x" >&times;</button>
          <a href="#" id="active">AJUDA</a>
          <a href="#">SERVIÇOS</a>
          <a href="#">SOBRE NÓS</a>
          <a href="#">ENTRAR</a>
        </div>

        {/* Menu da Versão Desktop */}
        <div className="elements-header">
          <img src="#" alt="Menu" id="elements-header" style={{fontSize: "30px", cursor: "pointer"}}  />
          <div className="elementsHeader-desktop">
            <a href="#">SERVIÇOS</a>
            <a href="#">SOBRE NÓS</a>
            <a href="#" id="active">AJUDA</a>
          </div>
          <div className="logo">
            <a href="#" id="logo-header"><img src="#" alt="" /></a>
          </div>
          <div className="left-header-desktop">
            <a href="#" className="login">ENTRAR</a>
            <a href="#" className="registro">REGISTRO</a>
          </div>
        </div>
      </header>

      {/* Botão disponível apenas no mobile. Junte-se a nós */}
      <button className="btn-primary d-lg-none btn-block joinUs">Seja Provedor <img src={Imagemindex.fast} alt=""/></button>

      {/*Área com todos os textos do corpo do site, Cada div text é um texto com seu icone,
      falta alterá-lo de acordo com o novo figma, está totalmente responsivo ja.*/}
      <main className="main-content">
        {/* Imagem divulgando serviços - Inicio */}
        <div className="firstImage d-flex fade-in">
          <div className="leftContent">
            <h4>Mais de 1000 empresas em <br/> um só lugar</h4>
            <p>Descubra, contrate e conecte-se <br/> com uma variedade de empresas</p>
            <button className="text-button btn">Descubra já</button>
          </div>
          <div className="rightContent">
            <img src="img/firstImage/plumber-talking-mobile.jpg" alt="Engineer"/>
          </div>
        </div>

        <h4 id="quemSomos" className="title-main-text fade-in">Quem é a Safe Solution?</h4>
        <section className="text-body fade-in">
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
            <a href="#" className="pr-4"><img src="img/aplication/disponivel-google-play-badge 1.png" width="150" alt="GOOGLE PLAY"/></a>
            <a href="#"><img src="img/aplication/disponivel-na-app-store-botao 1.png" width="150" alt="APP STORE"/></a>
          </div>

          <img src="img/aplication/BAIXE NOSSO APLICATIVO.png" width="400" alt="CELLPHONE" className="cellphone"/>
        </div>
      </main>

      {/* Feedbacks de outros Clientes */}
      <section id="relatos" className="comments-area fade-in">
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
     
      <section class="FAQ">
            <h4 class="title-main-text blue2 align-text">Perguntas Frequentes</h4>
            <ul class="FAQ-container">
                <li>
                    <input type="radio" name="faq" id="firstFAQ" />
                    <label for="firstFAQ">Como usar a plataforma?</label>
                    <div class="faq-content">
                        <p>
                        Como Provedor - você pode divulgar os serviços que sua empresa disponibiliza. <br/>  
                        Como Cliente - Você poderá ter acesso a diversoso serviços disponiveis.
                        </p>
                    </div>
                </li>
                <li>
                    <input type="radio" name="faq" id="secondFAQ"/>
                    {/* placeholder */}
                    <label for="secondFAQ">Que tipo de segurança a plataforma possui contra golpes?</label>
                    <div class="faq-content">
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
                    <label for="thirdFAQ">Por que usar a plataforma de vocês?</label>
                    <div class="faq-content">
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
                    <label for="fourthFAQ">A plataforma possui aplicativo móvel para facilitar o acesso em dispositivos móveis?</label>
                    <div class="faq-content">
                        <p>
                            Sim, a plataforma possui uma versão mobile, que está disponível para Android e IOS. O aplicativo é essencial para quem busca praticidade e um acompanhamento
                        dos serviços e contatações mesmo longe dos dispositivos desktop.
                        </p>
                    </div>
                </li>
            </ul>

        </section>
        

        <form id="ajuda" class="forms">
            <div class="forms-title">
                <h4>Ainda dúvidas? Entre em Contato Conosco!</h4>
                <p>*Entrada Obrigatória</p>
            </div>
                <div class="forms-data">
                    <input type="text" placeholder="*NOME" onfocus="focusName()" id="name"/>
                    <input type="text" placeholder="*SOBRENOME"/>
                    <input type="email" placeholder="*EMAIL"/>
                    <input type="tel" placeholder="TELEFONE"/>
                    <input type="text" placeholder="CIDADE"/>
                    <div class="razao">
                    <p>*Assunto</p>
                    <select name="Assunto" id="Assunto">
                        <option value="Assunto" selected>*ASSUNTO</option>
                        <option value="Reclamacao" >RECLAMAÇÃO</option>
                        <option value="Elogio" >ELOGIO</option>
                        <option value="Informacao" >INFORMAÇÃO</option>
                    </select>
                    <div class="textarea">
                        <textarea  rows="1" placeholder="*Mensagem" id="mensagem" oninput="ajustarTexto()"></textarea>
                    </div>
                </div>
                </div>
                <input id="submit" type="submit" value="enviar"/>
        </form>

      <footer class="footer">
            <div class="servicos mt-4">
                <ul class="mt-4 container1">
                    <a href="#"> <img src="img/Logo (Reserva).png" width="200" alt="LOGO"/></a>
                    <li><a href="#">Política de Privacidade</a></li>
                    <li><a href="#">Termos de uso</a></li>
                    <li><a href="#">Seja provedor</a></li>
                </ul>
               <ul class="container2 d-flex flex-column mt-3" >               
                    <strong class="pb-2">Serviços</strong>
                    <li><a href="#">Arquitetura</a></li>
                    <li><a href="#">limpeza</a></li>
                    <li><a href="#">Transportes</a></li>
                    <li><a href="#">Segurança</a></li>
                    <li><a href="#">Encanador</a></li>
               </ul>
               
               <ul class="container3 d-flex flex-column mt-3">
                    <strong class="pb-2">Informações</strong>
                    <li><a href="#quemSomos">Sobre nós</a></li>
                    <li><a href="#ajuda">Ajuda</a></li>
                    <li><a href="#relatos">Relatos</a></li>

               </ul>
            
               <ul class="container4 d-flex flex-row mt-3">

                    <a href="#">
                        <img src="img/redesSociais/Facebook.svg" width="30" alt="Facebook"/>
                    </a>

                    <a href="#">
                        <img src="img/redesSociais/Instagram.svg" width="30" alt="Instagram"/>
                    </a>

                    <a href="#">
                        <img src="img/redesSociais/LinkedIn.svg"  width="30" alt="LinkedIn"/>
                    </a>

                    <a href="#">
                        <img src="img/redesSociais/x.svg"  width="30"  alt="x"/>
                    </a>

                    <a href="#">
                        <img src="img/redesSociais/zap.svg" width="30" alt="Whatsapp"/>
                    </a>
               </ul>

              
            </div>
          
               <span class="align-text">© 2024 Safe Solutions. Todos os direitos reservados.</span>
        </footer>
    </div>
  )
}

export default Home