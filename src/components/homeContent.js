import React from "react"
import {Grid, Hidden,makeStyles, Typography, Link } from "@material-ui/core"
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Lottie from 'lottie-react-web';
import aboutme from '../animations/aboutme.json'
import contact from '../animations/contactComp.json'
import hire from '../animations/hireComp.json'
import skills from '../animations/mySkillsComp.json'
import reputation from '../animations/reputation.json'
import RepCard from '../components/repcard'
import best from '../images/best.jpeg'
import sebopa from '../images/sebopa.jpeg'
import ContactForm from '../components/contactform'
import HireForm from '../components/hireform'
import SkillBars from '../components/skillBar'

const useStyles = makeStyles(() => ({
    darkgridbackground:{
       backgroundColor: 'black'
    },
    lightgridbackground:{
        backgroundColor: 'white'
     },
}));

const SKILLS = [
    {
      "type": "Java",
      "level": 90
    },
    {
      "type": "Python",
      "level": 90
    },
    {
      "type": "React",
      "level": 83
    },
    {
      "type": "C#",
      "level": 83
    },
    {
      "type": "AdobeXD",
      "level": 80
    },
    {
      "type": "Figma",
      "level": 80
    },
    {
      "type": "MySQL",
      "level": 75
    },
    {
        "type": "Firebase",
        "level": 75
    },
    {
        "type": "Wordpress",
        "level": 70
    },
    {
        "type": "Strapi",
        "level": 70
    },
    {
        "type": "Contentful",
        "level": 70
    },
  ];

