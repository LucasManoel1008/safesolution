import axios from "axios";
import CAD_ERROR_MESSAGES from "./CadasTextError";

export const checkInputValues = async (inputValues, setError, setUserData, setSection, setErrorCode) => {
  const { name, lastName, email, cpf, password, confirmPassword, birthDate } = inputValues;
  if (name === '' || lastName === '') return handleError(1, CAD_ERROR_MESSAGES.INCOMPLETE_NAME, setError, setErrorCode);

  if (email === '' || email.indexOf('@') === -1) {
    handleError(2, CAD_ERROR_MESSAGES.INCOMPLETE_EMAIL, setError, setErrorCode);
    return;
  }
  if (birthDate == '') {
    handleError(3, CAD_ERROR_MESSAGES.INVALID_AGE, setError, setErrorCode);
    return;
  } else if (!checkBirthDate(birthDate, setError, setErrorCode)) {
    return;
  }

  if (password === '') return handleError(5, CAD_ERROR_MESSAGES.INVALID_PASSWORD, setError, setErrorCode); 
  else if (confirmPassword === '') return handleError(6, CAD_ERROR_MESSAGES.DIFFERENT_PASSWORDS, setError, setErrorCode);
  else if (!comparePasswords(password, confirmPassword, setError, setErrorCode)) return;

  if (cpf.length < 14) {
    console.log("CPF inválido");
    handleError(7, CAD_ERROR_MESSAGES.INVALID_CPF, setError, setErrorCode);
    return;
  }
  const emailExists = await checkEmailExists(email, setError, setErrorCode);
  if (emailExists) return;

  console.log("Email válido");
  const userData = {
    nome_usuario: `${name} ${lastName}`,
    senha_usuario: password,
    data_nascimento: birthDate,
    cpf: sanitizeCpf(cpf),
    email,
  };

  nextSession(setUserData, userData, setSection);
};

// Funções auxiliares
const nextSession = (setUserData, userData, setSection) => {
  setUserData(userData);
  setSection(2);
};

const checkEmailExists = async (email, setError, setErrorCode) => {
  try {
    const response = await axios.get(`http://localhost:8080/usuario/check-email/${email}`);
    console.log(response.data);
    if (response.data == 1) {
      handleError(2, CAD_ERROR_MESSAGES.EMAIL_ALREADY_REGISTERED, setError, setErrorCode);
      return true;
    }
    return false;
  } catch (error) {
    console.log("Não foi possível verificar o email");
    handleError(2, CAD_ERROR_MESSAGES.CANT_CHECK_EMAIL, setError, setErrorCode);
    return false;
  }
};


const checkBirthDate = (birthDate, setError, setErrorCode) => {
  const birthYear = new Date(birthDate).getFullYear();
  const currentYear = new Date().getFullYear();
  if (currentYear - birthYear < 18) {
      handleError(4, CAD_ERROR_MESSAGES.MINIMUM_AGE_REQUIREMENT, setError, setErrorCode);
      return false;
  }
  return true;
};


const comparePasswords = (password, confirmPassword, setError, setErrorCode) => {
  if (password !== confirmPassword) {
    handleError(6, CAD_ERROR_MESSAGES.DIFFERENT_PASSWORDS, setError, setErrorCode);
    return false;
  }
  return true;
};

const sanitizeCpf = (cpf) => {
  return cpf.replace(/[.-]/g, '');
};

const handleError = (code, message, setError, setErrorCode) => {
  console.log("Função foi chamada");
  setError(message);
  setErrorCode(code);
  return;
}