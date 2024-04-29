import React, { useEffect } from 'react'
import Header from '../../Layout/Header/Header'
import Accueil from '../../Pages/Accueil/Accueil'
import Abouts from '../../Pages/About/About'
import Contact from '../../Pages/Contact/Contact'
import Footer from '../../Layout/Footer/Footer'
import Project from '../../Pages/Project/Project'
import Work from '../../Pages/Work/Work'
import Error from '../../Pages/Error/Error'
import {
    HashRouter as Router,
    Routes,
    Route,
    useLocation,
} from 'react-router-dom'

function ScrollToTop() {
    const chemin = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [chemin])
    return null
}
function MyRouter() {
    return (
        <React.StrictMode>
            <Router>
                <ScrollToTop />
                <Header />
                <Routes>
                    <Route path="/" element={<Accueil />} />
                    <Route path="/Projet" element={<Project />} />
                    <Route path="/Work/:id" element={<Work />} />
                    <Route path="/About" element={<Abouts />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
            </Router>
        </React.StrictMode>
    )
}

export default MyRouter