export default function HomeContent(){
    const classes = useStyles();
    return(
        <Grid container spacing={0}>
            <Grid item xs={12} md={12} id='aboutme' style={{textAlign: 'center', justifyContent: 'center',  display:'flex'}}>
                <Hidden smDown>
                    <Grid item xs={12} md={4} className={classes.darkgridbackground} >
                        <Lottie options={{loop: false,autoplay: true,animationData: aboutme,renderer: 'svg'}} />
                    </Grid>
                </Hidden>
                <Grid item xs={12} md={8} className={classes.lightgridbackground}>
                    <Hidden smUp>
                        <Typography variant='h3'> About</Typography>
                    </Hidden>
                    <br/><br/>
                    <Typography variant='h4'>Vhulenda moses-junior moraba, known as Junior moraba.</Typography>
                    <Typography variant='h5'><u>Personally</u></Typography>
                    <Typography variant='body1' style={{textAlign: 'left',padding:"0 10px"}}>I am a born again child of God. Born and raised in Limpopo. I am fluent in Tshivenda which is my Homelanguage and English,
                        I do however speak/hear street Setswana/Sepedi. I am huge Football fan and spend majority time of my weekends watching it, unfortunately I 
                        support Arsenal and kaizer chiefs. Other activities I enjoy include building applications, playing FIFA ,reverse engineering applications, surprisingly
                        BAKING ... <s>can't think of anymore</s>
                    </Typography>
                    <br/><br/>
                    <Typography variant='h5'><u>Academically</u></Typography>
                    <Typography variant='body1' style={{textAlign: 'left',padding:"0 10px"}}>I hold Bachelor of commerce speciliasing in Computer Science and Information Systems from the university of cape town. Currently registered
                        for a Bachelor of science honours in Computer Science from the same university. During my undergraduate years I was fortunate to tutor 3 courses, INF1003F (commercial programming)
                        , INF2011 (Systems Design and Development) and CSC2001F (Data structures and Databases). I also availed myself to mentor first year computer science students inorder to help them
                        find the transition from highschool to university bearable. 
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} id='mySkills' style={{textAlign: 'center', justifyContent: 'center',  display:'flex'}}>                
                <Hidden smDown>
                    <Grid item md={4} className={classes.lightgridbackground}>
                        <Lottie options={{loop: false,autoplay: true,animationData: skills,renderer: 'svg'}} />
                    </Grid>
                </Hidden>
                <Grid item xs={12} md={8} className={classes.darkgridbackground} >
                    <Hidden smUp>
                        <Typography variant='h3' style={{color:'white'}}> My Skills</Typography>
                    </Hidden>
                    <br/><br/>
                    <Grid item xs={11} md={10} style={{margin:'0 auto'}}>
                        <SkillBars skills={SKILLS} />,
                    </Grid>
                    
                </Grid>
            </Grid>
            <Grid item xs={12} id='myReputation' style={{textAlign: 'center', justifyContent: 'center',  display:'flex'}}>
                <Hidden smDown>
                    <Grid item md={4} className={classes.darkgridbackground}>
                        <Lottie options={{loop: false,autoplay: true,animationData: reputation,renderer: 'svg'}} /> 
                    </Grid>
                </Hidden>
                <Grid item xs={12} md={8}>
                    <Hidden smUp>
                        <Typography variant='h3'>Reputation</Typography>
                    </Hidden>
                    <br/><br/>
                    <RepCard title={'Best'} image={best} name={'Best Khosa'} jobDescription={"Mentor, Engineer Eskom"} 
                        message={"Junior Moraba is an efficient hard-working young man whom I have a privilege to do life with. My first impression when I met Junior, was that of a man who carries his duties quietly but efficiently. Although he is much younger than me and considers me as his mentor, I can say with no shadow of doubt that he  challenges me to grow both professionally and personally. This speaks a lot about his intentional investment in growing holistically as an individual.\nAs an aspiring computer scientist, he has always shown a strong desire to find more ways of doing things efficiently. In the world of so many things to do in a little time, perhaps this is one of the most important skills that is essential for survival.\nHold on, there is still more. His love for life-long learning especially for aspects/subjects that are not necessarily in the computer science field is what often makes me look forward to the near future to see how unique and excellent this computer scientist will be. It is of no doubt that the world is headed towards multi-field approach of solving the challenges we have. Outstanding personnel in their respective fields will need a bit of the knowledge of everything. Junior Moraba has been intentionally setting himself up for that beyond his university degree curriculum, perhaps without even noticing.\nDid I mention that his great interpersonal skills is treasure to be treasured? I have confidence that whoever he chooses to work with or for in the near future will benefit from greatly this skill of his."}  />
                    <br/><br/>
                    <RepCard title={'Sebopa'} image={sebopa} name={'Tlou Sebopa'} jobDescription={"Author, Pastor, Senior Occuptional Therapist"} 
                        message={"Junior Moraba is a very focused & persistent young man. Delligence describes him accurately. He is a man of few words, but his excellence speaks volume. I once challenged him to create an App for our church, I gave him specifications. He accepted the challenge although he was not yet taught to that level. He went all out to make sure the project is done. Sophisticated as it was, he still managed his Academic work very well. His future is inarguably bright."}/>
                    <br/><br/>
                </Grid>
            </Grid>
            <Grid item xs={12} id='hireMe' style={{textAlign: 'center', justifyContent: 'center',  display:'flex'}}>
                <Hidden smDown>
                    <Grid item md={4} className={classes.lightgridbackground}>
                        <Lottie options={{loop: false,autoplay: true,animationData: hire,renderer: 'svg'}} /> 
                    </Grid>
                </Hidden>
                <Grid item xs={12} md={8} className={classes.darkgridbackground}>
                    <Hidden smUp>
                        <Typography variant='h3' style={{color:'white'}}>Hire</Typography>
                    </Hidden>
                    <br/><br/>
                    <HireForm/>
                </Grid> 
            </Grid>
            <Grid item xs={12} id='contact' style={{textAlign: 'center', justifyContent: 'center',  display:'flex'}} id="contact">
                <Hidden smDown>
                    <Grid item md={4} className={classes.darkgridbackground}>
                        <Lottie options={{loop: false,autoplay: true,animationData: contact,renderer: 'svg'}} /> 
                    </Grid>
                </Hidden>
                <Grid item xs={12} md={8} >
                    <Hidden smUp>
                        <Typography variant='h3'>Contact</Typography>
                    </Hidden>
                    <br/><br/>
                    <Grid item xs={12} style={{textAlign: 'center', justifyContent: 'center',  display:'flex'}}>
                        <LocationOnIcon style={{ fontSize: 50 }}/><Typography variant='h5' > Cape Town, SA</Typography>
                    </Grid>
                    <br/><br/>
                    <Grid item xs={12} style={{textAlign: 'center', justifyContent: 'center',  display:'flex', }}>
                        <PhoneIcon style={{ fontSize: 50 }}/> <Typography variant='h5' >+27794935197</Typography>
                    </Grid>
                    <br/><br/>
                    <Grid item xs={12} style={{textAlign: 'center', justifyContent: 'center',  display:'flex'}}>
                        <Link href="mailto:morabav@gmail.com.com?Subject=Client Query"  color="inherit"><EmailIcon  style={{ fontSize: 50 }}/></Link><Typography  variant='h5' >morabav@gmail.com</Typography>
                    </Grid>
                    <br/><br/>
                    
                    <Link href="https://www.linkedin.com/in/vhulenda-junior-moraba-505088118/" color="inherit"><LinkedInIcon style={{ fontSize: 50, marginRight:'20px' }}/></Link><Link href="https://github.com/Junior-moraba" color="inherit"><GitHubIcon style={{ fontSize: 50 ,marginLeft:'20px' }}/></Link> 
                    <br/><br/>
                    <Typography variant='h5' >Let's get in touch. Send me a message</Typography>
                    <ContactForm/>
                </Grid>
            </Grid>
        </Grid>
    )
}