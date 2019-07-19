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
								<p>                'El polígrafo es una herramienta que registra los cambios neurofisiológicos que se presentan en una persona cuando esta es estimulada psicológicamente con una pregunta específicamente elaborada para poner a prueba su conocimiento sobre un acontecimiento. Lo anterior se realiza con el objetivo de detectar reacciones indicativas de engaño ante una pregunta que sea de interés para el empleador.'</p>
								<a href="#item1" data-toggle="modal" data-target="#Modal-1">View more</a>
								<button className="buttonStyle">Detalles</button>
								<button className="buttonStyle">Contacto</button>
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
								<p>'La visita domiciliaria busca validar la información provista por el candidato con respecto a su sitio de vivienda, su entorno socio económico, responsabilidades familiares, entre otros.',</p>
								<a href="#item2" data-toggle="modal" data-target="#Modal-2">View more</a>
								<button className="buttonStyle">Detalles</button>
								<button className="buttonStyle">Contacto</button>
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
								<p>'Los estudios de seguridad son un servicio que busca determinar la confiabilidad de un candidato. Sus objetivos son: verificar la veracidad de los datos provistos por el o la candidato, verificar sus antecedentes para de esta forma determinar la confiabilidad de sus futuros empleados.'</p>
								<a href="#item3" data-toggle="modal" data-target="#Modal-3">View more</a>
								<button className="buttonStyle">Detalles</button>
								<button className="buttonStyle">Contacto</button>
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