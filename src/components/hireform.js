
import React from "react";
import {useForm} from "react-hook-form";
import { Button,FormControl, FormLabel, Radio, RadioGroup, FormControlLabel  } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from "prop-types";
import Theme from "../components/Theme"
import { ThemeProvider } from '@material-ui/styles';
//used this to change the background color of the textfield
const styles = {
    root: {
      background: "white"
    },
    input: {
      color: "black"
    }
  };

  

const HireForm = (props) =>{
    const {register} = useForm();
    const [value, setValue] = React.useState('Blog / Personal Website');
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const {classes} = props;
    
    return(
        <ThemeProvider theme={Theme}>
            <form method="POST" action="https://formspree.io/f/xoqprrvd" >
                <TextField variant="filled" label="Full name" type="text" color='primary' className={classes.root} InputProps={{className: classes.input}} InputLabelProps={{className: classes.input}} FormHelperTextProps={{className: classes.input}} style={{width:'80%'}}  name="Full name" ref={register({required: true, maxLength: 80})} /><br/>
                <TextField variant="filled" label="Email" type="text" color='primary' className={classes.root} InputProps={{className: classes.input}} InputLabelProps={{className: classes.input}} FormHelperTextProps={{className: classes.input}} style={{width:'80%'}} style={{width:'80%'}}  name="_replyto" ref={register({required: true, pattern: /^\S+@\S+$/i})}/><br/>
                <FormControl component='fieldset' >
                    <FormLabel component='legend' style={{color:'white'}} focused >Please Choose Your Project Type</FormLabel>
                    <RadioGroup aria-label= "project Type" name="projectType" value={value} onChange={handleChange}>
                        <FormControlLabel style={{color:'white'}} value="E-commerce Site" control={<Radio color='primary' />} label="E-commerce Site" />
                        <FormControlLabel style={{color:'white'}} value="Blog / Personal Website" control={<Radio color='primary' />} label="Blog / Personal Website" />
                        <FormControlLabel style={{color:'white'}} value="Business Website" control={<Radio color='primary'/>} label="Business Website" />
                        <FormControlLabel style={{color:'white'}} value="Mobile Application" control={<Radio color='primary' />} label="Mobile Application" />
                        <FormControlLabel style={{color:'white'}} value="Desktop Application" control={<Radio color='primary' />} label="Desktop Application" />
                    </RadioGroup>
                </FormControl>
                <TextField variant="filled" label="Project details" color='primary' className={classes.root} InputProps={{className: classes.input}} InputLabelProps={{className: classes.input}} FormHelperTextProps={{className: classes.input}} style={{width:'80%'}} placeholder="Type your projeect details here...." type="text" multiline style={{width:'80%'}}  rows={4}  name="Message" ref={register({required: true})}/><br/>
                <Button type="submit" variant="contained" style={{marginBottom: '10px',marginTop: '10px',}}>Send Message</Button> 
                <br/><br/>
            </form>
        </ThemeProvider>
    );
}
HireForm.propTypes={
    classes: PropTypes.object.isRequired
};


export default withStyles(styles)(HireForm);

