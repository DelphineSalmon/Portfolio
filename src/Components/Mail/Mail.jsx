import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const OpenOutlookLink = () => {
    const recipient = 'delphinebarrabes@gmail.com'

    const mailtoLink = `mailto:${recipient}`

    return (
        <a
            className="linkmail"
            target="_blank"
            rel="noreferrer"
            href={mailtoLink}
        >
            <FontAwesomeIcon icon={faEnvelope} size="3x" />
        </a>
    )
}

export default OpenOutlookLink
