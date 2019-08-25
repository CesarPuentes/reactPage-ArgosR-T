import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    color: "white",
    marginTop: 30,
    borderColor: "white",
    "&:hover": {
        backgroundColor: "black"
      },

      
  },
  input: {
    display: 'none',
  }
}));

export default function HeaderButton() {
  const classes = useStyles();
  return (
    <div>
      <Button variant="outlined" className={classes.button}>
          <Typography variant="h6">
          <a className="hdp" href="#Inicio">Inicio</a>
          </Typography>
      </Button>
      <Button variant="outlined" className={classes.button}>
        <Typography variant="h6">
        <a className="hdp" href="#Nosotros">Nosotros</a>
          </Typography>
      </Button>
      <Button variant="outlined" className={classes.button}>
      <Typography variant="h6">
      <a className="hdp" href="#Experiencia">Experiencia</a>
          </Typography>
      </Button>
      <Button variant="outlined" className={classes.button}>
      <Typography variant="h6">
      <a className="hdp" href="#Portafolio">Portafolio</a>
          </Typography>
      </Button>
      <Button variant="outlined" className={classes.button}>
      <Typography variant="h6">
      <a className="hdp" href="#Contactanos">Contactanos</a>
          </Typography>
      </Button>
    </div>
  );
}