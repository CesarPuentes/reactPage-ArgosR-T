import React from "react"
import { render } from "react-dom";
import Header from './Components/Header/Header'
import Carousel from './Components/Slider/Slider'
import Galeria from './Components/Galeria/Galeria'
import Exp from './Components/Experiencia/index'
import Location from './Components/Location/Location'
import Contacto from './Components/Contacto/Contacto'
import Formulario from './Components/Contacto/Formulario'
import Footer from './Components/Header/Footer'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

function App() {
    return (      
        <div className="col-xs-1" align="center">
            <Header />
            <Carousel />
            <Galeria />
            <Exp />
            {/*<Location />*/}
            <Contacto />
            <Formulario />
            <Footer />
        </div>
        
    )
}

export default App