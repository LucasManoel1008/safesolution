import axios from 'axios';
import { sanitazeCnpj } from './LoginValidation';

    export const LoginApiRequest = async (cnpj, senha, setErro) => {
        let cleanCnpj = sanitazeCnpj(cnpj);
        try{
            const response = await axios.get(`http://localhost:8080/empresa/${cleanCnpj}`);
            if (response.data && response.data.usuario.senha_usuario == senha) {
                sessionStorage.setItem('empresa', JSON.stringify({ cnpj: cnpj }));
            } else {
                setErro({ senha: 'Senha incorreta' });
                return false;
            }
        } catch (error) {
            setErro({ senha: 'Usuario não encontrado' });
            return false;
        }
        return true;
    }
    