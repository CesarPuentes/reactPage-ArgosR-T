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

import './container.css'

import Poligrafo from './../../../assets/images/polygraph.jpg'






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
      
      <Button className={buttonletterclass.root} onClick={handleClickOpen('paper')}>Poligrafía profesional</Button>
      <Dialog
        fullScreen = "true"
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
      >
        <DialogTitle id="scroll-dialog-title" align="center"><div className="ButtonTitle">Poligrafía profesional</div></DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText >
            <Typography variant="h4" >
            El detector de mentiras, máquina de la verdad o polígrafo es un tipo particular de instrumento de
            medición utilizado para el registro de respuestas fisiológicas. Generalmente registra las variaciones de la 
            presión arterial, el ritmo cardíaco, la frecuencia respiratoria, estímulos nerviosos y la respuesta galvánica
            o conductancia de la piel, que se generan ante determinadas preguntas que se realizan al sujeto sometido a la prueba.

            <br/><br/>

            Ofrecemos el servicio de poligrafía profesional como parte de nuestro portafolio 
            tanto de selección de candidatos, como también preventivo e investigativo.
             Nuestro servicio como valor agregado ofrece una entrevista a profundidad 
             del candidato y sus motivaciones para laborar.

            </Typography>
            <br/>
            <br/><br/>

            <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://conceptodefinicion.de/wp-content/uploads/2014/12/MW-BO753_risk_MG_20131107083953.jpg"
          title="Riesgo"
        />

        <CardContent>
          <img className="ImageContainerCards" src={Poligrafo}></img>
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