import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';


import './../assets/Contact.css';
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.css';

//Snippets: https://codepen.io/rsvogel/pen/zxNgjR; MOOZ Themes / www.MOOZthemes.com


class Formulario extends Component {

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
          <div className = "gridExperience col-xs-1" align="center">
        <section id="Formulario" className=""> 
	
		<div className ="contactAlign">

		 <div >
		 <div >
		 <h1>Escribenos</h1>
		 <form onSubmit={this.handleSubmit}>
		 <div >
		  <label htmlFor="username">Tu nombre: </label>
		  <br/>
		  <input className="fieldSize" id="username" name="name" type="text" />
		  </div>
		 <div >
		  <label htmlFor="email">Tu correo: </label>
		  <br/>
		  <input className="fieldSize" id="email" name="email" type="email" />
		  </div>
		  <div >
		  <label htmlFor="message">Tu consulta: </label>
		  <br/>
		  <textarea className="fieldSize" id="message" name="message" type="text"></textarea>
		  </div>
		  <br/>
		  <button>Enviar!</button>
       
		  </form> 
			

			
			</div>
			</div>
			</div>
			
			</section>
			</div>

        );
    }
}

export default Formulario;