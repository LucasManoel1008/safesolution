import React from 'react'
import styles from '../../../pages/Servicos/servicos.module.css'
function ServicosContent() {
  return (
    <div className={`${styles.servicosContent}`}>
      <div className='d-block'>
        <div class="form-outline" data-mdb-input-init>
          <input type="search" id="form1" class="form-control" placeholder="Pesquisar..." aria-label="Search" />
        </div>
      </div>
      
      <div>

      </div>
    </div>
  )
}

export default ServicosContent