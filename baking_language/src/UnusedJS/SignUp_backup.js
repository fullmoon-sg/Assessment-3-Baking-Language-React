import React, { useState } from 'react'
import { Grid, Paper, Typography, TextField } from '@material-ui/core'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import FormLabel from '@material-ui/core/FormLabel';
import axios from 'axios';

const base_url = "https://8080-de3f3226-69d2-47aa-8bc2-2faf1e0a30b5.ws-us03.gitpod.io/";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


const formStyle = {
    padding: "40px 20px",
    height: "600px",
    width: 500,
    margin: "20px auto"
}

const buttonStyle = {
    margin: '20px 0'
}

// const initialValues = {
//     firstname: '',
//     lastname: '',
//     gender: '',
//     email: '',
//     mobile_number: '',
//     address: '',
//     username: '',
//     password: '',
// }

// const classes = useStyles();




export default class SignUp extends React.Component {



    //  handleGenderChange = (event) => {
    //     setGender(event.target.value);
    // };

    state = {
        firstname: '',
        lastname: '',
        gender: '',
        email: '',
        mobile_number: '',
        address: '',
        username: '',
        password: '',
    }

    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    register = async () => {

        await axios.post(`${base_url}api/user`, {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            gender: this.state.gender,
            email: this.state.email,
            mobile_number: this.state.mobile_number,
            address: this.state.address,
            username: this.state.username,
            password: this.state.password
        })
        this.setState({
            firstname: '',
            lastname: '',
            gender: 'male',
            email: '',
            mobile_number: '',
            address: '',
            username: '',
            password: '',
        })
    }

    render() {


        // const [gender, setGender] = React.useState('');
        // const onSubmit = (values, props) => {

        //     //   alert(JSON.stringify(values),null,2)
        //     console.log(values)
        //     props.resetForm()
        // }


        return (
            <Grid>
                <Paper elevation={8} style={formStyle}>
                    <Grid align="center">
                        <Typography variant="h6">Register Here</Typography>
                        <Typography variant="caption">Fill up all the fields to create an account</Typography>
                    </Grid>
                    <TextField label="First Name" name="firstname" value={this.state.firstname} variant="standard" placeholder="Enter First Name" fullWidth required onChange={this.updateFormField} />
                    <TextField label="Last Name" name="lastname" value={this.state.lastname} variant="standard" placeholder="Enter Last Name" fullWidth required onChange={this.updateFormField} />
                    <TextField label="Email" name="email" value={this.state.email} variant="standard" placeholder="Enter Your Email" fullWidth required onChange={this.updateFormField} />
                    <TextField label="Mobile Number" name="mobile_number" value={this.state.mobile_number} variant="standard" placeholder="Enter Your Mobile Number" fullWidth required onChange={this.updateFormField} />
                    <TextField label="Address" name="address" value={this.state.address} variant="standard" placeholder="Enter Your Address" fullWidth required onChange={this.updateFormField} />
                    <TextField label="Username" name="username" value={this.state.username} variant="standard" placeholder="Create Username" fullWidth required onChange={this.updateFormField} />
                    <TextField label="Password" name="password" value={this.state.password} type="password" variant="standard" placeholder="Create Password" fullWidth required onChange={this.updateFormField} />
                    <Button type="submit" color="primary" variant="contained" style={buttonStyle} fullWidth onClick={this.register}>SIGN UP</Button>

                </Paper>
            </Grid>
        )
    }
}
