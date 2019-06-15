import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { purple } from '@material-ui/core/colors';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Typography from '@material-ui/core/Typography';

import Link from '@material-ui/core/Link';

import './../assets/navbar.css';

/* test link */

const useStylesLink = makeStyles(theme => ({
  link: {
    margin: theme.spacing(1),
  },
}));

/*TypoStyles */
const useTypoStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

/* Toggle icon properties */

const ColorButton = withStyles(theme => ({
    root: {
      color: theme.palette.getContrastText(purple[500]),
      fontSize: 40,
    },
  }))(Button);

/* Toggle bar properties */
const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    paper:{
      background: "#073277",
      color: "white",
      fontSize: "60px",
      align: "center"
    }
  });
  
  export default function DrawerButton() {
    const classesLink = useStylesLink();
    const classes = useStyles();
    const typoClass = useTypoStyles();
    

    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });
  
    const toggleDrawer = (side, open) => event => {
      if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [side]: open });
    };
  
  
    const fullList = side => (
      <div
        className={classes.fullList}
        role="presentation"
        onClick={toggleDrawer(side, false)}
        onKeyDown={toggleDrawer(side, false)}
      >
        <List >
          {['Inicio', 'Galería', 'Portafolio', 'Experiencia', 'Contactanos'].map((text, index) => (
            <ListItem button key={text} color="inherit">
              <ListItemIcon >{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <Link href={"#" + text} color="inherit">

                 <ListItemText disableTypography primary={<Typography variant="h3" gutterBottom style={{ color: '#FFFFFF' }}>{text}</Typography>}/>

              </Link>
            </ListItem>
          ))}
        </List>
      </div>
    );
  
    return (
      <div>
        <ColorButton onClick={toggleDrawer('top', true)} >Menu
        <IconButton
                        aria-label="Menu"
                        color="primary"
                        onClick={()=> this.toggleDrawer(true)}
                        className="svg_icons"
                    >
                        
                       <MenuIcon/>
                    </IconButton> 
                    </ColorButton>
         <SwipeableDrawer
          classes={{ paper: classes.paper }}
          anchor="top"
          open={state.top}
          onClose={toggleDrawer('top', false)}
          onOpen={toggleDrawer('top', true)}
        >
          {fullList('top')}
        </SwipeableDrawer>
  
      </div>
    );
  }