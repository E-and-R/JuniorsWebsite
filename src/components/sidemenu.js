import React from "react"
import { Link, useStaticQuery } from "gatsby"
import clsx from 'clsx'
import {Grid, Hidden,makeStyles, Typography,Drawer,ListItem, ListItemText,List } from "@material-ui/core"
import BackgroundImage from "gatsby-background-image"
import {graphql} from "gatsby"
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(() => ({
    postionMenu:{
        position: 'fixed',
        top: '30px',
        left: '30px',
        padding: '20',
        margin: '0',
        zIndex:'10'
    },
    list: {
        width: '100%',
    },
    fullList: {
        width: '100%',
    },
}));

export default function SideMenu(){
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem button href='#'  component="a" >
                    <ListItemText primary='Home'  />
                </ListItem>
                <ListItem button href='#aboutme' component="a"  >
                    <ListItemText primary='About Me' />
                </ListItem>
                <ListItem button href='#mySkills' component="a" >
                    <ListItemText primary='My Skills' />
                </ListItem>
                <ListItem button href='#myReputation' component="a" >
                    <ListItemText primary='My Reputation' />
                </ListItem>
                <ListItem button href='#hireMe' component="a" >
                    <ListItemText primary='Hire Me' />
                </ListItem>
                <ListItem button href='#contact'  component="a" >
                    <ListItemText primary='Contact' />
                </ListItem>
            </List>
        </div>
  );
    return(
        <div className={classes.postionMenu} >
        <Fab onClick={toggleDrawer('left', true)}>
            <MenuIcon/>
        </Fab>
        <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
            {list('left')}
        </Drawer>
        </div>
    )
};