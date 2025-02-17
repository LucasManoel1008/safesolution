import { toast, Bounce } from 'react-toastify';

export const ApiRequestError = (error) => {
    toast.error(`Erro ao realizar o cadastro: ${error}`, {        
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,  
    })
}

export const cepRequestError = () => {
    toast.error(`CEP não encontrado`, {        
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,  
    })
}