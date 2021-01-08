import './styles.css';
import {ReactComponent as Logo} from '../Image/Logo.svg';


function Navbar() {

    return(

    <nav className="main-navbar">

        <Logo />
        <a href="#" className="logo-text">DS Deliver</a>

    </nav>
    )
}

export default Navbar