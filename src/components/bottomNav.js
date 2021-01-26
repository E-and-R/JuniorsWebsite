
import React from "react";
import { Button,Typography, Grid} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>({
    buttoncoloring:{
        "&:hover":{
            backgroundColor: '#000000',
            color:'#fff',
        }
    }
}));

export default function BottomNav(){
    const classes = useStyles();
    return (
        <Grid container spacing={2}>
            <Grid item md={6}  style={{textAlign: 'center', justifyContent: 'center', width:'auto' ,display:'flex' ,margin:'-10px auto 20px'}}>
                    <Button  className={classes.buttoncoloring} variant="contained" href="#">Home</Button>
                    <Button  className={classes.buttoncoloring} variant="contained" href="#aboutme">About</Button>
                    <Button  className={classes.buttoncoloring} variant="contained" href="#mySkills">Skills</Button>
                    <Button  className={classes.buttoncoloring} variant="contained" href="#myReputation">Reputation</Button>
                    <Button  className={classes.buttoncoloring} variant="contained" href="#hireMe">Hire</Button>
                    <Button  className={classes.buttoncoloring} variant="contained" href="#contact">Contact</Button>
            </Grid>
        </Grid>
    )
};
