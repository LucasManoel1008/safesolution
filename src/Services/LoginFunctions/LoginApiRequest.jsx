import axios from 'axios';
import { sanitazeCnpj } from './LoginValidation';

    export const LoginApiRequest = async (cnpj, senha, setErro, setErroLogin) => {
        let cleanCnpj = sanitazeCnpj(cnpj);
        try{
            const response = await axios.get(`http://localhost:8080/empresa/login/${cleanCnpj}`, {
                params: { senha: senha }
            });
            if (response.data != null) {
                sessionStorage.setItem('empresa', JSON.stringify(response.data));
                
            } else {
                setErroLogin('Erro inesperado no login.');
                return false;
            }
        } catch (error) {
            if (error.response && error.response.data) {
                try {
                    const errorData = typeof error.response.data === 'string' 
                        ? JSON.parse(error.response.data) 
                        : error.response.data;
                    
                    if (errorData.erro) {
                        setErroLogin(errorData.erro);
                    } else {
                        setErroLogin('Usuário e/ou senha incorretos. Tente novamente.');
                    }
                } catch (parseError) {
                    setErroLogin('Usuário e/ou senha incorretos. Tente novamente.');
                }
            } else {
                setErroLogin('Erro de conexão. Tente novamente.');
            }
            return false;
        }
        return true;
    }
