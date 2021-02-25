import React from 'react'
import { Grid, Paper, TextField, Typography, Link } from '@material-ui/core'
import LockIcon from '@material-ui/icons/Lock';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

const formStyle = {
    padding: 20,
    height: '600px',
    width: 400,
    margin: "20px auto"
}

const avatarStyle = { backgroundColor: "#9cdcea" }

const buttonStyle = {
    margin: '10px 0'
}

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            redirect: false
        }
        this.signIn.bind(this)
        this.updateFormField = this.updateFormField.bind(this)
    }

    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    signIn = async () => {
        let loginData = {
            username: this.state.username,
            password: this.state.password
        }
        if (this.state.username && this.state.password) {
            await axios.post(`api/user/login`, loginData).then(res => {
                const token = res.data.token;
                localStorage.setItem('adonisToken', token);
                this.props.setToken(token);
                this.setState({
                    redirect: true
                });
                this.props.confirmLogin()
            })
        } 
        ;
        if(!this.state.username || !this.state.password){
            alert("Login Error, please try again.")
        }

    }

    render() {

        if (this.state.redirect) {
            alert ("Successfully Sign-In")
            return (<Redirect to={'/'} />)
        }

        return (
            <Grid item xs={12}>
                <Paper elevation={8} style={formStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockIcon style={{ fontSize: 30 }} /></Avatar>
                        <h2>Sign in</h2>
                    </Grid>
                    <TextField label="Email" name="username" value={this.state.username} variant="standard" placeholder="Enter Email" fullWidth required onChange={this.updateFormField} />
                    <TextField label="Password" name="password" value={this.state.password} variant="standard" type="password" placeholder="Enter username" fullWidth required onChange={this.updateFormField} />
                    <Button type="submit" color="primary" variant="contained" style={buttonStyle} fullWidth onClick={this.signIn}>SIGN IN</Button>
                    <Typography>
                        <Link href="#">
                            Forgot Password ?
                    </Link>
                    </Typography>
                    <Typography>Do you want to sign up a new account?
                    <Link href="/login/signup">
                            SignUp
                    </Link>
                    </Typography>
                </Paper>
            </Grid>
        )


    }//end of render

}