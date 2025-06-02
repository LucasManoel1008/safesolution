import React from 'react'
import Styles from '../../assets/css/LoginAdm.module.css'
function LoginAdm() {
  return (
    <div className={`${Styles.loginPage}`}>
        <h4 className='blue2 bold mt-4'>Login</h4>
        <p className='opacity-75 blue2'>Acesso administrativo</p>

        <form className={`${Styles.formLogin}`}>
        <div class="form-group w-75">
            <label for="nomeUsuario">Nome de Usuário</label>
            <input type="text" class="form-control" id="nomeUsuario" />
          </div>
          <div class="form-group w-75">
            <label for="senhaUsuario">Senha</label>
            <input type="password" class="form-control" id="senhaUsuario" />
          </div>
            <button className={`${Styles.buttonLogin} w-75 btn btn-primary col-12`}>Entrar</button>
        </form>



    </div>
  )
}

export default LoginAdm