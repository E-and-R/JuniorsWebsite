
import React from "react";
import { Button,Typography, Grid} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useStyles = makeStyles(() =>({
    footerprops:{
        backgroundColor: 'black',
        textAlign:'center',
        color: 'white'
    }
}));

export default function Footer(){
    const classes = useStyles();
    return(
        <Grid container spacing={2} className={classes.footerprops} >
            <Grid item xs={12}>
                <Button variant="contained"  href="#" startIcon={<KeyboardArrowUpIcon/>}>To The Top</Button>
            </Grid>
            <Grid item xs={12}>
                <Typography variant='body1'>
                    May the Lord bless you
                    <br/>and keep you
                    <br/>make His face shine upon you
                    <br/>be gracious to you
                    <br/>turn His face toward you
                    <br/>and give you peace
                    <br/>AMEN
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant='caption'>
                    Copyright 2021 Juniormoraba.co.za
                </Typography>
            </Grid>
        </Grid>
    )
};