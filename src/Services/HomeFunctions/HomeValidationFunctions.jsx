import emailjs from 'emailjs-com';
import MESSAGE from './HomeTextFunctions';


export const formValidation = (e,inputsValue, updateFormValues ) => {
    e.preventDefault();
    console.log("Entrou aqui")
    if (!inputsValue.nome || !inputsValue.email || !inputsValue.assunto || !inputsValue.mensagem) {
        updateFormValues.setError(ERROR_MESSAGE);
        return false;
    }
    else {
        sendMail(inputsValue, updateFormValues);
    }
};

const sendMail = (inputsValue, updateFormValues) => {
    ensureInputsValues(inputsValue, updateFormValues);
    const emailParams = getEmailParams(inputsValue);
    emailjs.send('service_e3eqp7s', 'template_0iwid6d', emailParams, 'f3oNKxzSSwUaAoUcD')
    .then(() => {
        clearInputsFields(updateFormValues);
        updateFormValues.setError(MESSAGE.SUCCESS_MESSAGE);
    }, () => {
         updateFormValues.setError(MESSAGE.ERROR_EMAIL_MESSAGE); 
    });
    }

const getEmailParams = (inputsValue) => {
    return {
        assunto: inputsValue.assunto,
        nome: `${inputsValue.nome} ${inputsValue.sobrenome}`,
        message: inputsValue.mensagem,
        email: inputsValue.email,
        telefone: inputsValue.telefone,
        cidade: inputsValue.cidade
    };
}
const clearInputsFields = (updateFormValues) => {
    updateFormValues.setNome('');
    updateFormValues.setSobrenome('');
    updateFormValues.setEmail('');
    updateFormValues.setCidade('');
    updateFormValues.setAssunto('');
    updateFormValues.setMensagem('');
    updateFormValues.setTelefone('');
    updateFormValues.setError('');
}
const ensureInputsValues = (inputsValue, updateFormValues) => {
    if(!inputsValue.telefone)  updateFormValues.setTelefone(MESSAGE.TELEPHONE_ERROR_MESSAGE);
    if(!inputsValue.cidade)  updateFormValues.setCidade(MESSAGE.CITY_ERROR_MESSAGE);
}