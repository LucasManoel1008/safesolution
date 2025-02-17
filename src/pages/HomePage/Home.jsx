import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';
import Imagemindex from '../../shared/Imagesindex.jsx';
import * as handleInputs from '../../Services/HomeFunctions/HomeHandleInputs.jsx'
import * as formValidation from '../../Services/HomeFunctions/HomeValidationFunctions.jsx'
import { returnTopOnLoad } from '../../Services/HomeFunctions/HomeGenericFunctions.js';
import styles from '../HomePage/index.module.css';
import SafeSolutionInformation from '../../assets/components/HomeComponents/SafeSolutionInformation.jsx';
import ABOUT_SAFE_SOLUTION from '../../Services/HomeFunctions/HomeTextAboutSafeSolution.jsx';
import CLIENTS_FEEDBACK from '../../Services/HomeFunctions/HomeTextClientsFeedback.jsx';
import ClientsFeedbackContainer from '../../assets/components/HomeComponents/ClientsFeedbackContainer.jsx';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cidade, setCidade] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [assunto, setAssunto] = useState('');
  const [error, setError] = useState('');
  
  const inputsValue = {
    nome,
    sobrenome,
    email,
    telefone,
    cidade,
    assunto,
    mensagem
  }
  const updateFormValues = {
    setNome,
    setSobrenome,
    setEmail,
    setTelefone,
    setCidade,
    setAssunto,
    setMensagem,
    setError
  }

  useEffect(() => {
    returnTopOnLoad()
  }, []);

  return (
    <div className='mb-5'>
      {/* Botão disponível apenas no mobile. Junte-se a nós */}
      <Link to={"/Cadastro"}>
        <button className={`btn-primary d-lg-none btn-block ${styles.joinUs}`}>
          Seja Provedor <img src={Imagemindex.fast} alt="fastForward" />
        </button>
      </Link>

      {/*Área com todos os textos do corpo do site, Cada div text é um texto com seu icone,
      falta alterá-lo de acordo com o novo figma, está totalmente responsivo ja.*/}
      
      <main className={styles.mainContent}>
        {/* Imagem divulgando serviços - Inicio */}
        <Fade duration={1500} delay={400}>
          <div className={`d-flex ${styles.firstImage}`}>
            <div className={styles.leftContent}>
              <h4>Conecte-se a Soluções Empresariais <br /> de Qualidade</h4>
              <p>Encontre empresas confiáveis e <br /> serviços especializados para cada necessidade do seu negócio</p>
              <Link to="/Cadastro" className={`text-button btn ${styles.textButton}`}>Comece já</Link>
            </div>
            <div className={styles.rightContent}>
              <img src={Imagemindex.plumber} alt="Engineer" />
            </div>
          </div>
        </Fade>
        
        <Fade bottom duration={1500} delay={400}>
          <h4 id="quemSomos" className={`fade-in ${styles.titleMainText}`}>Quem é a Safe Solutions?</h4>
          <section className={styles.textBody}>
            <SafeSolutionInformation imageName="Safety" sectionText={ABOUT_SAFE_SOLUTION.SAFESOLUTION_OBJECTIVE} hasLink={false} />
            <SafeSolutionInformation imageName="tecnico" sectionText={ABOUT_SAFE_SOLUTION.SAFESOLUTION_HOW_IT_WORKS} hasLink={false} />
            <SafeSolutionInformation imageName="gastos" sectionText={ABOUT_SAFE_SOLUTION.SAFESOLUTION_WHY_USE} hasLink={true} />
            <SafeSolutionInformation imageName="Quest" sectionText={ABOUT_SAFE_SOLUTION.SAFESOLUTION_OUR_MISSION} hasLink={false} />
          </section>
        </Fade>

        {/* Divulgação do app Mobile - INICIO */}
        <div className={`d-flex d-lg-none ${styles.applicationMobile}`}>
          <h4>BAIXE NOSSO APLICATIVO</h4>
          <p>Gerenciamento de serviços na palma da mão</p>
          <div className={`mt-5 mb-5 ${styles.applicationLinks}`}>
            <Link to="#" className="pr-4"><img src={Imagemindex.googlePlay} width="150" alt="GOOGLE PLAY" /></Link>
            <Link to="#"><img src={Imagemindex.appSotre} width="150" alt="APP STORE" /></Link>
          </div>

          <img src={Imagemindex.cellphone} width="400" alt="CELLPHONE" className={styles.cellphone} />
        </div>
      </main>

      <Fade bottom duration={500}>
        <section id="relatos" className={styles.commentsArea}>
          <h4 className={`title-main-text ${styles.titleMainText}`}>Feedback de nossos clientes</h4>
          <div className={styles.comments}>
            <ClientsFeedbackContainer clientFeedback={CLIENTS_FEEDBACK.LUIZA_MINETO_FEEDBACK} imageName="woman1" peopleName={CLIENTS_FEEDBACK.LUIZA_MINETO} />
            <ClientsFeedbackContainer clientFeedback={CLIENTS_FEEDBACK.JOSE_SANTOS_FEEDBACK} imageName="man1" peopleName={CLIENTS_FEEDBACK.JOSE_SANTOS} />
            <ClientsFeedbackContainer clientFeedback={CLIENTS_FEEDBACK.FERNANDA_ALMEIDA_FEEDBACK} imageName="woman2" peopleName={CLIENTS_FEEDBACK.FERNANDA_ALMEIDA} />
            <ClientsFeedbackContainer clientFeedback={CLIENTS_FEEDBACK.ANDRE_FERREIRA_FEEDBACK} imageName="man2" peopleName={CLIENTS_FEEDBACK.ANDRE_FERREIRA} />
          </div>
        </section>
      </Fade>

      <Fade bottom duration={500}>
        <section className={styles.FAQ}>
          <h4 className={`title-main-text blue2 align-text ${styles.titleMainText}`}>Perguntas Frequentes</h4>
          <ul className={styles.FAQContainer}>
            <Fade bottom duration={600}>
              <li>
                <input type="radio" name="faq" id="firstFAQ" />
                <label htmlFor="firstFAQ">Como usar a plataforma?</label>
                <div className={styles.FAQContent}>
                  <p>
                    Provedores: Cadastre sua empresa e alcance novos clientes, promovendo os serviços que você oferece de maneira simples e eficaz. <br />  
                    Clientes: Encontre diversos serviços em um só lugar e contrate facilmente o que precisar, com praticidade e segurança.
                  </p>
                </div>
              </li> 
            </Fade>
            <Fade bottom duration={600}>
              <li>
                <input type="radio" name="faq" id="secondFAQ" />
                <label htmlFor="secondFAQ">Que tipo de segurança a plataforma possui contra golpes?</label>
                <div className={styles.FAQContent}>
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
                <input type="radio" name="faq" id="thirdFAQ" />
                <label htmlFor="thirdFAQ">Por que usar a plataforma de vocês?</label>
                <div className={styles.FAQContent}>
                  <p>
                    Oferecemos uma maior práticidade e segurança. Permitindo um controle maior dos serviços
                  </p>
                </div>
              </li>
            </Fade>
            <Fade bottom duration={600}>
              <li>
                <input type="radio" name="faq" id="fourthFAQ" />
                <label htmlFor="fourthFAQ">A plataforma possui aplicativo móvel para facilitar o acesso em dispositivos móveis?</label>
                <div className={styles.FAQContent}>
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
        
      <form className={styles.forms} onSubmit={(e) => formValidation.formValidation(e, inputsValue, updateFormValues)}>
        <div className={styles.formsTitle}>
          <h4>Ainda dúvidas? Entre em Contato Conosco!</h4>
          <p>*Entrada Obrigatória</p>
        </div>
        <div className={styles.formsData}>
          <input type="text" placeholder="*NOME" id="name" value={nome} onChange={(e) => handleInputs.handleInputNome(e, setNome)} />
          <input type="text" placeholder="SOBRENOME" value={sobrenome} onChange={(e) => handleInputs.handleInputSobrenome(e, setSobrenome)} />
          <input type="email" placeholder="*EMAIL" value={email} onChange={(e) => handleInputs.handleInputEmail(e, setEmail)} />
          <input type="tel" placeholder="TELEFONE" maxLength={14} value={telefone} onChange={(e) => handleInputs.handleInputTelefone(e, setTelefone)} />
          <input type="text" placeholder="CIDADE" value={cidade} onChange={(e) => handleInputs.handleInputCidade(e, setCidade)} />
          <div className={styles.razao}>
            <small>*Assunto</small>
            <select id="assunto" onChange={(e) => handleInputs.handleInputAssunto(e, setAssunto)}>
              <option value='Assunto'>*ASSUNTO</option>
              <option value="Reclamação">RECLAMAÇÃO</option>
              <option value="Elogio">ELOGIO</option>
              <option value="Informação">INFORMAÇÃO</option>
            </select>
            <div className={styles.textArea}>
              <textarea rows="1" placeholder="*Mensagem" id="mensagem" value={mensagem} onChange={(e) => handleInputs.handleInputMensagem(e, setMensagem)}></textarea>
            </div>
          </div>
        </div>
        <p>{error}</p>
        <input type="submit" value="enviar" />
      </form>
    </div>
  );
}

export default Home;