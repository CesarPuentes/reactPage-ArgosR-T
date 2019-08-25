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

import HumanRes from './../../../assets/images/humanres.jpg'
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
      
      <Button className={buttonletterclass.root} onClick={handleClickOpen('paper')}>Selección de RRHH confiables</Button>
      <Dialog
        fullScreen = "true"
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
      >
        <DialogTitle id="scroll-dialog-title" align="center"><div className="ButtonTitle">Selección de RRHH confiables</div></DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText >
            <Typography variant="h4" >
            La selección de personal es un proceso crítico para las empresas ya que con este se 
            buscan los mejores candidatos posibles para cubrir uno o varios puestos de trabajo.
            Sin embargo, no siempre una persona con el mejor perfil para un puesto es la más
            confiable para el mismo, por lo que es necesario tener esto en cuenta dentro del 
            proceso de selección.<br/><br/>


            Las estadísticas nos dicen que un empleado tiene mayor probabilidad de robarle 
            a su empleador que un no-empleado y a menudo pueden participar en fraudes como: 
            hurtos, malversación de fondos, robo y venta de datos y robo de la propiedad 
            intelectual.<br/><br/>

            Nosotros ofrecemos un proceso el cual busca verificar la confiabilidad de un potencial
            candidato y por tanto disminuir enormemente la probabilidad de que estos siniestros 
            ocurran en su empresa. Este proceso incluye visita domiciliaria y prueba de poligrafía.

            </Typography>
            {/*https://tareasuniversitarias.com/los-criterios-de-validez-y-confiabilidad-en-el-proceso-de-seleccion-de-personal.html*/}
            <br/>

            <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://conceptodefinicion.de/wp-content/uploads/2014/12/MW-BO753_risk_MG_20131107083953.jpg"
          title="Riesgo"
        />

        <CardContent>
          <img className="ImageContainerCards" src={HumanRes}></img>
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