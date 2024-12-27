import React from 'react'
import Cadastro1 from '../assets/components/Cadastro/Cadastro1'
import Cadastro2 from '../assets/components/Cadastro/Cadastro2'
import { useState } from 'react'
function Cadastro() {
    const [userData, setUserData] = useState({})
    const [section, setSection] = useState(1)
    const renderSection = () => {
        switch (section) {
            case 1:
                return <Cadastro1 setSection = {setSection} setUserData = {setUserData} />
            case 2:
                return <Cadastro2 userData = {userData} />
            default:
                return <Cadastro1 setSection={setSection} setUserData={setUserData} />
        }
    }
  return (
    <div>
        {renderSection()}
    </div>
  )
}

export default Cadastro