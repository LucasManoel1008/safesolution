import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Fade } from 'react-reveal'
import Imagemindex from '../shared/Imagesindex'
import * as js from '../assets/js/index.js'
import '../assets/css/index.css'
import emailjs from 'emailjs-com'



function Home() {
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [cidade, setCidade] = useState('')
    const [mensagem, setMensagem] = useState("")
    const [assunto, validarAssunto] = useState('')  /*  pega os dados do Assunto  */ 
    const [envioEmail, setEnvioEmail] = useState(false)

    const handleInputNome = (e) => {
      const nome = e.target.value.replace(/\d/g, '')
      setNome(nome)
    }

    const handleInputSobrenome = (e) =>{
      const sobrenome = e.target.value.replace(/\d/g, '')
      setSobrenome(sobrenome)
    }
    const handleInputEmail = (e) => {
      setEmail(e.target.value)
    }
    const handleInputTelefone = (e) => {
      let telefone = e.target.value.replace(/\D/g, ""); // Remove qualquer caractere que não seja número
      
      if (telefone.length > 2) { // Verifica se há mais de dois caracteres
          telefone = telefone.replace(/^(\d{2})(\d)/, "($1) $2"); // Formata o DDD
      }
  
      if (telefone.length > 6) { // Verifica se há mais de 6 caracteres
          telefone = telefone.replace(/ (\d{5})(\d)/, `$1-$2`); // Formata para incluir o hífen
      }
  
      setTelefone(telefone); // Atualiza o estado com o telefone formatado
  };
  
  
    const handleInputMensagem = (e) =>{
      setMensagem(e.target.value);
    }
    const handleInputCidade =(e) =>{
      setCidade(e.target.value)
    }
    

    const validarFormulario = (event) => {
      event.preventDefault(); {/*Impede o envio do formulário */}

      {/* Validar Nome */}
      if (nome == ""){
        window.alert("O campo nome deve ser preenchido");
        return;
      }
      else if (email == ""){
        window.alert("O campo email deve ser preenchido")
      }
      
      else if (assunto === 'assunto' || assunto === '') {
        window.alert('Selecione um Assunto diferente do padrão!');
      } 
      else if(mensagem == ""){
        window.alert("O campo Mensagem deve ser preenchido")
      }
      else if (email.length === 0) {
        window.alert("Digite um endereço de email para prosseguir!");
      } 
  
      else if (email.indexOf("@") === -1) {
        window.alert("Email incorreto!");
      }
      else {
          const templateParams = {
            assunto: assunto,
            nome: nome + " " + sobrenome,
            message: mensagem,
            email: email,
          };
          emailjs.send("service_e3eqp7s", "template_0iwid6d", templateParams, "f3oNKxzSSwUaAoUcD")
          .then((response) => {
            setEnvioEmail(true)
            setNome('');
            setSobrenome('');
            setEmail('');
            setTelefone('');
            setCidade('');
            validarAssunto('');
            setMensagem('');
            return true;
          
        }, (error) => {
          console.log('FAILED...', error);
          window.alert('Erro ao enviar a mensagem');
          return false;
        });
      }
    };
   

  return (
    <div className='mb-5'>
      {/* Botão disponível apenas no mobile. Junte-se a nós */}
     <Link to={"/Cadastro"}> <button className= "btn-primary d-lg-none btn-block joinUs">Seja Provedor <img src={Imagemindex.fast} alt="fastForward"/></button></Link>

      {/*Área com todos os textos do corpo do site, Cada div text é um texto com seu icone,
      falta alterá-lo de acordo com o novo figma, está totalmente responsivo ja.*/}
      
      <main className="main-content">
        {/* Imagem divulgando serviços - Inicio */}
        <Fade  duration={1500} deley={400 } >
        <div className="firstImage d-flex">
          <div className="leftContent">
            <h4>Conecte-se a Soluções Empresariais <br /> de Qualidade</h4>
            <p>Encontre empresas confiáveis e <br /> serviços especializados para cada necessidade do seu negócio</p>
            <Link to="/Cadastro" className="text-button btn">Comece já</Link>
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
                        Provedores: Cadastre sua empresa e alcance novos clientes, promovendo os serviços que você oferece de maneira simples e eficaz. <br/>  
                        Clientes: Encontre diversos serviços em um só lugar e contrate facilmente o que precisar, com praticidade e segurança.
                        </p>
                    </div>
                </li> 
                </Fade>
                <Fade bottom duration={600}>
                <li>
                    <input type="radio" name="faq" id="secondFAQ"/>
                    <label htmlFor="secondFAQ">Que tipo de segurança a plataforma possui contra golpes?</label>
                    <div className="faq-content">
                        <p>
                            Instalações e serviços empresariais, no geral, demandam muitas etapas, 
                            um contato individual com as servidoras, e uma burocracia que precisa
                            ,perder espaço com a rapidez do mercado moderno. A grandiosa vantagem 
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
                          Oferecemos uma maior práticidade e segurança. Permitindo um controle maior dos serviços
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
        
        
        <form className="forms"  onSubmit={validarFormulario}>
            <div className="forms-title">
                <h4>Ainda dúvidas? Entre em Contato Conosco!</h4>
                <p>*Entrada Obrigatória</p>
            </div>
                <div className="forms-data">
                    <input type="text" placeholder="*NOME" id="name" value={nome} onChange={handleInputNome} />
                    <input type="text" placeholder="SOBRENOME" value={sobrenome} onChange={handleInputSobrenome}/>
                    <input type="email" placeholder="*EMAIL"  value={email} onChange={handleInputEmail} />
                    <input type="tel" placeholder="TELEFONE" maxLength={14} value={telefone} onChange={handleInputTelefone}/>
                    <input type="text" placeholder="CIDADE" value={cidade} onChange={handleInputCidade}/>
                    <div className="razao">
                    <small>*Assunto</small>
                    <select id="assunto"   onChange={(e) => validarAssunto(e.target.value)}>
                        <option value='Assunto'>*ASSUNTO</option>
                        <option value="Reclamação" >RECLAMAÇÃO</option>
                        <option value="Elogio" >ELOGIO</option>
                        <option value="Informação" >INFORMAÇÃO</option>
                    </select>
                    <div className="textarea">
                        <textarea  rows="1" 
                         placeholder="*Mensagem" id="mensagem" onFocus={js.ajustarTexto} value={mensagem} onChange={handleInputMensagem}></textarea>
                    </div>
                </div>
                </div>
                <p>{envioEmail ? "Mensagem enviada com sucesso!" : ""}</p>
                <input type="submit" value="enviar"/>
                
        </form>

  
    </div>
  )
}

export default Home