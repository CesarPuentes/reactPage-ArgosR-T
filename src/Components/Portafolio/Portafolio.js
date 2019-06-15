import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import './../assets/Portafolio.css'; 
import 'bootstrap/dist/css/bootstrap.css';

const Portafolio = () => (

<div id="meta" >
<div id="Portafolio">
<div >
			<div>
				<div >
					<div>
						<h1 className="blackcolor">Portafolio</h1>
						<h4 className="blackcolor">Prestamos servicios en consultoria de prevención y manejo de siniestros empresariales</h4>
					</div>
				</div>
			</div>

			<div>
		
				<div >
					<div class="ot-portfolio-item" id="item1">
						<figure class="effect-bubba">
							<img src={require('./../assets/images/portfolio-1.jpg')} alt="img02" class="img-responsive" />
							<figcaption>
								<h2>Pruebas de poligrafía</h2>
								<p>Info pendiente</p>
								<a href="#item1" data-toggle="modal" data-target="#Modal-1">View more</a>
							</figcaption>
						</figure>
					</div>
				</div>
		
				<div >
					<div class="ot-portfolio-item" id="item2">
						<figure class="effect-bubba">
							<img src={require('./../assets/images/portfolio-1.jpg')} alt="img02" class="img-responsive" />
							<figcaption>
								<h2>Visitas domiciliarias</h2>
								<p>Info pendiente</p>
								<a href="#item2" data-toggle="modal" data-target="#Modal-2">View more</a>
							</figcaption>
						</figure>
					</div>
				</div>
		
				<div >
					<div class="ot-portfolio-item" id="item3">
						<figure class="effect-bubba">
							<img src={require('./../assets/images/portfolio-1.jpg')}alt="img02" class="img-responsive" />
							<figcaption>
								<h2>Estudios de seguridad</h2>
								<p>Info pendiente</p>
								<a href="#item3" data-toggle="modal" data-target="#Modal-3">View more</a>
							</figcaption>
						</figure>
					</div>
				</div>

			</div>
			</div>
		</div>
</div>

);

export default Portafolio;