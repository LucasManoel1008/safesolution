import React, { useEffect } from 'react'

import styles from '../assets/css/servico.module.css'
import axios from 'axios'
import ServicesFiltter from '../assets/components/Servicos/ServicesFiltter'
import ServicesContent from '../assets/components/Servicos/ServicesContent'

import { useState } from 'react';

function Servicos() {
    const [servico, setServico] = useState([]);
    const [preco, setPreco] = useState(0);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(""); // Mensagem a ser exibida
    const handleinputPreco = (event) => {
        setPreco(event.target.value);
    }

    const getServicos = async () => {
            axios.get("http://localhost:8080/servico/listar-servicos")
            .then((response) => {
                setServico(response.data);
                console.log("Dados resgatados com sucesso!")
                console.log(response.data)
                setLoading(false);
                setMessage("");
            })
            .catch((error) => {
                console.error('Erro ao buscar serviços:', error);
                setLoading(false);
                setMessage("Ocorreu um erro interno. Tente novamente mais tarde.")
            }).finally(() => {
                setLoading(false);
                
            });
            

            
    }
    useEffect(() => {
        getServicos();
    }
    , []);

    return(
    <div className={styles.servico}>
       <ServicesFiltter preco={preco} handleinputPreco={handleinputPreco} />
       <ServicesContent servico={servico} loading = {loading} message = {message}/>
       
    </div>
    )
}

export default Servicos