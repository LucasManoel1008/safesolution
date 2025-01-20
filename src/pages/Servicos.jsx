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
    const [filtro,setFiltro] = useState(false);
    const handleinputPreco = (event) => {
        setPreco(event.target.value);
    }

    const [quantidade, setQuantidade] = useState([]);
    
    const quantidadeFiltro = () => {
        
        const servico = JSON.parse(sessionStorage.getItem('servicos'));
        let todos = servico.length;
        let arquitetura = servico.filter((servico) => servico.categoria_servico === "arquitetura").length;
        let limpeza = servico.filter((servico) => servico.categoria_servico === "limpeza").length;
        let transporte = servico.filter((servico) => servico.categoria_servico === "transporte").length;
        let seguranca = servico.filter((servico) => servico.categoria_servico === "segurança").length;
        let encanador = servico.filter((servico) => servico.categoria_servico === "encanador").length;
        let tecnologia = servico.filter((servico) => servico.categoria_servico === "tecnologia").length;
        setQuantidade([todos, arquitetura, limpeza, transporte, seguranca, encanador, tecnologia]);
    }
    
    const getServicos = async () => {
            axios.get("http://localhost:8080/servico/listar-servicos")
            .then((response) => {
                setServico(response.data);
                if (response.data.length === 0) {
                    setMessage("Nenhum serviço encontrado.");
                    setLoading(false);
                    return;
                }
                setLoading(false);
                setMessage("");
                sessionStorage.setItem('servicos', JSON.stringify(response.data));
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
        quantidadeFiltro();
    }
    , []);

    return(
    <div className={styles.servico}>
       <ServicesFiltter preco={preco} handleinputPreco={handleinputPreco} setServico = {setServico} setLoading = {setLoading} setMessage = {setMessage} setFiltro = {setFiltro} setPreco = {setPreco} quantidade = {quantidade} quantidadeFiltro = {quantidadeFiltro} />
       <ServicesContent servico={servico} loading = {loading} message = {message} setServico = {setServico} setLoading = {setLoading} setMessage={setMessage} filtro ={filtro} setFiltro = {setFiltro}/>
       
    </div>
    )
}

export default Servicos