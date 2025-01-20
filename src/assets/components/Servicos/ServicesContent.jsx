import React, {useState, useEffect} from 'react'
import  'mathjs'
import styles from '../../css/servico.module.css'
import ImagensUser from '../../../shared/ImagensUser'
import ServicesLoading from './ServicesLoading'
import axios from 'axios'
function ServicesContent({servico, loading, message, setServico, setMessage, filtro, setFiltro}) {
    const [pesquisa, setPesquisa] = useState('')
    const [pesquisaServico, setPesquisaServico] = useState([]);
   
    const handleInputSearch = async (e) => {
        const novoValor = e.target.value; // Capture o valor do input
        setPesquisa(novoValor); // Atualize o estado do input
        pesquisaServicos(novoValor); // Passe o valor para a função de pesquisa
    };
    const limparFiltro = () => {
        const servicos = JSON.parse(sessionStorage.getItem('servicos'));
        setServico(servicos);
        setFiltro(false)
    }
    const pesquisaServicos = (valor) => {
        console.log(valor);
        console.log(pesquisaServico)
        if (valor === "") {
            setPesquisaServico([]);
            const servicos = JSON.parse(sessionStorage.getItem('servicos'));
            setServico(servicos);
            setMessage("");
            return;
        }
        const pesquisaServicos = servico.filter((servico) => 
            servico.nome_servico.toLowerCase().includes(valor.toLowerCase())
        );
        setMessage("");

        if (pesquisaServicos.length === 0) {
            setMessage("Nenhum serviço encontrado.");
            return;
        }
        setPesquisaServico(pesquisaServicos);

        
        
    };

   


  return (

    <div className={styles.conteudo} id='conteudo'>
        {/* barra de pesquisa */}
        <div className="input-group">
            <input type="search" id='search' className="form-control rounded" placeholder="Pesquisa" aria-label="Search" aria-describedby="search-addon" value={pesquisa} onChange={handleInputSearch} />
            <button type="button" className="btn btn-outline-primary" data-mdb-ripple-init><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
        
        <div className={`${styles.servicos}`}>
            <h5 className='mt-4 bold blue2'>Serviços mais recentes</h5>
            {filtro ? (<button onClick={limparFiltro}  className={`blue2 ${styles.limparFiltro}`}>
                   X
                Limpar Filtros
                </button>
                ) : null}

            {servico && servico.length > 0 && pesquisaServico.length == 0 ? (
            servico.map((item, idx) => (
            <div key={idx} className='mt-4'>

                <div>
                    <div className={`${styles.servicosBox}` }>    
                            <div className={`${styles.item1}`}>
                                <img src={ImagensUser.paladins} width={50} height={50} alt="Empresa Logo" />
                                <div className={`${styles.servicoInfo}`}>
                                    <h6 className='blue2'>{item.nome_servico}</h6>
                                    <p className={`${styles.textServico}`}>{item.empresa.nome_empresa}</p>
                                    <p className={`${styles.textServico}`}>{item.local_servico}</p>
                                </div>
                            </div>
                        <div className={`${styles.item2}`}>
                            <p className={`${styles.precoServico}`}>R$ {item.valor_estimado_servico}</p>
                            <span className='tempoServico'>{item.tempo_servico}</span>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
            ))
            ) : loading ? (
                <ServicesLoading />
            ) : (
                pesquisaServico.map((item, idx) => (
                    <div key={idx}>
                        <div>
                            <div className={`${styles.servicosBox}` }>    
                                    <div className={`${styles.item1}`}>
                                        <img src={ImagensUser.paladins} width={50} height={50} alt="Empresa Logo" />
                                        <div className={`${styles.servicoInfo}`}>
                                            <h6 className='blue2'>{item.nome_servico}</h6>
                                            <p className={`${styles.textServico}`}>{item.empresa.nome_empresa}</p>
                                            <p className={`${styles.textServico}`}>{item.local_servico}</p>
                                        </div>
                                    </div>
                                <div className={`${styles.item2}`}>
                                    <p className={`${styles.precoServico}`}>R$ {item.valor_estimado_servico}</p>
                                    <span className='tempoServico'>{item.tempo_servico}</span>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                ))
            )}
            <p className='blue2 text-center'>{message}</p>
            

        </div>


    </div>
  )
}

export default React.memo(ServicesContent)