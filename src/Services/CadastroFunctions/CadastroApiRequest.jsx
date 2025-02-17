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

export const createUserCad = async (userData, dadosEmpresa, setLoading, navigate) => {
  await axios.post('http://localhost:8080/usuario', userData)
        .then(() => {
          // Segunda requisição para salvar a empresa com o CPF do usuário
          return axios.post(`http://localhost:8080/empresa?cpfUsuario=${userData.cpf}`, dadosEmpresa);
        })
        .then(() => {
          sessionStorage.setItem('empresa',JSON.stringify(dadosEmpresa))
          navigate('/UserPage');
        })
        .catch(error => {
          ApiRequestError(error);
          setLoading(false);
        });
}