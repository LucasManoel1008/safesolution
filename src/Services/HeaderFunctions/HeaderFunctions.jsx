import axios from "axios";

export const retrieveUserData = async (setExistentLogin,setUserData, cleanCnpj) => {
    try {
        const response = await axios.get(`http://localhost:8080/empresa/${cleanCnpj}`);
        setUserData(response.data);
        sessionStorage.setItem('empresa', JSON.stringify(response.data));
        setExistentLogin(true);
    } catch (error) {  
        setExistentLogin(false);
    }
}

//  Utilitários
export const formatUserCnpj = (cnpj) => {
    return cnpj.replace(/[./-]/g, '');
}

export const getUserData = () =>{
    let userData =  sessionStorage.getItem('empresa');
    userData = JSON.parse(userData);
    return userData ? userData : false;
}

    