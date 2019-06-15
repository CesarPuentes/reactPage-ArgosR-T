import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import './../assets/exp.css';


class Discount extends Component {

    state = {
        discountStart:0,
        discountEnd:10
    }


    porcentage = () => {
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(()=>{
            this.porcentage()
        },80)
    }


    render() {
        return (
            <div className = "gridExperience col-xs-1" align="center">
            <div className="center_wrapper" id="Experiencia">
                <div className="discount_wrapper">

                

                    <Fade
                        onReveal={()=> this.porcentage()}
                    >
                        <div className="discount_porcentage">
                            <span className="centerNumber">{this.state.discountStart}</span>
                            <span>Años de experiencia</span>
                        </div>
                        <div className="discount_description">
                            <h3>En el ambito de la seguridad empresarial</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        
    
                        
                        </div>
                    </Fade>
            
                    


                </div>
            </div>
            </div>
        );
    }
}

export default Discount;