import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import Rating from '@material-ui/core/Rating';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function Feedback(props) {
  const classes = useStyles();
  const {category,comments,image,ratings} = props;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="180"
          image= {image}
          title="Contemplative Reptile"
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
        <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={ratings} readOnly />
      </Box>
      </CardActions>
    </Card>
  );
}
