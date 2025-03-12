import axios from 'axios';
import { DateTime } from 'luxon';

  export const fetchEmpresaByCnpj = async (setEmpresa) => {
      const empresaString = sessionStorage.getItem('empresa');
      if (!empresaString) return; // Retorna cedo se não houver dados
      setEmpresa(JSON.parse(empresaString)) // Atualiza o estado com os dados da empresa
    };

  export const getUserData = () =>{
    const empresaString = sessionStorage.getItem('empresa');
    if (!empresaString) return false; // Retorna cedo se não houver dados
    return JSON.parse(empresaString); // Atualiza o estado com os dados da empresa
  }
  
  export const getDateForService = (disponibilidade, inicio) => {
    if (disponibilidade === 'true') {
      return DateTime.now().setZone('America/Sao_Paulo').toISO();
    } else {
      return inicio
    }
  }
  export const formatUserDate = () => {
    const formatServiceDate = new Date(disponibilidade).toUTCString();
  }

