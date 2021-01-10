import './styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

function Footer() {

    return(

    <footer className="main-footer">
    App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
    <div className="footer-icons">
        <a href="http://www.youtube.com.br" target="_new"><FontAwesomeIcon icon={faYoutube} color="white" size="2x" /></a>
        <a href="http://www.instagram.com" target="_new"><FontAwesomeIcon icon={faInstagram} color="white" size="2x" /></a>
        <a href="http://www.linkedin.com" target="_new"><FontAwesomeIcon icon={faLinkedinIn} color="white" size="2x" /></a>
       
    </div>
    </footer>
    )
}

export default Footer;