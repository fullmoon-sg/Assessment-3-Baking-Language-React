import React from 'react'
import { Grid, Paper, Typography, TextField } from '@material-ui/core'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'

const formStyle = {
    padding: "40px 20px",
    height: "650px",
    width: 500,
    margin: "20px auto"
}

const buttonStyle = {
    margin: '20px 0'
}

const initialValues = {
    firstname: '',
    lastname: '',
    gender: '',
    email: '',
    mobile_number: '',
    address: '',
    username: '',
    password: '',
}

const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("Required"),
    lastname: Yup.string().required("Required"),
    gender: Yup.string().oneOf(["Male", "Female"], "Required").required("Required"),
    email: Yup.string().email("Enter a valid email").required("Required"),
    mobile_number: Yup.number().typeError("Enter a valid mobile number").required("Required"),
    address: Yup.string().required("Required"),
    username: Yup.string().min(3, "Need more than 3 letters").required("Reqiured"),
    password: Yup.string().min(8, "Minimum 8 characters").required("Required")
})

export default class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
        
        }
    }

    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    register = async () => {

        await axios.post(`api/user`, {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            gender: this.state.gender,
            email: this.state.email,
            mobile_number: this.state.mobile_number,
            address: this.state.address,
            username: this.state.username,
            password: this.state.password,
            
        }).then(res => { console.log(res)})
        this.setState({
        //     // firstname: '',
        //     // lastname: '',
        //     // gender: 'male',
        //     // email: '',
        //     // mobile_number: '',
        //     // address: '',
        //     // username: '',
        //     // password: '',
            redirect: true
        })

    }

    snackbarClose = () => {
        this.state({
            snackbaropen: false
        })
    }


    render() {
        if (this.state.redirect) {
           alert("Sign-in successfully. Proceed to log in now.")
            return (<Redirect to={'/login'} />)
        }

        return (
            <Grid>
                <Paper elevation={8} style={formStyle}>
                    <Grid align="center">
                        <Typography variant="h6">Register Here</Typography>
                        <Typography variant="caption">Fill up all the fields to create an account</Typography>
                    </Grid>
                    <Formik initialValues={initialValues} validationSchema={validationSchema}>
                        {(props) => (
                            <Form>
                                <Field as={TextField} label="First Name" name="firstname" value={this.state.firstname} variant="standard" placeholder="Enter First Name" error={props.errors.firstname && props.touched.firstname} helperText={<ErrorMessage name="firstname" />} fullWidth required onChange={this.updateFormField} />
                                <Field as={TextField} label="Last Name" name="lastname" value={this.state.lastname} variant="standard" placeholder="Enter Last Name" error={props.errors.lastname && props.touched.lastname} helperText={<ErrorMessage name="lasttname" />} fullWidth required onChange={this.updateFormField} />

                                <FormControl variant="standard" style={{ margin: "theme.spacing(1) minWidth: 200" }} >
                                    <InputLabel shrink>Gender</InputLabel>
                                    <Select
                                        value={this.state.gender}
                                        input={<Input name="gender" />}
                                        onChange={this.updateFormField}
                                    >
                                        <MenuItem value={"Male"}>Male</MenuItem>
                                        <MenuItem value={"Female"}>Female</MenuItem>
                                    </Select>
                                </FormControl>
                                <Field as={TextField} label="Email" name="email" value={this.state.email} variant="standard" placeholder="Enter Your Email" error={props.errors.email && props.touched.email} helperText={<ErrorMessage name="email" />} fullWidth required onChange={this.updateFormField} />
                                <Field as={TextField} label="Mobile Number" name="mobile_number" value={this.state.mobile_number} variant="standard" placeholder="Enter Your Mobile Number" error={props.errors.mobile_number && props.touched.mobile_number} helperText={<ErrorMessage name="mobile_number" />} fullWidth required onChange={this.updateFormField} />
                                <Field as={TextField} label="Address" name="address" value={this.state.address} variant="standard" placeholder="Enter Your Address" error={props.errors.address && props.touched.address} helperText={<ErrorMessage name="address" />} fullWidth required onChange={this.updateFormField} />
                                <Field as={TextField} label="Username" name="username" value={this.state.username} variant="standard" placeholder="Create Username" error={props.errors.username && props.touched.username} helperText={<ErrorMessage name="username" />} fullWidth required onChange={this.updateFormField} />
                                <Field as={TextField} label="Password" name="password" value={this.state.password} type="password" variant="standard" placeholder="Create Password" error={props.errors.password && props.touched.password} helperText={<ErrorMessage name="password" />} fullWidth required onChange={this.updateFormField} />
                                <Button type="submit" color="primary" variant="contained" style={buttonStyle} fullWidth onClick={this.register}>SIGN UP</Button>
                            </Form>
                        )}
                    </Formik>
                </Paper>
            </Grid>
        )
    }
}
