import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

import Fraude from './../../../assets/images/Fraud.jpg'

import './container.css'

export default function DeteccionRiesgo() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = scrollType => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  function handleClose() {
    setOpen(false);
  }

  const ButtonLetterStyles = makeStyles({
    root: {
      fontSize: "1vw",
      ['@media (min-width: 768px) and (max-width: 1024px) ']: { 
        fontSize: "4vw",
      },
      ['@media (min-width: 481px) and (max-width: 767px)']: {
        fontSize: "4vw",
      },
      "&:hover": {
        backgroundColor: "#032356"
      },
      //normal settings
      fontSize: "1vw",
      borderColor: "blue",
      borderStyle: "solid",
      borderWidth: "5px",
      width: "750px"

    },
    
    test: {
      height: 180,
    },
  });

  const useStyles = makeStyles({
    root: {
      fontSize: 20,
    },
  });

  const closeButton = makeStyles({
    root: {
      fontSize: 40,
      backgroundColor: "gold",
      width: 1000,
      marginRight: "auto",
      marginLeft: "auto",
    },
  });

  const classes = useStyles();
  const buttonletterclass = ButtonLetterStyles()
  const closeWin = closeButton()

  return (
    <div>
      
      <Button className={buttonletterclass.root} onClick={handleClickOpen('paper')}>Fraude empresarial</Button>
      <Dialog
        fullScreen = "true"
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
      >
        <DialogTitle id="scroll-dialog-title" align="center"><div className="ButtonTitle">Soluciones al fraude empresarial</div></DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText >
            <Typography variant="h4" >
            
            Colombia  lamentablemente es el tercer país de Latinoamérica con mayor tasa de fraude
            empresarial. Todas las organizaciones, sin importar su tamaño, tienen riesgos de fraude
            diferentes según su actividad, siendo los fraudes mas frecuentes corrupción, 
            manipulación de cheques, la manipulación de la nómina y el cibercrimen aquellas
            actividades delictivas más frecuentes. <br/><br/>

            Ofrecemos soluciones relacionadas con la investigación del fraude en caso de que
            este haya llegado a ocurrir con el fin de identificar los elementos maliciosos dentro 
            de su empresa para que sea posible su remoción. También ofrecemos soluciones para
            evitar que estas situaciones se vuelvan a dar, tapando cualquier posible hueco que
            haya sido usado o pueda ser usado por un atacante.
            
            </Typography>

            <br/><br/>

            <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://conceptodefinicion.de/wp-content/uploads/2014/12/MW-BO753_risk_MG_20131107083953.jpg"
          title="Riesgo"
        />
        <CardContent>
           <img className="ImageContainerCards" src={Fraude}></img>
        </CardContent>
      </CardActionArea>
    </Card>

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className={closeWin.root} onClick={handleClose} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}