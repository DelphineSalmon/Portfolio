import ProjetList from '../../Data/ProjetList.json'
import Card from '../../Components/Card/Card'
import './project.scss'

function Project() {
    return (
        <div className="projet">
            <h2 className="title-projet">Projets</h2>
            <div className="deco-projet"></div>
            <p className="description-projet">
                Découvrez, ici, un aperçu de mon travail
            </p>
            <div className="containercards">
                <div className="cards">
                    {ProjetList.map((projet) => (
                        <Card key={projet.id} projet={projet} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Project
