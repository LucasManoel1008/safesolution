import React  from 'react'
import { useEffect, useState } from 'react'
import Styles from '../css/Loading.module.css'
function Loading() {
    const [time, setTime] = useState(10); // Tempo inicial (em segundos)

    useEffect(() => {
    if (time <= 0) return "Não foram encontrados serviços cadastrados"; // Para o timer ao atingir zero
    else {<div className="spinner-border text-primary text-center d-block" role="status">
            <span className="visually-hidden">Carregando...</span>
          </div>}

    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1); // Reduz 1 a cada segundo
    }, 1000);

    return () => clearInterval(timer); // Limpa o intervalo ao desmontar o componente
  }, [time]);

  return (
    <div className={Styles.Loading}>
        {time > 0 && dados.length === 0 ?  (
        <div className="spinner-border text-primary text-center d-block" role="status">
          <span className="visually-hidden">Carregando...</span>
        </div>
      ) : (
        <p className="text-center">{dados.length === 0 ? "Não foram encontrados serviços cadastrados" : null}</p>
      )}    
    </div>
  )
}

export default Loading