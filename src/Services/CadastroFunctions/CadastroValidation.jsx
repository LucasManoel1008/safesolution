import axios from "axios";
import CAD_USER_ERROR_MESSAGES from "./CadasTextError";
import { cepRequestError } from "./CadastroToast";

// Validações do usuario

export const checkInputValues = async (inputValues, setError) => {
  let novosErros = []
  const { name, lastName, email, cpf, password, confirmPassword, birthDate } = inputValues;

  if (name === '')  novosErros.nome = CAD_USER_ERROR_MESSAGES.INCOMPLETE_NAME;

  if (lastName === '') novosErros.lastName = CAD_USER_ERROR_MESSAGES.INCOMPLETE_LASTNAME;
  
  if (email === '' || email.indexOf('@') === -1) {
    novosErros.email = CAD_USER_ERROR_MESSAGES.INCOMPLETE_EMAIL;
  }

  else{
    await checkEmailExists(email, novosErros);
  }

  if (birthDate === '' || birthDate.length < 10 || birthDate === "Invalid Date") {
    novosErros.birthDate = CAD_USER_ERROR_MESSAGES.INVALID_AGE;
  }

  else{
    checkBirthDate(birthDate, novosErros);
  }
  if (password === '')novosErros.password = CAD_USER_ERROR_MESSAGES.INVALID_PASSWORD; 

  else if (confirmPassword === '') {
    novosErros.password = CAD_USER_ERROR_MESSAGES.INVALID_PASSWORD;
  }

  else{
    comparePasswords(password, confirmPassword, novosErros);
  }

  if (cpf.length < 14) {
   novosErros.cpf = CAD_USER_ERROR_MESSAGES.INVALID_CPF;
  }

  else{
    await checkCpfExists(sanitizeCpf(cpf), novosErros);
  }

  if (Object.keys(novosErros).length > 0){
    setError(novosErros);
    return false;
  }

  return true;
};

// Validações da empresa
export const checkCompanyInputValues = async (e, inputValues, setErro) => {
  let novosErros = [];
  const { name, cnpj, descricao, telefone, cep, rua, bairro, cidade, numero } = inputValues;

  if (name === '') novosErros.name = CAD_USER_ERROR_MESSAGES.INCOMPLETE_COMPANY_NAME;

  if (cnpj === '' || cnpj.lenght < 18) novosErros.cnpj = CAD_USER_ERROR_MESSAGES.INVALID_CNPJ;

  if (descricao === '') novosErros.descricao = CAD_USER_ERROR_MESSAGES.INCOMPLETE_COMPANY_DESCRIPTION;

  if (telefone === '' || telefone.length < 14) novosErros.telefone = CAD_USER_ERROR_MESSAGES.INCOMPLETE_COMPANY_TELEPHONE;

  if (cep === '' || cep.length < 8) novosErros.cep = CAD_USER_ERROR_MESSAGES.INCOMPLETE_COMPANY_CEP;

  if (rua === '') novosErros.rua = CAD_USER_ERROR_MESSAGES.INCOMPLETE_COMPANY_STREET;

  if (bairro === '') novosErros.bairro = CAD_USER_ERROR_MESSAGES.INCOMPLETE_COMPANY_DISTRICT;

  if (cidade === '') novosErros.cidade = CAD_USER_ERROR_MESSAGES.INCOMPLETE_COMPANY_CITY;

  if (numero === '') novosErros.numero = CAD_USER_ERROR_MESSAGES.INCOMPLETE_COMPANY_NUMBER;

  if (Object.keys(novosErros).length > 0){
    setErro(novosErros);
    return false;
  }
  return true;
};
export const checkCepInput = (cep) => { 
  if (cep === "" || cep.length < 8) {
    cepRequestError();
    return false;
  }
  return true;
}


// Funções auxiliares do Usuario

const checkBirthDate = (birthDate, novosErros) => {
  const birthYear = new Date(birthDate).getFullYear();
  const currentYear = new Date().getFullYear();
  if (currentYear - birthYear < 18) {
    novosErros.birthDate = CAD_USER_ERROR_MESSAGES.INVALID_AGE
  }
};

const checkEmailExists = async (email, novosErros) => {
  try {
    const response = await axios.get(`http://localhost:8080/usuario/check-email/${email}`);
    if (response.data == 1) {
      novosErros.email = CAD_USER_ERROR_MESSAGES.EMAIL_ALREADY_REGISTERED
    }
  } catch (error) {
   novosErros.email = CAD_USER_ERROR_MESSAGES.CANT_CHECK_EMAIL
  }
};

const checkCpfExists = async (cpf, novosErros) => {
    const response = await axios.get(`http://localhost:8080/usuario/${cpf}`);
    if(response.data == 1){
      novosErros.cpf = CAD_USER_ERROR_MESSAGES.CPF_ALREADY_REGISTERED;
    }
}

const comparePasswords = (password, confirmPassword, novosErros) => {
  if (password !== confirmPassword) {
    novosErros.password = CAD_USER_ERROR_MESSAGES.DIFFERENT_PASSWORDS;
  }
  return true;
};

export const sanitizeCpf = (cpf) => {
  return cpf.replace(/[.-]/g, '');
};

export const formatBirthDate = (birthDate) => {
  const formatedBirthDate = new Date(birthDate).toLocaleDateString('pt-BR');
  return formatedBirthDate;
}

// Funções auxiliares da Empresa
export const sanitizeCnpj = (cnpj) => {
  return cnpj.replace(/[./-]/g, '');
}

export const sanitizeTelefone = (telefone) => {
  return telefone.replace(/[() -]/g, '');
}
