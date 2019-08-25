import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Zoom from 'react-reveal/Zoom';
import './../assets/Portafolio.css'; 
import 'bootstrap/dist/css/bootstrap.css';
import './Galeria.css'

import RiskImage from './../assets/images/Risk.jpg'; 


const Galeria = () => (

<div id="Nosotros">
<div id="Titulo">
<div >
			<div>
				<div >
					<div>
						<h1 className="blackcolor">Riesgo y Verdades</h1>
						<h4 className="blackcolor">Prestamos servicios en consultoria de prevención y manejo de siniestros empresariales</h4>
					</div>
				</div>
			</div>
			<div>


			<div className="Galeria-container">
				<div className="Galeria-container2">
					<div className="subcontainer">
						<h2>Identifique riesgos de seguridad en su empresa</h2>
						<p>
						Toda empresa u organización se enfrenta al desafío de disminuir riesgos que puedan entorpecer sus actividades o en el peor de los casos, destruir a la misma. Nuestros servicios enfocados en el área del riesgo pueden ayudarle a identificar estos riesgos y prevenirlos. Contacta con nosotros para saber más.
						</p>
					</div>
					<div className="subcontainer">
						<h2>El riesgo es mas común de lo que usted piensa</h2>
						<p>
						Según el diario portafolio, Colombia es el tercer país con más fraude empresarial de Latinoamérica. Si usted sospecha de actividad sospechosa en su empresa o desea prevenir al máximo la materialización de este riesgo, nuestros servicios pueden serle de utilidad.						</p>
					</div>
				</div>
				<div >
					<img className="ImageContainer" src={RiskImage}></img>
				</div>
			</div>




			</div>
			</div>
		</div>
</div>

);

export default Galeria;