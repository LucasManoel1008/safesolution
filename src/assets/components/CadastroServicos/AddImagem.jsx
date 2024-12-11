import React from 'react'
import styles from '../../css/images.module.css'
function AddImagem() {
  return (
    <div className={styles.addImages}>
      <h5><i className="fa-regular fa-image"></i></h5>
      <h5 className='ml-2'>Adicionar</h5>
      <h5 className='ml-2'>Imagem</h5>
    </div>
  )
}

export default AddImagem