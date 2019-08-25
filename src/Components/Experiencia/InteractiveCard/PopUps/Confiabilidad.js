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

import Confiabilidad from './../../../assets/images/checklist.jpg'


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
      
      <Button className={buttonletterclass.root} onClick={handleClickOpen('paper')}>Aseguramiento confiabilidad</Button>
      <Dialog
        fullScreen = "true"
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
      >
        <DialogTitle id="scroll-dialog-title" align="center"><div className="ButtonTitle">Aseguramiento de la confiabilidad</div></DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText >
            <Typography variant="h4" >
            La honestidad es clave en cualquier proceso de selección, sin embargo, a menudo las personas mienten en el proceso por motivos muy diversos. <br/><br/>
             Por ello siempre se debe verificar la información suministrada en la hoja de vida o durante las entrevistas será estudiada y, en ocasiones, verificada directamente por la empresa que desea contratarlo o por un tercero experto en la materia.<br/><br/>
             Rosalba Montoya Pereira, Directora para el Área Andina de ManpowerGroup Sudamérica, recomienda ser sincero en cualquier momento, porque tanto las compañías grandes como las medianas, 
             cada vez utilizan más análisis especializados para impedir fraudes corporativos y cuidar el buen nombre de la organización. <br/><br/>
             A este proceso se le conoce como estudio de seguridad, "un sistema de evaluación e investigación que contiene verificación de antecedentes: <br/><br/>
            {/*}https://www.elempleo.com/co/noticias/consejos-profesionales/estudios-de-seguridad-en-pro-de-la-verdad-4193*/}
            </Typography>
            <br/>
            <Typography variant="h4">
              
              - Laborales<br/><br/>
              - Financieros<br/><br/>
              - Académicos<br/><br/>
              - Judiciales<br/><br/>
              - De entorno familiar<br/><br/>
              - Referencias personales<br/><br/>

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
          <img className="ImageContainerCards" src={Confiabilidad}></img>
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