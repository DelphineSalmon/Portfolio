import './competence.scss'
import Slider from '../../Components/Slider/Slider'
import competenceList from '../../Data/CompetenceList.json'

function Competence() {
    return (
        <div className="competence">
            <h2 className="titlecompetence">Mes compétences</h2>
            <div className="decocompetence"></div>

            <Slider pictures={competenceList} />
        </div>
    )
}

export default Competence
