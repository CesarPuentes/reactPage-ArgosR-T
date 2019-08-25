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

  //handle window opening

  const handleClickOpen = scrollType => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  //handle window closing
  function handleClose() {
    setOpen(false);
  }

  //Responsivness to change in browser size

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

  //Close button settings

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
      
      <Button className={buttonletterclass.root} onClick={handleClickOpen('paper')}>Detección y gestión el riesgo</Button>
      <Dialog
        fullScreen = "true"
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
      >
        <DialogTitle id="scroll-dialog-title" align="center"><div className="ButtonTitle">Detección y gestión el riesgo</div></DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText >
            <Typography variant="h4" >
            La evaluación y detección del riesgo tienen como finalidad identificar como se
            pueden dar casos de fraude o corrupción dentro de una organización y quienes podrían
            realizar estos ataques. <br/><br/> 
            
            Un adversario puede explotar deficiencias en los sistemas de
            control y eludirlos para obtener un beneficio financiero al cometer el hecho de fraude
            para luego finalmente ocultar el mismo. Estos adversarios pueden ser un individuo o grupo
            de estos que posiblemente tengan algún contrato o vinculo previo con la empresa como
            también puede tratarse de agentes externos e inclusive una mezcla entre ambos.
            
            <br/><br/> 

            Los casos de fraude toman en promedio de 6 a 24 meses para ser descubiertos que es por
            lo general el tiempo que le toma al adversario llevar a cabo su ataque, por lo que las
            empresas deben centrar sus esfuerzos en la prevención y disuasión de este delito
            aplicando controles internos y revisiones periódicas de forma optimizada para evitar
            las pérdidas que puedan afectar fuertemente a la empresa. Para llevar a cabo estos
            esfuerzos se pueden utilizar métodos como: Denuncias, controles internos,
            notificaciones de organismos reguladores, poligrafía y alertas con sistemas
            computarizados.
            </Typography>
            <br/>
            <Typography variant="h7">
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