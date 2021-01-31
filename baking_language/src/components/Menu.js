import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{background:"brown"}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
             <Link href="/" color="inherit">Home</Link>
          </Typography>
           <Typography variant="h6" className={classes.title}>
             <Link href="/gallery" color="inherit">Gallery</Link>
          </Typography>
           <Typography variant="h6" className={classes.title}>
             <Link href="/products" color="inherit">Online Menu</Link>
          </Typography>
           <Typography variant="h6" className={classes.title}>
             <Link href="/feedbacks" color="inherit">Remarks by Friends</Link>
          </Typography>
           <Typography variant="h6" className={classes.title}>
             <Link href="/aboutus" color="inherit">About Us</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
             <Link href="/login" color="inherit">Login</Link>
          </Typography>
         
        </Toolbar>
      </AppBar>
    </div>
  );
}
