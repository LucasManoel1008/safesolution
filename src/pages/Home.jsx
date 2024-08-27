import React from 'react'

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
      <button className="btn-primary d-lg-none btn-block joinUs">Seja Provedor <img src="img/Fast forward.png" alt=""/></button>

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
            <img src="img/Safety.svg" alt="Icon" className="icon-main-text"/>
            <p> Focada em serviços e instalações  empresariais, a Safe Solutions
                oferece uma rede que interliga de forma prática e funcional 
                prestadoras de serviço com potenciais empresas-cliente que 
                necessitam de um serviço.</p>
          </div>
          <div className="Text">
            <img src="img/tecnico_itb.svg" alt="tecnico_itb" className="icon-main-text"/>
            <p>Nosso Sistema divulga diversos serviços de empresas, para empresas, ao redor do Brasil.
                Publique serviços de sua empresa, ou procure dentre a vasta variedade de opções para
                a sua própria.
            </p>
          </div>
          <div className="Text">
            <img src="img/gastos.svg" alt="Icon" className="icon-main-text"/>
            <p>Cerca de 5% do faturamento bruto de sua empresa pode estar
                sendo gasto de forma inadequada com serviços superfaturados.
                <span>
                <a href="https://www.solucoesdynamicair.com.br/blog/atencao-aos-custos-de-manutencao-em-sua-industria" target="_blank" style={{color: "#234063", textDecoration: "underline"}}>
                    Saiba mais</a>
                </span>
            </p>
          </div>
          <div className="Text">
            <img src="img/Quest.svg" alt="Quest" className="icon-main-text"/>
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
            <img src="img/woman1.png" alt=""/>
            <h4 className="peopleName">Luiza Meneses</h4>
            <p>O sistema de serviços compartilhados
                é uma verdadeira revolução! Agora posso
                acessar uma variedade de serviços de
                diferentes empresas em um só lugar. É 
                incrível como isso facilita minha vida como 
                empreendedora.</p>
          </div>
          <div className="container">
            <img src="img/man1.png" alt=""/>
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
            <img src="img/woman2.png" alt=""/>
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
            <img src="img/man2.png" alt=""/>
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
      <section className="categorias">
        <h4 className="title-main-text">Faça o Teste!</h4>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Pesquisar"/>
          <div className="input-group-append">
            <button className="btn btn-secondary" type="button">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </section>

      <div className="links d-flex">
        <strong>Mais Vistos:</strong>
        <div className="servicos-links">
          <a href="#">Arquitetura</a>
          <a href="#">limpeza</a>
          <a href="#">Transportes</a>
          <a href="#">Segurança</a>
          <a href="#">Encanador</a>
        </div>
      </div>

      {/* Barra de pesquisa + Categorias - FIM */}

      <section className="FAQ">
        <h4>Perguntas Frequentes</h4>
        <div className="faq-item">
          <div className="faq-question">O que é a Safe Solution?</div>
          <div className="faq-answer">A Safe Solution é uma plataforma que conecta empresas prestadoras de serviços com outras empresas que necessitam desses serviços, facilitando o processo de contratação e otimização de recursos.</div>
        </div>
        <div className="faq-item">
          <div className="faq-question">Como funciona o sistema de serviços compartilhados?</div>
          <div className="faq-answer">Nosso sistema permite que empresas publiquem seus serviços para que outras empresas possam encontrá-los e contratá-los de forma prática e eficiente, tudo em um único lugar.</div>
        </div>
        <div className="faq-item">
          <div className="faq-question">Quem pode utilizar a plataforma?</div>
          <div className="faq-answer">Qualquer empresa que esteja em busca de otimizar seus recursos ao contratar serviços ou que deseja expandir sua rede de clientes pode utilizar nossa plataforma.</div>
        </div>
      </section>

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