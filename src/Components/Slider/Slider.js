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
		title: 'Evalúe el riesgo presente en su empresa',
		description:
		'Somos expertos en la identificación y manejo del riesgo en su empresa.',
		image: require('./../assets/images/slide_one.jpg'),
		user: 'Luan Gjokaj'
	},
	{
		title: 'Selección de personal',
		description:
		'Le damos asistencia en la selección de personal confiable para su empresa.',
		image: require('./../assets/images/slide_two.png'),
		user: 'Erich Behrens'
	},
	{
		title: 'Manejo y administración del riesgo',
		description:
		'Lo asesoramos en los pasos necesarios para manejar y administrar los riesgos de fraude, robo, etc, lo cuales puedan presentarse en su empresa.',
		image: require('./../assets/images/slide_three.jpg'),
		user: 'Bruno Vizovskyy'
	}
];

const Carousel = () => (
	<div id="Slider">
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
					</div>
				</div>
			))}
		</Slider>
	</div>
);

export default Carousel;