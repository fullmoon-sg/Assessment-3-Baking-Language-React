import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/core/Rating';


const useStyles = makeStyles({
  card: {
     margin: 50,
    maxWidth: 345,
  },
  media: {
    height: "200px",  
  },
});

export default function Feedback(props) {
  const classes = useStyles();
  const {category,comments,image,ratings} = props

  return (
    <Card className={classes.card}>
      <CardActionArea>
         <CardMedia className={classes.media}
         component="img" src={image}
      />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {category}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {comments}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Box component="fieldset" borderColor="transparent">
        <Typography component="legend">Ratings</Typography>
        <Rating name="read-only" value={ratings} readOnly />
      </Box>
      </CardActions>
    </Card>
  );
}