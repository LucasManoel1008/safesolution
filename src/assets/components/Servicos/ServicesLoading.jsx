import React from 'react'
import styles from '../../../pages/Servicos/servicos.module.css'
function ServicesLoading() {
  return (
    <div className={`${styles.servicoLoading} mt-4`}>
        <div className={`${styles.bar1}`}></div>
        <div className={`${styles.bar2}`}></div>
        <div className={`${styles.bar3}`}></div>
    </div>
  )
}

export default ServicesLoading