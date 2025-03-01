import axios from 'axios';

    export const fetchUserData = async (cnpj, setEmpresa) => {try {
        const response = await axios.get(`http://localhost:8080/empresa/${cnpj}`);
        setEmpresa(response.data);
      } catch (error) {
        console.error('Erro ao buscar empresa:', error);
      }
      return 
    }