import React from 'react'
import UserCad from './UserCad'
import CompanyCad from './CompanyCad'
import { useState } from 'react'
function RenderCadastroPage() {
    const [userData, setUserData] = useState({})
    const [section, setSection] = useState(1)
    const renderSection = () => {
        switch (section) {
            case 1:
                return <UserCad setSection = {setSection} setUserData = {setUserData} />
            case 2:
                return <CompanyCad userData = {userData} setSection = {setSection} />
            default:
                return <UserCad setSection={setSection} setUserData={setUserData} />
        }
    }
  return (
    <div>
        {renderSection()}
    </div>
  )
}

export default RenderCadastroPage