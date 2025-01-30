import React from 'react'
import Styles from '../../css/laoding.module.css'
function LoadingData() {
  return (
    <div className={Styles.loading}>
        <div className="spinner-border text-primary text-center d-block" role="status">
          <span className="visually-hidden">Carregando...</span>
        </div>
    </div>
  )
}

export default LoadingData