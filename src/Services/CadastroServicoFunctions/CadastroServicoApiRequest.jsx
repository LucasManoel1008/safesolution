import axios from "axios";

    export const fetchUserData = async  (cnpj, setDados) => {
        
        axios.get(`http://localhost:8080/servico/empresa/${cnpj}`)
        .then((response) => {
          setDados(response.data)
        })
        .catch(() => {
          return false
        })
        .finally(() => {
          return
        });
    }