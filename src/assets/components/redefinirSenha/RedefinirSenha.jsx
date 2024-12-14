import React from 'react'
import { useState } from 'react'
import EsqueciSenha from '../subPages/EsqueciSenha'
import ValidarCodigo from '../subPages/ValidarCodigo'
import RedefinicaoDeSenha from '../subPages/RedefinicaoDeSenha'
function RedefinirSenha() {
    const [section, setSection] = useState(1)
    const [userEmail, setEmail] = useState(null)
    const handleSection = (section, email = null) => {
        setSection(section)
        setEmail(email)
    }
    const RenderSection = () => {
        switch (section) {
            case 1:
                return <EsqueciSenha  onSectionChange={handleSection}/>
            case 2:
                return <ValidarCodigo  onSectionChange={handleSection} email = {userEmail}/>
            case 3:
                return <RedefinicaoDeSenha email = {userEmail} />
            default:
                return <EsqueciSenha />
        }
    }
  return (
    <div>
        <RenderSection />
    </div>
  )
}

export default RedefinirSenha