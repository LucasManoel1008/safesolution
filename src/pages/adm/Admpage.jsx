import React from 'react'
import style from '../../assets/css/admpage.module.css'
import Head from '../../assets/components/Adm/Head'
import Container from '../../assets/components/Adm/Container'

function Admpage() {
  return (
    <div className={`${style.admDashboard} d-flex justify-content-between`}>         
        
    <Head />
    <Container/>

    </div>
  )
}

export default Admpage