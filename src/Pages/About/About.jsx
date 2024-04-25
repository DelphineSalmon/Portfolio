import Profil from './Images/profil.png'
import Signature from './Images/signature.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import './about.scss'
import Competence from '../../Components/Competence/Competence'

function Abouts() {
    return (
        <div className="about">
            <div className="imgpresentation">
                <img className="profil" src={Profil} alt="Profil" />

                <div className="title_presentation">
                    <h1 className="title">Présentation</h1>
                    <div className="deco"></div>
                    <p className="presentation">
                        Après plus de 10 ans dans la grande distribution, puis
                        en industrie, je me suis reconvertie en tant que
                        développeuse FrontEnd. Passionnée par la création et
                        spécialisée dans le développement web. Explorez mes
                        projets pour découvrir mon travail. Contactez-moi pour
                        discuter de vos besoins en développement web ! À
                        bientôt,
                    </p>
                    <div className="link">
                        <Link
                            className="linkcv"
                            to="https://drive.google.com/file/d/1Xgv1v6-zeWLbyT3YCRcxKFYNtDeQnMd3/view?usp=sharing"
                            target="_blank"
                        >
                            Mon CV
                        </Link>
                        <Link
                            className="linkgithub"
                            to="https://github.com/DelphineSalmon"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faGithub} size="3x" />
                        </Link>
                        <Link
                            className="linklinkedin"
                            to="https://www.linkedin.com/in/delphine-barrabes-salmon-64a4926a/"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faLinkedin} size="3x" />
                        </Link>
                    </div>

                    <img
                        className="signature"
                        src={Signature}
                        alt="signature"
                    />
                </div>
            </div>

            <div>
                <Competence />
            </div>
        </div>
    )
}

export default Abouts
