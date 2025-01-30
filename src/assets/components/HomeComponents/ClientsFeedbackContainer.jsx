import { Fade } from "react-reveal"
import Imagemindex from "../../../shared/Imagesindex"
import styles from '../../../pages/HomePage/index.module.css'
const ClientsFeedbackContainer = ({ clientFeedback, imageName, peopleName }) => {
    return (
    <div className={styles.container}>
        <Fade bottom duration={600}>
            <img src={Imagemindex[imageName]} alt={peopleName} />
        </Fade>
        <Fade bottom duration={700}>
            <h4 className={styles.peopleName}>{peopleName}</h4>
            <p>{clientFeedback}</p>
        </Fade>
    </div>
    );
};

export default ClientsFeedbackContainer;