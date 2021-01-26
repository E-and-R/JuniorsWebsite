import React from "react"
import { Link, useStaticQuery } from "gatsby"
import {Grid, Hidden,makeStyles, Typography } from "@material-ui/core"
import BackgroundImage from "gatsby-background-image"
import {graphql} from "gatsby"
import Lottie from 'lottie-react-web';
import welcomeLottie from '../animations/finalDraft.json'
import BottomNav from '../components/bottomNav'
import { AspectRatio } from "@material-ui/icons"

const useStyles = makeStyles(() => ({
    masthead:{
        width: '100%',
        height: '95vh',
        backgroundSize: 'cover',
        backgroundPosition: ' top',
        backgroundRepeat: 'no-repeat',
    },
    blackOverlayLottie:{
        display: '-webkit-flex', //safari
        display: 'flex',
        backgroundColor: 'rgba(0,0,0,0.5',
        height: '100%',
        alignItems: 'center',
        color: 'white',
        justifyContent: 'flex-start'
    },
    blackOverlaytext:{
        display: 'flex',
        backgroundColor: 'rgba(0,0,0,0.5',
        height: '100%',
        alignItems: 'center',
        color: 'white',
        bottom:'-20px'
    },
    contentBox:{
        margin: '0 auto',
        maxWidth: '700px',
        
    },

}));


export default function Banner (){
    const classes = useStyles();
    const defaultOptions={
        loop: false,
        autoplay: true,
        animationData: welcomeLottie,
        renderer: 'svg',
    };
    const data = useStaticQuery(
        graphql`
            query{
                seriousImage: file(relativePath: {eq: "serious1.jpg"}){
                    childImageSharp{
                        fluid(maxWidth: 900){
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                largeScreen: file(relativePath: {eq: "serious2.jpg"}){
                    childImageSharp{
                        fluid(maxWidth: 1200 quality: 100){
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `
    )
    
    return (
        <Grid container>
            <Hidden xsDown>
                <Grid item xs={12} >
                    <BackgroundImage fluid={data.largeScreen.childImageSharp.fluid} className={classes.masthead} >
                            <div className={classes.blackOverlayLottie}>
                                <div className={classes.contentBox}>
                                    <Lottie  options={defaultOptions} />
                                </div>
                            </div>
                            <div className={classes.blackOverlaytext}>                                
                               
                            </div>
                            
                    </BackgroundImage>
                </Grid>
            </Hidden>

            <Hidden smUp>
                <Grid item xs={12}>
                    <BackgroundImage fluid={data.seriousImage.childImageSharp.fluid} className={classes.masthead}>
                        <div>
                            <Typography variant='h3' style={{position:'absolute',left:'50%',bottom:0,transform:'translate(-50%,0%)',msTransform:'translate(-50%,0%)',textAlign:'center',color:'white'}}>Hey I"m<br/>Junior Moraba</Typography>
                            
                        </div>
                    </BackgroundImage>
                </Grid>
            </Hidden>
            
        </Grid>
    )
}