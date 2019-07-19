import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';


import './../assets/slider-animations.css';
import './../assets/slider.css';

/*Slider Source: https://codesandbox.io/s/p582xl40j*/


var ReactFitText = require('react-fittext');
  
const content = [
	{
		title: 'Pruebas de poligráfo',
		description:
		'Somos expertos en la realización de pruebas de polígrafo.',
		button: 'Leer más',
		image: require('./../assets/images/slide_one.jpg'),
		user: 'Luan Gjokaj'
	},
	{
		title: 'Visitas Domiciliarias',
		description:
		'Amplia experiencia en la realización de visitas domiciliarias.',
		button: 'Leer más',
		image: require('./../assets/images/slide_two.png'),
		user: 'Erich Behrens'
	},
	{
		title: 'Estudios de seguridad',
		description:
		'Determine la confiabilidad de su candidato.',
		button: 'Leer más',
		image: require('./../assets/images/slide_three.jpg'),
		user: 'Bruno Vizovskyy'
	}
];

const Carousel = () => (
	<div id="Galeria">
		<Slider className="slider-wrapper">
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center`}}
				>
					<div className="inner">
					<ReactFitText maxFontSize="30px">
						<h1>{item.title}</h1>
						</ReactFitText>
						<ReactFitText maxFontSize="20px">
						<p>{item.description}</p>
						</ReactFitText>
						<button>{item.button}</button>
					</div>
				</div>
			))}
		</Slider>
	</div>
);

export default Carousel;