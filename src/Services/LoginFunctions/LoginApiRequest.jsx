import axios from 'axios';
import { sanitazeCnpj } from './LoginValidation';

    export const LoginApiRequest = async (cnpj, senha, setErro) => {
        let cleanCnpj = sanitazeCnpj(cnpj);
        try{
            const response = await axios.get(`http://localhost:8080/empresa/login/${cleanCnpj}`, {
                params: { senha: senha }
            });
            if (response.data != null) {
                sessionStorage.setItem('empresa', JSON.stringify({ cnpj:     cnpj }));
            } else {
                setErro({ senha: 'CNPJ e/ou senha incorretos. Tente novamente.' });
                return false;
            }
        } catch (error) {
            setErro({ senha: 'Usuario e/ou senha incorretos. Tente novamente.' });
            return false;
        }
        return true;
    }
    