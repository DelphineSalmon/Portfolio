import { Link } from 'react-router-dom'
import Vivi from '../../assets/vivi.jpg'
import './error.scss'

function Error() {
    return (
        <div className="errorpage">
            <h1 className="titleerror">Oh non!</h1>
            <h2 className="messageerror">
                Il semble que nous soyons arrivés dans une impasse!
            </h2>
            <p className="chaterror">
                Je m'excuse de ce petit désagrément. Pour me faire pardonner,
                voici la photo d'un chat tout mignon. J'espère qu'elle adoucira
                votre peine.
            </p>
            <img className="vivi" src={Vivi} alt="Chat mignon" />
            <Link className="linkaccueil" to="/">
                Retourner à la page d'accueil
            </Link>
        </div>
    )
}

export default Error
