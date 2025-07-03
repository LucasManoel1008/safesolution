import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';

// External components and assets
import Imagemindex from '../../shared/Imagesindex.jsx';
import styles from '../HomePage/index.module.css';
import 'react-toastify/dist/ReactToastify.css';

// Internal components
import SafeSolutionInformation from '../../assets/components/HomeComponents/SafeSolutionInformation.jsx';
import ClientsFeedbackContainer from '../../assets/components/HomeComponents/ClientsFeedbackContainer.jsx';

// Services
import * as handleInputs from '../../Services/HomeFunctions/HomeHandleInputs.jsx';
import * as formValidation from '../../Services/HomeFunctions/HomeValidationFunctions.jsx';
import { returnTopOnLoad } from '../../Services/HomeFunctions/HomeGenericFunctions.js';
import ABOUT_SAFE_SOLUTION from '../../Services/HomeFunctions/HomeTextAboutSafeSolution.jsx';
import CLIENTS_FEEDBACK from '../../Services/HomeFunctions/HomeTextClientsFeedback.jsx';

// Custom hook for form management
const useFormState = () => {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    telefone: '',
    cidade: '',
    mensagem: '',
    assunto: ''
  });
  const [error, setError] = useState('');

  const updateField = useCallback((field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData({
      nome: '',
      sobrenome: '',
      email: '',
      telefone: '',
      cidade: '',
      mensagem: '',
      assunto: ''
    });
    setError('');
  }, []);

  return { formData, error, setError, updateField, resetForm };
};

// Hero Section Component
const HeroSection = React.memo(() => (
  <Fade duration={1500} delay={400}>
    <div className={`d-flex ${styles.firstImage}`}>
      <div className={styles.leftContent}>
        <h1 className='blue2 bold'>Conecte-se a Soluções Empresariais <br /> de Qualidade</h1>
        <p>Encontre empresas confiáveis e <br /> serviços especializados para cada necessidade do seu negócio</p>
        <Link to="/Cadastro" className={`text-button btn ${styles.textButton}`}>Comece já</Link>
      </div>
      <div className={styles.rightContent}>
        <img src={Imagemindex.plumber} alt="Engenheiro especializado em soluções empresariais" />
      </div>
    </div>
  </Fade>
));

// About Section Component
const AboutSection = React.memo(() => (
  <Fade bottom duration={1500} delay={400}>
    <h2 id="aboutUs" className={`fade-in ${styles.titleMainText}`}>Quem é a Safe Solutions?</h2>
    <section className={styles.textBody}>
      <SafeSolutionInformation imageName="Safety" sectionText={ABOUT_SAFE_SOLUTION.SAFESOLUTION_OBJECTIVE} hasLink={false} />
      <SafeSolutionInformation imageName="tecnico" sectionText={ABOUT_SAFE_SOLUTION.SAFESOLUTION_HOW_IT_WORKS} hasLink={false} />
      <SafeSolutionInformation imageName="gastos" sectionText={ABOUT_SAFE_SOLUTION.SAFESOLUTION_WHY_USE} hasLink={true} />
      <SafeSolutionInformation imageName="Quest" sectionText={ABOUT_SAFE_SOLUTION.SAFESOLUTION_OUR_MISSION} hasLink={false} />
    </section>
  </Fade>
));

