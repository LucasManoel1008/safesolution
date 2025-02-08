import axios from "axios";

export const validateUserSession = async (setExistentLogin,setUserData) => {
    const userData = getUserData();
    if (userData) {
        const cleanCnpj = formatUserCnpj(userData.cnpj);
        await fetchUserData(setExistentLogin,setUserData, cleanCnpj);
    }
};

const fetchUserData = async (setExistentLogin,setUserData, cleanCnpj) => {
    try {
        const response = await axios.get(`http://localhost:8080/empresa/${cleanCnpj}`);
        setUserData(response.data);
        sessionStorage.setItem('empresa', JSON.stringify(response.data));
        setExistentLogin(true);
    } catch (error) {  
        console.error('Erro ao buscar dados do usuário:', error);
        window.alert('Erro ao buscar dados do usuário');
        setExistentLogin(false);
    }
}

//  Utilitários
const formatUserCnpj = (cnpj) => {
    return cnpj.replace(/[./-]/g, '');
}
const getUserData = () =>{
    const userData = sessionStorage.getItem('empresa');
    return userData ? JSON.parse(userData) : false;
}

    