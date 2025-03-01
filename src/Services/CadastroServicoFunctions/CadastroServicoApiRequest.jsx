import axios from "axios";

    export const fetchUserData = async  (cnpj, setDados) => {
        axios.get(`http://localhost:8080/servico/empresa/${cnpj}`)
        .then((response) => {
          setDados(response.data)
        })
        .catch(() => {
          return false
        })
    }

    export const removeService = async (id) => {
      try {
        await axios.delete(`http://localhost:8080/servico/${id}`);
      } catch (error) {
        console.error('Erro ao deletar serviço:', error);
      }
    }

    export const postService = async (novoServico, cnpj) => {
      try {
        await axios.post(`http://localhost:8080/servico?cnpjEmpresa=${cnpj}`, novoServico)
        window.location.reload();
      } catch (error) {
        console.error('Erro ao cadastrar serviço:', error);
      }
    }

    export const getService = async (id) => {
      try{
        const response = await axios.get(`http://localhost:8080/servico/${id}`);
        return response.data;
      }
      catch(error){
        console.error('Erro ao buscar serviço:', error);
      }
    }