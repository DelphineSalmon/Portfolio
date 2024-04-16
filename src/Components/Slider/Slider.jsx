import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronRight,
    faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import './slider.scss'

function Slider({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    return (
        <div className="containerslider">
            <img
                className="pictureslider"
                src={pictures[currentIndex]}
                alt={''}
            />
            <div className="containerchevron">
                <FontAwesomeIcon
                    className={pictures.length === 1 ? 'notdisplay' : 'left'}
                    icon={faChevronLeft}
                    onClick={() =>
                        setCurrentIndex(
                            currentIndex === 0
                                ? pictures.length - 1
                                : currentIndex - 1
                        )
                    }
                />

                <FontAwesomeIcon
                    className={pictures.length === 1 ? 'notdisplay' : 'right'}
                    icon={faChevronRight}
                    onClick={() =>
                        setCurrentIndex(
                            currentIndex > pictures.length - 2
                                ? 0
                                : currentIndex + 1
                        )
                    }
                />
            </div>
        </div>
    )
}

export default Slider
