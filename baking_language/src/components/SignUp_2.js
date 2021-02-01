import React from 'react'
import { Grid, Paper, Typography, TextField } from '@material-ui/core'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import FormLabel from '@material-ui/core/FormLabel';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';

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
    margin: '10px 0'
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

export default function SignUp() {

    const classes = useStyles();
    const [gender, setGender] = React.useState('');

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const validationSchema = Yup.object().shape({
        firstname: Yup.string().required("Required"),
        lastname: Yup.string().required("Required"),
        email: Yup.string().email("Enter a valid email").required("Required"),
        mobile_number: Yup.number().typeError("Enter a valid mobile number").required("Required"),
        address: Yup.string().required("Required"),
        username: Yup.string().min(3, "Need more than 3 letters").required("Reqiured"),
        password: Yup.string().min(8, "Minimum 8 characters").required("Required")
    })

    const onSubmit = (values, props) => {

        //   alert(JSON.stringify(values),null,2)
        console.log(values)
        props.resetForm()
    }


    return (
        <Grid>
            <Paper elevation={8} style={formStyle}>
                <Grid align="center">
                    <Typography variant="h6">Register Here</Typography>
                    <Typography variant="caption">Fill up all the fields to create an account</Typography>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
                    {(props) => (
                        <Form>
                            <Field as={TextField} label="First Name" name="firstname" variant="standard" placeholder="Enter First Name" error={props.errors.firstname && props.touched.firstname} helperText={<ErrorMessage name="firstname" />} fullWidth required />
                            <Field as={TextField} label="Last Name" name="lastname" variant="standard" placeholder="Enter Last Name" error={props.errors.lastname && props.touched.lastname} helperText={<ErrorMessage name="lasttname" />} fullWidth required />

                            <FormControl className={classes.formControl}>
                                <InputLabel>Gender</InputLabel>
                                <Select
                                    value={gender}
                                    input={<Input name="gender" />}
                                    onChange={handleGenderChange}
                                >
                                    <MenuItem value={"male"}>Male</MenuItem>
                                    <MenuItem value={"female"}>Female</MenuItem>
                                </Select>
                            </FormControl>
                            <Field as={TextField} label="Email" name="email" variant="standard" placeholder="Enter Your Email" error={props.errors.email && props.touched.email} helperText={<ErrorMessage name="email" />} fullWidth required />
                            <Field as={TextField} label="Mobile Number" name="mobile_number" variant="standard" placeholder="Enter Your Mobile Number" error={props.errors.mobile_number && props.touched.mobile_number} helperText={<ErrorMessage name="mobile_number" />} fullWidth required />
                            <Field as={TextField} label="Address" name="address" variant="standard" placeholder="Enter Your Address" error={props.errors.address && props.touched.address} helperText={<ErrorMessage name="address" />} fullWidth required />
                            <Field as={TextField} label="Username" name="username" variant="standard" placeholder="Create Username" error={props.errors.username && props.touched.username} helperText={<ErrorMessage name="username" />} fullWidth required />
                            <Field as={TextField} label="Password" name="password" type="password" variant="standard" placeholder="Create Password" error={props.errors.password && props.touched.password} helperText={<ErrorMessage name="password" />} fullWidth required />
                            <Button type="submit" color="primary" variant="contained" style={buttonStyle} fullWidth>SIGN UP</Button>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    )
}
