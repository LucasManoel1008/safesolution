
    export const getUserData = async () => {
        let data = sessionStorage.getItem('empresa')
        if (!data) {
            return null;
        }
        data = JSON.parse(data);
        return data;
    }