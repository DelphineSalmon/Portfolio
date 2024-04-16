import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import './header.scss'

function Header() {
    return (
        <div className="navbar">
            <Link className="navbar_link" to="/">
                Accueil
            </Link>
            <Link className="navbar_link" to="/Projet">
                Projets
            </Link>
            <img className="navlogo" src={Logo} alt="Logo" />
            <Link className="navbar_link" to="/About">
                A propos
            </Link>
            <Link className="navbar_link" to="/Contact">
                Contact
            </Link>
        </div>
    )
}

export default Header
