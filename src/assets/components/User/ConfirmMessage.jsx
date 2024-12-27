import React from 'react'
import styles from '../../css/ConfirmMessage.module.css'
function ConfirmMessage() {
  return (
    <div className={styles.confirm}>
      <span><i className="fa-solid fa-check mr-2"></i>Dados alterados com sucesso</span>

    </div>
  )
}

export default ConfirmMessage