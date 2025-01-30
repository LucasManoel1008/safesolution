import styles from  '../../../pages/HomePage/index.module.css'
import Imagemindex from '../../../shared/Imagesindex';

const SafeSolutionInformation = ({ imageName, sectionText, hasLink }) => {
    return (
        <div className={styles.text}>
            <img src={`${Imagemindex[imageName]}`} alt="Icon" className={styles.iconMainText} />
            <p>{sectionText} {hasLink ? <a href='https://www.solucoesdynamicair.com.br/blog/atencao-aos-custos-de-manutencao-em-sua-industria' target='_blank' style={{ color: '#234063', textDecoration: 'underline' }} rel='noopener noreferrer'>Saiba mais</a> : null}</p>
        </div>
    );
}


export default SafeSolutionInformation;