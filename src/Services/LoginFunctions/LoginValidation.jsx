import LOGIN_ERROR_MESSAGES from "./LoginTextError";

    export const validarFormulario = (e, cnpj, senha, setErro) => {
        e.preventDefault();
        let novosErros = {};
        let cleanCnpj = sanitazeCnpj(cnpj);
        sessionStorage.clear();
        if (cleanCnpj.length !== 14) { 
            novosErros.cnpj = LOGIN_ERROR_MESSAGES.INVALID_CNPJ;
        } 
        if (senha === ""){
            novosErros.senha = LOGIN_ERROR_MESSAGES.INVALID_PASSWORD;
        }
        if(senha.length < 8){
            novosErros.senha = LOGIN_ERROR_MESSAGES.INVALID_PASSWORD;
        }
        setErro(novosErros);
        if (Object.keys(novosErros).length > 0) {
            return false;
        }
        return true;
    }

    export const sanitazeCnpj = (cnpj) => {
        return cnpj.replace(/[./-]/g, ''); 
    }