import React, { useContext, useEffect, useState } from 'react'
import style from '../../assets/css/admpage.module.css'
import Head from '../../assets/components/Adm/Head'
import Container from '../../assets/components/Adm/Container'
import Mensagens from '../../assets/components/Adm/Mensagens'
import Servicos from '../../assets/components/Adm/Servicos'

const AdminContext = React.createContext();
 
function Admpage() {
 
  const [render, setRender] = useState("usuario")
  const [admData, setAdmData] = useState({})

  useEffect(() => {
    const fetchAdmData = async () => {
      try {
        const userData = sessionStorage.getItem('empresa');
        if (userData) {
          const parsedData = JSON.parse(userData);    
          setAdmData(parsedData);
        } else {

          const localUserData = localStorage.getItem('empresa');

          if (localUserData) {
            const localParsedData = JSON.parse(localUserData);
            setAdmData(localParsedData);

          }
        }

      }
      catch (error) {
        console.error("Error fetching admin data:", error);
      }
    }
    fetchAdmData();
    
  }, [])
 
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
    <AdminContext.Provider value={{admData, setAdmData}}>
    <div className={`${style.admDashboard} d-flex justify-content-between`}>
 
      <Head setRender={setRender} />
      {RenderSection()}
 
    </div>
  </AdminContext.Provider>
  )
}

// Hook personalizado para usar o contexto admin
export const useAdminContext = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdminContext deve ser usado dentro de AdminContext.Provider');
  }
  return context;
}

 
 
 
export default Admpage