// FAQ Section Component
const FAQSection = React.memo(() => {
  const faqItems = useMemo(() => [
    {
      id: 'firstFAQ',
      question: 'Como usar a plataforma?',
      answer: 'Provedores: Cadastre sua empresa e alcance novos clientes, promovendo os serviços que você oferece de maneira simples e eficaz. Clientes: Encontre diversos serviços em um só lugar e contrate facilmente o que precisar, com praticidade e segurança.'
    },
    {
      id: 'secondFAQ',
      question: 'Que tipo de segurança a plataforma possui contra golpes?',
      answer: 'Instalações e serviços empresariais, no geral, demandam muitas etapas, um contato individual com as servidoras, e uma burocracia que precisa perder espaço com a rapidez do mercado moderno. A grandiosa vantagem da Safe Soluction© é reunir todas as etapas do processo num único lugar, otimizando tempo e unificando também a contatação para todas as empresas, sejam elas prestadoras ou solicitantes de serviços.'
    },
    {
      id: 'thirdFAQ',
      question: 'Por que usar a plataforma de vocês?',
      answer: 'Oferecemos uma maior práticidade e segurança. Permitindo um controle maior dos serviços'
    },
    {
      id: 'fourthFAQ',
      question: 'A plataforma possui aplicativo móvel para facilitar o acesso em dispositivos móveis?',
      answer: 'Sim, a plataforma possui uma versão mobile, que está disponível para Android e IOS. O aplicativo é essencial para quem busca praticidade e um acompanhamento dos serviços e contatações mesmo longe dos dispositivos desktop.'
    }
  ], []);

  return (
    <Fade bottom duration={500}>
      <section className={styles.FAQ}>
        <h2 id='perguntas' className={`title-main-text blue2 align-text ${styles.titleMainText}`}>Perguntas Frequentes</h2>
        <ul className={styles.FAQContainer}>
          {faqItems.map((item, index) => (
            <Fade key={item.id} bottom duration={600} delay={index * 100}>
              <li>
                <input type="radio" name="faq" id={item.id} />
                <label htmlFor={item.id}>{item.question}</label>
                <div className={styles.FAQContent}>
                  <p>{item.answer}</p>
                </div>
              </li>
            </Fade>
          ))}
        </ul>
      </section>
    </Fade>
  );
});

// Contact Form Component
const ContactForm = React.memo(({ formData, error, onFieldChange, onSubmit }) => (
  <form className={styles.forms} onSubmit={onSubmit}>
    <div className={styles.formsTitle}>
      <h2>Ainda dúvidas? Entre em Contato Conosco!</h2>
      <p>*Entrada Obrigatória</p>
    </div>
    <div className={styles.formsData}>
      <input 
        type="text" 
        placeholder="*NOME" 
        id="name" 
        value={formData.nome} 
        onChange={(e) => handleInputs.handleInputNome(e, (value) => onFieldChange('nome', value))}
        required
        aria-label="Nome (obrigatório)"
      />
      <input 
        type="text" 
        placeholder="SOBRENOME" 
        value={formData.sobrenome} 
        onChange={(e) => handleInputs.handleInputSobrenome(e, (value) => onFieldChange('sobrenome', value))}
        aria-label="Sobrenome"
      />
      <input 
        type="email" 
        placeholder="*EMAIL" 
        value={formData.email} 
        onChange={(e) => handleInputs.handleInputEmail(e, (value) => onFieldChange('email', value))}
        required
        aria-label="Email (obrigatório)"
      />
      <input 
        type="tel" 
        placeholder="TELEFONE" 
        maxLength={14} 
        value={formData.telefone} 
        onChange={(e) => handleInputs.handleInputTelefone(e, (value) => onFieldChange('telefone', value))}
        aria-label="Telefone"
      />
      <input 
        type="text" 
        placeholder="CIDADE" 
        value={formData.cidade} 
        onChange={(e) => handleInputs.handleInputCidade(e, (value) => onFieldChange('cidade', value))}
        aria-label="Cidade"
      />
      <div className={styles.razao}>
        <label htmlFor="assunto">*Assunto</label>
        <select 
          id="assunto" 
          value={formData.assunto}
          onChange={(e) => handleInputs.handleInputAssunto(e, (value) => onFieldChange('assunto', value))}
          required
          aria-label="Assunto (obrigatório)"
        >
          <option value=''>*ASSUNTO</option>
          <option value="Reclamação">RECLAMAÇÃO</option>
          <option value="Elogio">ELOGIO</option>
          <option value="Informação">INFORMAÇÃO</option>
        </select>
        <div className={styles.textArea}>
          <textarea 
            rows="4" 
            placeholder="*Mensagem" 
            id="mensagem" 
            value={formData.mensagem} 
            onChange={(e) => handleInputs.handleInputMensagem(e, (value) => onFieldChange('mensagem', value))}
            required
            aria-label="Mensagem (obrigatório)"
          />
        </div>
      </div>
    </div>
    {error && <p className={styles.errorMessage} role="alert">{error}</p>}
    <input type="submit" value="Enviar" />
  </form>
));

