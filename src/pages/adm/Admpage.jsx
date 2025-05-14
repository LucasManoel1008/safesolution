import React, { useState } from 'react'
import style from '../../assets/css/admpage.module.css'
import Head from '../../assets/components/Adm/Head'
import Container from '../../assets/components/Adm/Container'
import Mensagens from '../../assets/components/Adm/Mensagens'
import Servicos from '../../assets/components/Adm/Servicos'
 
 
function Admpage() {
 
  const [render, setRender] = useState("usuario")
 
 
  const RenderSection = () => {
    switch (render) {
      case "usuario":
        return <Container />
      case "servicos":
        return <Servicos />
      case "mensagens":
        return <Mensagens />
      default:
        return <Container />
 
    }
  }
 
  return (
    <div className={`${style.admDashboard} d-flex justify-content-between`}>
 
      <Head setRender={setRender} />
      {RenderSection()}
 
    </div>
  )
}
 
 
 
export default Admpage