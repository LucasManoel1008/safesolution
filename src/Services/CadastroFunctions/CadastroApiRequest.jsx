import axios from "axios";
import * as validation from './CadastroValidation'
import { ApiRequestError, cepRequestError } from "./CadastroToast";

export const getAndSetCep = (cep, setRua, setBairro, setCidade) => {
    if(!validation.checkCepInput(cep)) return;
    const url = `https://viacep.com.br/ws/${cep}/json`;
    axios.get(url)
      .then(response => {
        const data = response.data;
        setRua(data.logradouro || '');
        setBairro(data.bairro || '');
        setCidade(data.localidade || '');
        return true;
      })
      .catch(() => {
        cepRequestError();
        return false;
      });
  };

export const createUser = async (userData, dadosEmpresa, setLoading, navigate) => {
  await axios.post('http://localhost:8080/usuario', userData)
        .then(() => {
          return axios.post(`http://localhost:8080/empresa?cpfUsuario=${userData.cpf}`, dadosEmpresa);
        })
        .then(() => {
          dadosEmpresa = { ...dadosEmpresa, usuario: userData };
          sessionStorage.setItem('empresa',JSON.stringify(dadosEmpresa))
          sessionStorage.removeItem('userBackup')
          navigate('/UserPage');
        })
        .catch(error => {
          ApiRequestError(error);
          setLoading(false);
        });
        
}

export const checkAllUserData = async (userData) => {
  return await axios.post('http://localhost:8080/usuario/validar-usuario', userData)
}