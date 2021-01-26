import React from "react"
import {Grid, Typography, Card, CardActionArea, CardMedia , Avatar} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    
    media: {
      height: 150,
      width: '90%',
      backgroundPosition: ' top',
    },
    
  });

export default function RepCard(props){
    const classes = useStyles();
    return(
        <Card style={{textAlign: 'left', width:'90%', margin:'0 auto'}}>
            <CardActionArea>
                <Grid container spacing={2}>
                    <Grid item xs={3} >
                        <CardMedia className={classes.media} title={props.imagetitle} image={props.image} />
                    </Grid>
                    <Grid item xs={9} style={{textAlign: 'center', justifyContent: 'center', display:'flex', flexDirection:'column'}} >
                        <Typography variant='h4'>{props.name}</Typography>
                        <Typography variant='body1'>{props.jobDescription}</Typography>
                    </Grid>
                    <Grid item xs={12} style={{textAlign: 'left'}} >
                        <Typography variant='body1' style={{padding: '10px 10px'}}>{props.message}</Typography>
                    </Grid>
                </Grid>
            </CardActionArea>

        </Card>
    )
}