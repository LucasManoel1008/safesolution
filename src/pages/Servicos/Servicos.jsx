import React from 'react'
import styles from './servicos.module.css'
import ServicosFiltter from '../../assets/components/Servicos/ServicosFiltter'
import ServicosContent from '../../assets/components/Servicos/ServicosContent'
function Servicos() {
    
    return(
    <div className={`${styles.servicos}`}>
        
        <section className={`${styles.conteudo}`}>
            <ServicosFiltter />
            <ServicosContent />
        </section>
       
    </div>
    )
}

export default Servicos