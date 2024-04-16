import './contact.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import OpenOutlookLink from '../../Components/Mail/Mail'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Contact() {
    return (
        <div className="contact">
            <h1 className="title">Me contacter</h1>
            <div className="decocontact"></div>
            <p className="contactme">
                Pour toute question, demande d'information. N'hésitez pas à me
                contacter, soit par Linkedin, ou par mail.
            </p>
            <div className="linkcontact">
                <Link
                    className="linklinkedin"
                    to="https://www.linkedin.com/in/delphine-barrabes-salmon-64a4926a/"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faLinkedin} size="3x" />
                </Link>
                <OpenOutlookLink />
            </div>
        </div>
    )
}

export default Contact
