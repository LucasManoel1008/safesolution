import emailjs from 'emailjs-com';
import MESSAGE_ERROR from './HomeTextError';

export const formValidation = (e, inputsValue, updateFormValues ) => {
    if (!inputsValue.nome || !inputsValue.email || !inputsValue.assunto || !inputsValue.mensagem) {
        updateFormValues.setError(MESSAGE_ERROR.ERROR_MESSAGE);
        return false;
    }
    else {
        ensureInputsValues(inputsValue, updateFormValues);
        sendMailAndCleanFields(inputsValue, updateFormValues);
    }
};

const ensureInputsValues = (inputsValue, updateFormValues) => {
    if(!inputsValue.telefone)  updateFormValues.setTelefone(MESSAGE_ERROR.TELEPHONE_MISSING_MESSAGE);
    if(!inputsValue.cidade)  updateFormValues.setCidade(MESSAGE_ERROR.CITY_MISSING_MESSAGE);
}

const sendMailAndCleanFields = (inputsValue, updateFormValues) => {
    const emailParams = getEmailParams(inputsValue);
        checkEmailProcedence(emailParams, updateFormValues);
        clearInputsFields(updateFormValues);
}

const checkEmailProcedence = (emailParams, updateFormValues) => {
    const email = emailParams.email;
    if(email.includes('@gmail')) {
        emailjs.send('service_e3eqp7s', 'template_0iwid6d', emailParams, 'f3oNKxzSSwUaAoUcD')
        .then(() => {
            updateFormValues.setError(MESSAGE_ERROR.SUCCESS_MESSAGE);
        } )
        .catch(() => {
            updateFormValues.setError(MESSAGE_ERROR.ERROR_EMAIL_MESSAGE);
        });
        return;
    }
    else{
        emailjs.send('service_b5hcnew', 'template_sr6tzhl', emailParams, 'f3oNKxzSSwUaAoUcD')
        .then(() => {
            updateFormValues.setError(MESSAGE_ERROR.SUCCESS_MESSAGE);
        } )
        .catch(() => {
            updateFormValues.setError(MESSAGE_ERROR.ERROR_EMAIL_MESSAGE);
        });
        return;
    }
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