// Mobile App Section Component
const MobileAppSection = React.memo(() => (
  <section className={`d-lg-none ${styles.mobileAppShowcase}`}>
    <div className={styles.mobileAppContent}>
      <div className={styles.mobileAppText}>
        <div className={styles.mobileAppBadge}>
          <span>📱</span>
          <span>Novo</span>
        </div>
        <h3>Controle Total na Palma da Sua Mão</h3>
        <p>Gerencie seus serviços, acompanhe solicitações e conecte-se com clientes onde quer que esteja.</p>
        
        <div className={styles.mobileAppFeatures}>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>⚡</span>
            <span>Notificações em tempo real</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>📊</span>
              <span>Acompanhamento em tempo real</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>🔒</span>
            <span>100% seguro</span>
          </div>
        </div>
        
        <div className={styles.downloadButtons}>
          <Link to="#" className={styles.downloadBtn}>
            <img src={Imagemindex.googlePlay} alt="Disponível no Google Play" />
          </Link>
          <Link to="#" className={styles.downloadBtn}>
            <img src={Imagemindex.appSotre} alt="Disponível na App Store" />
          </Link>
        </div>
      </div>
      
      <div className={styles.mobileAppVisual}>
        <div className={styles.phoneContainer}>
          <div className={styles.phoneFrame}>
            <img 
              src={Imagemindex.cellphone} 
              alt="Interface do aplicativo Safe Solutions"
              className={styles.phoneImage}
            />
            <div className={styles.phoneGlow}></div>
          </div>
          <div className={styles.floatingElements}>
            <div className={styles.floatingCard} style={{'--delay': '0s'}}>
              <span>💼</span>
              <small>Novo serviço</small>
            </div>
            <div className={styles.floatingCard} style={{'--delay': '1s'}}>
              <span>⭐</span>
              <small>Avaliação 5.0</small>
            </div>
            <div className={styles.floatingCard} style={{'--delay': '2s'}}>
              <span>✅</span>
              <small>Concluído</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
));

function Home() {
  const { formData, error, setError, updateField, resetForm } = useFormState();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const updateFormValues = {
      setNome: (value) => updateField('nome', value),
      setSobrenome: (value) => updateField('sobrenome', value),
      setEmail: (value) => updateField('email', value),
      setTelefone: (value) => updateField('telefone', value),
      setCidade: (value) => updateField('cidade', value),
      setAssunto: (value) => updateField('assunto', value),
      setMensagem: (value) => updateField('mensagem', value),
      setError
    };
    
    formValidation.formValidation(e, formData, updateFormValues);
  }, [formData, updateField, setError]);

  useEffect(() => {
    returnTopOnLoad();
  }, []);

  return (
    <div className='mb-5'>
      {/* Mobile Join Button */}
      <Link to="/Cadastro">
        <button className={`btn-primary d-lg-none btn-block ${styles.joinUs}`}>
          Seja Provedor <img src={Imagemindex.fast} alt="Seta para frente" />
        </button>
      </Link>

      <main className={styles.mainContent}>
        <HeroSection />
        <AboutSection />
        <MobileAppSection />
      </main>

      {/* Clients Feedback Section */}
      <Fade bottom duration={500}>
        <section id="relatos" className={styles.commentsArea}>
          <h2 className={`title-main-text ${styles.titleMainText}`}>Feedback de nossos clientes</h2>
          <div className={styles.comments}>
            <ClientsFeedbackContainer clientFeedback={CLIENTS_FEEDBACK.LUIZA_MINETO_FEEDBACK} imageName="woman1" peopleName={CLIENTS_FEEDBACK.LUIZA_MINETO} />
            <ClientsFeedbackContainer clientFeedback={CLIENTS_FEEDBACK.JOSE_SANTOS_FEEDBACK} imageName="man1" peopleName={CLIENTS_FEEDBACK.JOSE_SANTOS} />
            <ClientsFeedbackContainer clientFeedback={CLIENTS_FEEDBACK.FERNANDA_ALMEIDA_FEEDBACK} imageName="woman2" peopleName={CLIENTS_FEEDBACK.FERNANDA_ALMEIDA} />
            <ClientsFeedbackContainer clientFeedback={CLIENTS_FEEDBACK.ANDRE_FERREIRA_FEEDBACK} imageName="man2" peopleName={CLIENTS_FEEDBACK.ANDRE_FERREIRA} />
          </div>
        </section>
      </Fade>

      <FAQSection />
      
      <ContactForm 
        formData={formData}
        error={error}
        onFieldChange={updateField}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default Home;