import React from "react"
import { render } from "react-dom";
import Header from './Components/Header/Header'
import Carousel from './Components/Galeria/Galeria'
import Portafolio from './Components/Portafolio/Portafolio'
import Exp from './Components/Experiencia/index'
import Location from './Components/Location/Location'
import Contacto from './Components/Contacto/Contacto'
import Formulario from './Components/Contacto/Formulario'
import Footer from './Components/Header/Footer'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    return (      
        <div className="col-xs-1" align="center">
            <Header />
            <Carousel />
            <Portafolio />
            <Exp />
            <Location />
            <Contacto />
            <Formulario />
            <Footer />
        </div>
        
    )
}

export default App