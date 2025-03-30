import React from "react";
import stylesPadroes from '../../assets/css/userProfile.module.css';
import styles from '../../assets/css/userSettings.module.css';
const UserSettings = () => (
        <>
          <div className={`${stylesPadroes.userProfile} p-4 mb-4`}>
              <div className={stylesPadroes.userPageHeader}>
                <h4 className="text-center">Configurações de conta</h4>
                <p>Gerencie as configurações de segurança de sua conta</p>
              </div>
            </div>
            <div className={`${stylesPadroes.mainContent} p-4 mb-4`}>
              <div className={`${styles.alterarSenha} d-flex flex-column`}>
                  <h5 className="mb-2 blue2">Alterar Senha</h5>
                  <p>Para a sua segurança, um código será enviado ao email cadastrado para finalizar a alteração de senha.</p>
                  <button className={`btn btn-outline-secondary mt-2 `}>Alterar Senha</button>
              </div>
              <div className={`${styles.alterarSenha} mt-4`}>   
                  <h5 className="mb-2 blue2">Autenticação de Dois Fatores</h5>
                  <p>A Autenticação de Dois Fatores (ADF) adiciona uma camada de proteção a mais na sua conta. <a href="https://www.microsoft.com/pt-br/security/business/security-101/what-is-two-factor-authentication-2fa" target="_blank">Saiba mais</a></p>
                  
                  <p className="mt-2">Desativadas</p>
                  <div className={`${styles.opcaoAutenticacao} mt-2 d-flex flex-row`}>
                    <i className="fa-solid fa-envelope"></i>
                    <div>
                      <p>Email</p>
                      <p>Utilize o email para validar a entrada na conta</p>
                    </div>
                  </div>  
                  <div className={`${styles.opcaoAutenticacao} mt-2 d-flex flex-row`}>
                    <i className="fa-solid fa-shield"></i>
                    <div>
                      <p>Aplicativo Autenticador</p>
                      <p>Utilize um aplicativo autenticador para validar a entrada na conta</p>
                    </div>
                  </div>  
                  

              </div>
            </div>
          </>
  );
  export default UserSettings;