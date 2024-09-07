import React from 'react'
import '../../assets/css/cadastro.css'
import Imagenspadroes from '../../shared/Imagespadroes'
function Cadastro() {
  return (
    <div className='cadastroContent'>
        <section className="cadastroBox">
            
            <div className="form-content cadastroForm">
                        <h4 className='mb-5'>Informações Pessoais</h4>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Nome completo*" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email de contato*"/>
                                </div>
                         </div>
                        <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="CPF*" />
                                </div>
                                <div className="form-group">
                                    <input type="tel" className="form-control" placeholder="Telefone"/>
                                </div>
                         </div>
                    </div>
                <a href="/Cadastro2" role='button' className="continuar btn btn-primary mt-4">Continuar</a>
            </div>
        </section>
    </div>
  )
}

export default Cadastro