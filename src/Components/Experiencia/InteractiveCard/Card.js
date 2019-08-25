import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import WarningIcon from '@material-ui/icons/Warning'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import HowToRegIcon from '@material-ui/icons/HowToReg'
import SearchIcon from '@material-ui/icons/Search'
import FingerprintIcon from '@material-ui/icons/Fingerprint'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'

/////////////////

import DeteccionRiesgo from './PopUps/DeteccionRiesgo'
import Seleccion from './PopUps/Seleccion'
import Confiabilidad from './PopUps/Confiabilidad'
import Fraude from './PopUps/Fraude'
import Empresarial from './PopUps/Empresarial'
import Poligrafia from './PopUps/Poligrafia'

import './Cards.css'


const iconSizes = makeStyles({
    root:{
      height: "50px",
      width: "50px"
    }
})


const useStyles = makeStyles({
  card: {
    minHeight: "100%",
    width: "100%",
    position:"relative",
    borderStyle: "solid",
    borderColor: "#0e49a5",
    border: "4px",
    borderRadius: "20px 20px 20px 20px",
    marginBottom: "2vw",

    ['@media (min-width: 1025px) and (max-width: 1280px)']: { 
      width: '100%',    
      
    },
    ['@media (min-width: 768px) and (max-width: 1024px) ']: { 
      width: '100%',
    },
    ['@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape)']: {
      width: '100%', 
    },
    ['@media (min-width: 481px) and (max-width: 767px)']: {
      width: '100%',
    },
    ['@media (min-width: 320px) and (max-width: 480px)']: {
      width: '100%',   
        
    },

  },

  cardactioncss: {
    marginLeft: -20,
  },

  title: {
    fontSize: 20,
  },
  
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const iconClasses = iconSizes();


  return (
    <div id="Portafolio">
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h2" align="center">
          Nuestro portafolio
        </Typography>
        <Typography variant="h4" className={classes.pos} color="textSecondary" align="center">
          <br/>
          Haz clic en cada opción para leer más!
        </Typography>
      </CardContent>
      <div className="botonesRikos">
      <CardActions className={classes.cardactioncss}>
      <WarningIcon className={iconClasses.root}/>
           <DeteccionRiesgo/>
      </CardActions>
      <CardActions className={classes.cardactioncss}>
    <PermIdentityIcon className={iconClasses.root}/>
              <Seleccion/>
      </CardActions>
      <CardActions className={classes.cardactioncss}>
        <HowToRegIcon className={iconClasses.root}/>
              <Confiabilidad/>
      </CardActions>
      <CardActions className={classes.cardactioncss}>
      <AttachMoneyIcon className={iconClasses.root}/>
              <Fraude/>
        </CardActions>
      <CardActions className={classes.cardactioncss}>
        <SearchIcon className={iconClasses.root}/>
              <Empresarial/>
      </CardActions>
      <CardActions className={classes.cardactioncss}>
        <FingerprintIcon className={iconClasses.root}/>
                <Poligrafia	/>
      </CardActions>
      </div>
      <Typography variant="h4" className={classes.pos} align="center">
          <br/>
        </Typography>
    </Card>
    </div>
  );
}