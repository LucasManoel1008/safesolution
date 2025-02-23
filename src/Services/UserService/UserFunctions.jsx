    export const getUserData = async () => {
        const data = sessionStorage.getItem('empresa')
        if (!data) {
            return null;
        }
        const dadosEmpresa = JSON.parse(data);
        return dadosEmpresa.cnpj
    }
