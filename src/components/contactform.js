
import React from "react";
import {useForm} from "react-hook-form";
import { Button } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from "prop-types";

//used this to change the background color of the textfield
const styles = {
    root: {
      background: "white"
    },
    input: {
      color: "black"
    }
  };

  

const ContactForm = (props) =>{
    const {register} = useForm();
    const {classes} = props;
    return(
        <form method="POST" action="https://formspree.io/f/xoqprrvd"  >
            <TextField variant="filled" label="Full name" type="text" color='primary' className={classes.root} InputProps={{className: classes.input}} InputLabelProps={{className: classes.input}} FormHelperTextProps={{className: classes.input}} style={{width:'80%'}}  name="Full name" ref={register({required: true, maxLength: 80})} /><br/>
            <TextField variant="filled" label="Email" type="text" color='primary' className={classes.root} InputProps={{className: classes.input}} InputLabelProps={{className: classes.input}} FormHelperTextProps={{className: classes.input}} style={{width:'80%'}} style={{width:'80%'}}  name="_replyto" ref={register({required: true, pattern: /^\S+@\S+$/i})}/><br/>
            <TextField variant="filled" label="Enquiry message" color='primary' className={classes.root} InputProps={{className: classes.input}} InputLabelProps={{className: classes.input}} FormHelperTextProps={{className: classes.input}} style={{width:'80%'}} placeholder="Type your message here...." type="text" multiline style={{width:'80%'}}  rows={4}  name="Message" ref={register({required: true})}/><br/>
            <Button type="submit" variant="contained" style={{marginBottom: '10px',marginTop: '10px',}}>Send Message</Button> 
            <br/><br/>
        </form>
    );
}
ContactForm.propTypes={
    classes: PropTypes.object.isRequired
};


export default withStyles(styles)(ContactForm);

