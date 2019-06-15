import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import DrawerButton from './DrawerButton';

import './../assets/navbar.css';


//Snippets: https://codepen.io/rsvogel/pen/zxNgjR; MOOZ Themes / www.MOOZthemes.com

//Snippets: https://codepen.io/rsvogel/pen/zxNgjR


class Header extends Component {
    state = {
        drawerOpen: false,
        headerShow: false
    }

    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll);
    }

    handleScroll = () => {
       if(window.scrollY > 0){
            this.setState({
                headerShow: true
            })
       } else {
            this.setState({
                headerShow: false
            })
       }
    }


    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value
        })
    }


    render() {
        const {classes} = this.props
        let StyledDrawer;
        return (
            <div id="Inicio">
            <nav>
                    <ul>
                    <img src={require('./../assets/images/Logo.png')} className="logoImg"/>
                        <a href="#Inicio"><li>Inicio</li></a>
                        <a href="#Galería"><li>Galería</li></a>
                        <a href="#Portafolio"><li>Portafolio</li></a>
                        <a href="#Experiencia"><li>Experiencia</li></a>
                        <a href="#Contactanos"><li>Contactanos</li></a>
                    </ul>
                    <div class="handle">

                    <DrawerButton />

                          <div></div>
                          <div></div>
                          <div></div>
                    
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;