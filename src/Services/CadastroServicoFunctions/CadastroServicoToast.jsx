import { toast, Bounce } from 'react-toastify';

export const ApiRequestError = () => {
    toast.error(`Erro ao realizar o cadastro do serviço. Tente Novamente.`, {        
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