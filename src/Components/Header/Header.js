import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

import DrawerButton from './DrawerButton';

import './../assets/navbar.css';

import HeaderButton from './HeaderButton'


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
                    <HeaderButton/>
                    </ul>
                    <div class="handle">

                    <DrawerButton />

                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;