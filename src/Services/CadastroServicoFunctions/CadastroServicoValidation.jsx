import CADASTRO_SERVICO_TEXT_ERROR from "./CadastroServicoTextError";
    export const validateUserInput = (inputsValues, setError) => {
        let erros = [];
        const { nome_servico, descricao_servico, categorias, criterios, disponibilidade, cidade, estado, inicio, valorMinimo} = inputsValues;
        let now = new Date();
        if (nome_servico === "") erros.nome_servico = CADASTRO_SERVICO_TEXT_ERROR.INCOMPLETE_SERVICE_NAME;
        if (descricao_servico === "") erros.descricao_servico = CADASTRO_SERVICO_TEXT_ERROR.INCOMPLETE_SERVICE_DESCRIPTION;
        if (categorias === "") erros.categorias = CADASTRO_SERVICO_TEXT_ERROR.INCOMPLETE_SERVICE_CATEGORY;
        if (estado === "") erros.estado = CADASTRO_SERVICO_TEXT_ERROR.INCOMPLETE_SERVICE_STATE;
        if (cidade === "") erros.cidade = CADASTRO_SERVICO_TEXT_ERROR.INCOMPLETE_SERVICE_CITY;
        if (valorMinimo === "") erros.valorMinimo = CADASTRO_SERVICO_TEXT_ERROR.INCOMPLETE_SERVICE_PRICE;
        if (criterios === "") erros.criterios = CADASTRO_SERVICO_TEXT_ERROR.INCOMPLETE_SERVICE_CRITERION;
        if (disponibilidade == "") erros.disponibilidade = CADASTRO_SERVICO_TEXT_ERROR.INCOMPLETE_SERVICE_AVAILABILITY;
        else if(disponibilidade == "false" && inicio === ""){
            erros.inicio = CADASTRO_SERVICO_TEXT_ERROR.INCOMPLETE_SERVICE_START_DATE;
        }

        if (inicio !== "" && new Date(inicio) < now) {
            erros.inicio = CADASTRO_SERVICO_TEXT_ERROR.INVALID_SERVICE_START_DATE;
        }
        if(Object.keys(erros).length > 0){
            const error = Object.keys(erros)[0];
            setError(erros);
            setTimeout(() => scrollToError(error), 0);
            return false;
        }
        return true;
    }

    // utilitarios
    const scrollToError = (error) =>{
        let element = document.getElementById(`${error}`);
        const elementPosition = element.getBoundingClientRect().top + window.scrollY - 250; 
        window.scrollTo({
            top: elementPosition,
            behavior: "smooth"
        });
        
    }


