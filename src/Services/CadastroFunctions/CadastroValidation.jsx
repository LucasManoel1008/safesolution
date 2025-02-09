import axios from "axios";
import CAD_ERROR_MESSAGES from "./CadasTextError";


export const checkInputValues = async (inputValues, updateSetParams) => {
    
  let novosErros = []
  const { name, lastName, email, cpf, password, confirmPassword, birthDate } = inputValues;
  const { setError } = updateSetParams;
  

  if (name === '')  novosErros.nome = CAD_ERROR_MESSAGES.INCOMPLETE_NAME;

  if (lastName === '') novosErros.lastName = CAD_ERROR_MESSAGES.INCOMPLETE_LASTNAME;

  if (email === '' || email.indexOf('@') === -1) {
    novosErros.email = CAD_ERROR_MESSAGES.INCOMPLETE_EMAIL;
  }
  else{
    await checkEmailExists(email, novosErros);
  }

  if (birthDate == '') {
    novosErros.birthDate = CAD_ERROR_MESSAGES.INVALID_AGE;
  }
  else{
    checkBirthDate(birthDate, novosErros);
  }

  if (password === '')novosErros.password = CAD_ERROR_MESSAGES.INVALID_PASSWORD; 

  else if (confirmPassword === '') novosErros.confirmPassword = CAD_ERROR_MESSAGES.INVALID_PASSWORD;

  else{
    comparePasswords(password, confirmPassword, novosErros);
  }

  if (cpf.length < 14) {
   novosErros.cpf = CAD_ERROR_MESSAGES.INVALID_CPF;
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

// Funções auxiliares

const checkBirthDate = (birthDate, novosErros) => {
  const birthYear = new Date(birthDate).getFullYear();
  const currentYear = new Date().getFullYear();
  if (currentYear - birthYear < 18) {
    novosErros.birthDate = CAD_ERROR_MESSAGES.INVALID_AGE
  }
};

const checkEmailExists = async (email, novosErros) => {
  try {
    const response = await axios.get(`http://localhost:8080/usuario/check-email/${email}`);
    
    if (response.data == 1) {
      novosErros.email = CAD_ERROR_MESSAGES.EMAIL_ALREADY_REGISTERED;
      return true;
    }
  } catch (error) {
   novosErros.email = CAD_ERROR_MESSAGES.CANT_CHECK_EMAIL
  }
};

const checkCpfExists = async (cpf, novosErros) => {

    const response = await axios.get(`http://localhost:8080/usuario/${cpf}`);
    if(response.data == 1){
      novosErros.cpf = CAD_ERROR_MESSAGES.CPF_ALREADY_REGISTERED;
    }
}

const comparePasswords = (password, confirmPassword, novosErros) => {
  if (password !== confirmPassword) {
    novosErros.confirmPassword = CAD_ERROR_MESSAGES.DIFFERENT_PASSWORDS;
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