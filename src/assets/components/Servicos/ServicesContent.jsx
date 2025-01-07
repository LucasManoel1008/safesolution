import React, {useState, useEffect} from 'react'
import  'mathjs'
import styles from '../../css/servico.module.css'
import ImagensUser from '../../../shared/ImagensUser'
import ServicesLoading from './ServicesLoading'
import { use } from 'react'
function ServicesContent({servico, loading, message}) {
    const [tempo, setTempo] = useState(10)
   
    const loadingContent = () => {
        while(loading){
            return <ServicesLoading />
        }
    }
    


  return (

    <div className={styles.conteudo}>
        {/* barra de pesquisa */}
        <div className="input-group">
            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <button type="button" className="btn btn-outline-primary" data-mdb-ripple-init><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
        
        <div className={`${styles.servicos}`}>
            <h5 className='mt-4 bold blue2'>Serviços mais recentes</h5>

            {servico && servico.length > 0 ? (
            servico.map((item, idx) => (
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
            ) : (
            loadingContent()
            )}
            <p className='blue2 text-center'>{message}</p>
            

        </div>


    </div>
  )
}

export default React.memo(ServicesContent)