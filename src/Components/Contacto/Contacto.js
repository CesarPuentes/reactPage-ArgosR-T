import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';


import './../assets/Contact.css';
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.css';

//Snippets: https://codepen.io/rsvogel/pen/zxNgjR; MOOZ Themes / www.MOOZthemes.com


class Contacto extends Component {

	constructor() {
	  super();
	  this.handleSubmit = this.handleSubmit.bind(this);
	}
  
	handleSubmit(event) {
	  event.preventDefault();
	  const data = new FormData(event.target);
	  event.target.reset();
	  
	  fetch('https://script.google.com/macros/s/AKfycbzZFO1IERxtI_HvMNh5P_CTUXXKtCI0GAw_bDs2UQ/exec', {
		method: 'POST',
		body: data,
	  });
	}
    render() {

        return (
            <div id="Contactanos" className = "gridExperience col-xs-1" align="center">
            <section id="contact" className="ressection"> 
			<div class="container">
				<div class="row">
					<div class="col-lg-12 text-center">
						<div class="section-title">
							<h2>Contactenos</h2>
							<p className = "contactoP">Si tienes preguntas o requieres una consulta: !por favor contacta con nosotros!</p>
						</div>
					</div>
                    <div class="row">
					<div class="col-md-6">
						<h3 className = "contactoH3">Nuestras redes</h3>
						<p className = "contactoP">En construcción</p>
					</div>
					<div class="col-md-6 telcorreo">
						<h3 className = "contactoH3">Teléfonos y correo</h3>
						<p className = "contactoP"><i class="fa fa-phone"></i> 3105530440</p>
						<p className = "contactoP"><i class="fa fa-phone"></i> 3016230973</p>
						<p className = "contactoP"><i class="fa fa-envelope"></i> argosryt@gmail.com</p>
					</div>
			</div>
			</div>
            </div>
			</section>
			</div>

        );
    }
}

export default Contacto;