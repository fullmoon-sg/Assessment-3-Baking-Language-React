import React from 'react'
import { Grid, Paper, TextField, Typography, Link } from '@material-ui/core'
import LockIcon from '@material-ui/icons/Lock';
// import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
// import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import SignUp from './SignUp';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
// }));


const formStyle = {
    padding: 20,
    height: '600px',
    width: 400,
    margin: "20px auto"
}

const avatarStyle = { backgroundColor: "#9cdcea"}

const buttonStyle = {
    margin : '10px 0'
}

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
//   large: {
//     width: theme.spacing(7),
//     height: theme.spacing(7),
//   },
// }))

export default function Login() {

    // const classes = useStyles();

    return (
        <Grid item xs={12}>
            <Paper elevation={8} style={formStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockIcon /></Avatar>
                    <h2>Sign in</h2>
                </Grid>
                <TextField label="Username" variant="standard" placeholder="Enter username" fullWidth required />
                <TextField label="Password" variant="standard" type="password" placeholder="Enter username" fullWidth required />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember Me"
                />
                <Button type="submit" color="primary" variant="contained" style={buttonStyle} fullWidth>SIGN IN</Button>
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
}