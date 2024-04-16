import { useParams } from 'react-router-dom'
import ProjetList from '../../Data/ProjetList.json'
import { Link } from 'react-router-dom'
import Error from '../Error/Error'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faTrello } from '@fortawesome/free-brands-svg-icons'
import './work.scss'

function Work() {
    const { id } = useParams()
    const projets = ProjetList.filter((value) => value.id === id)
    if (projets.length === 0) {
        return <Error />
    }
    const projet = projets[0]
    return (
        <div className="project">
            <h1 className="titleproject">{projet.title}</h1>
            <div className="deco-projet"></div>
            <div className="containerwork">
                <img
                    className="img-work"
                    src={projet.pictures}
                    alt={projet.title}
                />

                <div className="containerdescription">
                    <div>
                        <h2 className="descriptiontitle">Description</h2>
                        <p className="descriptionproject">
                            {projet.description}
                        </p>
                    </div>
                    <div>
                        <h2 className="scenariotitle">Scénario</h2>
                        <p className="scenarioproject">{projet.scenario}</p>
                    </div>
                    <div>
                        <h2 className="challengetitle">Challenge</h2>
                        <p className="chalengeproject">{projet.challenge}</p>
                    </div>
                    <h2 className="technotitle">Technologies</h2>
                    <div className="techno">
                        <div className="tags">
                            {projet.tags.map((value, index) => (
                                <div key={index} className="tagsvalue">
                                    {value}
                                </div>
                            ))}
                        </div>
                        <div>
                            <div className="worklinkgit">
                                {projet.link ? (
                                    <Link
                                        className="worklink"
                                        target="_blank"
                                        to={projet.link}
                                    >
                                        Voir la démo
                                    </Link>
                                ) : (
                                    ''
                                )}
                                {projet.git ? (
                                    <Link
                                        className="linkgit"
                                        target="_blank"
                                        to={projet.git}
                                    >
                                        <FontAwesomeIcon
                                            icon={faGithub}
                                            size="3x"
                                        />
                                    </Link>
                                ) : (
                                    ''
                                )}
                                {projet.trello ? (
                                    <Link
                                        className="trellolink"
                                        target="_blank"
                                        to={projet.trello}
                                    >
                                        <FontAwesomeIcon
                                            icon={faTrello}
                                            size="3x"
                                        />
                                    </Link>
                                ) : (
                                    ''
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Link className="projetlink" to="/Projet">
                    Retour aux projets
                </Link>
            </div>
        </div>
    )
}

export default Work
